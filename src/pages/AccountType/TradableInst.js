import Header from '../../components/includes/Header';

import './styles.css';
import intersection from '../../assets/intersection2.svg';
import rectangle from '../../assets/rectangle.svg';
import logo from "../../assets/Connexar-Capital.png";
import cross from '../../assets/cross.svg';

const TradableInstruments = () => {

  const indices = [
    ['China50 index', 'CHINA50'],
    ['DAX 30  index', 'DE30'],
    ['EURO Stoxx 50 index', 'EU50'],
    ['UK 100 index', 'UK100'],
    ['UK 100 index', 'AU200'],
  ]

  return (
    <div>
      <Header />

      {/* Banner */}
      <div className='actbanner'>
        <img src={intersection} className="actbannerimg" />
        <img src={rectangle} className="actbannerimg" />
        <img src={logo} className="actbannerimg" />

        <div className='actbannerimg actbannertxt'>
          <p>CONNEXARCAPITAL FOREX ACCOUNT TYPES</p>
          <h1>TRADABLE INSTRUMENTS</h1>
        </div>
      </div>

      <div className='actpricing'>
        <div className='container tidesc'>
          <div className='tileftbar'></div>
          <div>
            Trading instruments refer to the different types of markets you can trade. Sometimes called securities, they range from commodity futures to stocks and CFDs, to currencies and metals, and more.Currency can be traded through spot transactions, forwards, swaps and option contracts where the underlying instrument is a currency. Traders buy and sell multiple currency pairs within the same day, or even multiple times within a day, to take advantage of small market movements Connexar Capital provides a list of tradable instruments, which will be high class Fast Execution Instruments for clients, by Accessing the Global Markets 24 hours / 5 Days.
          </div>
        </div>

        <div className='tiheader'>
          <h1 className='container'>Forex Pairs</h1>
        </div>

        <div className='container tipairoot'>
          <div>
            <h3>MAJOR PAIRS</h3>

            <PairDiv>
              <Pair>EUR <b>/</b> USD</Pair>
              <Pair>GBP <b>/</b> USD</Pair>
              <Pair>USD <b>/</b>JPY</Pair>
              <Pair>USD <b>/</b>CHF</Pair>
            </PairDiv>
          </div>

          <div>
            <h3>MINOR PAIRS</h3>

            <PairDiv>
              <Pair>AUD &nbsp;<img src={cross} />&nbsp; USD</Pair>
              <Pair>USD &nbsp;<img src={cross} />&nbsp; CAD</Pair>
              <Pair>NZD &nbsp;<img src={cross} />&nbsp; USD</Pair>
            </PairDiv>
          </div>

          <div>
            <h3>CROSS PAIRS</h3>

            <PairDiv>
              <div className='container'>

                <div className='row'>
                  <div className='col-md-3 col-6 px-2 mb-3 pareBorderRadius'><Pair><div>NZD &nbsp;<img src={cross} />&nbsp; CHF</div></Pair></div>
                  <div className='col-md-3 col-6 px-2 mb-3 pareBorderRadius'><Pair><div>GBP &nbsp;<img src={cross} />&nbsp; NZD</div></Pair></div>
                  <div className='col-md-3 col-6 px-2 mb-3 pareBorderRadius'><Pair><div>AUD &nbsp;<img src={cross} />&nbsp; NZD</div></Pair></div>
                  <div className='col-md-3 col-6 px-2 mb-3 pareBorderRadius'><Pair><div>AUD &nbsp;<img src={cross} />&nbsp; NZD</div></Pair></div>
                </div>

                <div className='row'>

                  <div className='col-md-3 col-6 px-2 mb-3 pareBorderRadius'><Pair><div>AUD &nbsp;<img src={cross} />&nbsp; CHF</div></Pair></div>
                  <div className='col-md-3 col-6 px-2 mb-3 pareBorderRadius'><Pair><div>CAD &nbsp;<img src={cross} />&nbsp; CHF</div></Pair></div>
                  <div className='col-md-3 col-6 px-2 mb-3 pareBorderRadius'><Pair><div>GBP &nbsp;<img src={cross} />&nbsp; CAD</div></Pair></div>
                  <div className='col-md-3 col-6 px-2 mb-3 pareBorderRadius'><Pair><div>GBP &nbsp;<img src={cross} />&nbsp; AUD</div></Pair></div>
                </div>

                <div className='row'>

                  <div className='col-md-3 col-6 px-2 mb-3 pareBorderRadius'><Pair><div>EUR &nbsp;<img src={cross} />&nbsp; CAD</div></Pair></div>
                  <div className='col-md-3 col-6 px-2 mb-3 pareBorderRadius'><Pair><div>EUR &nbsp;<img src={cross} />&nbsp; NZD</div></Pair></div>
                  <div className='col-md-3 col-6 px-2 mb-3 pareBorderRadius'><Pair><div>EUR &nbsp;<img src={cross} />&nbsp; AUD</div></Pair></div>
                  <div className='col-md-3 col-6 px-2 mb-3 pareBorderRadius'><Pair><div>NZD &nbsp;<img src={cross} />&nbsp; JPY</div></Pair></div>
                </div>

                <div className='row'>

                  <div className='col-md-3 col-6 px-2 mb-3 pareBorderRadius'><Pair><div>CHF &nbsp;<img src={cross} />&nbsp; JPY</div></Pair></div>
                  <div className='col-md-3 col-6 px-2 mb-3 pareBorderRadius'><Pair><div>AUD &nbsp;<img src={cross} />&nbsp; JPY</div></Pair></div>
                  <div className='col-md-3 col-6 px-2 mb-3 pareBorderRadius'><Pair><div>EUR &nbsp;<img src={cross} />&nbsp; CHF</div></Pair></div>
                  <div className='col-md-3 col-6 px-2 mb-3 pareBorderRadius'><Pair><div>EUR &nbsp;<img src={cross} />&nbsp; JPY</div></Pair></div>
                </div>

                <div className='row'>

                  <div className='col-md-3 col-6 px-2 mb-3 pareBorderRadius'><Pair><div>GBP &nbsp;<img src={cross} />&nbsp; JPY</div></Pair></div>
                </div>
              </div>
            </PairDiv>
          </div>

          <div>
            <h3>PRECIOUS METALS</h3>
            <div className='tipairDivInd'>

              <div className='tipairind tipairind1'><h5>GOLD</h5> <h3 className='ti1'>XAU &nbsp;<b>/</b>&nbsp; USD</h3></div>
              <div className='tipairind tipairind2'><h5>SILVER</h5> <h3 className='ti2'>XAG &nbsp;<b>/</b>&nbsp; USD</h3></div>
              <div className='tipairind tipairind3'><h5>CRUDE OIL</h5> <h3 className='ti1'>USO &nbsp;<b>/</b>&nbsp; USD</h3></div>
            </div>
          </div>

          <div>
            <h3>INDICES</h3>
            <div className='tiindices'>

              {indices.map(v => (
                <div>
                  <div className='tiinline'></div>
                  <div className='tiinind'><p>{v[0]}</p></div>
                  <div className='tiinind'><p>{v[1]}</p></div>
                  <div className='tiinline'></div>
                </div>
              ))}

            </div>
          </div>

        </div>
      </div>
    </div>
  )
}

const Pair = ({ children }) => {
  return (
    <div className='tipair'>
      {children}
    </div>
  )
}

const PairDiv = ({ children }) => {
  return (
    <div className='tipairDiv'>
      {children}
    </div>
  )
}

export default TradableInstruments;