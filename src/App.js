import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Home from "./pages/Home";
import AccountTypeMt5 from "./pages/AccountType/AccountTypeMt5";
import TradableInst from "./pages/AccountType/TradableInst";
import SpreadDetails from "./pages/AccountType/SpreadDetails";
import DepositWithdrawal from "./pages/AccountType/DepositWithdrawal";
import DownloadMT5 from "./pages/AccountType/DownloadMT5";
import ForexWhiteLabel from "./pages/AccountType/ForexWhiteLabel";
import ForexIB from "./pages/AccountType/ForexIB";
import Accountinfo from "./pages/Accountinfo";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import { Footer } from "./components/includes/Footer";

function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/mt5-account-types" component={AccountTypeMt5} />
          <Route exact path="/tradable-instruments" component={TradableInst} />
          <Route exact path="/spread-details" component={SpreadDetails} />
          <Route exact path="/download-mt5" component={DownloadMT5} />
          <Route exact path="/deposit-withdrawal" component={DepositWithdrawal} />
          <Route exact path="/forex-IB" component={ForexIB} />
          <Route path="/forex-white-label" component={ForexWhiteLabel} />
          <Route path="/account-info" component={Accountinfo} />
        </Switch>
      </Router>
      {/* <Footer/> */}
    </>
  );
}

export default App;
