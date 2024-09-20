/**
 * Décode les entités HTML dans une chaîne de caractères.
 *
 * @param {string} text - La chaîne de caractères contenant des entités HTML à décoder.
 * @returns {string} - La chaîne de caractères avec les entités HTML décodées.
 */
export default function decodeHTML(text: string): string {
	return text
		.replace(/&emsp;/g, '\u2003')
		.replace(/&amp;/g, '&')
		.replace(/&lt;/g, '<')
		.replace(/&gt;/g, '>')
		.replace(/&quot;/g, '"')
		.replace(/&#039;/g, "'");
}
