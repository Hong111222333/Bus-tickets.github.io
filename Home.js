
    const toggle = document.getElementById('menu-toggle');
    const navMenu = document.getElementById('nav-menu');
    const loginBtn = document.getElementById('login-button');
    const see_more = document.querySelector('.see_more');
    const More = document.querySelector('.more');;

    toggle.addEventListener('click', () => {
      navMenu.classList.toggle('active');
      loginBtn.classList.toggle('active');
    });
    More.addEventListener('click', function() { 
      if(see_more.style.display === 'block') {
        see_more.style.display = 'none';
        More.textContent = 'See More';
      } else {
        see_more.style.display = 'block ';
        More.textContent = 'See Less';
      }

    });
           