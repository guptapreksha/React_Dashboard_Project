import "./App.css";
import Dashboard from "./components/Dashboard";
import Home from "./components/Home";
import Login from "./components/Login";
import NoMatch from "./components/NoMatch";
import SideNav from "./components/SideNav";
import Signup from "./components/Signup";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Tweets from "./pages/Tweets";
import AddTweets from "./pages/AddTweets";
import Settings from "./pages/Settings";
import SearchComments from "./pages/SearchComments";
import Sample from "./components/container/Sample";
import UserComponent from "./components/UserComponent";
import UserProfile from "./components/UserProfile";



function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="*" element={<NoMatch />} />
          <Route path="/sidenav" element={<SideNav />} />
          <Route path="/tweets" element={<Tweets />} />
          <Route path="/addtweets" element={<AddTweets />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/searchcomments" element={<SearchComments />} />
          <Route path="/sample" element={< Sample/>} />
          <Route path="/usercomponent" element={< UserComponent/>} />
          <Route path="/user/:userId" element={< UserProfile/>} />
          
        </Routes>
      </div>
    </Router>
  );
}

export default App;
