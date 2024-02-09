export function prepareListExpenses(expenses) {
  let listExpenses = {}

  expenses.forEach(e => {
    const date = new Date(Date.parse(e.date)).getFullYear() + "-" + new Date(Date.parse(e.date)).getMonth() + "-" + new Date(Date.parse(e.date)).getDate()

    const isExists = date in listExpenses

    if (isExists) {
      listExpenses[date].push(e)
    } else {
      listExpenses[date] = []
      listExpenses[date].push(e)
    }
  })

  const listDates = Object.keys(listExpenses);

  return { listExpenses, listDates }
}