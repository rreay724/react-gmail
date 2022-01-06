import { useEffect, useContext } from "react";
import { UserContext } from "./context/userContext";
import { Header, Sidebar, Emails, Email, Login } from "./components/index";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        <Route
          path="/email"
          element={
            <div className="min-h-screen bg-black-default">
              <div>
                <div className=" sticky top-0 z-50">
                  <Header />
                </div>
                <div className="w-full flex ">
                  <Sidebar className="" />

                  <Email className="overflow-y-scroll" />
                </div>
              </div>
            </div>
          }
        />
        <Route
          path="/login"
          element={
            <div>
              <Login />
            </div>
          }
        />
        <Route
          path="/"
          element={
            <div className="min-h-screen bg-black-default">
              <div>
                <div className=" sticky top-0 z-50">
                  <Header />
                </div>
                <div className="w-full flex ">
                  <Sidebar className="" />

                  <Emails className="overflow-y-scroll" />
                </div>
              </div>
            </div>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
