const sideMenu = document.querySelector("aside");
const menuBtn = document.querySelector("#menu-btn");
const closeBtn = document.querySelector("#close-btn");
const themeToggler = document.querySelector(".theme-toggler");
const logoImg = document.querySelector(".logo img");

menuBtn.addEventListener('click', () => {
  sideMenu.style.display = 'block';
})

closeBtn.addEventListener('click', () => {
  sideMenu.style.display = 'none';
})

themeToggler.addEventListener('click', () => {
  document.body.classList.toggle('dark-theme-variables');
  themeToggler.querySelector('span:nth-child(1)').classList.toggle('active');
  themeToggler.querySelector('span:nth-child(2)').classList.toggle('active');
  
  // Verifica se o tema escuro está ativado
  const isDarkTheme = document.body.classList.contains('dark-theme-variables');
  
  // Altera dinamicamente o atributo src da imagem da logo de acordo com o tema
  if (isDarkTheme) {
    logoImg.src = 'imgs/garmentxescuro.png';
  } else {
    logoImg.src = 'imgs/garmentx.png';
  }
})
