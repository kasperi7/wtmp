const meals = [
  { name: "Lingonberry jam", price: 4.0 },
  { name: "Mushroom and bean casserole", price: 5.5 },
  { name: "Chili-flavoured wheat", price: 3.0 },
  { name: "Vegetarian soup", price: 4.8 },
  { name: "Pureed root vegetable soup with smoked cheese", price: 8.0 },
];

meals.forEach((meal) => {
  const pattern = /^[A-ZÅÄÖ]+[\wåöä \(\)\/\,\"\-\']{4,64}$/;
  let name = meal.name;
  let validate = pattern.test(name);
  if (validate) {
    console.log("TRUE - " + name);
  } else {
    console.log("FALSE - " + name);
  }
});

const priceSort = () => {
  let sortPrice = meals.sort((a, b) => {
    return b.price - a.price;
  });
  console.log("Meals sorted by price", sortPrice);
};
priceSort();

const priceFilter = () => {
  const underFive = meals.filter((filter) => filter.price < 5);
  console.log("Meals under 5 euros", underFive);
};
priceFilter();

const priceRaise = () => {
  const raisePrice = meals.map((raise) => (raise.price * 1.15).toFixed(2));
  console.log("15% raise to meal prices", raisePrice);
};
priceRaise();

const menuCost = (array) => {
  const cost = array.reduce((a, b) => ({ price: a.price + b.price }));
  console.log("Whole menu cost", cost);
};
menuCost(meals);
