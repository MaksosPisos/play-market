import { makeAutoObservable } from 'mobx'
import type { Notification } from '../types'

class NotificationsStore {
  notifications: Notification[] = []
  id = 1
  constructor () {
    makeAutoObservable(this)
  }
  addNotification(notification: Omit<Notification, "id">) {
    const delay = notification.delay ?? 5000
    const id = this.id++
    this.notifications.push({
      ...notification,
      id,
      delay
    })
    setTimeout(() => {
      this.deleteNotification(id)
    }, delay)
  }

  deleteNotification(id: number) {
    this.notifications = this.notifications.filter(item => item.id !== id)
  }
}

export const notificationsStore = new NotificationsStore()