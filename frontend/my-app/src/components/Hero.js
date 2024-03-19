import "./Herostyle.css";
 //import LoginButton from "./login";
 import { Link } from "react-router-dom";

function Hero (props){
    return (
        <>
        <div className={props.cName}>
            <img alt="heroImg" src={props.heroImg}/>

            <div className="hero-text">
                <h1>{props.title}</h1>
                <p>{props.text}</p>
                <Link className="login" to={"/login"}>Login</Link>
            {/* { <LoginButton/> } */}
            </div>
        </div>
        </>
    )
}

export default Hero;