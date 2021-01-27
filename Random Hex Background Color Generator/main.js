let button = document.getElementById('button');
let hexDisplay = document.getElementById('hex')

button.addEventListener('click', changeColor)


function changeColor() {
    let colorVariables = '0123456789ABCDEF'
    let color = '';


    for (let i = 0; i < 6; i++) {
        color += colorVariables[Math.floor(Math.random() * 16)]
        hashedColor = `#${color}`
    }
    document.body.style.background = hashedColor;
    hexDisplay.innerHTML = hashedColor;
}
