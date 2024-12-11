import { Routes, Route } from 'react-router-dom';
import MainPage from 'pages/MainPage/MainPage';
import React from 'react';
import { FoilBalloons, LatexBalloons, ThematicBalloons } from './Outlet';
import { BalloonsPage } from 'pages/BalloonsPage/BalloonsPage';
import { BalloonSubsection } from './BalloonSubsection/BalloonSubsection';

export const App = () => {
  return (
    <Routes>
      {/* Main Page */}
      <Route path="/" element={<MainPage />} />

      {/* Balloons */}
      <Route path="/balloons" element={<BalloonsPage />} />
        {/* Thematic balloons */}
        {/* <Route path="thematic" element={<ThematicBalloons />}> */}
          {/* <Route path="birthday" element={<h1>На день народження</h1>} />
          <Route path="discharge" element={<h1>На виписку</h1>} />
          <Route path="valentine" element={<h1>На день закоханих</h1>} />
          <Route path="new-year" element={<h1>Новорічні</h1>} />
          <Route path="gender-party" element={<h1>Гендер-паті</h1>} /> */}
        {/* </Route> */}
        <Route 
            path="/balloons/:section/:title" 
            element={<BalloonSubsection />} 
        />

        {/* Latex balloons */}
        {/* <Route path="latex" element={<LatexBalloons />}>
          <Route path="plain" element={<h1>Кульки без малюнка</h1>} />
          <Route path="printed" element={<h1>кульки з малюнками</h1>} />
          <Route path="filled" element={<h1>Кульки з наповненням</h1>} />
        </Route> */}

        {/* Foil balloons */}
        {/* <Route path="foil" element={<FoilBalloons />}>
          <Route path="numbers" element={<h1>Кульки цифри</h1>} />
          <Route path="mixed-shapes" element={<h1>Кульки різної форми</h1>} />
          <Route path="birthday" element={<h1>Кульки на день народження</h1>} />
          <Route path="kids" element={<h1>Дитячі</h1>} />
        </Route> */}

        {/* Other */}
        {/* <Route path="letters" element={<h1>Кульки літери і слова</h1>} />
        <Route path="surprise-boxes" element={<h1>Коробки-сюрпризи</h1>} />
        <Route path="arches" element={<h1>Арки из куль</h1>} />
        <Route path="sets" element={<h1>Набори куль</h1>} /> */}
      {/* </Route> */}

      {/* Shopping Cart */}
      <Route path="basket" element={<h1>Кошик</h1>} />
    </Routes>
  );
};
