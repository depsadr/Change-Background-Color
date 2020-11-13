document.querySelector('#btn_change_opacity').addEventListener('click', () => {
    const a = (Math.floor(Math.random() * 10));

    if(a === 0) {
        Math.floor(Math.random() * 10)
    }
    else {
        let site = document.querySelector('.site');
        site.style.opacity = `0.${a}`;

        document.querySelector('#rgb-color-opacity').innerHTML = `0.${a}`;
    } 
});