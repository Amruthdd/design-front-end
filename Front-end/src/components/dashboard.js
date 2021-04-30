import React, { useEffect, useState } from'react' ;
import {Button} from 'react-bootstrap';
import {BrowserRouter as Router, Route, Switch, useHistory,Redirect,Link, withRouter} from "react-router-dom";
import TitleSVG from '../TitleSVG'

const Dashboard = (props)=>{
    const history = useHistory();
    const [name,setName] = useState(null);
    const [email,setEmail] = useState(null);
    const [address,setAddress] = useState(null);
    const [phoneno,setPhoneno] = useState(null);
    const [username,setUsername] = useState(null);
    const [details,setDetails] = useState([]);
    const [src,setSrc] = useState(null);

    const u = props.match.params.username;
    useEffect(()=>{
        fetch(`http://localhost:8001/${u}/page`).then(r=>r.json()).then(data=>{
            setName(data.name);
            setUsername(data.username);
            setEmail(data.email);
            setAddress(data.address);
            setPhoneno(data.phoneno);
            // setDetails(data);
            setSrc('http://localhost:8001/'+data.image)
            
            // console.log(data)
        })
            .catch(e=>console.log(e));

    });

    function setimage(e){
        // e.preventDefault();
        
        var data =  new FormData();
        const  image=document.querySelector('input[type="file"]').files[0];
        data.append('data',image);
        console.log(image)
        
        fetch(`http://localhost:8001/${username}/images`,{
            method:"POST",
            
            body: data
    
        }).then(r=>r.json()).then(path=>{
            console.log(path)
            setSrc('http://localhost:8001/'+path.path)
        }).catch(err=>{
            console.log(err)
        });
    }
    return (
        <div className='my-5 container user-select-none overflow-hidden'>
            <div className='d-flex justify-content-between align-items-center'>
                <div className='log-page-title'>
                    <TitleSVG />
                </div>
                <div>
                    <Link to='/home' className='px-3 py-1 no-underline red-clr'>
                        Home
                    </Link>
                    <Link to={`/${u}/profile`} className='px-5 py-1 no-underline grey'>
                        Profile
                    </Link>
                    <button className='btn start-btn px-3'
                            onClick={()=>{history.push('/login')}}>
                                logout
                    </button>
                </div>
            </div>
            {/* <div className='my-5'>
                <div className='dark-blue h5'>Semesters</div>
                <div className='d-flex my-3 sem-cards-container flex-wrap'>
                    {sem.map((semno) => {
                        point = 0;
                        {details.map((item) => {

                            if(semno === item.sem){
                                point = item.point
                            }
                        })}
                        return <SemCard data={data} semno={semno} point={point} />
                    })}
                </div>
            </div> */}
        
        
    </div>
    )
;
}
export default withRouter(Dashboard);