// import logo from './logo.sv  g';
import './App.css';
import HomeComponent from './components/home';
import { ThemeProvider } from './store/themeContext';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import ChatRoom from './components/chat/';
import { UserProfileProvider } from './store/userContext';
import Login from './components/login/Login';
import NewUser from './components/newUser/newUser';
import RouteProtector from './components/login/RouteProtector';

function App() {
  return (
    <ThemeProvider>
      <UserProfileProvider>
        <Login />
        <Router>
          <Switch>
            <Route path="/chatRoom">
              <RouteProtector>
                <ChatRoom />
              </RouteProtector>
            </Route>
            <Route path="/newUser">
              <NewUser />
            </Route>
            <Route path="/login">
              <RouteProtector> <Login /></RouteProtector>
            </Route>
            <Route path="/">
              <RouteProtector> <HomeComponent /></RouteProtector>
            </Route>
          </Switch>
        </Router>
      </UserProfileProvider>
    </ThemeProvider>
  );
}


export default App;
