import { Routes, Route } from "react-router-dom";
import Homepage from "./pages/homepage/homepage.jsx";
import FriendDetails from "./pages/friendDetails/friendDetails.jsx";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/friend/:id" element={<FriendDetails />} />
    </Routes>
  );
}

export default App;