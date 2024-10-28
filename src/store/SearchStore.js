import { makeAutoObservable } from "mobx";


export default class SearchStore {
  selectedLocation = "";
  isError = false;
  
  constructor(rootStore) {
    this.rootStore = rootStore;
    makeAutoObservable(this);
    this.onSearchBtnClick = this.onSearchBtnClick.bind(this);
  }
  
  setSelectedLocation(location) {
    this.selectedLocation = location;
  }

  setError(value) {
    this.isError = value;
  }

  get startDateFromCalendarStore() {
    const startDate = this.rootStore.calendarStore.startDate;
    return startDate;
  }

  get returnDateFromCalendarStore() {
    const returnDate = this.rootStore.calendarStore.returnDate;
    return returnDate;
  }

  onSearchBtnClick () {
    !this.selectedLocation || !this.startDateFromCalendarStore || !this.returnDateFromCalendarStore 
      ? this.setError(true)
      : this.setError(false);
    console.log("selectedLocation", this.selectedLocation);
    console.log("startDate", this.startDateFromCalendarStore);
    console.log("returnDate", this.returnDateFromCalendarStore);
    console.log("Search error", this.isError);
  }
}
