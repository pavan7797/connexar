import Header from "../../components/includes/Header";

import "./styles.css";
import intersection from "../../assets/intersection2.svg";
import rectangle from "../../assets/rectangle.svg";
import logo from "../../assets/Connexar-Capital.png";
import bgcard1 from "../../assets/bgcard1.svg";
import bgcard2 from "../../assets/bgcard2.svg";
import actypebg from "../../assets/actypebg.svg";
import qabg from "../../assets/qabg.svg";

const AccountTypeMt5 = () => {
  return (
    <div>
      <Header />

      {/* Banner */}
      <div className="actbanner">
        <img src={intersection} className="actbannerimg" />
        <img src={rectangle} className="actbannerimg" />
        <img
          width={"393px"}
          height={"146px"}
          src={logo}
          className="actbannerimg"
        />

        <div className="actbannerimg actbannertxt">
          <p>CONNEXARCAPITAL FOREX ACCOUNT TYPES</p>
          <h1>MT5 ACCOUNT TYPES</h1>
        </div>
      </div>
      {/* Pricing */}
      <div className="actpricing">
        <h3 className="acthead">
          <span>
            <u>Open an Account</u>
          </span>, start deposit as low as $100 and start trading
        </h3>

        <section className="scrollableView mb-4">
          <div class="pricing pricing-palden">
            <div
              class="pricing-item"
              style={{ backgroundImage: `url(${bgcard1})` }}
            >
              <h4>Connexar Standard</h4>

              <div>
                <p>
                  minimum deposit <br /> <b>$100</b>
                </p>
                <div className="acthorizontal">
                  <div />
                </div>

                <p>
                  Spread from <br /> <b>{`<`} 1.9 pips</b>
                </p>
                <div className="acthorizontal">
                  <div />
                </div>

                <p>
                  Leverage <br /> <b>1:400</b>
                </p>
              </div>
            </div>

            <div
              class="pricing-item pricing__item--featured"
              style={{ backgroundImage: `url(${bgcard2})` }}
            >
              <h4>Connexar ECN</h4>

              <div>
                <p>
                  minimum deposit <br /> <b>$1000</b>
                </p>
                <div className="acthorizontal">
                  <div />
                </div>

                <p>
                  Spread from <br /> <b>{`<`} 0.5 pips</b>
                </p>
                <div className="acthorizontal">
                  <div />
                </div>

                <p>
                  Leverage <br /> <b>1:200</b>
                </p>
              </div>
            </div>

            <div
              class="pricing-item"
              style={{ backgroundImage: `url(${bgcard1})` }}
            >
              <h4>Connexar PRO</h4>

              <div>
                <p>
                  minimum deposit <br /> <b>$500</b>
                </p>
                <div className="acthorizontal">
                  <div />
                </div>

                <p>
                  Spread from <br /> <b>{`<`} 1.4 pips</b>
                </p>
                <div className="acthorizontal">
                  <div />
                </div>

                <p>
                  Leverage <br /> <b>1:300</b>
                </p>
              </div>
            </div>
          </div>
        </section>

        <div
          className="container actfeatures"
          style={{ backgroundImage: `url(${actypebg})` }}
        >
          <h4>
            The Below Features are the same for all Three Types of Account
          </h4>

          <div className="row acttable">
            <div className="col-md-4">
              <div className="row">
                <div className="col-12">
                  <p>Minimum Trade Size</p>
                  <h5>
                    Micro LOT 0.01 <br /> (Volume: 1000 Units)
                  </h5>
                </div>
              </div>

              <div className="acthorizontal grey">
                <div />
              </div>

              <div className="row">
                <div className="col-12">
                  <p>Maximum volume per single trade</p>
                  <h5>
                    500.00 lot <br /> (500,00,000 Units)
                  </h5>
                </div>
              </div>
            </div>

            <div className="col-md-4">
              <div className="row">
                <div className="col-12">
                  <p>Margin Call</p>
                  <h5>50% Margin Call Alert</h5>
                </div>
              </div>

              <div className="acthorizontal grey">
                <div />
              </div>

              <div className="row">
                <div className="col-12">
                  <p>Stop Out Level</p>
                  <h5>30% Stop out Level</h5>
                </div>
              </div>

              <div className="acthorizontal grey">
                <div />
              </div>

              <div className="row">
                <div className="col-12">
                  <p>Order Execution</p>
                  <h5>
                    STP {`&`} ECN
                  </h5>
                </div>
              </div>
            </div>

            <div className="col-md-4">
              <div className="row">
                <div className="col-12">
                  <p>Swap-Free</p>
                  <h5>YES</h5>
                </div>
              </div>

              <div className="acthorizontal grey">
                <div />
              </div>

              <div className="row">
                <div className="col-12">
                  <p>Platform</p>
                  <h5>MT5</h5>
                </div>
              </div>

              <div className="acthorizontal grey">
                <div />
              </div>

              <div className="row">
                <div className="col-12">
                  <p>Trade Execution</p>
                  <h5>75ms</h5>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="actqa">
          <div
            className="container"
            style={{
              backgroundImage: `url(${qabg})`,
              backgroundRepeat: "no-repeat"
            }}
          >
            <div className="container">
              <h3>Frequently Asked Questions</h3>
            </div>
          </div>

          <div className="container actqadiv">
            <div className="container">
              <h5>What information do I need when opening an account?</h5>
              <p>
                We will need you to provide us with your name (ID Proof along
                with photocopy) and address to establish your identity.
                Typically, we can verify your identity instantly
              </p>

              <h5>How much money do I need to open an account?</h5>
              <p>
                The minimum initial deposit required is at least $100 USD.
                However, we recommend you deposit at least 1,000 to allow you
                more flexibility and better risk management when trading your
                account. To know more about how much amount is required to open
                an account click here
              </p>

              <h5>How will the Stop out level and margin call trigger?</h5>
              <p>
                50% margin call level and 30% stop-out level means, if your
                balance is $10,000, and you open a trading position with a
                $1,000 margin. If the loss on the position reaches $9,500, your
                account equity becomes $10,000 — $9,500 = $500, which is 50% of
                your used margin, Connexar Capital will issue a margin call
                warning. When your loss on the position reaches $9,700, and your
                account equity becomes $10,000 — $9,700 = $300, which is 30% of
                the used margin, the stop-out level will be triggered, and the
                MT5 will automatically close your losing position.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AccountTypeMt5;
