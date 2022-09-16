export function getData(arr, allBudget) {
  const [first, second] = arr;

  let data = {
    first: { year: "", month: "", expenses: 0, category: {}, budget: 0 },
    second: { year: "", month: "", expenses: 0, category: {}, budget: 0 },
  };

  [first, second].forEach((el, i) => {
    const position = ["first", "second"];
    data[position[i]].year = +el[0].split("-")[0];
    data[position[i]].month = +el[0].split("-")[1];
    data[position[i]].expenses = el[1].reduce(
      (acc, cur) => acc + cur.amount,
      0
    );

    let obj = {};
    el[1].forEach((e) => {
      if (e.category in obj) {
        obj[e.category] += e.amount;
      } else {
        obj[e.category] = e.amount;
      }
    });

    data[position[i]].category = obj;
  });

  allBudget.forEach((e, i) => {
    const [year, month] = [+e.date.split("-")[0], +e.date.split("-")[1]];
    if (data.first.month === month && data.first.year === year) {
      data.first.budget = e.budget;
    } else if (data.second.month === month && data.second.year === year) {
      data.second.budget = e.budget;
    }
  });

  return data;
}
