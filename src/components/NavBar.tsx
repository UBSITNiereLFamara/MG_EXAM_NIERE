import { Link } from "react-router-dom";

function NavBar(){
    return(
        <nav>
            <Link to="/">Home</Link>
            <Link to ="/About">About</Link>
            <Link to ="/Services">Services</Link>
            <Link to ="/Contact">Contact</Link>
            <Link to ="/BookRequest">Book Request</Link>
            <Link to ="/EventFeedback">Event-FeedBack</Link>
        </nav>
    );
}
export default NavBar;