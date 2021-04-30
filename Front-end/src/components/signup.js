import React,{useEffect,useState} from'react' ;
import {BrowserRouter as Router, Route, Switch, useHistory,Redirect, withRouter, Link} from "react-router-dom";
import TitleSVG from '../TitleSVG'

const Signup = ()=>{
    const history = useHistory();

    
    function Sign(e){
        e.preventDefault();
        
        const  name=document.getElementById('name').value;
          const  email=document.getElementById('email').value;
          const  phoneno=document.getElementById('phoneno').value;
          const  address=document.getElementById('address').value;
         
        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;
        
        fetch(`http://localhost:8001/signup`,{
            method:"POST",
            headers:{
              'Content-Type':'application/json'
            },
            body:JSON.stringify({
                username:username,
                password:password,
                name:name,
                email:email,
                address:address,
                phoneno:phoneno,

          
    
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
            <div className='row justify-content-center'>
                <div className='col-12 col-md-6 order-md-2 px-xl-5'>
                    <div className='d-flex justify-content-center  w-75'>
                        
                        <span
                            className='d-block dark-blue-text opa-50'
                            data-toggle='tooltip'
                            title='Create account for students only'
                        >
                            <Link to='/login' draggable='false'>
                                LogIn
                            </Link>
                        </span>
                        <div className='dark-blue-text-active'>SignUp</div>
                    </div>
                    <div className='mx-auto py-4 log-box-main'>
                        {/* <div className='log-title'>
                    <Link
                        to='/'
                        style={{ color: "#fff", textDecoration: "none" }}
                    >
                        <b>LogIn</b>
                    </Link>
                </div>
                <div
                    className='sign-title'
                    style={{ backgroundColor: "#fff", color: "#D92027" }}
                >
                    <b>SignUp</b>
                </div> */}
                        <form
                            className='mx-auto form-group col-10'
                            onSubmit={(e)=>{Sign(e)}}
                        >
                            <div className='py-4'>
                                <input
                                    className='form-control px-3 mb-4'
                                    type='email'
                                    placeholder='Email'
                                    id="email"
                                    name='email'
                                    // onChange={(e) => {
                                    //     setEmail(e.target.value);
                                    // }}
                                    required
                                ></input>
                                {/* <input
                                    className='form-control px-3 mb-4'
                                    type='text'
                                    
                                    placeholder='Full Name'
                                    name='fullname'
                                    // onChange={(e) => {
                                    //     setFullname(e.target.value);
                                    // }}
                                    required
                                ></input> */}
                                <input
                                    className='form-control px-3 my-4'
                                    type='text'
                                    placeholder='FullName'
                                    name='name'
                                    id="name"
                                    // onChange={(e) => {
                                    //     setUsername(e.target.value);
                                    // }}
                                    required
                                ></input>
                                <input
                                    className='form-control px-3 my-4'
                                    type='text'
                                    placeholder='Username'
                                    name='name'
                                    id="username"
                                    // onChange={(e) => {
                                    //     setUsername(e.target.value);
                                    // }}
                                    required
                                ></input>
                                <input
                                    className='form-control px-3 my-4'
                                    type='password'
                                    placeholder='Password'
                                    name='password'
                                    id="password"
                                    // onChange={(e) => {
                                    //     setPassword(e.target.value);
                                    // }}
                                    required
                                ></input>
                                {/* <Select
                                    defaultValue={currsem}
                                    onChange={setCurrsem}
                                    options={cursem}
                                /> */}
                                <input
                                    className='form-control px-3 my-4'
                                    type='text'
                                    placeholder='Address'
                                    name='address'
                                    id="address"
                                    // onChange={(e) => {
                                    //     setAddress(e.target.value);
                                    // }}
                                    // required
                                ></input>
                                <input
                                    className='form-control px-3 mt-4 mx-auto'
                                    type='tel'
                                    placeholder='Mobile Number'
                                    id="phoneno"
                                    name='phone'
                                    pattern='[5-9][0-9]{9}'
                                    // onChange={(e) => {
                                    //     setPhone(e.target.value);
                                    // }}
                                    required
                                ></input>
                            </div>
                            <div className='my-2'>
                                <button
                                    className='btn mx-auto start-btn d-block col-6'
                                    type="submit"
                                >
                                    Create account
                                </button>
                            </div>
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
                        </form>
                    </div>
                    {/* <div className='text-center m-4 onboarding-desc'>
                        Already have an account?&nbsp;
                        <Link to='/' draggable='false'>
                            Log in
                        </Link>
                    </div> */}
                </div>
                
            </div>
        </div>
        // <div>
        //     <form   onSubmit={(e)=>{Sign(e)}}>
        //         <input type="text" name="name" id="name" placeholder="enter your name"/>
        //         <input type="email" name="email" id="email" placeholder="enter your email"/>
        //         <input type="text" name="address" id="address" placeholder="enter your address"/>
        //         <input type="number"  name="phoneno" id="phoneno" placeholder="enter your phoneno"/>
        //         <input type="text" name="username" id="username" placeholder="enter your username"/>
        //         <input type="password" name="password" id="password" placeholder="enter your password"/>
               
              
            
        //         <button type="submit">SIGNUP</button>
        //     </form>
           

            
        // </div>
    );

}


export default withRouter(Signup);