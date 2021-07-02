document.querySelector('#btn_change_color').addEventListener('click', () => {
  
   function getRandomNumber (){
        return Math.floor(Math.random() * 256);
    }

    const r = getRandomNumber();
    const g = getRandomNumber();
    const b = getRandomNumber();

    // The const site is necessary for the opacity slider
    const site = document.querySelector('main');

    site.style.backgroundColor = `rgb(${r},${g},${b})`;

    document.querySelector('.rgb').textContent = `${r},${g},${b}`;
});