import React,{useState,useEffect} from "react";
import { useNavigate } from "react-router-dom";
 
export default function SignUp(){
    
    const [username ,setUser]=useState("");
    const [passWord ,setPassWord]=useState("")
    const [confirmedPassWord ,setConfirmedPassWord]=useState("")
    const [users,setUsers]=useState([])
    const [isAvailable,setIsAvailable]=useState(false)
   
    const navigate=useNavigate()

    useEffect(()=>{ fetch("http://localhost:4000/users")
        .then((res)=>res.json())
        .then((data)=>setUsers(data)) },[])
    function handleChange(name){
        const taken=users.find((user)=>user.username===name);
        setIsAvailable(!!taken)
    }
   

    function handleOnSubmit(e){
        e.preventDefault();
        if(!isAvailable){
            if(confirmedPassWord===passWord){
            
            const newUser={username,passWord,confirmedPassWord}
           
            fetch("http://localhost:4000/users",{
                method:"POST",
                body:JSON.stringify(newUser),
                headers:{"Content-Type":"application/json"}
            })
            .then(()=>{
                alert(`Successfully added ${username}`);
                navigate("/")
            })}
            else{
                alert("confirmed password doesn't match your set password")
                setPassWord("")
                setConfirmedPassWord("")
            }
        }
        else{
            alert("enter new username")
            setUser("")
            setPassWord("")
        }
    }
    
    return(
        <div className="sign-up">
            <form onSubmit={handleOnSubmit} id="sign-Up">
                <h1>Sign-Up</h1>
                <div>
                <label htmlFor="username">username : </label>
                <input className="input"type="text" placeholder="enter your prefered user name" onChange={(e)=>{setUser(e.target.value);handleChange(e.target.value)} }/>
                {isAvailable?<p style={{color:"red",fontSize:"15px"}}>This username is already taken X</p>:<p style={{color:"green",fontSize:"15px"}}>set as username ✓</p>}
                </div>
                <label htmlFor="password">password : </label>
                <input className="input"type="password" placeholder="enter password" onChange={(e)=>setPassWord(e.target.value)} />
                <label htmlFor="confirm password">confirm password : </label>
                <input className="input"type="password" placeholder="confirm password" onChange={(e)=>setConfirmedPassWord(e.target.value)} />
                <button value="submit" id="submit">submit</button>
           </form>
        </div>
    )
}