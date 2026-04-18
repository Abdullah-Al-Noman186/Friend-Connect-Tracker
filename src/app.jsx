import { Routes, Route } from "react-router-dom";
import Homepage from "./pages/homepage/homepage.jsx";
import FriendDetails from "./pages/friendDetails/friendDetails.jsx";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/friend/:id" element={<FriendDetails />} />
      <ToastContainer position="top-right" autoClose={3000} />
    </Routes>
  );
}

export default App;