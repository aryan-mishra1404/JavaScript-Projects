const clock = document.querySelector(".clock");
const heading = document.querySelector("h1");

const digiClock = document.querySelector(".digiClock");
const digiHour = document.querySelector(".digiHour");
const digiMinute = document.querySelector(".digiMinute");
const digiSecond = document.querySelector(".digiSecond");
// clock.addEventListener(onclick,()=>{
// // clock.style.display = 'none';
// // clock.style.display = "none";
// const style1 = clock.style.backgroundColor ;
// console.log(style1);
// })

const showDigital = () => {
  // clock.style.display ="block"
  const date = new Date();

  // clock.innerHTML=
  //    const digiClock= document.createElement("div");
  //    digiClock.classList.add("digiClock");
  //    digiClock.style.display ="block";
  // digiClock.innerHTML= `
  //         <div class= "digiHour">
  //         <h3>${date.getHours()}: </h3>
  //         </div>

  //         <div class= "digiMinute">
  //         <h3>${date.getMinutes()}: </h3>
  //         </div>

  //         <div class= "digiSecond">
  //         <h3>${date.getSeconds()} </h3>
  //         </div>
  //     `

  digiHour.innerHTML = `${date.getHours()}`;
  digiMinute.innerHTML = `${date.getMinutes()}`;
  digiSecond.innerHTML = `${date.getSeconds()}`;

  setTimeout(showDigital, 1000);
};

function toggleClock() {
  if (clock.style.display === "none") {
    clock.style.display = "block";
    digiClock.style.visibility = "hidden";
    heading.innerText = " My Clock!";
    document.getElementById("toggleClock").innerText = "Show Digital";
  } else {
    clock.style.display = "none";
    digiClock.style.visibility = "visible";
    heading.innerText = " My Digital Clock";
    document.getElementById("toggleClock").innerText = "Hide Digital";
    showDigital();
  }
}
function clickMe() {
  // console.log("in ClickMe");
  clock.style.display = "none";
  digiClock.style.visibility = "visible";
  heading.innerText = " My Digital Clock";
  showDigital();
}

function digiClickMe() {
  clock.style.display = "block";
  digiClock.style.visibility = "hidden";
  heading.innerText = " My Clock!";
}
// clock.addEventListener("click",clickMe);
// digiClock.addEventListener("click",digiClickMe);
document.getElementById("toggleClock").addEventListener("click", toggleClock);

const hour = document.querySelector(".hour");
const minute = document.querySelector(".minute");
const second = document.querySelector(".second");

function updateClock() {
  const currDate = new Date();
  // console.log(currDate);
  const currHour = currDate.getHours();

  const currMinute = currDate.getMinutes();
  const currSecond = currDate.getSeconds();
  // console.log(currSecond);

  const hourRotation = (currHour / 12) * 360;

  const minuteRotation = (currMinute / 60) * 360;
  const secondRotation = (currSecond / 60) * 360;
  // console.log(secondRotation);

  hour.style.transform = `rotate(${hourRotation}deg)`;
  minute.style.transform = `rotate(${minuteRotation}deg)`;
  second.style.transform = `rotate(${secondRotation}deg)`;
}

setInterval(updateClock, 1000);
