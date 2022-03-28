import React, { useEffect } from "react";
import Header from "../components/includes/Header";
import HomebgImage from "../assets/web_home.png";
import WithScrollbar from "../components/WithScrollbar";
import logo from "./../assets/logo.svg";
import img1 from "./../assets/nettelerN.svg";
import img2 from "./../assets/skrilln.svg";
import img3 from "./../assets/metaN.png";
import img4 from "./../assets/bitn.svg";
import img5 from "./../assets/visan.svg";
import img6 from "./../assets/tn.svg";
import img7 from "./../assets/googlen.svg";
import img8 from "./../assets/mastern.svg";
import img9 from "./../assets/wire transfern.svg";
import img10 from "./../assets/Forex.png";
import img11 from "./../assets/lindes.png";
import img12 from "./../assets/Commodities.png";
import img13 from "./../assets/Crypto-1.png";
import blog_cad from "./../assets/home_bg.png";
import './info.css'
export default function Accountinfo() {
  useEffect(() => {
    // document.getElementById("home_sld").slice();
  }, []);

  return (
    <>
      <div>
        <Header />
      </div>
      <div className="main">
        <div className="lable-text"> 
          <h3 className="sub-heading"> Open an Account 
            <span className="span-text">
              , start deposit as low as $100 and start trading
            </span>
          </h3>
        </div>
        <div className="container-fluid">
          <div className="container  ">
            <div class="row">
              <div class="col-md-4 mt-2 mb-3 bx-border">
                <div class="box-tech">
                  <div class="content">
                    <center>
                      <img
                        src="https://www.e-bureauet.dk/media/1300/icon-abobe-captivate.png"
                        alt=""
                      />
                    </center>
                    <p className="mb-0">Connexar Standard</p>
                    <p>Management</p>
                    <div class="desc">
                      <center>
                        <div class="line"></div>
                      </center>
                      <p>
                        Adobe Captivate is one of the leading eLearning
                        authoring tools.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div class="col-md-4 mt-2 mb-3 bx-border">
                <div class="box-tech ">
                  <div class="content">
                    <center>
                      <img
                        src="https://www.e-bureauet.dk/media/1300/icon-abobe-captivate.png"
                        alt=""
                      />
                    </center>
                    <p className="mb-0">Free Copy Trading </p>
                    <p>Options</p>

                    <div class="desc">
                      <center>
                        <div class="line"></div>
                      </center>
                      <p>
                        Adobe Captivate is one of the leading eLearning
                        authoring tools.
                      </p>
                      <div className="text-center mt-2 mb-2 bx-border">
                        <button className="btn btn-color-blue btn-block">
                          Know More
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div class="col-md-4 mt-2 mb-3 bx-border">
                <div class="box-tech">
                  <div class="content">
                    <center>
                      <img
                        src="https://www.e-bureauet.dk/media/1300/icon-abobe-captivate.png"
                        alt=""
                      />
                    </center>
                    <p className="mb-0">PAMM Account </p>
                    <p>Services</p>

                    <div class="desc">
                      <center>
                        <div class="line"></div>
                      </center>
                      <p>
                        Adobe Captivate is one of the leading eLearning
                        authoring tools.
                        <div className="text-center mt-2 mb-2 bx-border">
                          <button className="btn btn-color-blue btn-block">
                            Know More
                          </button>
                        </div>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <section className="par_sec">
          <div className="container p-4">
            <div className="para_grph">
              <p className="h1 mt-3">
                Why Do We choose the foreign exchange Market ?
              </p>
              <p className="mt-4  desc">
                The forex market is the place for traders all around the world
                to buy, sell or exchange currencies at the current market price.
                It is known for being by far the largest market in the world
                which means that it is also the most liquid and 95 times bigger
                than NewYork Stock Market. Worth over $6.5 Trillion dollars per
                day, our traders from all around the world enjoy trading the
                world’s most popular tradable instrument.
              </p>
            </div>
          </div>
        </section>
        <section className="frx_strip_hed p-2">
          <div className="container ">
            <div className="row">
              <div className="col-sm-6 d-flex align-items-center">
                <h4 className="mb-0 open_acc text-white">Open Your Account </h4>
              </div>
              <div className="col-sm-6 text-right">
                <button className="btn crt_n">Create now !</button>
              </div>
            </div>
          </div>
        </section>

        <section className="tw_cards">
          <div className="org_strip"></div>

          <div className="container">
            <div className="row m-0">
              <div className="col-sm-6 p-4">
                <div className="card">
                  <div className="card-body">
                    <div className="intr_desc">
                      <h4>instant withdraw</h4>
                      <h4> and deposit options</h4>
                    </div>
                    <div className="intr_desc">
                      <p>
                        Transfer Your Money anywhere anytime, Instant withdaw
                        and deposit supports you endless benfits.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-sm-6 p-4">
                <div className="card">
                  <div className="card-body">
                    <div className="intr_desc">
                      <h4>Free Forex</h4>
                      <h4>Education</h4>
                    </div>
                    <div className="intr_desc">
                      <div className="text-center">
                        <button className="btn crt_n mt-2 mb-2">
                          Join now{" "}
                        </button>
                      </div>
                      <p>We conduct forex free class for every one</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="trade_inst pb-4">
          <div className="container  p-4">
            <p className="h1 hed_weights">TRADABLE INSTRUMENTS</p>
            <p className="h3">
              Trade and invest in 150+ Tradable instruments in markets today
            </p>

            <div className="row mt-5">
              <div className="col-md-6 mt-3">
                <div className="card w-75 m-auto">
                  <div className="card-body">
                    <div className="icons">
                      <img src={img10} />
                    </div>
                    <div className="cont-card">
                      <h4>FOREX</h4>
                      <p>
                        47 currencies , Major Cross currencies <br /> Excotic
                        currencies
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-6 mt-3">
                <div className="card w-75 m-auto">
                  <div className="card-body">
                    <div className="icons">
                      <img src={img11} />
                    </div>
                    <div className="cont-card">
                      <h4>INDICES</h4>
                      <p>20 index CFDs ,including CFDs and Index Futures.</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-6 mt-3">
                <div className="card w-75 m-auto">
                  <div className="card-body">
                    <div className="icons">
                      <img src={img12} />
                    </div>
                    <div className="cont-card">
                      <h4>COMMODITIES</h4>
                      <p>
                        CFDs on Metals , Energies and Agriculture Commodities
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-6 mt-3">
                <div className="card w-75 m-auto">
                  <div className="card-body">
                    <div className="icons">
                      <img src={img13} />
                    </div>
                    <div className="cont-card">
                      <h4>CRYPTOS</h4>
                      <p>Top 10 Tradable CRYPTOS brings more.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* <section>
          <div class="responsive-map">
            <iframe
              className="maps"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2822.7806761080233!2d-93.29138368446431!3d44.96844997909819!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x52b32b6ee2c87c91%3A0xc20dff2748d2bd92!2sWalker+Art+Center!5e0!3m2!1sen!2sus!4v1514524647889"
            ></iframe>
          </div>
        </section> */}

        <section className="our_blogs">
          <p className=" h1 head_blg p-4">BLOG</p>
          <div className="row m-0">
            <div className="col-sm-4">
              <div
                className="card"
                style={{ backgroundImage: `url(${blog_cad})` }}
              >
                <div className="card-body p-0">
                  <div className="p-3">
                    <h4 className="text-white font-weight-bold">
                      How Much Should one Invest in the Forex Market ?
                    </h4>

                    <p className="text-white mt-3 mb-3">
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum has been the industry's
                      standard dummy text ever since the 1500s, when an unknown
                    
                    </p>
                  </div>
                  <button className="btn d-flex justify-content-between p-2  blod_Read w-100">
                    Read More
                    <i
                      class="fa fa-long-arrow-right"
                      aria-hidden="true"
                    ></i>{" "}
                  </button>
                </div>
              </div>
            </div>
            <div className="col-sm-4">
              <div
                className="card"
                style={{ backgroundImage: `url(${blog_cad})` }}
              >
                <div className="card-body p-0">
                  <div className="p-3">
                    <h4 className="text-white font-weight-bold">
                      How Much Should one Invest in the Forex Market ?
                    </h4>

                    <p className="text-white mt-3 mb-3">
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum has been the industry's
                      standard dummy text ever since the 1500s, when an unknown
                    
                    </p>
                  </div>
                  <button className="btn d-flex justify-content-between p-2  blod_Read w-100">
                    Read More
                    <i
                      class="fa fa-long-arrow-right"
                      aria-hidden="true"
                    ></i>{" "}
                  </button>
                </div>
              </div>
            </div>
            <div className="col-sm-4">
              <div
                className="card"
                style={{ backgroundImage: `url(${blog_cad})` }}
              >
                <div className="card-body p-0">
                  <div className="p-3">
                    <h4 className="text-white font-weight-bold">
                      How Much Should one Invest in the Forex Market ?
                    </h4>

                    <p className="text-white mt-3 mb-3">
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum has been the industry's
                      standard dummy text ever since the 1500s, when an unknown
                    
                    </p>
                  </div>
                  <button className="btn d-flex justify-content-between p-2  blod_Read w-100">
                    Read More
                    <i
                      class="fa fa-long-arrow-right"
                      aria-hidden="true"
                    ></i>{" "}
                  </button>
                </div>
              </div>
            </div>

            <div className="col-sm-4">
              <div
                className="card"
                style={{ backgroundImage: `url(${blog_cad})` }}
              >
                <div className="card-body p-0">
                  <div className="p-3">
                    <h4 className="text-white font-weight-bold">
                      How Much Should one Invest in the Forex Market ?
                    </h4>

                    <p className="text-white mt-3 mb-3">
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum has been the industry's
                      standard dummy text ever since the 1500s, when an unknown
                    
                    </p>
                  </div>
                  <button className="btn d-flex justify-content-between p-2  blod_Read w-100">
                    Read More
                    <i
                      class="fa fa-long-arrow-right"
                      aria-hidden="true"
                    ></i>{" "}
                  </button>
                </div>
              </div>
            </div>

            <div className="col-sm-4">
              <div
                className="card"
                style={{ backgroundImage: `url(${blog_cad})` }}
              >
                <div className="card-body p-0">
                  <div className="p-3">
                    <h4 className="text-white font-weight-bold">
                      How Much Should one Invest in the Forex Market ?
                    </h4>

                    <p className="text-white mt-3 mb-3">
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum has been the industry's
                      standard dummy text ever since the 1500s, when an unknown
                    
                    </p>
                  </div>
                  <button className="btn d-flex justify-content-between p-2  blod_Read w-100">
                    Read More
                    <i
                      class="fa fa-long-arrow-right"
                      aria-hidden="true"
                    ></i>{" "}
                  </button>
                </div>
              </div>
            </div>

            <div className="col-sm-4">
              <div
                className="card"
                style={{ backgroundImage: `url(${blog_cad})` }}
              >
                <div className="card-body p-0">
                  <div className="p-3">
                    <h4 className="text-white font-weight-bold">
                      How Much Should one Invest in the Forex Market ?
                    </h4>

                    <p className="text-white mt-3 mb-3">
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum has been the industry's
                      standard dummy text ever since the 1500s, when an unknown
                    
                    </p>
                  </div>
                  <button className="btn d-flex justify-content-between p-2  blod_Read w-100">
                    Read More
                    <i
                      class="fa fa-long-arrow-right"
                      aria-hidden="true"
                    ></i>{" "}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="our_partner">
          <div className="text-center p-5">
            <p className="h1 font-weight-bold text-white">OUR PARTNERS</p>
          </div>

          <div className="row justify-content-center">
            <div className="pr_img">
              <img src={img1} />
            </div>

            <div className="pr_img">
              <img src={img2} />
            </div>

            <div className="pr_img">
              <img src={img3} />
            </div>

            <div className="pr_img">
              <img src={img4} />
            </div>

            <div className="pr_img">
              <img src={img5} />
            </div>

            <div className="pr_img">
              <img src={img6} />
            </div>

            <div className="pr_img">
              <img src={img7} />
            </div>
            <div className="pr_img">
              <img src={img8} />
            </div>
            <div className="pr_img">
              <img src={img9} />
            </div>
          </div>
        </section>

        {/* <section className="section section-default mt-none mb-none">
          <div className="container">
            <h2 className="mb-sm text-center">
              Our <strong>Partners</strong>
            </h2>
            <strong>
              <div className="row m-0">
                <div className="col-sm-6 col-md-4 col-lg-3">
                  <div className="square-holder">
                    <img
                      alt=""
                      src="https://www.pmits.co.uk/portals/0/images/partners/solar-communications-200.png"
                    />
                  </div>
                </div>
                <div className="col-sm-6 col-md-4 col-lg-3">
                  <div className="square-holder">
                    <img
                      alt=""
                      src="https://www.pmits.co.uk/portals/0/images/partners/cbf-200.png"
                    />
                  </div>
                </div>
                <div className="col-sm-6 col-md-4 col-lg-3">
                  <div className="square-holder">
                    <img
                      alt=""
                      src="https://www.pmits.co.uk/portals/0/images/partners/gxs-200.png"
                    />
                  </div>
                </div>
                <div className="col-sm-6 col-md-4 col-lg-3">
                  <div className="square-holder">
                    <img
                      alt=""
                      src="https://www.pmits.co.uk/portals/0/images/partners/jpr-200.png"
                    />
                  </div>
                </div>
                <div className="col-sm-6 col-md-4 col-lg-3">
                  <div className="square-holder">
                    <img
                      alt=""
                      src="https://www.pmits.co.uk/portals/0/images/partners/talk-internet-200.png"
                    />
                  </div>
                </div>
                <div className="col-sm-6 col-md-4 col-lg-3">
                  <div className="square-holder">
                    <img
                      alt=""
                      src="https://www.pmits.co.uk/Portals/0/img/opera3_logo.png"
                    />
                  </div>
                </div>
                <div className="col-sm-6 col-md-4 col-lg-3">
                  <div className="square-holder">
                    <img
                      alt=""
                      src="https://www.pmits.co.uk/Portals/0/pegasus-logo.png"
                    />
                  </div>
                </div>
                <div className="col-sm-6 col-md-4 col-lg-3">
                  <div className="square-holder">
                    <img
                      alt=""
                      src="https://www.pmits.co.uk/Portals/0/sage business partner.jpg"
                    />
                  </div>
                </div>
              </div>
            </strong>
          </div>
        </section> */}
        {/* <section className="our_partners">
          <div className="text-center">
            <p className=" h1 text-white pt-5 pb-5">OUR PARTNERS</p>
          </div>
          <div className="row m-0 justify-content-center">
            <div className="col-2">
              <img src={img1} />
            </div>
            <div className="col-2">
              <img src={img2} />
            </div>

            <div className="col-2">
              <img src={img3} />
            </div>
            <div className="col-2">
              <img src={img4} />
            </div>
            <div className="col-2">
              <img src={img5} />
            </div>
            <div className="col-2">
              <img src={img6} />
            </div>
            <div className="col-2">
              <img src={img7} />
            </div>
            <div className="col-2">
              <img src={img8} />
            </div>

            <div className="col-2">
              <img src={img9} />
            </div>
          </div>
        </section> */}
      </div>
    </>
  );
}
