import ListDescriptor from "~/types/ListDescriptor"

export const useDarkMode = () => useState<boolean>("darkMode", () => true)
export const useLists = () => useState<ListDescriptor[]>("lists", () => [])