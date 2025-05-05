import React,{useState,useEffect} from "react";
import { useNavigate } from "react-router-dom";
export default function Login(){
    const [username ,setUser]=useState();
    const [passWord ,setPassWord]=useState()
    const [users,setUsers]=useState()
    const [isAvailable,setIsAvailable]=useState(true)
   
    const navigate=useNavigate()

    useEffect(()=>{ fetch("http://localhost:4000/users")
        .then((res)=>res.json())
        .then((data)=>setUsers(data)) },[])




        function handleOnSubmit(){
            users.map((user)=>{
                if(user.username===username&&user.passWord===passWord){
                    navigate("/")
                }
                else{
                    setIsAvailable(false)
                    
                }
            })
        }

    return(
        <div className="sign-up">
        <form onSubmit={handleOnSubmit} id="sign-Up">
            <h1>Login</h1>
            {!isAvailable&&(<p style={{fontSize:"15px",color:"red"}}>wrong username or password</p>)}
            
            
            <label htmlFor="username">username : </label>
            <input className="input"type="text" placeholder="enter your prefered user name" onChange={(e)=>{{setUser(e.target.value);handleChange(e.target.value)} }}/>
            <label htmlFor="password">password : </label>
            <input className="input"type="password" placeholder="enter password" onChange={(e)=>{setPassWord(e.target.value);handleChange(e.target.value)}} />
            <button value="submit" id="submit">submit</button>
       </form>
    </div>
    )
}