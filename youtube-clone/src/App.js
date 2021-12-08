// import { Router } from '@material-ui/icons';
// import { Route } from '@mui/icons-material';
import './App.css';
import Header from './Header';
import SearchPage from './SearchPage';
import RecommendedVideos from './RecommendedVideos';
 import Sidebar from './Sidebar';
import {BrowserRouter as Router,Switch,Route} from "react-router-dom";
// import SidebarRow from './SidebarRow';

function App() {
  
  return (
<div className="App">
<Router>
<Header/>
  <Switch>
  
   <Route path="/search/:searchTerm">
   
   <div className="app_page">
       <Sidebar/>
      <SearchPage/> 
    </div>
    </Route>
    <Route path="/">
    
    <div className="app_page">
       <Sidebar/>
      <RecommendedVideos/> 
    </div>
    </Route>
    
  </Switch>
</Router>
</div>
 
  );
}

export default App;
