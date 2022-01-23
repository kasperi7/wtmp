import SodexoLunchMenu from "../assets/sodexo-day-example.json";

const coursesEn = [];
const coursesFi = [];

const parseSodexo = (menu) => {
  const courses = Object.values(menu);
  for (const course of courses) {
    coursesEn.push(course.title_en);
    coursesFi.push(course.title_fi);
  }
};
parseSodexo(SodexoLunchMenu.courses);

const SodexoData = { coursesEn, coursesFi };
export default SodexoData;
