import { useContext } from "react";
import { Context } from "../App";
import ContactsList from "./ContactsList";
import "../styles/RightContent.css";

const RightContent = () => {
    const {seed} = useContext(Context);

    return(
        <div className="RightContent">
            <ContactsList />
        </div>
    )
}

export default RightContent;