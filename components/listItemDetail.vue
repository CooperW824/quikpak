<template>
	<div class="w-full h-8 flex items-center justify-start my-2">
		<input
			:id="`${item.id}Checkbox`"
			type="checkbox"
			class="checkbox checkbox-secondary checkbox-lg text-base-100 mr-2"
			:checked="item.checked == true"
			@change="handleItemCheckedChange"
		/>
		<input
			:id="`${item.id}Input`"
			maxlength="50"
			type="text"
			class="input input-secondary input-sm w-full text-neutral bg-base-200 mr-2"
			:value="item.content"
			@change="handleItemContentChange"
		/>
		<button class="btn btn-error btn-sm mr-2">
			<font-awesome-icon
				:icon="['fas', 'trash']"
				class="text-lg text-error-content"
				@click="() => handleListItemDelete(item.id as string, item.content as string)"
			/>
		</button>
	</div>
</template>
<script setup lang="ts">
import ListItemDescriptor from '~/types/ListItemDescriptor';
import { GraphQLQuery, GRAPHQL_AUTH_MODE } from '@aws-amplify/api';
import { DeleteListItemMutation, UpdateListItemMutation } from '~/src/API';
import { API } from 'aws-amplify';
const props = defineProps<{
	item: ListItemDescriptor;
}>();

const emit = defineEmits(['itemDeleted']);

const listItems = useListItems();
const item = ref<ListItemDescriptor>(props.item);

const handleListItemDelete = async (id: string, name: string) => {
	if (confirm(`Are you sure you want to delete the item: ${name} `)) {
		emit('itemDeleted', id);
	}
};

const deleteListItem = /* GraphQL */ `
	mutation DeleteListItem($input: DeleteListItemInput!, $condition: ModelListItemConditionInput) {
		deleteListItem(input: $input, condition: $condition) {
			id
		}
	}
`;

const updateListItem = /* GraphQL */ `
	mutation UpdateListItem($input: UpdateListItemInput!, $condition: ModelListItemConditionInput) {
		updateListItem(input: $input, condition: $condition) {
			content
			checked
			listID
			id
		}
	}
`;

const updateListItemAttributes = async () => {
	const queryInput = {
		input: {
			id: item.value.id,
			// listID: item.value.listID,
			content: item.value.content,
			checked: item.value.checked,
		},
	};

	try {
		const updateResult = await API.graphql<GraphQLQuery<UpdateListItemMutation>>({
			query: updateListItem,
			variables: queryInput,
			authMode: GRAPHQL_AUTH_MODE.AMAZON_COGNITO_USER_POOLS,
		});
		if (!updateResult.data) {
			console.error(updateResult.errors);
			return;
		}
		item.value = updateResult.data.updateListItem as ListItemDescriptor;
	} catch (err) {
		console.error(err);
	}
};

const handleItemContentChange = async () => {
	const content = (<HTMLInputElement>document.getElementById(`${item.value.id}Input`)).value;
	item.value = { ...item.value, content };
	await updateListItemAttributes();
};

const handleItemCheckedChange = async () => {
	const checked = (<HTMLInputElement>document.getElementById(`${item.value.id}Checkbox`)).checked;
	item.value = { ...item.value, checked };
	await updateListItemAttributes();
};
</script>
