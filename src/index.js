const cheat = (password) => {
  let keylogger = [];
  document.addEventListener("keyup", (event) => {
    keylogger.push(event.key);
    if (keylogger.join("") === password) {
      keylogger = [];
      alert("cheated");
    }
  });
};
cheat("cheat");

document.querySelector(".touchElement").addEventListener("mouseover", () => {
  console.log("touches");
});

const timer = setTimeout(() => {
  document.querySelector("#hurryUp").textContent = "Hurry up";
}, 15000);

const idleTimer = () => {
  let timeout;
  document.addEventListener("mousemove", () => {
    clearTimeout(timeout);
    timeout = setTimeout(() => {
      document.querySelector("#idle").textContent = "You should hurry up!";
    }, 15000);
    document.querySelector("#idle").textContent = " ";
  });
};
idleTimer();

const clicks = () => {
  document.addEventListener("dblclick", (event) => {
    let x = event.clientX;
    let y = event.clientY;
    let coordinates = "x: " + x + " | y: " + y;
    console.log(coordinates);
  });
};
clicks();
