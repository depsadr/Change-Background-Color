const slider = document.querySelector('.slider');
const output = document.querySelector('#opacity');
output.innerHTML = 1; // Display the default slider value

const site = document.querySelector('main');

// Update the current slider value (each time you drag the slider handle)
slider.oninput = function () {
    output.innerHTML = this.value;
    site.style.opacity = this.value;

    if (slider.value < 10) {
        site.style.opacity = `0.${slider.value}`;
        output.innerHTML = `0.${slider.value}`;
    } else {
        output.innerHTML = 1;
    }
};