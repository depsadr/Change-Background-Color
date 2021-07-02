document.querySelector('#btn_change_color').addEventListener('click', () => {
  
   function number (){
        return Math.floor(Math.random() * 256);
    }

    const r = number();
    const g = number();
    const b = number();

    document.body.style.backgroundColor = `rgb(${r},${g},${b})`;

    document.querySelector('.rgb').innerHTML = `${r},${g},${b}`;
});