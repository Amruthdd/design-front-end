import React, { useState, useEffect } from "react";
import { Link, Redirect } from "react-router-dom";
// import Axios from "axios";
import Select from "react-select";
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';


function AreuSure(props) {
    const [activity, setActivity] = useState("");
    const [prize, setPrize] = useState("");
    const [level, setLevel] = useState("");
    const [category, setCategory] = useState("");
    const [access, setAccess] = useState();
    const [message, setMessage] = useState("");
    const [details, setDetails] = useState([]);
    const [point, setPoint] = useState(0);
    const [date, onDate] = useState(new Date());

    const [src,setSrc] = useState(null);
    const u = props.u;

    

    

    // useEffect(() => {
    //     Axios.get(`http://localhost:8001/${user}/${semR}/activity`, {
    //         headers: {
    //             "x-access-token": localStorage.getItem("token"),
    //         },
    //     }).then((response) => {
    //         setDetails(response.data);
    //         // console.log(response.data);
    //     });
    // }, []);
    

    // const uploadDetails = (e) => {
        

        
        
        
    //     console.log(point);

    //     var certificatedata = new FormData();

    //     const image = document.querySelector('input[type="file"]').files[0];

    //     // certificatedata.append("username", user);
    //     // certificatedata.append("sem", semR);
    //     certificatedata.append("title", activity);
    //     certificatedata.append("category", category.value);
    //     certificatedata.append("level", level.value);
    //     certificatedata.append("prize", prize.value);
    //     certificatedata.append("point", point);
    //     certificatedata.append("verify", false);
    //     certificatedata.append("certificatedata", image);

    //     fetch(`http://localhost:8001/certi/activity`, {
    //         method: "POST",
    //         headers: {
    //             "x-access-token": localStorage.getItem("token"),
    //         },
    //         body: certificatedata,
    //     })
    //         .then((r) => {
    //             if (r.status == 200) {
    //                 alert("Certificate updated successfully");
    //             } else if (r.status == 422) alert("Invalid File format");
    //             else if (r.status == 401) alert("Authentication error");
    //         })
    //         .catch((err) => console.log(err));

    //     Axios.post(
    //         `http://localhost:8001/activity`,
    //         {
    //             username: user,
    //             sem: semR,
    //             activity: activity,
    //             category: category.value,
    //             prize: prize.value,
    //             level: level.value,
    //         },
    //         {
    //             headers: {
    //                 // 'Content-Type' :"application/json",
    //                 "x-access-token": token,
    //             },
    //         }
    //     ).then((response) => {
    //         console.log(response);

    //         if (response.data.auth) {

    //             localStorage.setItem("token", response.data.token);
    //             setAccess(true);

    //         } else {

    //             setAccess(false);
    //             setMessage(response.data);

    //         }
    //     });
    // };
    // if (!token) {
    //     return <Redirect to='/login' />;
    // }

    function DateSet(){
        // e.preventDefault();
        
            console.log(date);
            fetch(`http://localhost:8001/${u}/status`,{
                method:"POST",
                
                body: JSON.stringify({
                    status:"Positive",
                    date:date
                })
        
            }).then(r=>r.json()).then(path=>{
                console.log(path)
                setSrc('http://localhost:8001/'+path.path)
            }).catch(err=>{
                console.log(err)
            });
        
        
        
        
    }

    return (
        <div className='mx-5 my-3'>
            <h5 className='dark-blue my-3'>Enter date</h5>
            <form className='form-group'onSubmit={(e)=>{
                       DateSet(e)
                   }}  >
                
                <div class='form-group pt-2 d-flex justify-content-center'>
                    <Calendar
                        onChange={onDate}
                        value={date}
                    />
                </div>
                <div className='my-2 d-flex justify-content-end align-items-center'>
                    <div>
                        <button
                            type='button'
                            class='close btn ml-auto py-3 px-4'
                            data-dismiss='modal'
                            aria-label='Close'
                        >
                            Cancel
                        </button>
                    </div>
                    <div>
                        <button type="submit"
                            className='btn start-btn red-clr col-6'
                            
                        >
                            Submit
                        </button>
                        {/* <button
                            className='btn start-btn orange-btn col-6'
                            type='submit'
                        >
                            Submit
                        </button> */}
                    </div>
                </div>
                <p
                    style={{
                        color: "red",
                        fontSize: 12,
                        textAlign: "center",
                    }}
                >
                    {message}
                </p>
            </form>
            {/* <div style={{ textAlign: "center" }}>
                {details.map((item) => (
                    <div key={item.id}>
                        <p>{item.activity}</p>
                        <p>{item.sem}</p>
                    <p>{item.prize}</p>
                    <p>{item.level}</p>
                    </div>
                ))}
            </div> */}
        </div>
    );
}

export default AreuSure;
