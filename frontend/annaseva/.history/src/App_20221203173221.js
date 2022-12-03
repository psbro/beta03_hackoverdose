import React from "react";
import { 
  BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home/Home";
import Auth from "./auth/Auth";
import Dashboard from "./dashboard/Dashboard";
import Dashboard__user from "./dashboard__user/Dashboard__user";
import PredictorForm from "./Home/components/PredictorForm";
const App = () => {

  return (
<<<<<<< HEAD

    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/dashboard/user" element={<Dashboard />} />
        <Route exact path="/dashboard/admin" element={<Dashboard__user />} />
        <Route exact path="/auth" element={<Auth />} />
      </Routes>
    </BrowserRouter>

  )
}
=======
    <BrowserRouter>
      <Routes>
        <Route path="/*" element={<Home />} />
        <Route exact path="/dashboard/admin" element={<Dashboard />} />
        <Route exact path="/dashboard/user" element={<Dashboard__user />} />
        <Route exact path="/auth" element={<Auth />} />
        <Route exact path="/predictor_form" element={<PredictorForm />} />
      </Routes>
    </BrowserRouter>
  );
};
>>>>>>> 1567705b9d8ac6ef557b07b9417b10ff63f929ba

export default App;
