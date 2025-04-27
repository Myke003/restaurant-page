import Home from './home';
import Menu from './menu';
import About from './about';

export default function router(page: string) {
  const content = document.getElementById('content');
  if (!content) return;

  content.innerHTML = ''; // SOLO borra el contenido dinámico, no el header

  switch (page) {
    case 'home':
      content.appendChild(Home());
      break;
    case 'menu':
      content.appendChild(Menu());
      break;
    case 'about':
      content.appendChild(About());
      break;
    default:
      content.innerHTML = '<h2>Page not found</h2>';
  }
}
