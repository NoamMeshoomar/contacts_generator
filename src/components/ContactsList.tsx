import { useContext } from "react";
import { Context } from "../App";
import Avatar from "./Avatar";
import Contact from "./Contact";
import "../styles/ContactsList.css";

const ContactsList = () => {
    const {seed, draftSVG: {svg, loading}, contacts} = useContext(Context);

    return(
        <div className="ContactsList">
            <div className="contacts">
                {seed !== "" && <div className="Contact draft">
                    <Avatar svg={svg} loading={loading} size={60} />
                    <div className="info">
                        <h3>{seed}</h3>
                    </div>
                </div>}
                { contacts.map((contact, index) => <Contact key={index} contact={contact} />) }
            </div>
        </div>
    )
}

export default ContactsList;