import { makeAutoObservable } from 'mobx'

interface Notification{
  title: string,
  type: 'danger' | 'success' | 'warning',
  delay?: number
}

class NotificationsStore {
  notifications: Notification[] = []
  constructor () {
    makeAutoObservable(this)
  }
  addNotification(notification: Notification) {
    this.notifications.push({
      ...notification,
      delay: notification.delay ?? 5000
    })
  }
}

export const notifications = new NotificationsStore()