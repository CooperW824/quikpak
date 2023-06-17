<template>
	<div class="w-full h-screen flex flex-col items-center justify-center font-figtree" :data-theme="darkMode ? 'dark' : 'light'">
		
			<div class="w-full h-16 bg-black bg-opacity-[.81] shadow-md shadow-gray-600 flex items-center justify-center">
				<div class="w-1/2 h-full flex items-center justify-start">
					<NuxtLink href="/" class="text-3xl sm:text-6xl font-bold ml-2 sm:ml-4">
						<span class="bg-gradient-to-r from-primary to-accent text-transparent bg-clip-text">QuikPak</span>
					</NuxtLink>
				</div>
				<div class="w-1/2 h-full flex items-center justify-end mr-2 sm:mr-4">
					<div class="h-full flex items-center justify-center">
						<ClientOnly>
							<font-awesome-icon :icon="['fas', 'sun']" class="text-2xl text-primary" />
							<input
								type="checkbox"
								class="toggle toggle-secondary toggle-md mx-2"
								@click="(event) => {darkMode = (<HTMLInputElement>event.target ).checked}"
								:checked="darkMode"
							/>
							<font-awesome-icon :icon="['fas', 'moon']" class="text-2xl mr-2 sm:mr-4 text-accent" />
						</ClientOnly>
					</div>

					<button @click="handleSignOut" class="btn btn-secondary btn-sm md:text-lg">Sign Out</button>
				</div>
			</div>
			<div class="w-full h-full flex flex-col items-center justify-center flex-grow overflow-y-auto">
                <Authenticator class="w-full h-full">
                <slot />
                </Authenticator>
			</div>
            <LayoutFooter></LayoutFooter>
            
	</div>
</template>
<script setup lang="ts">
import { Authenticator } from '@aws-amplify/ui-vue';
import '@aws-amplify/ui-vue/styles.css';
import {Auth} from 'aws-amplify'
const darkMode = useDarkMode();
const handleSignOut = () => {
    Auth.signOut()
    navigateTo('/')
};
</script>
