import React from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

import initallaunchfees from '../../assets/images/inital-launch-fees.png'
import DataTable from "../table/DataTable";

function Roadmap() { 
    return (
      <>
    <Header/>
    <section>
        <div className="Roadmap">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-12">
                        <h2>Roadmap</h2>
                    </div>
                </div>
                </div>
            <div className="container">
                <div className="row gradient-bg text-center">
                    <div className="col-12">
                        <h3>Milestones</h3>
                        <ul>
                            <li>. Deploy $GIV token’s Smart contract and dApp development</li>
                            <li>. begin marketing</li>
                            <li>. Begin Hosting discord and Telegram discussions / polls</li>
                            <li>. Create partnerships with charities for giv’s first pool</li>
                            <li className="text-red">. Launch sale #1</li>
                            <li>. launch 1st ever Giving pool via www.thegivingpool.io</li>
                            <li>. distribute USDT rewards to holders a week after completion of 1st sale</li>
                            <li>. deploy a structure for the Giving pool</li>
                            <li>. find more charities to bring into the giving platform</li>
                            <li className="text-red">. Launch sale #2</li>
                            <li>. begin hosting Q&A meets with local charities on discord </li>
                            <li className="text-red">. launch sale #3</li>
                            <li>. Host Giveaways to token holders and community members</li>
                            <li>. increase Value of the giving pool’s target to increase donations</li>
                            <li className="text-red">. launch sale #4-7</li>
                            <li>. sponsor charities</li>
                            <li>. develop the flow of operability for the giving platform</li>
                            <li className="text-red">. launch sale #8-10</li>
                            <li>. begin future developments</li>
                        </ul>

                        <h3>inital token deployment</h3>
                        <p>The giving platform will be hosting ten (10) initial launches of 125,000,000 Giv tokens.</p>
                        <p>these tokens are to be the circulating supply for giv.</p>
                        <p>By periodically raising funds from our limited sales, we will be able to:</p>
                        <ul>
                            <li>. better control the value of giv </li>
                            <li>. implement a road for growth in both community and value.</li>
                            <li>. deploy proper marketing</li>
                        </ul>

                        <h5>detailed in the chart below, you will find the overview for each launch</h5>

                        <DataTable/>

                        <p>The private sale for each period will run until the lot of GIV is fully sold or until each Limited Sale is closed.</p>
                        <p>For any tokens that remain unsold, they will be allocated to the company and/or team for future fundraising.</p>
                        <p>INITIAL LAUNCHED tokens are extremely limited  are available to select DATES/TIMES.</p>

                        <h5 className="mt-3">AFTER THE 10 SALES HOSTED ON THE WEBSITE, GIV WILL ONLY BE AVAILABLE TO TRADE ON uniSWAP USING THE TOKEN CONTRACT ADDRESS.</h5>

                        <h3>inital launch fees</h3>
                        <img src={initallaunchfees} alt="initallaunchfees" className="mx-auto"/>
                        <p>during the INITIAL 10 launches:</p>
                        <p  className="mt-3">each sale will include the original transactional fee mentioned in the tokenomics, along with an additional 5% Developers fee.</p>
                        <p>the ETH collected from the developer fee will be used to sustain the project throughout launch and help fund future developments for the giving platform.</p>
                        <p  className="mt-3">After the Launches: the developer fee will terminate and the original Transactional tax will remain.  </p>

                        <h3>THE givING PLATFORM: after lAUNCH </h3>
                        <p>UPON COMPLETION OF THE INITAL sALES:</p>
                        <ul>
                            <li>. THE GIVING PLATFORM WILL BE ACTIVELY UP AND RUNNING</li>
                            <li>. GIV’S SOCIAL MEDIA WILL BE THE FOUNDATION WHERE PEOPLE FROM ALL OVER RECOMMEND CHARITIES - WHERE ORGANIZATIONS CAN PROMOTE THEMSELVES</li>
                            <li>. THE COMMUNITY WILL BE  ENGAGED IN SCOUTING / RANKING CHARITIES THROUGHOUT THE WORLD</li>
                            <li>. THE GIVING POOL WILL HAVE ALREADY DONATED TO OVER A DOZEN CHARITIES AND WILL CONTINUE RECIEVING FUNDS AS PEOPLE TRADE GIV</li>
                            <li>. TOKEN HOLDERS WILL CONTINUE RECIEVING REWARDS DIRECTLY DEPOSITED INTO THEIR WALLETS</li>
                            <li>. GIVEAWAYS WILL BE HOSTED IN OUR DISCORD</li>
                        </ul>
                        <p>the giving team will always strive to bring decentralization to the world of charity.</p>
                        <p>by creating a platform ran by our community, giv has created an equal opportunity for charities of all sizes and locations to receive donations and express their story.</p>
                        <p  className="mt-3">we encourage all to join our community of making a difference .</p>
                        <h5 className="mt-3">we welcome you to the giving platform.</h5>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <Footer/>
      </>
    );
  }
  
  export default Roadmap;