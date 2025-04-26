export default function helloWorld() {
	const h1 = document.createElement('h1');
	h1.classList.add('title');

	h1.innerHTML = 'Hello world'

	return h1;
}