import ReactDOM from "react-dom/client";
import App from "./App";
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyBSfbLKE3lHeFxEVi7hkC3JznC5U5frEnI",
  authDomain: "my-ecommerce-61796.firebaseapp.com",
  projectId: "my-ecommerce-61796",
  storageBucket: "my-ecommerce-61796.appspot.com",
  messagingSenderId: "802187167213",
  appId: "1:802187167213:web:f898be4ff255f9db1dd3e4",
};

initializeApp(firebaseConfig);

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
