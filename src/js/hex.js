// create array of Hex values
let hexNumbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F'];

document.querySelector('#btn_change_color').addEventListener('click', () => {
    let hexColor = '#';

    function getRandomNumber() {
        return Math.floor(Math.random() * hexNumbers.length);
    }

    // loop throgh hexNumbers array
    for (let i = 0; i < 6; i++) {
        hexColor += hexNumbers[getRandomNumber()];
    }

    // output random * 6 = Hex color value
    let site = document.querySelector('main');
    site.style.backgroundColor = hexColor;
    document.querySelector('.hex').textContent = hexColor;
});
