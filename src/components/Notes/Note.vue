<template>
	<div class="card mb-4">
		<div class="card-content">
			<div class="content">
				{{ note.content }}
				<div class="has-text-right has-text-grey-light">
					<small>{{ characterLength }}</small>
				</div>
			</div>
		</div>
		<footer class="card-footer">
			<RouterLink :to="`/editNote/${ note.id }`" href="#" class="card-footer-item">
				Edit
			</RouterLink>
			<a @click.prevent="storeNotes.deleteNote(note.id)" href="#" class="card-footer-item">
				Delete
			</a>
		</footer>
	</div>
</template>

<script setup>
	// imports
	import { computed } from 'vue'
	import { useStoreNotes } from '@/stores/storeNotes'

	// store
	const storeNotes = useStoreNotes()

	// props
	const props = defineProps({
		note: {
			type: Object,
			required: true
		}
	})

	// character length
	const characterLength = computed(() => {
		let length = props.note.content.length
		let description = length > 1 ? 'caracteres' : 'caractere'
		return `${ length } ${ description }`
	})
</script>