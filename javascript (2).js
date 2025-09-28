 const menuToggle = document.getElementById('menu-toggle');
    const sideMenu = document.getElementById('side-menu');
    menuToggle.addEventListener('click', () => {
      sideMenu.style.right = sideMenu.style.right === '0px' ? '-250px' : '0px';
    });

    