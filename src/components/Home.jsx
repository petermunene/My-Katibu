import React ,{useRef}from "react";
import { useNavigate } from "react-router-dom";
import Login from "./Login";

export default function Home({cards}){
    const navigate = useNavigate()
    const scrollRef = useRef(null);

    const scrollLeft = () => {
      scrollRef.current.scrollLeft -= 300;
    };
  
    const scrollRight = () => {
      scrollRef.current.scrollLeft += 300;
    };
    function handleOnLogin(){
        setTimeout(()=>navigate("/Login"),1000)
    }
    function handleOnSignUp(){
        setTimeout(()=>navigate("/SignUp"),1000)
    }

    return(
        <div className="quote fade-in">
            <div id="planner" style={{display:"flex",gap:"400px"}}>
               <h1 id="title" >Planwise – Your Smart Life Organizer</h1>
               <div id="login" style={{display:"flex",gap:"10px",maxHeight:"100px",marginTop:"50px"}}>
                <button id="get-started" onClick={handleOnLogin}>Login</button>
                <button id="sign-up" onClick={handleOnSignUp} >Sign-Up</button>
               </div>

            </div>
            <iframe
                style={{ borderRadius: "10px", margin: "90px" }}
                width="80%"
                height="600"
                src="https://www.youtube.com/embed/hcY-2Xux2oI"
                title="Landing Video"
                frameBorder="0"
                allow="autoplay; encrypted-media"
                allowFullScreen
                ></iframe>
        
            <div>
                
                <p id="font"><i>What sets planwise apart</i></p>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" ,color:"black", }}>
                    <button className="bn"onClick={scrollLeft} style={{borderRadius:"50%", border:"none",width:"40px",height:"40px",fontSize:"25px"}}>⬅</button>
                    <button className="bn"onClick={scrollRight} style={{borderRadius:"50%", border:"none",width:"40px",height:"40px",fontSize:"25px"}}>➡</button>
                </div>
                <div className="card-scroll-wrapper" ref={scrollRef} >
                    {cards.map((card)=>(
                        <div key={card.id} className="card"  >
                            <h1>{card.title}</h1>
                            <p>{card.description}</p>
                            <span>{card.content} ➡</span>

                        </div>
                    )
                    )}
                </div>
            </div>
            
        </div>
    )
}