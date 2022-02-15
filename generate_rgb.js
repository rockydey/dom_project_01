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
    const red = Math.floor(Math.random() * 256);
    const green = Math.floor(Math.random() * 256);
    const blue = Math.floor(Math.random() * 256);

    return `rgb(${red}, ${green}, ${blue})`;
}