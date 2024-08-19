import { useEffect, useState } from "react";
import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import authService from "./appwrite/auth";
import { login, logout } from "./store/authSlice";
import { Footer, Header } from "./components";
import { Outlet } from "react-router-dom";
import Loader from "./components/Loader";

function App() {
  const [loading, setLoading] = useState(true);
  const dispath = useDispatch();
  const themeMode = useSelector((state) => state.theme.themeMode);

  useEffect(() => {
    authService
      .getCurrentUser()
      .then((userData) => {
        if (userData) {
          dispath(login({ userData }));
        } else {
          dispath(logout());
        }
      })
      .finally(() => setLoading(false));
  }, []);

  useEffect(() => {
    document.querySelector("html").classList.remove("light", "dark");
    document.querySelector("html").classList.add(themeMode);
  }, [themeMode]);

  return (
    <>
      <div className="fixed -z-10 min-h-full min-w-full">
        <div class="absolute inset-0 -z-10 h-full w-full bg-white [background:radial-gradient(125%_125%_at_50%_10%,#fff_40%,#1D4ED8_100%)] dark:[background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#1D4ED8_100%)]"></div>
      </div>
      {!loading ? (
        <div className="min-h-screen flex flex-wrap content-between ">
          <div className="w-full block">
            <Header />
            <main>
              <Outlet />
            </main>
            <Footer />
          </div>
        </div>
      ) : (
        <div className="min-h-screen flex flex-wrap content-between ">
          <div className="w-full block">
            <Header />
            <main>
              <Loader />
            </main>
            <Footer />
          </div>
        </div>
      )}
    </>
  );
}

export default App;
