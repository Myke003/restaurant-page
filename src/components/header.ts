function Navigation() {
	const nav: HTMLElement = document.createElement('nav');
	nav.classList.add('main-navigation');

	const navList: HTMLUListElement = document.createElement('ul');
	navList.classList.add('nav-list');

	const links = ['Home', 'Menu', 'About'];

	links.forEach((text) => {
		const listItem: HTMLLIElement = document.createElement('li');
		const link = document.createElement('a');

		link.href = `#${text.toLowerCase()}`;
		link.textContent = text;

		listItem.appendChild(link);
		navList.appendChild(listItem);
	})

	nav.appendChild(navList);

	return nav;
}

export default function Header() {

	const header: HTMLElement = document.createElement('header');
	const restaurantTitle: HTMLElement = document.createElement('h1');

	restaurantTitle.classList.add('restaurant-title');
	restaurantTitle.textContent = "Orígenes";

	header.appendChild(restaurantTitle);
	header.appendChild(Navigation());

	return header;
}