const isSameYear = (a, b) => {
  return a.year() === b.year()
}
const isSameMonth = (a, b) => {
  return isSameYear(a, b) && a.month() === b.month()
}
const isSameDay = (a, b) => {
  return isSameMonth(a, b) && a.date() === b.date()
}
export {
  isSameDay,
  isSameMonth,
  isSameYear,
}
