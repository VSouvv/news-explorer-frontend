export default class DateCalculator {
  constructor() {}

  _indexToMonthName(monthIndex) {
    switch (monthIndex) {
      case 0:
        return "January";
      case 1:
        return "February";
      case 2:
        return "March";
      case 3:
        return "April";
      case 4:
        return "May";
      case 5:
        return "June";
      case 6:
        return "July";
      case 7:
        return "August";
      case 8:
        return "September";
      case 9:
        return "October";
      case 10:
        return "November";
      case 11:
        return "December";
    }
  }

  getCurrentDate() {
    return new Date().toISOString().split("T")[0];
  }

  getPastDate(pastDays) {
    const currentDate = new Date().getTime();
    const pastDate = new Date(currentDate - pastDays * 24 * 60 * 60 * 1000);
    return pastDate.toISOString().split("T")[0];
  }

  convertDateToReadable(date) {
    const dateToRead = new Date(date);
    return (
      this._indexToMonthName(dateToRead.getMonth()) +
      " " +
      dateToRead.getDate() +
      ", " +
      dateToRead.getFullYear()
    );
  }
}
