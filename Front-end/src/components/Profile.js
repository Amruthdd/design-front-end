import React, { useState, useEffect } from "react";
import {BrowserRouter as Router, Route, Switch, useHistory,Redirect,Link, withRouter} from "react-router-dom";
import TitleSVG from "../TitleSVG";
import { MdPerson,MdEdit } from "react-icons/md";
import "./profile.css";
import ActivityModal from "./ActivityModal";
import avatar from './images/avatar-icon.png';

function Profile(props) {
    const [details, setDetails] = useState([]);
    const [src,setSrc] = useState(null);
    const [name,setName] = useState(null);

    
    const history = useHistory();
    const u = props.match.params.username;

    useEffect(()=>{
        fetch(`http://localhost:8001/${u}/page`).then(r=>r.json()).then(data=>{
            // setName(data.name);
            // setUsername(data.username);
            // setEmail(data.email);
            // setAddress(data.address);
            // setPhoneno(data.phoneno);
            setDetails(data);
            setSrc('http://localhost:8001/'+data.image);
            
            // console.log(data)
        })
            .catch(e=>console.log(e));

    },[]);



    return (
        <div className='my-5 container user-select-none overflow-hidden'>
            <div className='d-flex justify-content-between align-items-center'>
                <div className='log-page-title'>
                    <TitleSVG />
                </div>
                <div>
                    <Link to={`/${u}/page`} className='px-3 py-1 grey no-underline text-decoration-none'>
                        Home
                    </Link>
                    <Link to={`/${u}/profile`} className='px-5 py-1 no-underline red-clr text-decoration-none'>
                        Profile
                    </Link>
                    <button className='btn start-btn px-3'
                            onClick={()=>{history.push('/login')}}>
                                logout
                    </button>
                </div>
            </div>

            <div className='my-5 justify-content-center'>
                <div className='dark-blue h5'>Profile</div>
                <div className='card-bg py-3 px-5 profile-size'>
                    <div></div>
                    <div >
                        {/* <div className='round d-flex justify-content-center align-items-center my-2 mx-3'>
                            <MdPerson size={22} />
                        </div> */}
                        <div className="d-flex justify-content-center align-items-center" >
                        {details.image ? <img className="profile-img" src={src}/>:
                        <img className="profile-img" src={avatar}/>
                        }
                        
                        
                   <div className="d-flex justify-content-center btn-posi" >
                   
                        <button
                            type='button'
                            className='btn  red-clr edit-btn'
                            data-toggle='modal'
                            data-target='#exampleModalCenter'
                        >
                            <div className=' d-flex align-item-center'>
                            <span><MdEdit size={18}/></span>
                                {/* <div>
                                    <span ></span>
                                    
                                </div> */}
                            </div>
                        </button>
               </div>
                   
                
               </div>
                        <div className='dark-blue h4 d-flex justify-content-center align-items-center'>{details.name}</div>
                    </div>
                    <div>
                   {/* <form onSubmit={(e)=>{
                       setimage(e)
                   }} encType="multipart/form-data" >
                       <label className="custom-file-upload">
                        <input  type="file" name="image" id="image"/>
                       </label>
                       
                       <button type="submit">set image</button>
                   </form> */}
               </div>
               
               

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
                                    <ActivityModal u={u} />
                                    
                                </div>
                            </div>
                        </div>

               
                    <hr></hr>

                    <div className='profile-center my-1'>
                    <div className='my-3'>
                            <span className='purple font-500'>Full Name :</span>
                            <span className='profile-form mb-4'>
                                {details.name}
                                
                            </span>
                        </div>
                        <div className='my-3'>
                            <span className='purple font-500'>User name :</span>
                            <span className='profile-form mb-4'>
                                {details.username}
                            </span>
                        </div>

                        <div className='my-3'>
                            <span className='purple font-500'>Email :</span>
                            <span className='profile-form mb-4'>
                                {details.email}
                            </span>
                        </div>

                        <div className='my-3'>
                            <span className='purple font-500'>Address :</span>
                            <span className='profile-form mb-4'>
                                {details.address}
                            </span>
                        </div>

                        <div className='my-3'>
                            <span className='purple font-500'>Phone :</span>
                            <span className='profile-form mb-4'>
                                {details.phoneno}
                            </span>
                        </div>
                        
                    </div>
                </div>
            </div>
            
                
                <button className='btn start-btn px-3'
                            onClick={()=>{history.push(`/${u}/page`)}}>
                                Back to Home
                    </button>
           
        </div>
    );
}

export default withRouter(Profile);
