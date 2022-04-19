// import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
// import Dialogs from "./components/Dialogs/Dialogs";
import { BrowserRouter, Routes, Route} from "react-router-dom";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";


const App = (props) => {
  
  return (
    <BrowserRouter>
        <div className="app-wrapper">
          <Header />
          <Navbar />
          <div className="app-wrapper-content">
            <Routes>
              <Route path="/dialogs/*" element={<DialogsContainer />} />
              <Route path="/profile/:userId*" element={<ProfileContainer />} />
              <Route path="/profile/*" element={<ProfileContainer />} />
              {/* <Route path="/dialogs/*" element={<DialogsContainer store={props.store} />} />
              <Route path="/profile" element={<Profile store={props.store}/>} /> */}
              <Route path="/news" />
              <Route path="/music"  />
              <Route path="/settings" />
              <Route path="/friends" />
              <Route path="/users" element={<UsersContainer />} />
            </Routes>
          </div>
        </div>
    </BrowserRouter>
  );
};

export default App;
