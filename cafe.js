document.getElementById('search').addEventListener('input', function(e) {
  const term = e.target.value.toLowerCase();
  document.querySelectorAll('.item').forEach(item => {
    const nameElements = item.querySelectorAll('.flavor, .dessert');
    const name = Array.from(nameElements).map(el => el.textContent.toLowerCase()).join(' ');
    item.style.display = name.includes(term) ? 'block' : 'none';
  });
});