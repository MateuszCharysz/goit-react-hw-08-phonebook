import React from 'react';
import { Routes, Route } from 'react-router-dom';

const Appv2 = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Welcome />} />
          <Route
            path="/register"
            element={<UserForm typeOfForm="register" />}
          />
          <Route path='/login' element={<UserForm typeOfForm='login'/>}/>
          <Route path='/contacts' element={</>}/>
        </Route>
      </Routes>
    </>
  );
};

export default Appv2;
