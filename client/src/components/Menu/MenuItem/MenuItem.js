import style from "./MenuItem.css"

const MenuItem = ({ children }) => {
  console.log("style.menuItem ????")
  console.log(style)
  return (
    <li className="menuItem">
      <a href="#">{children}</a>
    </li>
  )
}

export default MenuItem
