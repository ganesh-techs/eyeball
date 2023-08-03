const eyeball1 = document.querySelector('#eyeball1');
const eyeball2 = document.querySelector('#eyeball2');

window.addEventListener('mousemove', (evt) => {
    const x = (evt.pageX * 100) / window.innerWidth;
    const y = (evt.pageY * 100) / window.innerHeight;

    eyeball1.style.left = `${x}%`;
    eyeball1.style.top = `${y}%`;

    eyeball2.style.left = `${x}%`;
    eyeball2.style.top = `${y}%`;
});
