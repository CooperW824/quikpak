<template>
	<ClientOnly>
		<div class="max-w-[425px] w-10/12 h-full overflow-y-auto flex flex-col items-center justify-start my-2">
			<div class="w-full">
				<div v-if="editListName" class="w-full flex items-center justify-start mb-1">
					<input
						id="listNameInput"
						type="text"
						:value="list?.name"
						class="appearance-none border-solid outline-none bg-base-200 border-2 border-neutral rounded-md focus:border-2 focus:ring-0 pl-2 text-2xl flex-grow flex-shrink basis-auto w-[calc(100%-64px)]"
					/>
					<button class="btn btn-success btn-sm mx-2" aria-label="Save Edit" @click="handleListNameChange">
						<font-awesome-icon :icon="['fas', 'check']" class="text-xl" />
					</button>
					<button class="btn btn-error btn-sm" aria-label="Discard Edit" @click="editListName = false">X</button>
				</div>
				<div v-else class="w-full flex items-center justify-between">
					<NuxtLink href="/lists"><font-awesome-icon :icon="['fas', 'arrow-left']" class="text-4xl text-neutral" /></NuxtLink>
					<h1 class="text-center text-neutral text-3xl font-semibold mr-4">{{ list?.name }}</h1>
					<button class="btn btn-primary btn-sm" aria-label="Edit List Name" @click="editListName = true">
						<font-awesome-icon :icon="['fas', 'pencil']" class="text-xl" />
					</button>
				</div>
			</div>
			<div class="w-full mb-2">
				<div v-if="editListDescription" class="w-full flex flex-col items-center justify-start">
					<form class="w-full h-fit">
						<textarea
							@load="handleTextAreaLoad"
							class="w-full h-32 textarea border-neutral border-2 bg-base-200 resize-none my-2 text-lg text-neutral"
							@input="(event) => {
                                descriptionLength = (<HTMLTextAreaElement>event.target).value.length
                            }
                            "
							maxlength="225"
							id="listDescInput"
							>{{ list?.description }}</textarea
						>
						<div class="w-full h-fit flex items-center justify-between">
							<p class="text-neutral">{{ 225 - descriptionLength }} / 225 Characters Left</p>
							<div class="w-fit flex items-center justify-center">
								<button type="button" class="btn btn-success btn-sm mx-2" aria-label="Save Description Edit" @click="handleListDescriptionChange">
									<font-awesome-icon :icon="['fas', 'check']" class="text-xl" />
								</button>
								<button type="button" class="btn btn-error btn-sm" aria-label="Discard Description Edit" @click="editListDescription = false">
									X
								</button>
							</div>
						</div>
					</form>
				</div>
				<div v-else class="w-full flex flex-col items-start justify-start">
					<p>List Description:</p>
					<p class="w-full text-xl text-neutral rounded-md">
						{{ list?.description || 'No Description Provided' }}
					</p>
					<div class="w-full flex items-center justify-end">
						<button class="btn btn-primary btn-sm" aria-label="Edit List Name" @click="editListDescription = true">
							<font-awesome-icon :icon="['fas', 'pencil']" class="text-xl" />
						</button>
					</div>
				</div>
			</div>
			<hr class="border-neutral w-full" />
			<button class="btn btn-secondary btn-sm my-2" @click="createNewListItem(true)">Add New Item</button>
			<ListItemDetail
				v-for="item in listItems"
				:item="item"
				class="w-full"
				@item-deleted="
					(id) => {
						deleteListItemFunc(id);
					}
				"
			/>
			<button class="btn btn-secondary btn-sm my-2" @click="createNewListItem(false)">Add New Item</button>
		</div>
	</ClientOnly>
</template>
<script setup lang="ts">
import { API } from 'aws-amplify';
import { GraphQLQuery, GRAPHQL_AUTH_MODE } from '@aws-amplify/api';
import { CreateListItemMutation, DeleteListItemMutation, GetListQuery, UpdateListMutation } from '~/src/API';
import ListItemDescriptor from '~/types/ListItemDescriptor';
import { getList } from '~/src/graphql/queries';
import ListDescriptor from '~/types/ListDescriptor';
import { deleteListItem } from '~/src/graphql/mutations';

