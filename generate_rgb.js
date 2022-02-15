window.onload = () => {
    main();
}

function main() {
    const changeBackground = document.getElementById('change-bg');
    const changeBtn = document.getElementById('change-btn').addEventListener('click', function () {
        changeBackground.style.backgroundColor = generateRGBColor();
    });
}

function generateRGBColor() {
    /* const red = Math.floor(Math.random() * 256);
    const green = Math.floor(Math.random() * 256);
    const blue = Math.floor(Math.random() * 256);
    return `rgb(${red}, ${green}, ${blue})`; */

    // remains same color code
    /* const color = Math.floor(Math.random() * 256);
    return `rgb(${color}, ${color}, ${color})` */

    // calling another function for color code
    return `rgb(${returnColor()}, ${returnColor()}, ${returnColor()})`
}

function returnColor() {
    return Math.floor(Math.random() * 256);
}