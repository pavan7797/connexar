import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import logo from "../../assets/Connexar-Capital.jpg";
import closeSvg from "../../assets/x-circle.svg";
import "./header.css";
import { Link } from 'react-router-dom';

const Header = () => {
  const [activeLink, setActiveLink] = useState('');
  const [toggleSidebar, setToggleSidebar] = useState(false)
  const hide = (value) => {
    return (value === activeLink) ? '' : "submenu_div_hide";
  }

  useEffect(() => {
    const barY = window.scrollY + document.querySelector('.down_nav').getBoundingClientRect().top // Y

    window.addEventListener('mousemove', (e) => {
      (e.clientY > barY + 120) ? setActiveLink('') : (e.clientY < barY) && setActiveLink('');
    })
  }, []);

  return (
    <>
      <header>
        <div className="navbar">
          <div className="container d-block d-lg-flex flex-lg-nowrap justify-content-end">
            <NavLink to="/" className="navbar-brand" lg={6}>
              <img src={logo} className="d-inline-block align-top" alt="" />
              <svg onClick={()=>setToggleSidebar(!toggleSidebar)} xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#00325A" class="bi bi-list toggle-menu" viewBox="0 0 16 16">
                <path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z" />
              </svg>
            </NavLink>
              {/* <button className="view-btn" lg={2} onClick={()=>setToggleSidebar(!toggleSidebar)}>
                <span>Menu</span>
              </button> */}
            {/* </div> */}
            <nav className="buttongroup d-flex px-md-3" lg={4}>
              <button className="hm-btn1">
                <span> Open Live Account</span>
              </button>
              <button className="hm-btn">
                <span>Open Demo Account</span>
              </button>
            </nav>
          </div>
        </div>
        {toggleSidebar?
        <div className="sidebar-nav" onClick={()=>setToggleSidebar(!toggleSidebar)}>
          <nav>
            <div className="close-container" onClick={()=>setToggleSidebar(!toggleSidebar)}>
              <img src={closeSvg} className="close-button d-inline-block align-top" alt="" />
            </div>
            <ul>
                <li onMouseEnter={() => setActiveLink('1')} >
                      <NavLink to="/">Account types</NavLink>
                </li>
                <ul className="inner-menu">
                  <li>
                    <Link to="/mt5-account-types">MT5 Account Types</Link>
                  </li>
                  <li>
                    <Link to="/tradable-instruments">Tradable Instruments</Link>
                  </li>
                  <li>
                    <Link to="/spread-details">Spread Details</Link>
                  </li>
                  <li>
                    <Link to="/download-mt5">Download MT5</Link>
                  </li>
                  <li>
                    <Link to="/deposit-withdrawal">DepositWithdrawal</Link>
                  </li>
                  <li>
                    <Link to="/forex-IB">ForexIB</Link>
                  </li>
                  <li>
                    <Link to="/forex-white-label">Forex White Label</Link>
                  </li>
                </ul>
                <li onMouseEnter={() => setActiveLink('2')}>
                  <NavLink to="/">Funding</NavLink>
                </li>
                <ul className="inner-menu">
                  <li>
                    <Link to="/">Deposit {'&'} Withdrawal</Link>
                  </li>
                </ul>
                <li onMouseEnter={() => setActiveLink('')}>
                  <NavLink to="/">Trading platforms</NavLink>
                </li>
                <ul className="inner-menu">
                  <li>
                    <Link to="/">MT5 Download Intruction </Link>
                  </li>
                </ul>
                <li onMouseEnter={() => setActiveLink('3')}>
                  <NavLink to="/">Promotion</NavLink>
                </li>
                <ul className="inner-menu">
                  <li>
                    <Link to="/">White Lable</Link>
                  </li>
                  <li>
                    <Link to="/">Introducing Partner</Link>
                  </li>
                  <li>
                    <Link to="/">Welcome Bonus</Link>
                  </li>
                  <li>
                    <Link to="/">Withdrawal Bonus</Link>
                  </li>
                  <li>
                    <Link to="/">Free Deposit $50</Link>
                  </li>
                </ul>
                <li onMouseEnter={() => setActiveLink('')}>
                  <NavLink to="/">Invest</NavLink>
                </li>
                <ul className="inner-menu">
                  <li>
                    <Link to="/">PAMM Account</Link>
                  </li>
                  <li>
                    <Link to="/">MAM Account</Link>
                  </li>
                  <li>
                    <Link to="/">Copy Trading</Link>
                  </li>
                </ul>
                <li onMouseEnter={() => setActiveLink('')}>
                  <NavLink to="/">Forex Tools</NavLink>
                </li>
                <ul className="inner-menu">
                  <li>
                    <Link to="/">Forex News</Link>
                  </li>
                  <li>
                    <Link to="/">Forex Terminologies</Link>
                  </li>
                  <li>
                    <Link to="/">Learn Forex</Link>
                  </li>
                  <li>
                    <Link to="/">Live Market Price</Link>
                  </li>
                  <li>
                    <Link to="/">Forex Calender</Link>
                  </li>
                  <li>
                    <Link to="/">Forex E-Book</Link>
                  </li>
                </ul>
                <li onMouseEnter={() => setActiveLink('')}>
                  <NavLink to="/">Client Support</NavLink>
                </li>
                <ul className="inner-menu">
                  <li>
                    <Link to="/">About US</Link>
                  </li>
                  <li>
                    <Link to="/">Contact Us</Link>
                  </li>
                  <li>
                    <Link to="/">FAQ</Link>
                  </li>
                  <li>
                    <Link to="/">Legal Documents</Link>
                  </li>
                </ul>
            </ul>
          </nav>
        </div>
        :
         <div className="down_nav" >
          <ul className="fst_sub">
          <li className="showOnMobile" onMouseEnter={() => setActiveLink('')}>
              <NavLink to="/">Open Live Account</NavLink>
            </li>
            <li className="showOnMobile" onMouseEnter={() => setActiveLink('')}>
              <NavLink to="/">Open Demo Account</NavLink>
            </li>
            <li className="border-bottom showOnMobile"></li>
            <li onMouseEnter={() => setActiveLink('1')} >
              <NavLink to="/">Account types</NavLink>
            </li>
            <li onMouseEnter={() => setActiveLink('2')}>
              <NavLink to="/">Funding</NavLink>
            </li>
            <li onMouseEnter={() => setActiveLink('')}>
              <NavLink to="/">Trading platforms</NavLink>
            </li>
            <li onMouseEnter={() => setActiveLink('3')}>
              <NavLink to="/">Promotion</NavLink>
            </li>
            <li onMouseEnter={() => setActiveLink('')}>
              <NavLink to="/">Invest</NavLink>
            </li>
            <li onMouseEnter={() => setActiveLink('')}>
              <NavLink to="/">Forex Tools</NavLink>
            </li>
            <li onMouseEnter={() => setActiveLink('')}>
              <NavLink to="/">Client Support</NavLink>
            </li>
            {/* <li>
              <button className="login-btn btn1">Login</button>
            </li> */}

            <button className="login-btn btn1">Login</button>
          </ul>
          <div className={`submenu_div ${hide('1')}`}>
            <ul className="submenu_1">
              <li>
                <Link to="/mt5-account-types" href="index.html">MT5 Account Types</Link>
              </li>
              <li>
                <Link to="/tradable-instruments">Tradable Instruments</Link>
              </li>
              <li>
                <Link to="/spread-details">Spread Details</Link>
              </li>
              <li>
                <Link to="/download-mt5">Download MT5</Link>
              </li>
              <li>
                <Link to="/deposit-withdrawal">DepositWithdrawal</Link>
              </li>
              <li>
                <Link to="/forex-IB">ForexIB</Link>
              </li>
              <li>
                <Link to="/forex-white-label">Forex White Label</Link>
              </li>
            </ul>
          </div>

          <div className={`submenu_div ${hide('2')}`}>
            <ul className="submenu_1">
              <li>
                <a href="index.html">Deposit {'&'} Withdrawal</a>
              </li>
            </ul>
          </div>

          <div className={`submenu_div ${hide('3')}`}>
            <ul className="submenu_1">
              <li>
                <a href="index.html">Welcome Bonus</a>
              </li>
              <li>
                <a href="index-v2.html">Withdrawal Bonus</a>
              </li>
              <li>
                <a href="index-v3.html">Free Deposit $50</a>
              </li>
            </ul>
          </div>

        </div> }
      </header>
    </>
  );
};

export default Header;
