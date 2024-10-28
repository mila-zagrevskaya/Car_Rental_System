import { createContext } from 'react';

import CalendarStore from "./CalendarStore";
import SearchStore from "./SearchStore"

class RootStore {
  calendarStore: CalendarStore;
  searchStore: SearchStore;

  constructor() {
    this.calendarStore = new CalendarStore();
    this.searchStore = new SearchStore(this);
  }
}

export default createContext(new RootStore());
