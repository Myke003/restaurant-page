export default function About() {
  const section = document.createElement('section');
  section.classList.add('about');

  section.innerHTML = `
    <h2>About Origins</h2>
    <p>At Origins, we honor the roots of Colombian flavors. 
    Every dish tells a story of tradition, love, and heritage. 
    Founded in the heart of Medellín, we bring to your table the authentic taste of our ancestors with a modern twist.</p>
  `;

  return section;
}
