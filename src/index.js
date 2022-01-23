import SodexoData from "./modules/sodexo-data";
import FazerData from "./modules/fazer-data";

const sodexoCoursesEn = SodexoData.coursesEn;
const sodexoCoursesFi = SodexoData.coursesFi;
const fazerCoursesEn = FazerData.coursesEn;
const fazerCoursesFi = FazerData.coursesFi;

const langButtonSodexo = document.querySelector(".langButtonSodexo");
const sortButtonSodexo = document.querySelector(".sortButtonSodexo");
const randButtonSodexo = document.querySelector(".randButtonSodexo");
const coursesSodexo = document.querySelector(".coursesSodexo");
const randomCourseSodexo = document.querySelector(".randomCourseSodexo");
const langButtonFazer = document.querySelector(".langButtonFazer");
const sortButtonFazer = document.querySelector(".sortButtonFazer");
const randButtonFazer = document.querySelector(".randButtonFazer");
const coursesFazer = document.querySelector(".coursesFazer");
const randomCourseFazer = document.querySelector(".randomCourseFazer");

const finnishMenuSodexo = () => {
  coursesSodexo.innerHTML = "";
  for (let i = 0; i < sodexoCoursesFi.length; i++) {
    coursesSodexo.innerHTML += `
        <li>${sodexoCoursesFi[i]}</li>
        `;
  }
};
finnishMenuSodexo();

const englishMenuSodexo = () => {
  coursesSodexo.innerHTML = "";
  for (let i = 0; i < sodexoCoursesEn.length; i++) {
    coursesSodexo.innerHTML += `
        <li>${sodexoCoursesEn[i]}</li>
        `;
  }
};

const finnishMenuFazer = () => {
  coursesFazer.innerHTML = "";
  for (let i = 0; i < fazerCoursesFi.length; i++) {
    coursesFazer.innerHTML += `
        <li>${fazerCoursesFi[i]}</li>
        `;
  }
};
finnishMenuFazer();

const englishMenuFazer = () => {
  coursesFazer.innerHTML = "";
  for (let i = 0; i < fazerCoursesEn.length; i++) {
    coursesFazer.innerHTML += `
        <li>${fazerCoursesEn[i]}</li>
        `;
  }
};

//language
let fazerFinnish = 1;
let sodexoFinnish = 1;
const langSodexo = () => {
  randomCourseSodexo.innerHTML = "";
  if (sodexoFinnish) {
    englishMenuSodexo();
    sodexoFinnish = false;
  } else {
    finnishMenuSodexo();
    sodexoFinnish = true;
  }
};
const langFazer = () => {
  randomCourseFazer.innerHTML = "";
  if (fazerFinnish) {
    englishMenuFazer();
    fazerFinnish = false;
  } else {
    finnishMenuFazer();
    fazerFinnish = true;
  }
};

//sort
sodexoCoursesEn.sort();
sodexoCoursesFi.sort();
fazerCoursesEn.sort();
fazerCoursesFi.sort();
const sortCoursesSodexo = () => {
  randomCourseSodexo.innerHTML = "";
  if (sodexoFinnish) {
    sodexoCoursesFi.reverse();
    finnishMenuSodexo();
  } else {
    sodexoCoursesEn.reverse();
    englishMenuSodexo();
  }
};

const sortCoursesFazer = () => {
  randomCourseFazer.innerHTML = "";
  if (fazerFinnish) {
    fazerCoursesFi.reverse();
    finnishMenuFazer();
  } else {
    fazerCoursesEn.reverse();
    englishMenuFazer();
  }
};

//randomize
const randCourseSodexo = () => {
  const randomizeSodexo = Math.floor(Math.random() * sodexoCoursesFi.length);
  if (sodexoFinnish) {
    randomCourseSodexo.innerHTML = "";
    randomCourseSodexo.innerHTML += `
      <p>${sodexoCoursesFi[randomizeSodexo]}</p>`;
  } else {
    randomCourseSodexo.innerHTML = "";
    randomCourseSodexo.innerHTML += `
      <p>${sodexoCoursesFi[randomizeSodexo]}</p>`;
  }
};

const randCourseFazer = () => {
  const randomizeFazer = Math.floor(Math.random() * fazerCoursesFi.length);
  if (fazerFinnish) {
    randomCourseFazer.innerHTML = "";
    randomCourseFazer.innerHTML += `
      <p>${fazerCoursesFi[randomizeFazer]}</p>`;
  } else {
    randomCourseFazer.innerHTML = "";
    randomCourseFazer.innerHTML += `
      <p>${fazerCoursesFi[randomizeFazer]}</p>`;
  }
};

//buttons
langButtonSodexo.addEventListener("click", langSodexo);
sortButtonSodexo.addEventListener("click", sortCoursesSodexo);
randButtonSodexo.addEventListener("click", randCourseSodexo);
langButtonFazer.addEventListener("click", langFazer);
sortButtonFazer.addEventListener("click", sortCoursesFazer);
randButtonFazer.addEventListener("click", randCourseFazer);
