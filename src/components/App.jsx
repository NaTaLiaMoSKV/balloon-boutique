import { Routes, Route } from 'react-router-dom';
import MainPage from 'pages/MainPage/MainPage';
import React from 'react';
// import { FoilBalloons, LatexBalloons, ThematicBalloons } from './Outlet';
import { BalloonsPage } from 'pages/BalloonsPage/BalloonsPage';
import { BalloonSubsection } from './BalloonSubsection/BalloonSubsection';
import { Cart } from './Cart/Cart';
import { UserForm } from './UserForm/UserForm';
// import { BalloonDetails } from './BalloonDetails/BalloonDetails';

export const App = () => {
  return (
    <Routes>
      {/* Main Page */}
      <Route path="/" element={<MainPage />} />

      {/* Balloons */}
      <Route path="/balloons" element={<BalloonsPage />} />
        <Route 
            path="/balloons/:section/:title" 
            element={<BalloonSubsection />} 
        />
      {/* Shopping Cart */}
      <Route path="cart" element={<Cart />} />

      <Route path="order" element={<UserForm />} />
    </Routes>
  );
};
