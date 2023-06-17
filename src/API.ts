/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreateListInput = {
  id?: string | null,
  name: string,
  description?: string | null,
  owner?: string | null,
};

export type ModelListConditionInput = {
  name?: ModelStringInput | null,
  description?: ModelStringInput | null,
  owner?: ModelStringInput | null,
  and?: Array< ModelListConditionInput | null > | null,
  or?: Array< ModelListConditionInput | null > | null,
  not?: ModelListConditionInput | null,
};

export type ModelStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export enum ModelAttributeTypes {
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
  _null = "_null",
}


export type ModelSizeInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
};

export type List = {
  __typename: "List",
  id: string,
  name: string,
  description?: string | null,
  items?: ModelListItemConnection | null,
  owner?: string | null,
  createdAt: string,
  updatedAt: string,
};

export type ModelListItemConnection = {
  __typename: "ModelListItemConnection",
  items:  Array<ListItem | null >,
  nextToken?: string | null,
};

export type ListItem = {
  __typename: "ListItem",
  content: string,
  checked: boolean,
  listID: string,
  owner?: string | null,
  id: string,
  createdAt: string,
  updatedAt: string,
};

export type UpdateListInput = {
  id: string,
  name?: string | null,
  description?: string | null,
  owner?: string | null,
};

export type DeleteListInput = {
  id: string,
};

export type CreateListItemInput = {
  content: string,
  checked: boolean,
  listID: string,
  owner?: string | null,
  id?: string | null,
};

export type ModelListItemConditionInput = {
  content?: ModelStringInput | null,
  checked?: ModelBooleanInput | null,
  listID?: ModelIDInput | null,
  owner?: ModelStringInput | null,
  and?: Array< ModelListItemConditionInput | null > | null,
  or?: Array< ModelListItemConditionInput | null > | null,
  not?: ModelListItemConditionInput | null,
};

export type ModelBooleanInput = {
  ne?: boolean | null,
  eq?: boolean | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
};

export type ModelIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export type UpdateListItemInput = {
  content?: string | null,
  checked?: boolean | null,
  listID?: string | null,
  owner?: string | null,
  id: string,
};

export type DeleteListItemInput = {
  id: string,
};

export type ModelListFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  description?: ModelStringInput | null,
  owner?: ModelStringInput | null,
  and?: Array< ModelListFilterInput | null > | null,
  or?: Array< ModelListFilterInput | null > | null,
  not?: ModelListFilterInput | null,
};

export type ModelListConnection = {
  __typename: "ModelListConnection",
  items:  Array<List | null >,
  nextToken?: string | null,
};

export type ModelListItemFilterInput = {
  content?: ModelStringInput | null,
  checked?: ModelBooleanInput | null,
  listID?: ModelIDInput | null,
  owner?: ModelStringInput | null,
  and?: Array< ModelListItemFilterInput | null > | null,
  or?: Array< ModelListItemFilterInput | null > | null,
  not?: ModelListItemFilterInput | null,
};

export enum ModelSortDirection {
  ASC = "ASC",
  DESC = "DESC",
}


export type ModelSubscriptionListFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  name?: ModelSubscriptionStringInput | null,
  description?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionListFilterInput | null > | null,
  or?: Array< ModelSubscriptionListFilterInput | null > | null,
};

export type ModelSubscriptionIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  in?: Array< string | null > | null,
  notIn?: Array< string | null > | null,
};

export type ModelSubscriptionStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  in?: Array< string | null > | null,
  notIn?: Array< string | null > | null,
};

export type ModelSubscriptionListItemFilterInput = {
  content?: ModelSubscriptionStringInput | null,
  checked?: ModelSubscriptionBooleanInput | null,
  listID?: ModelSubscriptionIDInput | null,
  and?: Array< ModelSubscriptionListItemFilterInput | null > | null,
  or?: Array< ModelSubscriptionListItemFilterInput | null > | null,
};

export type ModelSubscriptionBooleanInput = {
  ne?: boolean | null,
  eq?: boolean | null,
};

export type CreateListMutationVariables = {
  input: CreateListInput,
  condition?: ModelListConditionInput | null,
};

