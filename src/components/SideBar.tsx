import { ChangeEvent, useContext, useEffect, useState } from "react";
import useAvatarGenerator from "../hooks/useAvatarGenerator";
import { Context } from "../App";
import Avatar from "./Avatar";
import "../styles/SideBar.css";

const SideBar = () => {
    const [generateLoading, setGenerateLoading] = useState(false);
    const {seed, draftSVG, setSeed, setDraftSVG, addContact} = useContext(Context);
    const {avatar, loading} = useAvatarGenerator(seed);

    useEffect(() => {
        setDraftSVG(avatar, loading);
    }, [avatar, loading]);

    const handleAddContact = async () => {
        setGenerateLoading(true);
        const {results} = await (await fetch(`https://randomuser.me/api/?seed=${seed}`)).json();
        const { name: {first, last}, email } = results[0];
        addContact({first, last, email});
        setGenerateLoading(false);
    }

    const handleChangeSeed = (e: ChangeEvent<HTMLInputElement>) => {
        setSeed(e.target.value);
    }

    return(
        <div className="SideBar" style={generateLoading ? {opacity: .5, pointerEvents: "none"}: {}}>
            <input type="text" value={seed} placeholder="Type Username" onChange={handleChangeSeed} />
            <Avatar svg={draftSVG.svg} loading={loading} size={100} />
            <button onClick={handleAddContact} style={loading ? {opacity: .5, pointerEvents: "none"} : {}}>Create Contact</button>
        </div>
    )
}

export default SideBar;