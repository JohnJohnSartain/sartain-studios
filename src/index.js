import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { Route, Routes } from 'react-router-dom';
import Footer from './component/layout/Footer';
import NavigationBar from './component/layout/NavigationBar';
import routes from './page/routes';
import "./index.css";

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        {routes.map((route, index) => {
          return (
            <Route
              key={index}
              path={route.path}
              element={
                <>
                  <NavigationBar />
                  {route.element}
                  <Footer />
                </>
              }
            />
          );
        })}
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);