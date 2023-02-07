<template>
	<div class="notes">

		<AddEditNote 
			v-model="newNote"
			placeholder="Adicione uma nova nota"
			ref="addEditNoteRef"
		>
			<template #buttons>
				<button 
					@click="addNote"
					:disabled="!newNote"
					class="button is-link has-background-success"
				>
					Adicionar Nova Nota
				</button>
			</template>
		</AddEditNote>

		<Note
			v-for="note in storeNotes.notes"
			:key="note.id"
			:note="note"
		/>
	</div>
</template>

<script setup>
	// imports 
	import { ref } from 'vue'
	import Note from '@/components/Notes/Note.vue'
	import AddEditNote from '@/components/Notes/AddEditNote.vue'
	import { useStoreNotes } from '@/stores/storeNotes'
	import { useWatchCharacters } from '@/use/useWatchCharacters'

	// store
	const storeNotes = useStoreNotes()

	// notes
	const newNote = ref('')
	const addEditNoteRef = ref(null)

	const addNote = () => {
		storeNotes.addNote(newNote.value)
		newNote.value = ''
		addEditNoteRef.value.focusTextArea()
	}

	// watch characters
	useWatchCharacters(newNote)
</script>