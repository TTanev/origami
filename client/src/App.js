import { Component } from "react"
import Header from "./components/Header"
import Menu from "./components/Menu"
import Main from "./components/Main"
import style from "./App.module.css"

// function App() {
//   console.log(style.tomapp)
//   return (
//     <div className={style.tomapp}>
//       <Header />

//       <div className={style.container}>
//         <Menu />

//         <Main />
//       </div>
//     </div>
//   )
// }

class App extends Component {
  render() {
    return (
      <div className={style.tomapp}>
        <Header />

        <div className={style.container}>
          <Menu />

          <Main />
        </div>
      </div>
    )
  }
}

export default App
