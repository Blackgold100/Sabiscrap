const buttons = document.querySelectorAll('.tabbar button');
  const screens = document.querySelectorAll('.screen');
  buttons.forEach(btn => {
    btn.addEventListener('click', () => {
      buttons.forEach(b => b.classList.remove('active'));
      screens.forEach(s => s.classList.remove('active'));
      btn.classList.add('active');
      document.getElementById(btn.dataset.screen).classList.add('active');
    });
  });
