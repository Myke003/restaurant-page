import Header from './components/header.ts';
import router from './components/router.ts';

export default function App() {
  const root = document.getElementById('root');
  if (!root) return;

  root.innerHTML = ''; // Limpias el root una sola vez

  const header = Header();
  const content = document.createElement('div');
  content.id = 'content';

  root.appendChild(header);
  root.appendChild(content);

  router('home');

  document.addEventListener('click', (e) => {
    const target = e.target as HTMLElement;
    if (target.tagName === 'A' && target.closest('.nav-list')) {
      e.preventDefault();
      const href = target.getAttribute('href');
      if (href) {
        const page = href.replace('#', '');
        router(page);
      }
    }
  });
}
