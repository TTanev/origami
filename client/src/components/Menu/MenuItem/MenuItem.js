import style from "./MenuItem.css"

const MenuItem = ({ id, onClick, isSelected, children }) => {
  // console.log("style.menuItem ????")
  // console.log(style)
  let classes = ["menuItem"]

  if (isSelected) {
    classes.push("menuItemSelected")
  }

  return (
    <li className={classes.join(" ")}>
      <a href="#" onClick={onClick.bind(null, id)}>
        {children}
      </a>
    </li>
  )
}

export default MenuItem
