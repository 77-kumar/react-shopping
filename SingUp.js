import React,{useState} from 'react'
import './SingUp.css'
import {useNavigate} from 'react-router-dom'

const SingUp = () => {
    const navigate=useNavigate();
    const [auth,setAuth]=useState(false);

    if(auth){
        navigate('/login')

    }
    const [data,setData]=useState({
        firstName:'',
        middleName:'',
        lastName:'',
        Email:'',
        MobileNo:'',
        Password:'',
        confirmPassword:''

    })
    const {firstName,middleName,lastName,Email,MobileNo,Password,confirmPassword}=data;

    const handler=(e)=>{
        setData({...data,[e.target.name]:[e.target.value]});
    }
    const submitHandler=(e)=>{
        e.preventDefault();
        console.log(data);
      
    }

  return (
    <div>
        <div className='card'>
            <form onSubmit={submitHandler} onClick={()=>navigate("/login")}>
                <label>firstName :</label>
                <input type='text' value={firstName} name='firstname' onchange={handler}/><br/>
                <label>middleName :</label>
                <input type='text' value={middleName} name='middleName' onchange={handler}/><br/>
                <label>lastName :</label>
                <input type='text' value={lastName} name='lastName' onchange={handler}/><br/>
                <label>Email :</label>
                <input type='text' value={Email} name='firstname' onchange={handler}/><br/>
                <label>MobileNo :</label>
                <input type='text' value={MobileNo} name='MobileNo' onchange={handler}/><br/>
                <label>Password :</label>
                <input type='text' value={Password} name='Password' onchange={handler}/><br/>
                <label>confirmPassword :</label>
                <input type='text' value={confirmPassword} name='confirmPassword' onchange={handler}/><br/>
                
                <button onSubmit={submitHandler} onClick={()=>setAuth("/login")}>submit</button>


            </form>
        </div>
      
    </div>
  )
}

export default SingUp
