import "bootstrap/dist/css/bootstrap.min.css";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import AddNewPackege from "./Pages/AddNewPackege/AddNewPackege";
import Footer from "./Pages/Home/Footer/Footer";
import Home from "./Pages/Home/Home/Home";
import NavSection from "./Pages/Home/NavSection/NavSection";
import Login from "./Pages/Login/Login";
import ManageAllOrders from "./Pages/ManageAllOrders/ManageAllOrders";
import OrderDetails from "./Pages/OrderDetails/OrderDetails";
import NotFound from "./Pages/NotFound/NotFound";
import AuthProvider from "./AuthProvider/AuthProvider";
import Myorders from "./Pages/MyOrders/Myorders";
import PrivateRoute from "./Private/PrivateRoute";
import useAuth from "./Hooks/useAuth";
import useFirebase from "./Hooks/useFirebase";

function App() {
  const { user } = useFirebase();
  return (
    <AuthProvider>
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
          {user.email === "kaisarh007@gmail.com" && (
            <PrivateRoute path="/addNewPackege">
              <AddNewPackege></AddNewPackege>
            </PrivateRoute>
          )}
          {user?.email === "kaisarh007@gmail.com" && (
            <PrivateRoute path="/manageAllOrders">
              <ManageAllOrders></ManageAllOrders>
            </PrivateRoute>
          )}
          <PrivateRoute path="/myOrders">
            <Myorders></Myorders>
          </PrivateRoute>
          <PrivateRoute path="/packageDetails/:packageID">
            <OrderDetails></OrderDetails>
          </PrivateRoute>
          <Route path="*">
            <NotFound></NotFound>
          </Route>
        </Switch>
        <Footer></Footer>
      </Router>
    </AuthProvider>
  );
}

export default App;
