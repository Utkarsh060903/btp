import "./Herostyle.css";
// import LoginButton from "./login";

function Hero (props){
    return (
        <>
        <div className={props.cName}>
            <img alt="heroImg" src={props.heroImg}/>

            <div className="hero-text">
                <h1>{props.title}</h1>
                <p>{props.text}</p>
            {/* { <LoginButton/> } */}
            </div>
        </div>
        </>
    )
}

export default Hero;