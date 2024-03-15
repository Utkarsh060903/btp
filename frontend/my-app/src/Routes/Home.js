import Hero from "../components/Hero";
import Navbar from "../components/Navbar";

function Home (){
    return (
        <>
        <Navbar/>
        <Hero
        cName = "hero"
        heroImg ="https://admissions.lnmiit.ac.in/assets/img/gallery/big/LNMIIT%20VIEW.jpg"
        title = "Book your stay at LNMIIT"
        text = "login with your college credentials"
        buttonText = "LOGIN"
        url = "/"
        btnClass = "show"
        />
        </>
    )
}

export default Home;

