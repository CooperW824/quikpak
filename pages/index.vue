<template>
	<div class="w-full h-full flex flex-col items-center justify-center text-center">
		<h1 class="font-bold text-6xl">Welcome To</h1>
		<h1 class="text-6xl font-bold ml-2 sm:ml-4">
			<span class="bg-gradient-to-r from-primary to-accent text-transparent bg-clip-text">QuikPak</span>
		</h1>
        <p class="text-3xl w-10/12 my-12"> A Minimalistic Packing List App for the Web.</p>
        <NuxtLink href="/lists" class="btn btn-md btn-secondary text-xl">Get Started</NuxtLink>
	</div>
</template>
<script setup lang="ts">
definePageMeta({
	layout: 'home',
});
</script>
