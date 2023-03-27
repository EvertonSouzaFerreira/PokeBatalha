const box = document.querySelector('.card');
const containerBox = document.querySelector('.containerBox')


containerBox.addEventListener('mousemove', (e) => {
    let xAxis = (window.innerWidth / 2 - e.pageX) / 25;
    let yAxis = (window.innerHeight / 2 - e.pageY) / 25;
    box.getElementsByClassName.transform = `rotateY(${xAxis}deg) rotateX(${yAxis})`
})