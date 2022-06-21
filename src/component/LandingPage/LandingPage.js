
import React from 'react';
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Timer from '../LaunchTimer/Timer';
import DataTable from '../table/DataTable';

import landingbannerlogo from '../../assets/images/landing-banner-logo.png';
import discord  from '../../assets/images/icDiscord.png';
import telegram  from '../../assets/images/icTelegram.png';
import twitter  from '../../assets/images/icTwitter.png';
import instagram  from '../../assets/images/icInstagram.png';


function LandingPage() {
    return (
      <>
       <Header/>
       <section>
        <div className="LandingPage">
            <div className="container">
                <div className="row gradient-bg text-center">
                  <div className='landingbannerlogo position-relative'>
                    <img src={landingbannerlogo} alt="landingbannerlogo" className='mx-auto'/>
                    <ul className="list-unstyled social-icon">
                        <li className="d-inline-block"><a href="#" title="Discord"><img src={discord} alt="discord"/></a></li>
                        <li className="d-inline-block"><a href="#" title="Telegram"><img src={telegram} alt="telegram"/></a></li>
                        <li className="d-inline-block"><a href="#" title="Twitter"><img src={twitter} alt="twitter"/></a></li>
                        <li className="d-inline-block"><a href="#" title="Instagram"><img src={instagram} alt="instagram"/></a></li>
                    </ul>
                    <Timer/>
                  </div>
                   <div className='learn-more'>
                    <p>LEARN MORE BY READING OUR: WHITEPAPER - ROADMAP - TOKENOMICS</p>
                    <p className='mb-2'>The giving platform will be hosting ten (10) initial launches of 125,000,000 Giv tokens.these tokens are to be the circulating supply for giv.</p>
                    <p>The private sale for each period will run until the lot of GIV is fully sold or until each Limited Sale is closed.</p>
                  </div>
                   <DataTable/>
                   <h5>Join our community today for more insights!</h5>
                </div>
            </div>
        </div>
    </section>
       <Footer/>
      </>
    );
  }
  
  export default LandingPage;