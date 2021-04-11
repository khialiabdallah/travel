import ChatApp from "./Components/Chat-app";
import ConnectionPage from "./Components/ConnectionPage/signup";
import Login from "./Components/ConnectionPage/login";
import NavigationBar from "./Components/NavigationBar";
import Travel from "./Components/Travel";
import Weather from "./Components/Weather";
import { BrowserRouter,Route } from "react-router-dom";
import Ville from "./Components/Ville";
import Hotel from "./Components/Hotels";
import Profile from "./Components/Profile";
import Chatapp from "./Components/Chat-app";



function App() {
  return (
    <div >
      <BrowserRouter>
        <NavigationBar/>
        <Route exact path="/travel" component={Travel} />
        <Route path="/weather" component={Weather} />
        <Route path="/chatapp" component={ChatApp} />
        <Route path="/signup" component={ConnectionPage} />
        <Route path="/login" component={Login} />
        <Route path="/hotels" component={Hotel} />
        <Route path="/profile" component={Profile} />
        <Route path="/chat" component={Chatapp} />
        <Route path="/ville" component={Ville} />
        
      </BrowserRouter>



    </div>
  );
}

export default App;
