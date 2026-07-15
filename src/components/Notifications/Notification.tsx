import { notificationsStore } from "@/store/notifications";
import type { Notification as NotificationData } from "@/types";

type NotificationProps = Omit<NotificationData, "delay">

const colors = {
  danger: 'bg-rose-400',
  success: 'bg-green-600',
  warning: 'bg-amber-400'
} as const

function Notification({type, title, id}: NotificationProps) {
  return (
    <div className={`relative rounded-xl px-8 py-3 text-white shadow ${colors[type]}`}>
      {title}
      <span className="absolute text-sm top-0.5 right-3 p-0.5 cursor-pointer" onClick={() => notificationsStore.deleteNotification(id)}>
        x
      </span>
    </div>
  )
}

export default Notification