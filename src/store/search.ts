import type { Offer } from "@/types";
import { makeAutoObservable, runInAction } from "mobx";
import { offers } from "@/data/offers";

class SearchStore {
  query: string = ''
  debouncedQuery: string = ''
  private timer?: ReturnType<typeof setTimeout>;

  constructor () {
    makeAutoObservable(this)
  }

  get filterOffers():Offer[] {
    if (!this.debouncedQuery) return offers
    const q = this.debouncedQuery.trim().toLowerCase()
    return offers.filter(item => item.title.toLowerCase().includes(q))
  }

  setQuery (value: string) {
    this.query = value; // input обновляется сразу
    clearTimeout(this.timer);
    this.timer = setTimeout(() => {
      runInAction(() => {
        this.debouncedQuery = value.trim();
      })
    }, 500);
  }
}

export const searchStore = new SearchStore()