const Day = require('./day.js');

/**
 * Calendar
 * days: [Day]
 * */
class Calendar {
    constructor(days) {
        this.days = days;
    }

    mutate() {
        this.days = this.shuffle(this.days).map((day, i) => new Day(i + 1, day.employees));
    }

    shuffle(array) {
        let currentIndex = array.length,  randomIndex;
      
        // While there remain elements to shuffle...
        while (currentIndex != 0) {
      
          // Pick a remaining element...
          randomIndex = Math.floor(Math.random() * currentIndex);
          currentIndex--;
      
          // And swap it with the current element.
          [array[currentIndex], array[randomIndex]] = [
            array[randomIndex], array[currentIndex]];
        }
      
        return array;
    }
}

module.exports = Calendar;