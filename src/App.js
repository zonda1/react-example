import React, { useEffect, useState } from "react";
import { BrowserRouter, Link } from "react-router-dom";
import "./App.css";

import AppRoutes from "./AppRoutes/AppRoutes";
import { AuthContext } from "./context";
import AddButton from "./components/UI/AddButton/Add_button";

const App = () => {
  const [isAuth, setIsAuth] = useState(false);

  const [isLoading, setIsLoading]=useState(true);

  const unLogin = () => {
    setIsAuth(false);
    localStorage.removeItem('auth');
  };

  useEffect(()=>{
    if (localStorage.getItem('auth')) {
      setIsAuth(true);
    }
    setIsLoading(false);
  },[])

  return (
    <AuthContext.Provider value={{ isAuth, setIsAuth,isLoading }}>
      <BrowserRouter>
        <div className="nav__wrapper">
          <AddButton onClick={unLogin}>Exit</AddButton>
          <nav>
            <Link to={"/about"}>About</Link>
            <Link to={"/posts"}>Posts</Link>
          </nav>
        </div>
        <AppRoutes />
      </BrowserRouter>
    </AuthContext.Provider>
  );
};

export default App;
