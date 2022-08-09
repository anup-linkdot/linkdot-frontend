import React from "react";
import ReactDOM from "react-dom/client";
import Routing from "./config/Routes";
import store from "./redux/store/store";
import { Provider } from "react-redux";
import "./index.scss";
import "./index.css";

import reportWebVitals from "./reportWebVitals";
import { PersistGate } from "redux-persist/integration/react";
import { persistStore } from "redux-persist";
import { ThirdwebProvider, ChainId } from "@thirdweb-dev/react";

let persistor = persistStore(store);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <ThirdwebProvider
    desiredChainId={ChainId.Polygon}
    walletConnectors={[
      "walletConnect",
      { name: "injected", options: { shimDisconnect: false } },
      {
        name: "walletLink",
        options: {
          appName: "Linkdot",
        },
      },
    ]}
  >
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <Routing />
      </PersistGate>
    </Provider>
  </ThirdwebProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
