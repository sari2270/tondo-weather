import { Route, Routes } from "react-router-dom";

import "./App.css";
import DevicePage from "./DevicePage";
import HomePage from "./HomePage";
import PageNotFound from "./PageNotFound";

function App() {
  return (
    <div>
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route
            path="device/:macAddress/:deviceName"
            element={<DevicePage />}
          />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
