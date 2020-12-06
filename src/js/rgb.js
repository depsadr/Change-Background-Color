document.querySelector('#btn_change_color').addEventListener('click', () => {
    const Number = function() {
        this.color = function () {
            return (Math.floor(Math.random() * 256))  
        }
    }

    let randomNumber = new Number();

    const r = randomNumber.color();
    const g = randomNumber.color();
    const b = randomNumber.color();

    let site = document.querySelector('.site');
    site.style.backgroundColor = `rgb(${r},${g},${b})`;

    document.querySelector('.rgb').innerHTML = `${r},${g},${b}`;
});