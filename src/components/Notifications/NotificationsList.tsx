import { observer } from "mobx-react-lite";
import { notificationsStore } from "@/store/notifications";
import Notification from "./Notification";

export const NotificationsList = observer(function NotificationsList(){
  return (
    <div className="fixed bottom-4 right-4 z-50 flex flex-col gap-2">
      {notificationsStore.notifications.map((notification) => (
        <li key={notification.id}>
          <Notification title={notification.title} type={notification.type} id={notification.id}/>
        </li>
      ))}
    </div>
  )
})