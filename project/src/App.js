import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";


import UserBlog from "./components/pages/UserBlog.jsx";
import Home from "./components/pages/Home";
import Users from "./components/pages/Users.jsx";
import CreatePost from "./components/pages/CreatePost.jsx";


import "./styles/normalize.css";
import "./styles/fontawesome.min.css";
import "./styles/main.css";


function App() {
  return (<CreatePost />
  )
}

export default App;
