import React from "react";
import ReactDOM from "react-dom/client";
import { AuthProvider } from "./auth.jsx";
import App from "./App.jsx";
import "./index.css";
import { ToastContainer } from "react-toastify";
import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init();
import "react-toastify/dist/ReactToastify.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <AuthProvider>
    <React.StrictMode>
      <App />
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
        bodyClassName="toastBody"
      />
    </React.StrictMode>
  </AuthProvider>
);
