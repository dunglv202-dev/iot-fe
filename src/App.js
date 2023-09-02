import { Route, Routes } from "react-router";
import "./App.css";
import RootLayout from "./pages/RootLayout";
import DashboardPage from "./pages/Dashboard";
import ProfilePage from "./pages/Profile/Profile";
import SensorDataPage from "./pages/SensorData/SensorData";
import ActionHistoryPage from "./pages/ActionHistory/ActionHistory";

function App() {
  return (
    <Routes>
      <Route path="/" element={<RootLayout />}>
        <Route path="dashboard" element={<DashboardPage />} />
        <Route path="profile" element={<ProfilePage />} />
        <Route path="data" element={<SensorDataPage />} />
        <Route path="history" element={<ActionHistoryPage />} />
      </Route>
    </Routes>
  );
}

export default App;
