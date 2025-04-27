export default function Menu() {
  const section = document.createElement('section');
  section.classList.add('menu');

  section.innerHTML = `
    <h2>Menu</h2>
    <ul class="menu-list">
      <li>
        <h3>Arepa de Choclo</h3>
        <p>Sweet corn arepa with melted cheese.</p>
      </li>
      <li>
        <h3>Bandeja Paisa</h3>
        <p>Traditional Medellín platter: beans, rice, pork, plantain, and more.</p>
      </li>
      <li>
        <h3>Empanadas</h3>
        <p>Golden crispy empanadas filled with beef and potatoes.</p>
      </li>
      <li>
        <h3>Ajiaco</h3>
        <p>Hearty chicken and potato soup with corn and capers.</p>
      </li>
    </ul>
  `;

  return section;
}
