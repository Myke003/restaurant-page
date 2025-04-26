let homeTexts: Record<string, string> = {
	"headline": 'Welcome to Origins',
	"subheadline": "Inspired by traditional recipes and local ingredients, Origins brings you the taste of home — wherever you are.",
	"feature1Title": "Authentic Flavors",
	"feature1Desc": "Taste dishes made with time-honored recipes and a passion for real flavor.",
	"feature2Title": "Seasonal Ingredients",
	"feature2Desc": "We prioritize fresh, local produce to bring the best of each season to your plate.",
	"feature3Title": "Unforgettable Atmosphere",
	"feature3Desc": "Enjoy a cozy and inviting setting perfect for every occasion.",
	"locationTitle": "Find Us",
	"locationDescription": "We are located in the heart of the city, easy to reach by foot, car, or public transportation.",
	"address": "123 Flavor Street, Cityville, Country",
	"phone": "(123) 456-7890",
	"email": "contact@origins.com"
};


function exploreMenuBtn() {
	const exploreBtn = document.createElement('button');
	exploreBtn.classList.add('cta-btn');
	exploreBtn.textContent = 'Explore our Menu';
	return exploreBtn;
}

function HeroSection() {
	const heroSection = document.createElement('section');
	heroSection.classList.add('hero-section');

	const headLine = document.createElement('h1');
	headLine.classList.add('headline-title');
	headLine.textContent = homeTexts['headline'];

	const subHeadLine = document.createElement('p');
	subHeadLine.classList.add('subheadline-paragraph');
	subHeadLine.textContent = homeTexts['subheadline'];

	heroSection.appendChild(headLine);
	heroSection.appendChild(subHeadLine);
	heroSection.appendChild(exploreMenuBtn());

	return heroSection;
}

function FeaturesSection() {
	const featuresSection = document.createElement('section');
	featuresSection.classList.add('features-section');

	const features = [
		{ title: homeTexts['feature1Title'], desc: homeTexts['feature1Desc'] },
		{ title: homeTexts['feature2Title'], desc: homeTexts['feature2Desc'] },
		{ title: homeTexts['feature3Title'], desc: homeTexts['feature3Desc'] }
	];

	features.forEach(feature => {
		const featureCard = document.createElement('div');
		featureCard.classList.add('feature-card');

		const featureTitle = document.createElement('h3');
		featureTitle.textContent = feature.title;

		const featureDesc = document.createElement('p');
		featureDesc.textContent = feature.desc;

		featureCard.appendChild(featureTitle);
		featureCard.appendChild(featureDesc);
		featuresSection.appendChild(featureCard);
	});

	return featuresSection;
}

function LocationSection() {
	const locationSection = document.createElement('section');
	locationSection.classList.add('location-section');

	const locationTitle = document.createElement('h2');
	locationTitle.textContent = homeTexts['locationTitle'];

	const locationDescription = document.createElement('p');
	locationDescription.textContent = homeTexts['locationDescription'];

	const address = document.createElement('p');
	address.textContent = `Address: ${homeTexts['address']}`;

	const phone = document.createElement('p');
	phone.textContent = `Phone: ${homeTexts['phone']}`;

	const email = document.createElement('p');
	email.textContent = `Email: ${homeTexts['email']}`;

	// Map (optional, agregar si es necesario)
	const mapEmbed = document.createElement('iframe');
	mapEmbed.setAttribute('src', 'https://www.google.com/maps/embed?pb=YOUR_MAP_URL_HERE');
	mapEmbed.setAttribute('width', '100%');
	mapEmbed.setAttribute('height', '300');
	mapEmbed.setAttribute('style', 'border:0;');
	mapEmbed.setAttribute('allowfullscreen', '');
	mapEmbed.setAttribute('loading', 'lazy');

	// Contenedor para el texto y mapa en dos columnas
	const contentWrapper = document.createElement('div');
	contentWrapper.classList.add('location-content-wrapper');

	// Sección de texto a la izquierda
	const textSection = document.createElement('div');
	textSection.classList.add('location-text');

	textSection.appendChild(locationTitle);
	textSection.appendChild(locationDescription);
	textSection.appendChild(address);
	textSection.appendChild(phone);
	textSection.appendChild(email);

	// Sección del mapa a la derecha
	const mapSection = document.createElement('div');
	mapSection.classList.add('location-map');
	mapSection.appendChild(mapEmbed);

	// Añadir las secciones dentro del contenedor
	contentWrapper.appendChild(textSection);
	contentWrapper.appendChild(mapSection);

	locationSection.appendChild(contentWrapper);

	return locationSection;
}

export default function Home() {
	const container = document.createElement('div');
	container.appendChild(HeroSection());
	container.appendChild(FeaturesSection());
	container.appendChild(LocationSection()); // Sección de ubicación
	return container;
}