export type CreateListMutation = {
  createList?:  {
    __typename: "List",
    id: string,
    name: string,
    description?: string | null,
    items?:  {
      __typename: "ModelListItemConnection",
      nextToken?: string | null,
    } | null,
    owner?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateListMutationVariables = {
  input: UpdateListInput,
  condition?: ModelListConditionInput | null,
};

export type UpdateListMutation = {
  updateList?:  {
    __typename: "List",
    id: string,
    name: string,
    description?: string | null,
    items?:  {
      __typename: "ModelListItemConnection",
      nextToken?: string | null,
    } | null,
    owner?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteListMutationVariables = {
  input: DeleteListInput,
  condition?: ModelListConditionInput | null,
};

export type DeleteListMutation = {
  deleteList?:  {
    __typename: "List",
    id: string,
    name: string,
    description?: string | null,
    items?:  {
      __typename: "ModelListItemConnection",
      nextToken?: string | null,
    } | null,
    owner?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateListItemMutationVariables = {
  input: CreateListItemInput,
  condition?: ModelListItemConditionInput | null,
};

export type CreateListItemMutation = {
  createListItem?:  {
    __typename: "ListItem",
    content: string,
    checked: boolean,
    listID: string,
    owner?: string | null,
    id: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateListItemMutationVariables = {
  input: UpdateListItemInput,
  condition?: ModelListItemConditionInput | null,
};

export type UpdateListItemMutation = {
  updateListItem?:  {
    __typename: "ListItem",
    content: string,
    checked: boolean,
    listID: string,
    owner?: string | null,
    id: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteListItemMutationVariables = {
  input: DeleteListItemInput,
  condition?: ModelListItemConditionInput | null,
};

export type DeleteListItemMutation = {
  deleteListItem?:  {
    __typename: "ListItem",
    content: string,
    checked: boolean,
    listID: string,
    owner?: string | null,
    id: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type GetListQueryVariables = {
  id: string,
};

export type GetListQuery = {
  getList?:  {
    __typename: "List",
    id: string,
    name: string,
    description?: string | null,
    items?:  {
      __typename: "ModelListItemConnection",
      nextToken?: string | null,
    } | null,
    owner?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListListsQueryVariables = {
  filter?: ModelListFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListListsQuery = {
  listLists?:  {
    __typename: "ModelListConnection",
    items:  Array< {
      __typename: "List",
      id: string,
      name: string,
      description?: string | null,
      owner?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetListItemQueryVariables = {
  id: string,
};

export type GetListItemQuery = {
  getListItem?:  {
    __typename: "ListItem",
    content: string,
    checked: boolean,
    listID: string,
    owner?: string | null,
    id: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListListItemsQueryVariables = {
  filter?: ModelListItemFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListListItemsQuery = {
  listListItems?:  {
    __typename: "ModelListItemConnection",
    items:  Array< {
      __typename: "ListItem",
      content: string,
      checked: boolean,
      listID: string,
      owner?: string | null,
      id: string,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type ListItemsByListIDQueryVariables = {
  listID: string,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelListItemFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListItemsByListIDQuery = {
  listItemsByListID?:  {
    __typename: "ModelListItemConnection",
    items:  Array< {
      __typename: "ListItem",
      content: string,
      checked: boolean,
      listID: string,
      owner?: string | null,
      id: string,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type OnCreateListSubscriptionVariables = {
  filter?: ModelSubscriptionListFilterInput | null,
  owner?: string | null,
};

export type OnCreateListSubscription = {
  onCreateList?:  {
    __typename: "List",
    id: string,
    name: string,
    description?: string | null,
    items?:  {
      __typename: "ModelListItemConnection",
      nextToken?: string | null,
    } | null,
    owner?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateListSubscriptionVariables = {
  filter?: ModelSubscriptionListFilterInput | null,
  owner?: string | null,
};

export type OnUpdateListSubscription = {
  onUpdateList?:  {
    __typename: "List",
    id: string,
    name: string,
    description?: string | null,
    items?:  {
      __typename: "ModelListItemConnection",
      nextToken?: string | null,
    } | null,
    owner?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteListSubscriptionVariables = {
  filter?: ModelSubscriptionListFilterInput | null,
  owner?: string | null,
};

export type OnDeleteListSubscription = {
  onDeleteList?:  {
    __typename: "List",
    id: string,
    name: string,
    description?: string | null,
    items?:  {
      __typename: "ModelListItemConnection",
      nextToken?: string | null,
    } | null,
    owner?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateListItemSubscriptionVariables = {
  filter?: ModelSubscriptionListItemFilterInput | null,
  owner?: string | null,
};

export type OnCreateListItemSubscription = {
  onCreateListItem?:  {
    __typename: "ListItem",
    content: string,
    checked: boolean,
    listID: string,
    owner?: string | null,
    id: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateListItemSubscriptionVariables = {
  filter?: ModelSubscriptionListItemFilterInput | null,
  owner?: string | null,
};

export type OnUpdateListItemSubscription = {
  onUpdateListItem?:  {
    __typename: "ListItem",
    content: string,
    checked: boolean,
    listID: string,
    owner?: string | null,
    id: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteListItemSubscriptionVariables = {
  filter?: ModelSubscriptionListItemFilterInput | null,
  owner?: string | null,
};

export type OnDeleteListItemSubscription = {
  onDeleteListItem?:  {
    __typename: "ListItem",
    content: string,
    checked: boolean,
    listID: string,
    owner?: string | null,
    id: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};
