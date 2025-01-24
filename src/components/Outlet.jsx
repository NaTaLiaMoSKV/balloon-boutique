import React from 'react';
import { Outlet } from 'react-router-dom';

// export const BalloonsPage = () => (
//   <div>
//     <h1>Кульки</h1>
//     <Outlet /> 
//   </div>
// );

export const ThematicBalloons = () => (
  <div>
    <h1>Тематичні кульки</h1>
    <Outlet /> 
  </div>
);

export const LatexBalloons = () => (
  <div>
    <h1>Латексні кульки</h1>
    <Outlet /> 
  </div>
);

export const FoilBalloons = () => (
  <div>
    <h1>Фольговані кульки</h1>
    <Outlet /> 
  </div>
);