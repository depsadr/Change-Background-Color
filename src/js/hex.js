let hexNumbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F'];

document.querySelector('#btn_change_color').addEventListener('click', () => {
    let hexCol = '#';

    for(let i = 0; i < 6; i++){
        // for(let hexNumber of hexNumbers){
            let random = Math.floor(Math.random() * hexNumbers.length);
            // console.log(random);
            hexCol += hexNumbers[random];
            // console.log(hexCol);
        // }

    }
    let site = document.querySelector('.site');
    site.style.backgroundColor = hexCol;
    document.querySelector('.hex').innerHTML = hexCol;
    // console.log(hexCol);
});