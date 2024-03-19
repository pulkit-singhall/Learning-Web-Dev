const start_btn = document.getElementById("start_btn");
const pl1time = document.getElementById("pl1time");
const pl2time = document.getElementById("pl2time");
const pl1btn = document.getElementById("pl1btn");
const pl2btn = document.getElementById("pl2btn");

let turn = 1;
let start = true;

pl1btn.addEventListener('mouseover', () => {
	pl1btn.style.cursor = 'pointer';
});

pl2btn.addEventListener('mouseover', () => {
	pl2btn.style.cursor = 'pointer';
});

start_btn.addEventListener("click", () => {
	let dur = document.getElementById("dur").value;
	let inc = document.getElementById("inc").value;

	if (!dur || !inc) {
		return alert("Duration and Increment are required!");
	}

	pl1time.innerHTML = `${dur}:00`;
	pl2time.innerHTML = `${dur}:00`;

	let time1 = dur * 60; // seconds
	let time2 = dur * 60;
	let inc1 = inc * 60;

	if (start) {
		pl1btn.style.backgroundColor = '#330000';
		pl1btn.style.boxShadow = 'rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px';
		let st = setInterval(() => {
			if (turn === 1) {
				time1 = time1 - 1;
				if (time1 === 0) {
					clearInterval(st);
					alert('Player 1 time up');
				}
				let minutes = Math.floor(time1 / 60);
				let seconds = time1 % 60;
				pl1time.innerHTML = `${minutes}:${seconds}`;
			}
			else {
				clearInterval(st);
			}
		}, 1000);
	}
	start = false;

	pl1btn.addEventListener("click", () => {
		pl2btn.style.backgroundColor = '#330000';
		pl1btn.style.backgroundColor = '#73605B';
		pl2btn.style.boxShadow = 'rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px';
		pl1btn.style.boxShadow = 'rgba(0,0,0,0) 0px 0px 0px';
		turn = 2;
		let x = setInterval(() => {
			if (turn === 2) {
				time2 = time2 - 1;
				if (time2 === 0) {
					clearInterval(x);
					alert('Player 2 time up');
				}
				let minutes = Math.floor(time2 / 60);
				let seconds = time2 % 60;
				pl2time.innerHTML = `${minutes}:${seconds}`;
			}
			else {
				clearInterval(x);
			}
		}, 1000);
		time1 += inc1;
		let minutes = Math.floor(time1 / 60);
		let seconds = time1 % 60;
		pl1time.innerHTML = `${minutes}:${seconds}`;
	});

	pl2btn.addEventListener("click", () => {
		pl1btn.style.backgroundColor = '#330000';
		pl2btn.style.backgroundColor = '#73605B';
		pl2btn.style.boxShadow = 'rgba(0,0,0,0) 0px 0px 0px';
		pl1btn.style.boxShadow = 'rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px';
		turn = 1;
		let x = setInterval(() => {
			if (turn === 1) {
				time1 = time1 - 1;
				if (time1 === 0) {
					clearInterval(x);
					alert('Player 1 time up');
				}
				let minutes = Math.floor(time1 / 60);
				let seconds = time1 % 60;
				pl1time.innerHTML = `${minutes}:${seconds}`;
			}
			else {
				clearInterval(x);
			}
		}, 1000);
		time2 += inc1;
		let minutes = Math.floor(time2 / 60);
		let seconds = time2 % 60;
		pl2time.innerHTML = `${minutes}:${seconds}`;
	});
});