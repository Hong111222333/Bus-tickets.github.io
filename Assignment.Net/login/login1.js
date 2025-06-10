const lish = document.querySelector('.lish');
const login = document.querySelector('.login');
lish.onclick = function() {
  if (lish.classList.contains('active')) {
    lish.classList.remove('active');
    login.classList.remove('active');
  } else {
    lish.classList.add('active');
    login.classList.add('active');
  }
}   