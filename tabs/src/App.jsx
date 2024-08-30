import Tabs from "./Tabs.jsx";
import Star from "./Stars.jsx";
function App() {


  return (
    <>
      {
        [...Array(30)].map((n, i) => {
          return (
            <Star key={i} />
          )

        })
      }
      <Tabs />
    </>

  )
}


export default App;
