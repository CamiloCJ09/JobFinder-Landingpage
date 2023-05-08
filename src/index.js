import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { inject } from '@vercel/analytics';

import { Analytics } from '@vercel/analytics/react';

inject();
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Analytics mode={'production'} />;
    <App />
  </BrowserRouter>
);
