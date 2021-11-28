console.log('------------------- №4 (упрощенный)')
function rangeNumb(a, b) {
    console.log(a);
    a += 1;
    if (a > b) {
        return;
    } rangeNumb(a, b);
}
rangeNumb(1, 7);

console.log('------------------- №4 (усложненный)')
function rangeNumb2(a, b) {
    if (a === b) {
        console.log(a);
    } else if (a < b) {
        console.log(a);
        a += 1;
        rangeNumb2(a, b);
    } else {
        console.log(a);
        a -= 1;
        rangeNumb2(a, b);
    } 
};
rangeNumb2(5, -1);

let clockTime = document.getElementById('clockTime');
let isFullFormat = true;

function clocksTime() {
    let date = new Date();
    let hours = (date.getHours() < 10 ? '0' + date.getHours() : date.getHours());
    let minutes = (date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes());
    let seconds = (date.getSeconds() < 10 ? '0' + date.getSeconds() : date.getSeconds());

    return isFullFormat ? `${hours} : ${minutes} : ${seconds}` : `${hours} : ${minutes}`;
};

let timeSwitch = document.getElementById('switchButton');

timeSwitch.addEventListener('change', () => {
    let seconds = document.getElementById('clockTime');
    seconds.classList.toggle('hidden'); 
    if (clockTime.classList.contains('hidden')) {
        isFullFormat = !isFullFormat;
    } else {
        isFullFormat = !isFullFormat;
    }
});

setInterval(() => {
    clockTime.innerHTML = clocksTime();
}, 250)

