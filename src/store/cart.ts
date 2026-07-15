import { makeAutoObservable } from "mobx";
import type { Offer } from "../types";

class CartStore {
  cart: Offer[] = []
  constructor() {
    makeAutoObservable(this);
  }

  addItem(offer: Offer) {
    this.cart.push(offer)
    console.log([...this.cart]);
  }

  deleteItem(id: string) {
    this.cart = this.cart.filter(item => item.id !== id)
  }

  productInCart(id: string): boolean {
    console.log(Boolean(this.cart.find(item => item.id === id)) )
    
    return Boolean(this.cart.find(item => item.id === id)) 
  }

  get totalPrice():number {
    return this.cart.reduce((sum, item) => sum + item.price, 0)
  }

  get totalCount():number {
    return this.cart.length
  }
}

export const cartStore = new CartStore();
