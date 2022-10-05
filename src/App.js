import React from "react";
import FirstComponent from "./components/FirstComponent/FirstComponent";
import PersonCard from "./components/PersonCard/PersonCard";

class App extends React.Component {

  render() {

    
    return(

      <div className="container">
        <h1>Hello Dojo!</h1>
        <h2>This I need to do:</h2>
        <ul>
          <li>Learn React</li>
          <li>Climb Mt. Everest</li>
          <li>Run a marathon</li>
          <li>Feed the dogs</li>
        </ul>
        <FirstComponent />
        <PersonCard firstName='Ricardo' lastName='Ortiz' age={27} city='Medellín'/>
        <br></br>
        <PersonCard firstName='Juan' lastName='Ortiz' age={40} city='Medellín'/>
        <br></br>
        <PersonCard firstName='Federico' lastName='Ortiz' age={35} city='Delft'/>
      </div>
    );
    
  }

}

export default App;

