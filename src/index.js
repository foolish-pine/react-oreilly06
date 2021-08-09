import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import { ColorProvider } from "./provider/ColorProvider";

ReactDOM.render(
  <React.StrictMode>
    <ColorProvider>
      <App />
    </ColorProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
