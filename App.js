import React, { useEffect } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import { auth } from './firebase';
import { useStateValue } from "./StateProvider";
import Home from "./Home"
import Header from "./Header";
import Login from './Login';

function App() {

  const [{ user }, dispatch] = useStateValue();

  useEffect(() => {
    // will only run once when the app component loads...

    auth.onAuthStateChanged((authUser) => {
      console.log("THE USER IS >>> ", authUser);

      if (authUser) {
        // the user just logged in / the user was logged in

        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        // the user is logged out
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });
  }, []);

  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route path="/login" element={!user ? <Login /> : <Navigate to="/" />}>
          </Route>
          <Route path="/" element={<Home />}>
          </Route>

        </Routes>
      </Router>
    </div>
  );
}

export default App;
