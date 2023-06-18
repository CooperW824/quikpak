<template>
	<div
		class="w-full h-fit card shadow-md shadow-gray-600 bg-gray-800 bg-opacity-25 border-2 border-gray-600 flex flex-col items-start justify-between my-2"
	>
		<div class="w-full h-10 flex items-center justify-between">
			<h1 class="ml-2 py-1 text-3xl text-neutral">{{ props.list.name }}</h1>
			<button class="btn btn-error btn-sm mr-2"><font-awesome-icon :icon="['fas', 'trash']" class="text-lg text-error-content" @click="() => handleListDelete(props.list.id as string, props.list.name as string)" /></button>
		</div>
		<div class="h-[calc(100%-40px)] flex-grow flex-shrink overflow-hidden mx-2 whitespace-pre-wrap w-full">
			<p class="text-neutral my-1">{{ props.list.description }}</p>
		</div>
		<NuxtLink :href="`/lists/${props.list.id}`" class="pl-2 text-2xl text-neutral">
			Open List
			<font-awesome-icon :icon="['fas', 'arrow-right']" class="text-2xl text-neutral"
		/></NuxtLink>
	</div>
</template>
<script setup lang="ts">
import ListDescriptor from '~/types/ListDescriptor';
import { GraphQLQuery, GRAPHQL_AUTH_MODE } from '@aws-amplify/api';
import { DeleteListMutation, DeleteListItemMutation } from '~/src/API';
import { API } from 'aws-amplify';
const props = defineProps<{
	list: ListDescriptor;
}>();

const lists = useLists();

const deleteList = /* GraphQL */ `
	mutation DeleteList($input: DeleteListInput!, $condition: ModelListConditionInput) {
		deleteList(input: $input, condition: $condition) {
			id
			items {
				items {
					owner
					id
				}
			}
		}
	}
`;

const deleteListItem = /* GraphQL */ `
	mutation DeleteListItem($input: DeleteListItemInput!, $condition: ModelListItemConditionInput) {
		deleteListItem(input: $input, condition: $condition) {
			id
		}
	}
`;

const handleListDelete =async (id: string,  name: string) => {
	if(confirm(`Are you sure you want to delete the list: ${name} `)){
		deleteListFunc(id)
	}
}

const deleteListFunc = async (id: string) => {
	const variables = {
		input: {
			id
		}
	}

	try {
		const deleteResult = await API.graphql<GraphQLQuery<DeleteListMutation>>({
			query: deleteList,
			variables,
			authMode: GRAPHQL_AUTH_MODE.AMAZON_COGNITO_USER_POOLS,
		});
		if (!deleteResult.data) {
			console.error(deleteResult.errors);
			return;
		}

		const deletedId = deleteResult.data.deleteList?.id
		lists.value = lists.value.filter((item) => item.id !== deletedId) 

		const listItems = deleteResult.data.deleteList?.items?.items
		if(listItems === undefined){
			return
		}
		
		for(var item of listItems){
			if(!item?.id){
				continue
			}
			deleteListItemFunc(item.id)
		}

		
	} catch (err) {
		console.error(err);
	}
};

const deleteListItemFunc = async (id: string) => {
	const variables = {
		input: {
			id
		}
	}

	try {
		const createResult = await API.graphql<GraphQLQuery<DeleteListItemMutation>>({
			query: deleteListItem,
			variables,
			authMode: GRAPHQL_AUTH_MODE.AMAZON_COGNITO_USER_POOLS,
		});
		if (!createResult.data) {
			console.error(createResult.errors);
			return;
		}
	} catch (err) {
		console.error(err);
	}
};
</script>
