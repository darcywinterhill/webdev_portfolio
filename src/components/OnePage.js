import "../styling/OnePage.css"

const OnePage = (props) => {
  return (
    <div className="PageContainer" style={{backgroundColor: props.bgcolor}}>
      {props.children}
    </div>
  )
}

export default OnePage;