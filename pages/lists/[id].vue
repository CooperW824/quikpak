<template>
	<div class="max-w-[425px] w-10/12 h-full overflow-y-auto flex flex-col items-center justify-start my-2">
		<div>
			<ClientOnly>
				<div v-if="editListName" class="w-full flex items-center justify-start mb-1">
					<input
						type="text"
						value="List Name"
						class="appearance-none border-solid outline-none bg-base-200 border-2 border-neutral rounded-md focus:border-2 focus:ring-0 pl-2 text-2xl flex-grow flex-shrink basis-auto w-[calc(100%-64px)]"
					/>
					<button class="btn btn-success btn-sm mx-2" aria-label="Save Edit" @click="editListName = false">
						<font-awesome-icon :icon="['fas', 'check']" class="text-xl" />
					</button>
					<button class="btn btn-error btn-sm" aria-label="Discard Edit" @click="editListName = false">X</button>
				</div>
				<div v-else class="w-full flex items-center justify-start">
					<h1 class="text-neutral text-4xl font-semibold mr-4">List Name</h1>
					<button class="btn btn-primary btn-sm" aria-label="Edit List Name" @click="editListName = true">
						<font-awesome-icon :icon="['fas', 'pencil']" class="text-xl" />
					</button>
				</div>
			</ClientOnly>
		</div>
		<hr class="border-neutral w-full" />
		<div class="w-full mb-2">
			<ClientOnly>
				<div v-if="editListDescription" class="w-full flex flex-col items-center justify-start">
					<form class="w-full h-fit">
						<textarea
							class="w-full h-32 textarea border-neutral border-2 bg-base-200 resize-none my-2 text-lg text-neutral"
							value="List Description"
                            @input="(event) => {
                                descriptionLength = (<HTMLTextAreaElement>event.target).value.length
                            }
                            "
                            maxlength="225" 
						></textarea>
						<div class="w-full h-fit flex items-center justify-between">
							<p class="text-neutral">{{ 225 - descriptionLength }} / 225 Characters Left</p>
							<div class="w-fit flex items-center justify-center">
								<button class="btn btn-success btn-sm mx-2" aria-label="Save Description Edit" @click="editListDescription = false">
									<font-awesome-icon :icon="['fas', 'check']" class="text-xl" />
								</button>
								<button class="btn btn-error btn-sm" aria-label="Discard Description Edit" @click="editListDescription = false">X</button>
							</div>
						</div>
					</form>
				</div>
				<div v-else class="w-full flex flex-col items-center justify-start">
					<p class="text-center w-full border border-neutral my-2 text-xl text-neutral rounded-md">List Description</p>
					<div class="w-full flex items-center justify-end">
						<button class="btn btn-primary btn-sm" aria-label="Edit List Name" @click="editListDescription = true">
							<font-awesome-icon :icon="['fas', 'pencil']" class="text-xl" />
						</button>
					</div>
				</div>
			</ClientOnly>
		</div>
        <hr class="border-neutral w-full" />
        <!-- <ListItemDetail/> -->
	</div>
</template>
<script setup lang="ts">
const editListName = ref(false);
const editListDescription = ref(false);
const descriptionLength = ref(0);
</script>
