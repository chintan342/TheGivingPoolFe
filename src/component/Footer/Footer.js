import React from "react";
// import { NavLink } from "react-router-dom";

import discord  from '../../assets/images/icDiscord.png';
import telegram  from '../../assets/images/icTelegram.png';
import twitter  from '../../assets/images/icTwitter.png';
import instagram  from '../../assets/images/icInstagram.png';

function Header() {
    return (
      <>
      {
      <footer>
        <div className="container">
            <div className="row text-center">
                <div className="col-12"><h4>The giving Pool</h4></div>
                <div className="col-12">
                    <ul className="list-unstyled social-icon">
                        <li className="d-inline-block"><a href="#" title="Discord"><img src={discord} alt="discord"/></a></li>
                        <li className="d-inline-block"><a href="#" title="Telegram"><img src={telegram} alt="telegram"/></a></li>
                        <li className="d-inline-block"><a href="#" title="Twitter"><img src={twitter} alt="twitter"/></a></li>
                        <li className="d-inline-block"><a href="#" title="Instagram"><img src={instagram} alt="instagram"/></a></li>
                        
                    </ul>
                    </div>
                <div className="col-12"><p>copyright 2022 - thegivingpool.io</p></div>
            </div>
        </div>
      </footer>
      }
      </>
    );
  }
  
  export default Header;