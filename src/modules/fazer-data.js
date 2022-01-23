import fazerLunchMenuFi from "../assets/fazer-week-example.json";
import fazerLunchMenuEn from "../assets/fazer-week-example-en.json";

const coursesEn = [];
const coursesFi = [];

const parseFazer = (menu, course) => {
  const courses = menu.SetMenus;
  for (const fazerMenu of courses) {
    const meals = fazerMenu.Meals;
    for (const meal of meals) {
      const name = meal.Name;
      course.push(name);
    }
  }
};

parseFazer(fazerLunchMenuFi.LunchMenus[0], coursesFi);
parseFazer(fazerLunchMenuEn.LunchMenus[0], coursesEn);

const FazerData = { coursesEn, coursesFi };
export default FazerData;
