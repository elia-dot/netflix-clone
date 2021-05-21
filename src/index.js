import React from "react";
import ReactDOM from "react-dom";
import { GlobalStyles } from "./global-styles";
import { App } from "./App";
import { FirebaseContext } from "./context/firebase";


// import {seedDatabase} from'./seed'



const config = {
  apiKey: "AIzaSyAV8OuC4LolqkR90_FGYFKYsJ716z-mYig",
  authDomain: "netflix-clone-3bbb5.firebaseapp.com",
  databaseURL: 'https://netflix-clone-3bbb5.firebaseio.com',
  projectId: "netflix-clone-3bbb5",
  storageBucket: "netflix-clone-3bbb5.appspot.com",
  messagingSenderId: "382528089335",
  appId: "1:382528089335:web:d0625fe97f899c93a8f7f2",
};

const firebase = window.firebase.initializeApp(config);

// seedDatabase(firebase)
ReactDOM.render(
  <>
    <FirebaseContext.Provider value={{ firebase: window.firebase }}>
      <GlobalStyles />
      <App />
    </FirebaseContext.Provider>
  </>,
  document.getElementById("root")
);
