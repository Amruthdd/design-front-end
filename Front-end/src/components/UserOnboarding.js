import React,{useEffect,useState} from "react";
import {BrowserRouter as Router, Route, Switch, useHistory,Redirect,Link, withRouter} from "react-router-dom";
import TitleSVG from "../TitleSVG";
import "./UserOnboarding.css";
import people from './images/people.png'



export default function UserOnboarding() {

    const history = useHistory();
    const [details,setDetails] = useState([]);

    useEffect(()=>{
        fetch(`https://api.apify.com/v2/key-value-stores/toDWvRj1JpTXiM8FF/records/LATEST?disableRedirect=true`).then(r=>r.json()).then(data=>{
            // setName(data.name);
            // setUsername(data.username);
            // setEmail(data.email);
            // setAddress(data.address);
            // setPhoneno(data.phoneno);
            setDetails(data);
            
            
            // console.log(data)
        })
            .catch(e=>console.log(e));

    },[]);

    return (
        <div className='min-vh-93 d-flex flex-column justify-content-end '>
            <div className='my-5 container user-select-none overflow-hidden'>
            <div className='d-flex justify-content-between align-items-center'>
                <div className='log-page-title'>
                    <TitleSVG />
                </div>
                <div>
                    {/* <Link to='/' className='px-5 py-1 red-clr text-decoration-none no-underline'>
                        Home
                    </Link>
                     */}
                    <button className='btn start-btn px-3'
                            onClick={()=>{history.push('/login')}}>
                                LogIn
                    </button>
                </div>
            </div>
            </div>
            
            <div className="container">
                <div className="row">
                    <div className="col-xl-6" style={{marginTop:40}}>
                        <h2 style={{color:"#475a64", fontWeight:"400"}}>Save yourself</h2>
                        <h2 style={{color:"#475a64", fontWeight:"400"}}>Save the world</h2>
                        <h6 style={{color:"#a3acb1", fontWeight:"400",marginTop:20}}>Coronavirus disease 2019 (COVID-19) is a contagious disease<br/>caused by severe acute respiratory syndrome coronavirus-2.</h6>
                        <div className='bg-white '>
                            <div className='my-5'>
                                <Link to='/signup' className='no-underline text-decoration-none'>
                                    <button
                                        className='btn  start-btn d-block no-underline '
                                        type='submit'
                                    >
                                        Get Started
                                    </button>
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className='col-xl-6'>
                    <img src={people} className="onboard-avatar"/>
                </div>
                <div className="col-xl-12 home-card" style={{padding:10,borderRadius:18,marginLeft:0,marginTop:50}}>
                    <div className="container" style={{padding:0}}>
                        <div className="row" style={{textAlign:"center"}} >
                            <div className="col-xl-3" style={{marginTop:15}}>
                                <h3 className="red-clr">{details.activeCases}</h3>
                                <p className="dark-grey-clr">Active Cases</p>
                            </div>
                            <div className="col-xl-3" style={{marginTop:15}}>
                                <h3 className="green-clr">{details.recovered}</h3>
                                <p className="dark-grey-clr">Recovered</p>
                            </div>
                            <div className="col-xl-3" style={{marginTop:15}}>
                                <h3 className="red-clr">{details.deaths}</h3>
                                <p className="dark-grey-clr">Deaths</p>
                            </div>
                            <div className="col-xl-3" style={{marginTop:15}}>
                                <h3 className="red-clr">{details.totalCases}</h3>
                                <p className="dark-grey-clr">Total Cases</p>
                            </div>
                        </div>
                    </div>
                    
                </div>
                    
                </div>
                
            </div>
            
        </div>
    );
}

