export function getDateMinusDays(date, days) {
  const resultDate = new Date(date);
  resultDate.setDate(resultDate.getDate() - days);

  return resultDate;
}

export function getFormattedDate(date) {
  return date.toLocaleDateString();
}
