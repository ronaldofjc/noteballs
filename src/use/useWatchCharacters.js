import { watch } from 'vue'

export function useWatchCharacters(valueToWatch, maxChars = 100) {
  watch(valueToWatch, (newValue) => {
		if (newValue.length === maxChars) {
			alert(`Somente ${ maxChars } caracteres são permitidos`)
		}
	})
}