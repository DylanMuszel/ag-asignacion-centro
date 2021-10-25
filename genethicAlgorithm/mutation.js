function mutate(calendars) {
  calendars.forEach(calendar => {
    if (Math.random() > 0.7) {
      calendar.mutate();
    }
  })
  return calendars
}

module.exports = mutate;
