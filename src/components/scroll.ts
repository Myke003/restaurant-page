export default function changeHeaderColorOnScroll() {
  const header = document.querySelector('header') as HTMLElement;

  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) { // Si el desplazamiento es mayor a 50px
      header.classList.add('scrolled'); // Añadir clase 'scrolled'
    } else {
      header.classList.remove('scrolled'); // Quitar clase 'scrolled'
    }
  });
}
