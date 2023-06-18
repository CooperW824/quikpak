import ListDescriptor from "~/types/ListDescriptor"
import ListItemDescriptor from "~/types/ListItemDescriptor"

export const useDarkMode = () => useState<boolean>("darkMode", () => true)
export const useLists = () => useState<ListDescriptor[]>("lists", () => [])
export const useListItems = () => useState<ListItemDescriptor[]>("listItems", () => [])