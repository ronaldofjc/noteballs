<template>
	<div class="notes">

		<div class="card has-background-success-dark p-4 mb-5">
			<div class="field">
				<div class="control">
					<textarea class="textarea" placeholder="Escreva uma nota" />
				</div>
			</div>

			<div class="field is-grouped is-grouped-right">
				<div class="control">
					<button class="button is-link has-background-success">
						Adicionar Nota
					</button>
				</div>				
			</div>
		</div>

		<div v-for="i in 3" class="card mb-4">
			<div class="card-content">
				<div class="content">
					Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eos soluta, molestias non odio expedita deserunt eius commodi distinctio at voluptatem facilis, quibusdam quaerat excepturi perferendis quia totam! Voluptate, labore fuga!
				</div>
			</div>
			<footer class="card-footer">
				<a href="#" class="card-footer-item">Edit</a>
				<a href="#" class="card-footer-item">Delete</a>
			</footer>
		</div>
	</div>
</template>