import React from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

import TransactionalFees from '../../assets/images/Transactional-Fees.png'
import TokenDistribution from '../../assets/images/Token -Distribution.png'
import TokenSale from '../../assets/images/Token-Sale.png'

function Tokenomics() { 
    return (
      <>
    <Header/>
    <section>
        <div className="Tokenomics">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-12">
                        <h2>Tokenomics</h2>
                    </div>
                </div>
                </div>
            <div className="container">
                <div className="row gradient-bg text-center">
                    <div className="col-12">
                        <h3>Giv Tokenn</h3>
                        <p>$GIV is the cryptographic utility token that powers the GIV Finance </p>
                        <p> ecosystem, and is based</p>
                        <p>on the solana network. Its primary use is to enable consumer access to our platform, as well</p>
                        <p>as generate rewards to be distributed to their destinations</p>
                        <p>GIV is used for the following:</p>
                        <ol>
                            <li>1. Funds the Giving Pool</li>
                            <li>2. Rewards holders</li>
                            <li>3. Allow voting rights in the Giving Pool</li>
                        </ol>
                        <p>Written in Giv’s smart contract - each transaction will help us achieve a self sustaining flow of operability.</p>

<h3>Transactional Fees</h3>
<p>10% of capital used to purchase GIV will be converted into ETH and USDT upon each transaction to be dispersed throughout the ecosystem.</p>
<p>This Transaction fee is used solely to fund the Giving pool and the generate rewards for token holders.</p>
<p>90% is put into our liquidity Pool, creating the value of GIV.</p>
<img src={TransactionalFees} alt="TransactionalFees" className="mx-auto"/>

<h3>Token Distribution</h3>
<p>The Giving Foundation will create 250,000,000 GIV tokens (250 million.)</p>
<ul>
    <li>. 125,000,000 Giv tokens put into giv’s liquidity pool that represents our 
circulating supply</li>
<li>. 50,000,000 (50M) Giv Tokens Locked in a seperate wallet designed to collect token rewards 
to fund community giveaways</li>
<li>. 50,000,000 (50M) Giv Tokens in the wallets of Developers to keep the operation of 
the giving platform running, Preform dApp updates & add new features.</li>
<li>. 25,000,000 (25M) Giv tokens in a reserve wallet for future announcements</li>
</ul>
<img src={TokenDistribution} alt="TokenDistribution" className="mx-auto"/>

<h3>Token Sale</h3>
<p>GIV shall only be made available for purchase through its token sale or on the secondary</p>
<p>exchange market. No other tokens will be minted or available for purchase from GIV. There will be a total supply of 250,000,000 GIV Tokens with 125,000,000 GIV Tokens in circulation</p>
<p>Our goal is to drive token value appreciation for early token buyers by significantly discounting</p>
<p>tokes sold in each pre-sale round. The price will incrementally increase with each sale round,</p>
<p>and each round is concluded when the allotment of tokens allocated for that round has been
exhausted.</p>
<p>Our circulating supply of 125 million tokens will be strategically added into the liquidity pool by facilitating 10 Limited sales of giv via our site.</p>
<img src={TokenSale} alt="TokenSale" className="mx-auto"/>
<p>By periodically raising funds from these limited releases we will be able to control the value of giv while setting up a road for growth.</p>
<p>During the LIMITED SALES fees will follow the protocol from the original smart contract and in ADDITION have a:
5% DEV fee that will go into A SEPERATE WALLET in the form of ETH</p>
<p>after our 10 limited sales, the only way to purchase giv will be in uniswap using our token address.</p>

<h4>See our roadmap page to learn about the 10 initial sales and future plans from giv</h4>

                    </div>
                </div>
            </div>
        </div>
    </section>
    <Footer/>
      </>
    );
  }
  
  export default Tokenomics;