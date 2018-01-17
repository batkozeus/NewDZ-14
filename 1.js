// Task 1

const startTimer = document.querySelector('#start');
const stopTimer = document.querySelector('#stop');


// Task 2

function PrintTimer () {
	this.startTime = '';
	this.stopTime = '';
	this.interval = '';
}

PrintTimer.prototype.start = function () {
	let dateStart = new Date();
	let getDateStart = dateStart.getTime();
	timerResult.startTime = getDateStart;
	console.log(getDateStart);
	let startTime = dateStart.getHours()+':'+dateStart.getMinutes()+':'+dateStart.getSeconds()+':'+dateStart.getMilliseconds();
	document.querySelector('#showStartTime').innerHTML = `Время старт таймера - ${startTime}`;
}

PrintTimer.prototype.stop = function () {
	let dateStop = new Date();
	let getDateStop = dateStop.getTime();
	timerResult.stopTime = getDateStop;
	timerResult.interval = Math.abs(Math.round((timerResult.startTime - timerResult.stopTime))/1000);
	console.log(getDateStop);
	let stopTime = dateStop.getHours()+':'+dateStop.getMinutes()+':'+dateStop.getSeconds()+':'+dateStop.getMilliseconds();
	document.querySelector('#showStopTime').innerHTML = `Время стоп таймера - ${stopTime}`;
	document.querySelector('#showInterval').innerHTML = `Время таймера - ${timerResult.interval} секунд`;
}

let timerResult = new PrintTimer();

startTimer.addEventListener("click", timerResult.start);
stopTimer.addEventListener("click", timerResult.stop);