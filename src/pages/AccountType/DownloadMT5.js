import Header from "../../components/includes/Header";

import "./styles.css";
import intersection from "../../assets/intersection2.svg";
import rectangle from "../../assets/rectangle.svg";
import logo from "../../assets/Connexar-Capital.png";
import qabg from "../../assets/qabg.svg";
import RBCarousel from "react-bootstrap-carousel";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";

const DownloadMT5 = () => {
  return (
    <div>
      <Header />

      {/* Banner */}
      <div className="actbanner">
        <img src={intersection} className="actbannerimg" />
        <img src={rectangle} className="actbannerimg" />
        <img src={logo} className="actbannerimg" />

        <div className="actbannerimg actbannertxt">
          <p>CONNEXARCAPITAL FOREX ACCOUNT TYPES</p>
          <h1>SPREAD DETAILS</h1>
        </div>
      </div>

      <div className="actpricing">
        <div className="sdcarousel">
          <Carousel />
        </div>

        <div className="sdheader">
          <h3>SPREAD FOR CONNEXAR CAPITAL ACCOUNT TYPES</h3>
        </div>

        <div className="sdtable container">
          <div className="sdtablehead">
            <h4>MAJOR PAIRS</h4>

            <div className="sdtableheading">
              <div>Connexar STD</div>
              <div>Connexar ECN</div>
              <div>Connexar PRO</div>
            </div>
          </div>

          <div className="sdbody">
            <div className="sdbodydiv">
              <div>
                <div>EUR / USD</div>
                <div>Euro Vs US Dollar</div>
              </div>

              <div className="sdvalues">
                <p>1.3</p>
                <p>0.1</p>
                <p>0.8</p>
              </div>
            </div>
          </div>

          <div className="sdbody">
            <div className="sdbodydiv">
              <div>
                <div>GBP / USD</div>
                <div>British Pound Vs US Dollar</div>
              </div>

              <div className="sdvalues">
                <p>2.3</p>
                <p>0.4</p>
                <p>1.1</p>
              </div>
            </div>
          </div>

          <div className="sdbody">
            <div className="sdbodydiv">
              <div>
                <div>US Dollar</div>
                <div>US Dollar Vs Japan Yen</div>
              </div>

              <div className="sdvalues">
                <p>2.3</p>
                <p>0.4</p>
                <p>1.1</p>
              </div>
            </div>
          </div>
        </div>

        <div className="sdtable container">
          <div className="sdtablehead">
            <h4>MINOR PAIRS</h4>

            <div className="sdtableheading">
              <div>Connexar STD</div>
              <div>Connexar ECN</div>
              <div>Connexar PRO</div>
            </div>
          </div>

          <div className="sdbody">
            <div className="sdbodydiv">
              <div>
                <div>EUR / USD</div>
                <div>Euro Vs US Dollar</div>
              </div>

              <div className="sdvalues">
                <p>1.3</p>
                <p>0.1</p>
                <p>0.8</p>
              </div>
            </div>
          </div>

          <div className="sdbody">
            <div className="sdbodydiv">
              <div>
                <div>GBP / USD</div>
                <div>British Pound Vs US Dollar</div>
              </div>

              <div className="sdvalues">
                <p>2.3</p>
                <p>0.4</p>
                <p>1.1</p>
              </div>
            </div>
          </div>

          <div className="sdbody">
            <div className="sdbodydiv">
              <div>
                <div>US Dollar</div>
                <div>US Dollar Vs Japan Yen</div>
              </div>

              <div className="sdvalues">
                <p>2.3</p>
                <p>0.4</p>
                <p>1.1</p>
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

const Carousel = ({ children }) => {
  return (
    <RBCarousel
      // animation={true}
      autoplay={false}
      // slideshowSpeed={2000}
      defaultActiveIndex={0}
      // leftIcon={this.state.leftIcon}
      // rightIcon={this.state.rightIcon}
      // onSelect={this._onSelect}
      // ref={this.slider}
      version={4}
    >
      <div className="container" style={{ height: "300px" }}>
        <div className="sdnext">
          <p />
          <p>
            Example 1 <FaArrowRight />
          </p>
        </div>

        <div className="adcarousel1">
          <div>
            <h3>What is a Spread in Forex Trading?</h3>
            <p>
              A Currency Pair will be quoted at two distinct values by Forex
              Brokers. The Price of the Bid and the Price of the Ask . The "Bid"
              is Selling Price. The "Ask" is Buying Price.The difference between
              these two prices is referred to as SPREAD.
            </p>
          </div>

          <div>
            <h3>ICON FOR SPREAD</h3>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="sdnext">
          <p>
            <FaArrowLeft /> What is Spread?
          </p>
          <p>
            Example 2 <FaArrowRight />
          </p>
        </div>

        <div className="adcarousel2">
          <div>
            <h3>EUR/USD</h3>
            <p>Instrument</p>
          </div>

          <div>
            <h3>1.12814</h3>
            <p>Bid</p>
          </div>

          <div>
            <h3>1.12815</h3>
            <p>Ask</p>
          </div>

          <div>
            <h3>0.1</h3>
            <p>Spread</p>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="sdnext">
          <p>
            <FaArrowLeft /> Example 2
          </p>
          <p>
            What is Spread? <FaArrowRight />
          </p>
        </div>

        <div className="adcarousel2">
          <div>
            <h3>USD/JPY</h3>
            <p>Instrument</p>
          </div>

          <div>
            <h3>114.556</h3>
            <p>Bid</p>
          </div>

          <div>
            <h3>114.559</h3>
            <p>Ask</p>
          </div>

          <div>
            <h3>0.3</h3>
            <p>Spread</p>
          </div>
        </div>
      </div>
    </RBCarousel>
  );
};

export default DownloadMT5;
