import "./styling/Greeting.css"

import ConnectButton from "./UI/ConnectButton";

const Greeting = () => {
  return (
    <div className="GreetingWrapper">
      <p>
        Hello!
      </p>
      <p>
        Is it me you're looking for?
      </p>
      <div className="NameWrapper">
        <h1>
          Darcy Winterhill
        </h1>
      </div>
      <p>
        Web Developer/CX passionate
      </p>
      <ConnectButton />
    </div>
  )
}

export default Greeting;