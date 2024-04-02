document.addEventListener("DOMContentLoaded", function() {
  const workbutton = document.getElementById("workbutton");
  const breakbutton = document.getElementById("breakbutton");
  const startbutton = document.getElementById("startbutton");
  const resetbutton = document.getElementById("resetbutton");
  const timerDisplay = document.getElementById("timer-display")

  let sessionTime = 0;
  let timerInterval;
  let isRunning = false;
  // let clearInterval;

  function updateDisplay() {
    const hours = Math.floor(sessionTime / 3600);
    const minutes = Math.floor((sessionTime % 3600) / 60);
    const seconds = sessionTime % 60;
    timerDisplay.innerHTML = `${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, '0')}`;
  }

  function startTimer(duration) {
    sessionTime = duration;
    updateDisplay();
    timerInterval = setInterval(function() {
      if (sessionTime <= 0) {
        clearInterval(timerInterval);
        alert("The Alloted Session is OVER ! ");
        isRunning = false;
        workbuttton.disabled = false;
        breakbutton.disabled = false;
        startbutton.disabled = false;
        resetbutton.disabled = false;
        startbutton.innerHTML = "Start";
        hideTimerControls();
      }
      else {
        sessionTime--;
        updateDisplay();
      }
    }, 1000);
  }

  function showTimerControls() {
    startbutton.style.display = 'inline-block';
    resetbutton.style.display = 'inline-block';
    timerDisplay.style.display = 'flex';
  }

  function hideTimerControls() {
    startbutton.style.display = 'none';
    resetbutton.style.display = 'none';
    timerDisplay.style.display = 'none';
  }

  workbutton.addEventListener("click", function() {
    if (!isRunning) {
      sessionTime = 25 * 60;
      isRunning = false;
      updateDisplay();
      workbutton.disabled = false;
      breakbutton.disabled = false;
      showTimerControls();
      // startbutton.textContent = 'Start';
    }
  });
  breakbutton.addEventListener("click", function() {
    if (!isRunning) {
      sessionTime = 5 * 60;
      isRunning = false;
      updateDisplay();
      workbutton.disabled = false;
      breakbutton.disabled = false;
      showTimerControls();
    }
  });

  startbutton.addEventListener('click', function() {
    if (!isRunning) {
      isRunning = true;
      workbutton.disabled = true;
      breakbutton.disabled = true;
      resetbutton.disabled = false;
      startbutton.innerHTML = "Pause";
      startTimer(sessionTime);
    }
    else {
      isRunning = false;
      startbutton.innerHTML = "Resume";
      clearInterval(timerInterval);
    }
  });

  resetbutton.addEventListener('click', function() {
    clearInterval(timerInterval);
    isRunning = false;
    sessionTime = 0;
    updateDisplay();
    workbutton.disabled = false;
    breakbutton.disabled = false;
    resetbutton.disabled = false;
    startbutton.innerHTML = 'Start';
    // hideTimerControls();
  });
});








