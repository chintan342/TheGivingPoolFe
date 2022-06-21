import React from 'react'
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Timer from '../LaunchTimer/Timer';
import DataTable from '../table/DataTable';


const Home = () => {
  return (
    <>
        <Header/>
        <div className='main'>
            <div className="container">
                <div className="row gradient-bg">
                    
                </div>
            </div>
        </div>
        <Timer/>
        <DataTable/>
        <Footer/>
    </>
  )
}

export default Home