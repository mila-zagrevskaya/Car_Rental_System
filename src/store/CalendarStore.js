import { makeAutoObservable } from "mobx";

export default class CalendarStore {
  startDate = "";
  returnDate = "";
  isError = false;

  constructor() {
    makeAutoObservable(this);
  }

  setStartDate(date) {
    this.startDate = date;
  }

  setError(value) {
    this.isError = value;
  }

  setReturnDate(date) {
    this.returnDate = date;
    if(this.returnDate.getTime() > this.startDate.getTime()) {
      this.returnDate = date;
      this.setError(false);
    }
    else {
      console.log("Return date should be later then Pick up date");
      this.returnDate = "";
      this.setError(true);
    }
  }
}
