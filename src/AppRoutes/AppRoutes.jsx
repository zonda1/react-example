import React, { useContext, useState } from "react";

import { Routes, Route } from "react-router-dom";
import { privateRoutes, publicRoutes } from "./routes";
import { AuthContext } from "../context";

const AppRoutes = () => {
  const { isAuth, isLoading } = useContext(AuthContext);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  console.log(isAuth);
  return isAuth ? (
    <Routes>
      {privateRoutes.map((route, i) => (
        <Route
          key={i}
          path={route.path}
          element={route.element}
          exact={route?.exact}
        />
      ))}
    </Routes>
  ) : (
    <Routes>
      {publicRoutes.map((route, i) => (
        <Route
          key={i}
          path={route.path}
          element={route.element}
          exact={route?.exact}
        />
      ))}
    </Routes>
  );
};

export default AppRoutes;
