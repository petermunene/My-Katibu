import React,{useState} from "react";
import { Link } from "react-router-dom";

export default function NavBar(){
    const [showProducts,setShowProducts]=useState(false)

    return (
        <div className="logo">
                
            
            <h1 id="h1" >🌐 Planwise </h1>
            <div className="product">
                <Link id="home" to="/">Home</Link>
             <div className="product-dropdown"
                    onMouseEnter={() => setShowProducts(true)}
                    onMouseLeave={() => setShowProducts(false)}>
                <button className="btn">product</button>
                {showProducts && (
                <table className="dropdown-table "onMouseLeave={() => setShowProducts(false)}>
                    <tbody>
                        <tr>
                            <th>Core Features</th>
                            <th>more</th>
                        </tr>
                        <tr>
                            <td>personalized managements</td>
                            <td>mobile app experience</td>
                        </tr>
                        <tr>
                            <td>collaborative managements</td>
                            <td>Real-time analytics</td>
                        </tr>
                    </tbody>    
                </table>
                )}
             </div>
                <button className="btn">Resources</button>   
                <button className="btn">Pricing</button>
                <button className="btn">Blog</button>
                    
            
            </div>

        </div>
    )
    
}

