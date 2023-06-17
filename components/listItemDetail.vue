<template>
    <div class="w-full h-8 flex items-center justify-start my-2">
        <input type="checkbox" class="checkbox checkbox-secondary checkbox-lg text-base-100 mr-2" :checked="props.item.checked == true">
        <input type="text" class="input input-secondary input-sm w-[275px] text-neutral bg-base-200" :value="props.item.content">
    </div>
</template>
<script setup lang="ts">
import ListItemDescriptor from '~/types/ListItemDescriptor'
const props = defineProps<{
    item: ListItemDescriptor
}>()
</script>