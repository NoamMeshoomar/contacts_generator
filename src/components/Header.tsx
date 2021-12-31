import { useContext } from "react";
import { Context } from "../App";
import "../styles/Header.css";

const Header = () => {
    const {contacts} = useContext(Context);

    return(
        <div className="Header">
            <h1>Generated Contacts ({contacts.length})</h1>
        </div>
    )
}

export default Header;