import React from "react";
import { Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import AddPost from "./components/AddContact";
import EditContact from "./components/EditContact";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Card from "./components/Card";
import "./styles.css";

const App = () => {
  return (
    <div className="App">
      <ToastContainer />
      {/* <Navbar /> */}
      <Route exact path="/cards" component={() => <Home />} />
      <Route exact path="/" component={() => <Card />} />
      <Route exact path="/add" component={() => <AddPost />} />
      <Route exact path="/edit/:id" component={() => <EditContact />} />
    </div>
  );
};
export default App;
