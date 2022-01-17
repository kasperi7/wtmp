const coursesEn = [
  "Hamburger, cream sauce and poiled potates",
  "Goan style fish curry and whole grain rice",
  "Vegan Chili sin carne and whole grain rice",
  "Broccoli puree soup, side salad with two napas",
  "Lunch baguette with BBQ-turkey filling",
  "Cheese / Chicken / Vege / Halloum burger and french fries",
];

const coursesFi = [
  "Jauhelihapihvi, ruskeaa kermakastiketta ja keitettyä perunaa",
  "Goalaista kalacurrya ja täysjyväriisiä",
  "Vegaani Chili sin carne ja täysjyväriisi",
  "Parsakeittoa,lisäkesalaatti kahdella napaksella",
  "Lunch baguette with BBQ-turkey filling",
  "Juusto / Kana / Kasvis / Halloumi burgeri ja ranskalaiset",
];

const langButton = document.querySelector(".langButton");
const sortButton = document.querySelector(".sortButton");
const randButton = document.querySelector(".randButton");
const courses = document.querySelector(".courses");
const randomDish = document.querySelector(".randomDish");

const finnishMenu = () => {
  courses.innerHTML = "";
  for (let i = 0; i < coursesFi.length; i++) {
    courses.innerHTML += `
      <li>${coursesFi[i]}</li>
      `;
  }
};

finnishMenu();
const englishMenu = () => {
  courses.innerHTML = "";
  for (let i = 0; i < coursesEn.length; i++) {
    courses.innerHTML += `
      <li>${coursesEn[i]}</li>
      `;
  }
};

let finnish = 1;
const lang = () => {
  randomDish.innerHTML = "";
  if (finnish) {
    englishMenu();
    finnish = false;
  } else {
    finnishMenu();
    finnish = true;
  }
};

coursesEn.sort();
coursesFi.sort();
const sortCourses = () => {
  randomDish.innerHTML = "";
  if (finnish) {
    coursesFi.reverse();
    finnishMenu();
  } else {
    coursesEn.reverse();
    englishMenu();
  }
};

const randCourse = () => {
  const randomize = Math.floor(Math.random() * coursesFi.length);
  if (finnish) {
    randomDish.innerHTML = "";
    randomDish.innerHTML += `
    <p>${coursesFi[randomize]}</p>`;
  } else {
    randomDish.innerHTML = "";
    randomDish.innerHTML += `
    <p>${coursesEn[randomize]}</p>`;
  }
};

langButton.addEventListener("click", lang);
sortButton.addEventListener("click", sortCourses);
randButton.addEventListener("click", randCourse);
