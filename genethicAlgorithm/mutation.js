function mutate(calendars) {
  return calendars.map(calendar => {
    if (Math.random() > 0.5) {
      calendar.mutate();
      return calendar;
    }
  })
}

module.exports = mutate;
