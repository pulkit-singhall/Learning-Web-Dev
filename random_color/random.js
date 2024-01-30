const color1 = document.getElementById('color1'); 
const color2 = document.getElementById('color2'); 
const color3 = document.getElementById('color3'); 
const color4 = document.getElementById('color4');

const btn = document.getElementById('btn');

btn.addEventListener('click', function (eventObject) {
    let col1 = Math.floor(Math.random() * 256);
    let col2 = Math.floor(Math.random() * 256);
    let col3 = Math.floor(Math.random() * 256);
    let col4 = Math.floor(Math.random() * 256);

    color1.style.backgroundColor = `rgb(${col1},${col2},${col3})`;
    color2.style.backgroundColor = `rgb(${col2},${col1},${col4})`;
    color3.style.backgroundColor = `rgb(${col3},${col4},${col2})`;
    color4.style.backgroundColor = `rgb(${col4},${col3},${col1})`;
});

