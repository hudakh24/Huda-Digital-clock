const Get_time = () => {
  const now = new Date();
  let hours = now.getHours();
  let minutes = now.getMinutes();
  let seconds = now.getSeconds();
  hours = hours < 10 ? "0" + hours : hours;
  minutes = minutes < 10 ? "0" + minutes : minutes;
  seconds = seconds < 10 ? "0" + seconds : seconds;
  return `${hours}:${minutes}:${seconds}`;
};

const delay = () =>
  new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, 1000);
  });

const main = async () => {
  const clockElement = document.getElementById("digital_clock");
  try {
    while (true) {
      console.log(Get_time());
      clockElement.textContent = Get_time(); //updates the content in HTML
      await delay();
    }
  } catch (error) {
    console.log("Error updating clock");
  }
};

main();
