document.getElementById('menuToggleButton')?.addEventListener('click', () => {
  const menu = document.getElementById('mobile-menu');
  const isHidden = menu?.classList.contains('hidden');

  // Toggle the 'hidden' class to show/hide the menu
  if (isHidden) {
    menu?.classList.remove('hidden');
  } else {
    menu?.classList.add('hidden');
  }

  console.log('Is hidden:', isHidden);
});