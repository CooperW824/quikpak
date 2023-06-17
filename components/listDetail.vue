<template>
	<div
		class="w-full h-fit card shadow-md shadow-gray-600 bg-gray-800 bg-opacity-25 border-2 border-gray-600 flex flex-col items-start justify-between my-2"
	>
		<div class="w-full h-10">
			<h1 class="ml-2 py-1 text-3xl text-neutral">{{ props.list.name }}</h1>
			<hr class="h-1 w-11/12 ml-2 border-neutral" />
		</div>
		<div class="h-[calc(100%-40px)] flex-grow flex-shrink overflow-hidden mx-2 whitespace-pre-wrap w-full">
            <p class="text-neutral my-1">{{ props.list.description }} </p>
			<hr class="h-1 w-11/12  border-neutral" />

        </div>
		<NuxtLink :href="`/lists/${props.list.id}`" class="pl-2 text-2xl text-neutral ">
            Open List 
            <font-awesome-icon :icon="['fas', 'arrow-right']" class="text-2xl text-neutral"
		/></NuxtLink>
	</div>
</template>
<script setup lang="ts">
import ListDescriptor from '~/types/ListDescriptor'
const props = defineProps<{
    list: ListDescriptor
}>()
</script>

