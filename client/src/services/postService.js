import api from "./api"

export const getAll = () => {
  return (
    fetch(api.posts)
      .then(res => res.json())
      // .then(data => {
      //   console.log("WTF")
      //   console.log(data)
      // })
      .catch(err => console.log("Handler error: " + err))
  )
}
