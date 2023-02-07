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
	</div>
</template>

<script setup>
	import { useStoreNotes } from '@/stores/storeNotes'

	// store
	const storeNotes = useStoreNotes()
</script>