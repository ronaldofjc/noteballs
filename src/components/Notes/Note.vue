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
			<a href="#" class="card-footer-item">Edit</a>
			<a @click.prevent="handleDeleteClicked" href="#" class="card-footer-item">
				Delete
			</a>
		</footer>
	</div>
</template>

<script setup>
	// imports
	import { computed } from 'vue'

	// props
	const props = defineProps({
		note: {
			type: Object,
			required: true
		}
	})

	// emits
	const emit = defineEmits(['deleteClicked'])

	// character length
	const characterLength = computed(() => {
		let length = props.note.content.length
		let description = length > 1 ? 'caracteres' : 'caractere'
		return `${ length } ${ description }`
	})

	// handle delete clicked
	const handleDeleteClicked = () => {
		emit('deleteClicked', props.note.id)
	}
</script>