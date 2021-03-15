import Header from "./components/Header"
import Menu from "./components/Menu"
import style from "./App.module.css"

function App() {
  console.log(style.tomapp)
  return (
    <div className={style.tomapp}>
      <Header />

      <Menu />
    </div>
  )
}

export default App
