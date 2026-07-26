const inputTime = document.querySelector('#tick');

// Set the future target date
const targetDate = new Date("Dec 31, 2026 23:59:59").getTime();

const countdown = setInterval(() => {
  
  // Get the exact current time
  const now = new Date().getTime();
  const timeDiff = targetDate - now;

  //  Check if the countdown is finished
  if (timeDiff <= 0) {
    clearInterval(countdown);
   inputTime.innerHTML = "Countdown done!";
    return;
  }

  // Convert milliseconds to Days, Hours, Minutes, and Seconds
  const days = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
  const hrs = Math.floor((timeDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const mins = Math.floor((timeDiff % (1000 * 60 * 60)) / (1000 * 60));
  const secs = Math.floor((timeDiff % (1000 * 60)) / 1000);
  
    // Pad single digits with a leading zero using String.prototype.padStart()
  let formattedDays = String(days).padStart(2, '0');
  let formattedHrs = String(hrs).padStart(2, '0');
  let formattedMins = String(mins).padStart(2, '0');
  let formattedSecs = String(secs).padStart(2, '0');
  
  inputTime.innerHTML = `${formattedDays}:${formattedHrs}:${formattedMins}:${formattedSecs}`;
  
}, 1000);
