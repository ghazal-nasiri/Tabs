import "./Stars.css";
function Star() {
  return (
    <span style={{width: `${1+Math.random() * 2+"px"}`, height: `${1+Math.random() * 2+"px"}`, top: `${Math.floor(Math.random() * window.innerHeight)}px` , left : `${Math.floor(Math.random() * window.innerWidth)}px`, animationDuration: `${Math.random() * 40+Math.random() * 2+"s"}`}}></span>
  )
}

export default Star