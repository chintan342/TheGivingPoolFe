import React, { useEffect } from 'react'
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import icReset from "../../assets/images/icReset.png"
import icGift from "../../assets/images/icGift.png"
import icShare from "../../assets/images/icShare.png"
import icSetting from "../../assets/images/icSetting.png"
import downArrow from "../../assets/images/downArrow.png"
import icSwap from "../../assets/images/icSwap.png"
import icHelp from "../../assets/images/icHelp.png"
import busd from "../../assets/images/busd.png"
import usdc from "../../assets/images/usdc.png"






const Buy = () => {

    return (
        <>
            <Header />
            <div className='main'>
                <div className="container">
                    <div className="row gradient-bg">
                        <div className='m-auto buyTokenMain'>
                            <div className='buyTokenBG'>
                                <div className='m-auto buyTokenContainer'>
                                    <div className='topIconMain'>
                                        <button type='button' className='btn topIconBtn ms-2'><img src={icReset} /></button>
                                        <button type='button' className='btn topIconBtn ms-2'><img src={icGift} /></button>
                                        <button type='button' className='btn topIconBtn ms-2'><img src={icShare} /></button>
                                        <button type='button' className='btn topIconBtn ms-2'><img src={icSetting} /></button>
                                    </div>
                                    <div className='mt-3'>
                                        <div>
                                            <div className='row'>
                                                <div className='col font14lGray'>Pay</div>
                                                <div className='col text-end'><a href='#' className='link14lGray'>Available: 500</a></div>
                                            </div>
                                            <div className='selectPartMain mt-2'>
                                                <div className='row'>
                                                    <div className='col-4 pe-0 d-flex align-items-center'>
                                                        <div><img src={busd} /></div><span className='ms-2 font14WhiteBold'>BUSD</span>
                                                    </div>
                                                    <div className='col-8 text-end'>
                                                        <input type='text' className='form-control inputField' placeholder='0' />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        
                                        <div className='w-100 text-center my-4'>
                                            <img src={downArrow} className="m-auto" />
                                        </div>

                                        <div>
                                            <div className='row'>
                                                <div className='col font14lGray'>Receive (Estimated)</div>
                                                <div className='col text-end font14lGray'>Available: 1,200</div>
                                            </div>
                                            <div className='selectPartMain mt-2'>
                                                <div className='row'>
                                                    <div className='col-4 pe-0 d-flex align-items-center'>
                                                        <div><img src={usdc} /></div><span className='ms-2 font14WhiteBold'>USDC</span>
                                                    </div>
                                                    <div className='col-8 text-end'>
                                                        <input type='text' className='form-control inputField' placeholder='0' />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div className='w-100 text-center my-4'>
                                            <div className='font14lGray'>
                                                1 BUSD = 1.0005 USDC 
                                                <button type='button' className='btn'><img src={icSwap} /></button>
                                            </div>
                                        </div>

                                        <div className='w-100 text-center my-4'>
                                            <button type='button' className='btn themeButton w-100'>Confirm Order</button>
                                            <div className='font14lGray mt-2'>Enter an amount to see more trading details</div>
                                        </div>

                                        <hr></hr>

                                        <div className='w-100 my-4'>
                                            <div className='row justify-content-between'>
                                                <div className='col font14lGray d-flex align-items-center'>Trade Mining <span className='ms-2'><img src={icHelp} /></span></div>
                                                <div className='col-auto font14White d-flex align-items-center text-end'>Max Reward 5.04 DEX <span className='ms-2 font14lGreen'>$16.68</span></div>
                                            </div>
                                        </div>

                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default Buy