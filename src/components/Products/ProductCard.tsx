import type { Offer } from "../../types";
import { cartStore } from "../../store/cart";
import { notificationsStore } from "@/store/notifications";

interface ProductCardProps {
  offer: Offer;
}

export function ProductCard({ offer }: ProductCardProps) {
  function changeCartState () {
    if (!cartStore.productInCart(offer.id)) {
      cartStore.addItem(offer)
      notificationsStore.addNotification({
        title: 'Успешно добавлено',
        type: 'success'
      })
    } else {
      cartStore.deleteItem(offer.id)
      notificationsStore.addNotification({
        title: 'Успешно удалено',
        type: 'danger'
      })
    }
  }
  return (
    <article className="card-offer">
      <div className="card-offer__img">
        <img src={offer.img} alt="" />
      </div>
      <div className="card-offer__body">
        <h3 className="card-offer__title">{offer.title}</h3>
        <div className="card-offer__price">
          <strong>{offer.price}</strong>
          <s>{offer.old}</s>
        </div>
        <button className="card-offer__buy" type="button" onClick={changeCartState}>
          Купить
        </button>
      </div>
    </article>
  );
}
