import Header from "./components/Header"
import style from "./App.module.css"

function App() {
  console.log(style.tomapp)
  return (
    <div className={style.tomapp}>
      <Header />
    </div>
  )
}

export default App
