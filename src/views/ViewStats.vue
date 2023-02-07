<template>
	<div class="stats">
		<table class="table is-fullwidth">
			<thead>
				<tr>
					<th>Estatísticas</th>
					<th>Valor</th>
				</tr>
			</thead>
			<tbody>
				<tr>
					<td>Notas Criadas</td>
					<td>{{ storeNotes.totalNotesCount }}</td>
				</tr>
				<tr>
					<td>Número de caracteres de todas as notas</td>
					<td>{{ storeNotes.totalCharactersCount }}</td>
				</tr>
			</tbody>
		</table>
		<input
			v-model="loveNoteballs"
			class="input" 
			type="text" 
			placeholder="Do yo love noteballs"
			v-autofocus
		/>
	</div>
</template>

<script setup>
	import { ref } from 'vue'
	import { useStoreNotes } from '@/stores/storeNotes'
	import { vAutofocus } from '@/directives/vAutofocus'
	import { useWatchCharacters } from '@/use/useWatchCharacters'

	// store
	const storeNotes = useStoreNotes()

	// love noteballs
	const loveNoteballs = ref('')

	// watch characters
	useWatchCharacters(loveNoteballs, 50)
</script>