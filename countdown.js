const targetDate = new Date('March 7, 2023 23:23:23').getTime();

function Countdown(){
  const currentDate = new Date().getTime();
  const timeRemaining = targetDate - currentDate;

  // Variables:
  const oneSecond = 1000;
  const oneMinute = 60 * oneSecond;
  const oneHour = 60 * oneMinute;
  const oneDay = 24 * oneHour;

  // Calculations:
  const time_in_days = Math.floor(timeRemaining / oneDay);
  const time_in_hours = Math.floor((timeRemaining % oneDay) / oneHour);
  const time_in_minutes = Math.floor((timeRemaining % oneHour) / oneMinute);
  const time_in_seconds = Math.floor((timeRemaining % oneMinute) / oneSecond);

  document.querySelector(".D").textContent = time_in_days;
  document.querySelector(".H").textContent = time_in_hours;
  document.querySelector(".M").textContent = time_in_minutes;
  document.querySelector(".S").textContent = time_in_seconds;
};

setInterval(Countdown, 1000);