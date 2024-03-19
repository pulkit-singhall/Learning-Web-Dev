const start_btn = document.getElementById("start_btn");
const pl1time = document.getElementById("pl1time");
const pl2time = document.getElementById("pl2time");
const pl1btn = document.getElementById("pl1btn");
const pl2btn = document.getElementById("pl2btn");

let turn = 0;
let start = true;

start_btn.addEventListener("click", () => {
	let dur = document.getElementById("dur").value;
	let inc = document.getElementById("inc").value;

	if (!dur || !inc || dur == 0 || inc == 0) {
		return alert("Duration and Increment are required!");
	}

	pl1time.innerHTML = `${dur}:00`;
	pl2time.innerHTML = `${dur}:00`;

	let time1 = dur * 60; // seconds
	let time2 = dur * 60;
	let inc1 = inc * 60;

	pl1btn.addEventListener("click", () => {
		turn = 2;
		let x = setInterval(() => {
			if (turn === 2) {
				time2 = time2 - 1;
				if (time2 === 0) {
					clearInterval(x);
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
		turn = 1;
		let x = setInterval(() => {
			if (turn === 1) {
				time1 = time1-1;
				if (time1 === 0) {
					clearInterval(x);
				}
				let minutes = Math.floor(time1 / 60);
				let seconds = time1 % 60;
				pl1time.innerHTML = `${minutes}:${seconds}`;
			}
			else {
				clearInterval(x);
			}
		},1000);
		time2 += inc1;
		let minutes = Math.floor(time2 / 60);
		let seconds = time2 % 60;
		pl2time.innerHTML = `${minutes}:${seconds}`;
	});
});