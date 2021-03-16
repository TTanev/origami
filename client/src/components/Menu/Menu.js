import { useState } from "react"
import MenuItem from "./MenuItem"
import { MENU_ITEMS } from "./MenuCostants"
import "./Menu.css"

const Menu = ({ onMenuItemClick }) => {
  const [currentItem, setCurrentItem] = useState()

  const menuItemClickHandler = id => {
    setCurrentItem(id)
    onMenuItemClick(id)
  }

  return (
    <aside className="menu">
      <ul className="menuUl">
        {MENU_ITEMS.map(x => (
          <MenuItem key={x.id} id={x.id} isSelected={x.id == currentItem} onClick={menuItemClickHandler}>
            {x.text}
          </MenuItem>
        ))}
      </ul>
    </aside>
  )
}

export default Menu
