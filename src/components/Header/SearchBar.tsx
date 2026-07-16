import { useNavigate } from "react-router";
import { searchStore } from "@/store/search";
import { notificationsStore } from "@/store/notifications";
import { observer } from "mobx-react-lite";

export const SearchBar = observer(function SearchBar() {
  const navigate = useNavigate()
  function searchItems() {
    const q = searchStore.query.trim()
    if (!q) {
      return notificationsStore.addNotification({
        title: 'Заполните поле поиска',
        type: 'warning'
      })
    }
    navigate(`/search?q${encodeURIComponent(q)}`)
  }
  return (
    <label className="search">
      <span className="search__field">
        <input type="search" placeholder="Игра, приложение или услуга..." value={searchStore.query} onChange={(e) => searchStore.setQuery(e.target.value)} />
        <button className="search__fav" type="button" aria-label="Избранное">
          <svg width="14" height="13" viewBox="0 0 14 13" fill="none" aria-hidden="true">
            <path
              d="M7 12.1l-1.01-.9C2.4 8.1 0 6 0 3.45A3.4 3.4 0 0 1 3.45.1c1.08 0 2.12.5 2.8 1.3A3.55 3.55 0 0 1 10.55.1 3.4 3.4 0 0 1 14 3.45c0 2.55-2.4 4.65-5.99 7.76L7 12.1Z"
              fill="#9AA3B5"
            />
          </svg>
        </button>
      </span>
      <button className="search__submit" type="button" aria-label="Найти" onClick={searchItems}>
        <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
          <circle cx="8" cy="8" r="5.5" stroke="#fff" strokeWidth="2" />
          <path d="M12.2 12.2 16 16" stroke="#fff" strokeWidth="2" strokeLinecap="round" />
        </svg>
      </button>
    </label>
  );
})
