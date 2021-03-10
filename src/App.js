import { Component } from 'react';
import { BrowserRouter,Route, Switch } from 'react-router-dom';
import Homepage from './Components/Homepage';
import Navbar from './Components/Navbar';
import Login from './Components/Login';
import Optiondiv from './Components/Optiondiv';
import Searchcontainer from './Components/Searchcontainer';


class App extends Component {
  
    options=[
                  {key:"1",option:"hotel",img:""},
                  {key:"2",option:"restaurant",img:""},
                  {key:"3",option:"activités",img:""},
                  {key:"4",option:"Weather",img:""},
                 
            ];
  render(){
  return (

    <div className="App">
      <BrowserRouter>

          <Navbar/>
          <Switch>

              <Route exact path="/" >
              <Homepage  options={this.options}/>
              </Route>

              <Route path="/Login" >
              <Login options={this.options}/>
              </Route>

          </Switch>



      </BrowserRouter>

    </div>
    
  );
}
}

export default App;