const editListName = ref(false);
const editListDescription = ref(false);
const descriptionLength = ref(0);
const listItems = ref<ListItemDescriptor[]>([]);
const list = ref<ListDescriptor>();
const router = useRouter();

const deleteListItemFunc = async (id: string) => {
	const variables = {
		input: {
			id,
		},
	};

	try {
		const deleteResult = await API.graphql<GraphQLQuery<DeleteListItemMutation>>({
			query: deleteListItem,
			variables,
			authMode: GRAPHQL_AUTH_MODE.AMAZON_COGNITO_USER_POOLS,
		});
		if (!deleteResult.data) {
			console.error(deleteResult.errors);
			return;
		}
		const deletedId = deleteResult.data.deleteListItem?.id;
		listItems.value = listItems.value.filter((item) => item.id !== deletedId);
	} catch (err) {
		console.error(err);
	}
};

const handleTextAreaLoad = (event: Event) => {
	(<HTMLTextAreaElement>event.target).value = (list.value?.description || '') as string;
};
const getListFunc = async () => {
	const listId = router.currentRoute.value.params.id as string;
	const queryInput = {
		id: listId,
	};

	try {
		const listResult = await API.graphql<GraphQLQuery<GetListQuery>>({
			query: getList,
			variables: queryInput,
			authMode: GRAPHQL_AUTH_MODE.AMAZON_COGNITO_USER_POOLS,
		});
		if (!listResult.data) {
			console.error(listResult.errors);
			return;
		}
		list.value = listResult.data.getList as ListDescriptor;
		listItems.value = listResult.data.getList?.items?.items as ListItemDescriptor[];
		descriptionLength.value = list.value.description?.length || 0;
	} catch (err) {
		console.error(err);
	}
};

const updateList = /* GraphQL */ `
	mutation UpdateList($input: UpdateListInput!, $condition: ModelListConditionInput) {
		updateList(input: $input, condition: $condition) {
			id
			name
			description
		}
	}
`;

const updateListAttributes = async () => {
	const queryInput = {
		input: {
			name: list.value?.name,
			id: list.value?.id,
			description: list.value?.description,
		},
	};

	try {
		const updateResult = await API.graphql<GraphQLQuery<UpdateListMutation>>({
			query: updateList,
			variables: queryInput,
			authMode: GRAPHQL_AUTH_MODE.AMAZON_COGNITO_USER_POOLS,
		});
		if (!updateResult.data) {
			console.error(updateResult.errors);
			return;
		}
		list.value = updateResult.data.updateList as ListDescriptor;
	} catch (err) {
		console.error(err);
	}
};

const handleListNameChange = async () => {
	const name = (<HTMLInputElement>document.getElementById('listNameInput')).value;
	list.value = { ...list.value, name };
	await updateListAttributes();
	editListName.value = false;
};

const handleListDescriptionChange = async () => {
	const description = (<HTMLInputElement>document.getElementById('listDescInput')).value;
	list.value = { ...list.value, description };
	await updateListAttributes();
	editListDescription.value = false;
};

const createListItemMutation = /* GraphQL */ `
	mutation CreateListItem($input: CreateListItemInput!, $condition: ModelListItemConditionInput) {
		createListItem(input: $input, condition: $condition) {
			content
			checked
			listID
			owner
			id
			createdAt
			updatedAt
			__typename
		}
	}
`;

const createNewListItem = async (above: boolean) => {
	const queryInput = {
		input: {
			content: 'New Item',
			checked: false,
			listID: list.value?.id as string,
		},
	};

	try {
		const createResult = await API.graphql<GraphQLQuery<CreateListItemMutation>>({
			query: createListItemMutation,
			variables: queryInput,
			authMode: GRAPHQL_AUTH_MODE.AMAZON_COGNITO_USER_POOLS,
		});
		if (!createResult.data) {
			console.error(createResult.errors);
			return;
		}
		let newArray = listItems.value.splice(0);
		if (above) {
			newArray.unshift(createResult.data.createListItem as ListItemDescriptor);
		} else {
			newArray = newArray.concat(createResult.data.createListItem as ListItemDescriptor);
		}
		listItems.value = newArray;
	} catch (err) {
		console.error(err);
	}
};

onMounted(getListFunc);
</script>
