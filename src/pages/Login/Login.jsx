import React, { useContext } from "react";
import Input from "../../components/UI/Inputs/Input";
import AddButton from "../../components/UI/AddButton/Add_button";
import { AuthContext } from "../../context";
import { Navigate } from 'react-router-dom';

const Login = () => {
  const { isAuth, setIsAuth } = useContext(AuthContext);
  const login = (e) => {
    e.preventDefault();
    setIsAuth(true);
    localStorage.setItem('auth','true');
  };

  return (
    <div>
      <h2>Login Page</h2>
      <form action="" onSubmit={login}>
        <Input type="text" placeholder="Введите логин" />
        <Input type="password" placeholder="Введите пароль" />
        <AddButton>Войти</AddButton>
      </form>
    </div>
  );
};

export default Login;
