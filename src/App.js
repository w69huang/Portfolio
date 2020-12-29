import {BrowserRouter, Route, Switch } from "react-router-dom";
import home from "./components/home";
import about from "./components/about";
import project from "./components/project";
import resume from "./components/resume";
import NavBar from "./components/navBar";

function App() {
  return (
    <BrowserRouter>
    <NavBar />
      <Switch>
        <Route component={home} path='/' exact/>
        <Route component={about} path='/about'/>
        <Route component={project} path='/project'/>
        <Route component={resume} path='/resume'/>

      </Switch>
    </BrowserRouter>
  )
}

export default App;
