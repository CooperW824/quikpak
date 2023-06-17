/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getList = /* GraphQL */ `
  query GetList($id: ID!) {
    getList(id: $id) {
      id
      name
      description
      items {
        nextToken
        __typename
      }
      owner
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const listLists = /* GraphQL */ `
  query ListLists(
    $filter: ModelListFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listLists(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        description
        owner
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getListItem = /* GraphQL */ `
  query GetListItem($id: ID!) {
    getListItem(id: $id) {
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
export const listListItems = /* GraphQL */ `
  query ListListItems(
    $filter: ModelListItemFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listListItems(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        content
        checked
        listID
        owner
        id
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const listItemsByListID = /* GraphQL */ `
  query ListItemsByListID(
    $listID: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelListItemFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listItemsByListID(
      listID: $listID
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        content
        checked
        listID
        owner
        id
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
