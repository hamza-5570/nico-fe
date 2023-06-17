import "./App.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Landing from "./pages/landing";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/login";
import Signup from "./pages/signup";
import Profiles from "./pages/profile";
import Sen from "./pages/sen";
import Fahrg from "./pages/fahrg";
import Anbie from "./pages/anbie";
import Buchen from "./pages/buchen";
import Ten from "./pages/ten";
import Vvs from "./pages/vvs";


function App() {
  return (
    <>
          <Router>
        <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/profile" element={<Profiles />} />
        <Route path="/sen" element={<Sen />} />
        <Route path="/fahrg" element={<Fahrg />} />
        <Route path="/anbie" element={<Anbie />} />
        <Route path="/buchen" element={<Buchen />} />
        <Route path="/ten" element={<Ten />} />
        <Route path="/vvs" element={<Vvs />} />

      </Routes>
      </Router>
    </>
  );
}

export default App;
