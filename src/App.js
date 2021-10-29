import "bootstrap/dist/css/bootstrap.min.css";
import { NotFound } from "http-errors";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import AddNewPackege from "./Pages/AddNewPackege/AddNewPackege";
import Footer from "./Pages/Home/Footer/Footer";
import Home from "./Pages/Home/Home/Home";
import NavSection from "./Pages/Home/NavSection/NavSection";
import Login from "./Pages/Login/Login";
import ManageAllOrders from "./Pages/ManageAllOrders/ManageAllOrders";
import OrderDetails from "./Pages/OrderDetails/OrderDetails";

function App() {
  return (
    <Router>
      <NavSection></NavSection>
      <Switch>
        <Route exact path="/">
          <Home></Home>
        </Route>
        <Route path="/home">
          <Home></Home>
        </Route>
        <Route path="/login">
          <Login></Login>
        </Route>
        <Route path="/addNewPackege">
          <AddNewPackege></AddNewPackege>
        </Route>
        <Route path="/manageAllOrders">
          <ManageAllOrders></ManageAllOrders>
        </Route>
        <Route path="/orderDetails">
          <OrderDetails></OrderDetails>
        </Route>
        <Route path="*">
          <NotFound></NotFound>
        </Route>
      </Switch>
      <Footer></Footer>
    </Router>
  );
}

export default App;
