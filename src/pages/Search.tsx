import { ProductCard } from "@/components/Products/ProductCard"
import { searchStore } from "@/store/search"
import { observer } from "mobx-react-lite"
import { Link } from "react-router-dom"

export const Search = observer(function Search() {
  const results = searchStore.filterOffers
  if (!results.length) {
    return <div>
      <span>
        Ничего не найдено
      </span>
      <Link to='/'>
        На главную
      </Link>
    </div>
  }
  return (
    <div className="products">
      {searchStore.filterOffers.map((offer) =>(
        <ProductCard  offer={offer} key={offer.id}/>
      ))}
    </div>
  )
})
