import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Footer from "./Pages/Footer/Footer";
import Header from "./Pages/Header/Header";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import OrderSummer from "./Pages/OrderSummery/OrderSummer";
import Home from "./Pages/Home/Home";
import Login from "./Pages/Login/Login";
import DeliveryForm from "./Pages/DeliveryForm/DeliveryForm";
import MyOrder from "./Pages/MyOrder/MyOrder";
import AdminValidation from "./Pages/Admin/AdminValidation";
import Admin from "./Pages/Admin/Admin";
import UpdateServices from "./Pages/Admin/UpdateServices";
import NotFound from "./Pages/NotFound/NotFound";

function App() {
  return (
    <div className="App">
      <Router>
        <Header></Header>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="/home">
            <Home></Home>
          </Route>
          <Route path="/orderSummery">
            <OrderSummer></OrderSummer>
          </Route>
          <Route path="/login">
            <Login></Login>
          </Route>
          <Route path="/deliveryForm">
            <DeliveryForm></DeliveryForm>
          </Route>
          <Route path="/adminLogin">
            <AdminValidation></AdminValidation>
          </Route>
          <Route path="/privateRouteBanglaVersion">
            <Admin></Admin>
          </Route>
          <Route path="/updateProtected/:id">
            <UpdateServices></UpdateServices>
          </Route>
          <Route path="/myOrder">
            <MyOrder></MyOrder>
          </Route>
          <Route path="*">
            <NotFound></NotFound>
          </Route>
        </Switch>
        <Footer></Footer>
      </Router>
    </div>
  );
}

export default App;
