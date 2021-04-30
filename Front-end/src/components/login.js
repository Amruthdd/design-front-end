import React,{useEffect,useState} from'react' ;
import {BrowserRouter as Router, Route, Switch, useHistory,Redirect, withRouter, Link} from "react-router-dom";
import TitleSVG from '../TitleSVG'

const Login = ()=>{
 const history = useHistory();
    
    function Log(e){
        e.preventDefault();
        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;
        fetch(`http://localhost:8001/login`,{
            method:"POST",
            headers:{
              'Content-Type':'application/json'
            },
            body:JSON.stringify({
                username:username,
                password:password
               

          
    
              })
            })

    .then(r=>{
        if(r.status == 200){
            history.push(`/${username}/page`);
        }
    }).catch(err=>{
        console.log(err)
    });
        
        
    }


    return(
        <div className='log-page user-select-none overflow-hidden min-vh-100 log-bg'>
            <div className='mx-auto m-4 log-page-title'>
                <TitleSVG />
            </div>
            <div className='row justify-content-center ' >
                <div className='col-12 col-md-6 order-md-2 '>
                    <div className='d-flex justify-content-center w-75'>
                        <div className='dark-blue-text-active'>LogIn</div>
                        <div className='dark-blue-text'>
                            <Link to='/signup' draggable='false'>
                                SignUp
                            </Link>
                        </div>
                    </div>
                    <div className='mx-auto py-4 log-box-main'>
                        <form
                            className='mx-auto form-group col-10'
                            onSubmit={(e)=>{Log(e)}}
                        >
                            <div className='py-4'>
                                <input
                                    className='form-control px-3 mb-4'
                                    type='text'
                                    placeholder='Username'
                                    name='username'
                                   
                                    id="username"
                                    required
                                    // onChange={(e) => {
                                    //     setUsername(e.target.value);
                                    // }}
                                ></input>
                                <input
                                    className='form-control px-3 mt-4'
                                    type='password'
                                    placeholder='Password'
                                    name='password'
                                    id="password"
                                    required
                                    // onChange={(e) => {
                                    //     setPassword(e.target.value);
                                    // }}
                                ></input>
                            </div>
                            <div className='my-2'>
                                <button
                                    className='btn mx-auto start-btn d-block col-6'
                                    type='submit'
                                >
                                    Sign in
                                </button>
                                <Link
                                to="/"
                                    style={{
                                        color: "red",
                                        textAlign: "center",
                                        fontSize: 12,
                                    }}
                                    className="d-flex justify-content-center my-3"
                                >
                                   {"<"} Back to Home
                                </Link>
                            </div>
                        </form>
                    </div>
                    {/* <div className='text-center m-4 onboarding-desc'>
                        Don't have an account?&nbsp;
                        <Link to='/signup' draggable='false'>
                            Sign up
                        </Link>
                    </div> */}
                </div>
                
            </div>
        </div>
        // <div>
        //     <form onSubmit={(e)=>{Log(e)}}>
        //         <input type="text" name="username" id="username" placeholder="enter username"/>
        //         <input type="password" name="password" id="password" placeholder="enter password"/>
        //         <button type="submit">LOGIN</button>
        //     </form>

        //     dont have an account .<Link to="/signup">SIGNUP</Link>
        // </div>
    );

}


export default withRouter(Login);