<template>
	<div class="max-w-[425px] w-10/12 h-16 flex items-center justify-center my-2">
		<button class="btn btn-neutral text-xl" @click="createList">Create New List</button>
	</div>
	<div class="max-w-[425px] w-10/12 h-full overflow-y-auto flex flex-col items-center justify-start mb-2">
		<ListDetail v-for="list in lists" :list="list" />
	</div>
</template>
<script setup lang="ts">
import { GraphQLQuery, GRAPHQL_AUTH_MODE } from '@aws-amplify/api';
import { ListListsQuery, CreateListMutation } from '~/src/API';
import { API } from 'aws-amplify';
import ListDescriptor from '~/types/ListDescriptor';

const lists = useLists();

const listListsQuery = /* GraphQL */ `
	query ListLists($filter: ModelListFilterInput, $limit: Int, $nextToken: String) {
		listLists(filter: $filter, limit: $limit, nextToken: $nextToken) {
			items {
				id
				name
				description
			}
		}
	}
`;

const getLists = async (nextToken?: string) => {
	const queryInput = {
		limit: 10,
		nextToken,
	};

	try {
		const listsResult = await API.graphql<GraphQLQuery<ListListsQuery>>({
			query: listListsQuery,
			variables: queryInput,
			authMode: GRAPHQL_AUTH_MODE.AMAZON_COGNITO_USER_POOLS,
		});
		if (!listsResult.data) {
			console.error(listsResult.errors);
			return;
		}
		console.log(listsResult.data.listLists?.items);
		lists.value = listsResult.data.listLists?.items as ListDescriptor[];
	} catch (err) {
		console.error(err);
	}
};

const createListMutation = /* GraphQL */ `
	mutation CreateList($input: CreateListInput!, $condition: ModelListConditionInput) {
		createList(input: $input, condition: $condition) {
			id
			name
			description
		}
	}
`;

const createList = async () => {
	const queryInput = {
		input: {
			name: 'My New List',
			description: 'This is the description for my new list.',
		},
	};

	try {
		const createResult = await API.graphql<GraphQLQuery<CreateListMutation>>({
			query: createListMutation,
			variables: queryInput,
			authMode: GRAPHQL_AUTH_MODE.AMAZON_COGNITO_USER_POOLS,
		});
		if (!createResult.data) {
			console.error(createResult.errors);
			return;
		}
		console.log(createResult.data.createList?.items);
		const newArray = lists.value.splice(0);
		newArray.unshift(createResult.data.createList as ListDescriptor);
		lists.value = newArray;
		console.log(lists.value);
	} catch (err) {
		console.error(err);
	}
};

onMounted(getLists);
</script>
