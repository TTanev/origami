import style from "./MenuItem.css"

const MenuItem = ({ children }) => {
  console.log("style.menuItem ????")
  console.log(style)
  return <li className="menuItem">{children}</li>
}

export default MenuItem
