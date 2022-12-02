import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Home } from '../pages/home/Home';
import { Experience } from '../pages/experience/Experience';
import { Education } from '../pages/education/Education';

export const AppRoutes = () => {
    return (
        <Routes>
         <Route path="/" element={<Home />}>
         </Route>
         <Route path="/experience" element={<Experience />}>
         </Route>
         <Route path="/education" element={<Education />}>
         </Route>
      </Routes>
    )
};
