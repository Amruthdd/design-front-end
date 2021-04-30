import React, { useState, useEffect } from "react";
import {BrowserRouter as Router, Route, Switch, useHistory,Redirect,Link, withRouter} from "react-router-dom";
import TitleSVG from "../TitleSVG";
import { MdPerson } from "react-icons/md";
import "./profile.css";
import progress from './images/progressbar.png';
import sneezing from './images/sneezing.png';
import upload from './images/upload.png';
import sneez from './images/sneezing.png';
import AreuSure from "./AreuSure";
import notify from  "./images/notification-illustration.png"


function Home(props) {
    const [image, setImage] = useState([]);
    const [src,setSrc] = useState(null);
    // const u = props.location.state.username;
    const history = useHistory();
    const u = props.match.params.username;
    const [notification, setNotification] = useState([]);
    const [click, setClick] = useState(false)

    function handleClick(){
        setClick(true);
    }

    function handleClicked(){
        setClick(false);
    }

    useEffect(()=>{
        fetch(`http://localhost:8001/${u}/page`).then(r=>r.json()).then(data=>{
            // setName(data.name);
            // setUsername(data.username);
            // setEmail(data.email);
            // setAddress(data.address);
            // setPhoneno(data.phoneno);
            setImage(data.image);
            setSrc('http://localhost:8001/'+data.image)
            
            // console.log(data)
        })
            .catch(e=>console.log(e));

    });


    useEffect(()=>{
        fetch(`http://localhost:8001/${u}/notification`).then(r=>r.json()).then(data=>{
    
        setNotification(data.notification);
        })
            .catch(e=>console.log(e));

    },[]);
    function uploadCard(){
        if(!image){
            return(
                <div className="home-card container">

            <div className='row'>
                <div className='col-xl-6'>
                    <div>
                        <h4 style={{color:"rgb(114, 110, 110)", fontWeight:"800"}}>Complete your profile</h4>
                        <img src={progress} style={{ width:500 ,margin:20}}/>
                        <Link to={`/${u}/profile`} className='btn start-btn px-3' style={{margin:20}}>
                            Upload photo
                        </Link>
                        <h5 style={{color:"rgb(167, 167, 167)", fontWeight:"500",margin:20}}>Upload your photo for our face recognition system.</h5>
                    </div>
                </div>
                <div  className='col-xl-6'>

            
            
                <div>
                    <img src={upload} style={{padding:"3vh", width:400,display:'inline-block'}}/>

                </div>
            </div>
            
            
        </div>
        </div>
            );
        }
    }

    return (
        <div className='my-5 container user-select-none overflow-hidden'>
            <div className='d-flex justify-content-between align-items-center'>
                <div className='log-page-title'>
                    <TitleSVG />
                </div>
                <div>
                    <Link to='/home' className='px-3 py-1  no-underline red-clr text-decoration-none'>
                        Home
                    </Link>
                    <Link to={`/${u}/profile`} className='px-5 py-1 no-underline grey text-decoration-none'>
                        Profile
                    </Link>
                    <button className='btn start-btn px-3'
                            onClick={()=>{history.push('/login')}}>
                                logout
                    </button>
                </div>
            </div>
            {uploadCard()}
            
        <div className="home-card">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-6">
                            <h4 style={{color:"rgb(114, 110, 110)", fontWeight:"800"}}>Notifications</h4>
                            
                            {click===false?notification.length!=0?notification.slice(0,2).map(x=>{
                                return <div>
                                    <h5 style={{fontWeight:"bold", marginTop:"3vh"}} className="red-clr">{x.createdAt.slice(0,10)}</h5>
                                    <p  className="dark-blue">You visited MOT on {x.date}. A person who visited the same place has reported covid positive on {x.createdAt.slice(0,10)}. Please take adequate measures.</p>
                                </div>

                            }):<h6 style={{color:"rgb(114, 110, 110)", fontWeight:"400"}}>You have no Notifications</h6>:
                            notification.length!=0?notification.map(x=>{
                                return <div>
                                    <h5 style={{fontWeight:"bold", marginTop:"3vh"}} className="red-clr">{x.createdAt.slice(0,10)}</h5>
                                    <p  className="dark-blue">You visited MOT on {x.date}. A person who visited the same place has reported covid positive on {x.createdAt.slice(0,10)}. Please take adequate measures.</p>
                                </div>

                            }):<h6 style={{color:"rgb(114, 110, 110)", fontWeight:"400"}}>You have no Notifications</h6>
                            }

                            {click===false?<button className="btn start-btn px-3" style={{marginTop:"3vh"}} onClick={handleClick}>See All</button>:
                                    <button className="btn start-btn px-3" style={{marginTop:"3vh"}} onClick={handleClicked}>Hide</button>
                                }
                            {/* <h5 style={{color:"rgb(167, 167, 167)", fontWeight:"500", marginTop:"5vh"}}>There is no specific medicine to treat or prevent corona virus.</h5>
                            <h5 style={{color:"rgb(167, 167, 167)", fontWeight:"500"}}>Take measures to protect yourself and others.</h5> */}
                            {/* <div class="progress">
                                <div class="progress-bar" role="progressbar" style={{width: "25%"}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                            </div> */}
                            {/* <button className="btn start-btn px-3" style={{marginTop:"3vh"}}>Report corona positive</button> */}
                        </div>
                        <div className="col-xl-6">
                            <img src={notify} style={{padding:"3vh", width:400,display:'inline-block'}}/>   
                        </div>
                    </div>
                </div>
                
            </div>

            <div className="home-card">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-6">
                            <h4 style={{color:"rgb(114, 110, 110)", fontWeight:"800"}}>Stay at home quarantine</h4>
                            <h4 style={{color:"rgb(114, 110, 110)", fontWeight:"800"}}>to stop spread of COVID-19</h4>
                            <h5 style={{color:"rgb(167, 167, 167)", fontWeight:"500", marginTop:"5vh"}}>There is no specific medicine to treat or prevent corona virus.</h5>
                            <h5 style={{color:"rgb(167, 167, 167)", fontWeight:"500"}}>Take measures to protect yourself and others.</h5>
                            {/* <div class="progress">
                                <div class="progress-bar" role="progressbar" style={{width: "25%"}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                            </div> */}
                            <button 
                                    style={{marginTop:"3vh"}}
                                    type='button'
                                    className='btn start-btn red-clr'
                                    data-toggle='modal'
                                    data-target='#exampleModalCenter'
                            >
                                Report corona positive
                            </button>
                            <div
                            className='modal fade'
                            id='exampleModalCenter'
                            tabindex='-1'
                            role='dialog'
                            aria-labelledby='exampleModalCenterTitle'
                            aria-hidden='true'
                        >
                            <div
                                className='modal-dialog modal-dialog-centered'
                                role='document'
                            >
                                <div className='modal-content'>
                                    <AreuSure u={u} />
                                    
                                </div>
                            </div>
                        </div>
                        </div>
                        <div className="col-xl-6">
                            <img src={sneez} style={{padding:"3vh", width:400,display:'inline-block'}}/>   
                        </div>
                    </div>
                </div>
                
            </div>
        </div>
    );
}

export default withRouter(Home);
