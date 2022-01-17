import LunchMenu from "../sodexo-day-example.json";
console.log("lunch menu object", LunchMenu);

const coursesEn = [];
const coursesFi = [];

for (let i in LunchMenu.courses) {
  coursesFi.push(LunchMenu.courses[i].title_fi);
  coursesEn.push(LunchMenu.courses[i].title_en);
}

const langButton = document.querySelector(".langButton");
const sortButton = document.querySelector(".sortButton");
const randButton = document.querySelector(".randButton");
const courses = document.querySelector(".courses");
const randomCourse = document.querySelector(".randomCourse");

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
  randomCourse.innerHTML = "";
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
  randomCourse.innerHTML = "";
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
    randomCourse.innerHTML = "";
    randomCourse.innerHTML += `
      <p>${coursesFi[randomize]}</p>`;
  } else {
    randomCourse.innerHTML = "";
    randomCourse.innerHTML += `
      <p>${coursesEn[randomize]}</p>`;
  }
};

langButton.addEventListener("click", lang);
sortButton.addEventListener("click", sortCourses);
randButton.addEventListener("click", randCourse);
