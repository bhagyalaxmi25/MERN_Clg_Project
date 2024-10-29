let timer;
let timeInput;
let timeOutput = document.getElementById("timeOutput");

function setTime() {
  let timeInput = document.getElementById("timeInput");
  let time = parseInt(timeInput.value);

  timer = setInterval(() => {
    if (time > 0) {
      const minutes = Math.floor(time / 60);
      const seconds = time % 60;
      timer.textContent = `${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;

      timeOutput.innerHTML = time;
    } else {
      timeOutput.innerHTML = "Time's Up";
      clearInterval(timer);
    }
    time--;
  }, 1000);
}
