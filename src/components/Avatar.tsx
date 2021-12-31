import Loading from "./Loading";
import "../styles/Avatar.css";

interface Props {
    svg: string,
    loading: boolean,
    size: number
}

const Avatar = ({svg, loading, size}: Props) => {
    return(
        <div className="avatar-container" style={{width: size, height: size}}>
            <div className="Avatar" dangerouslySetInnerHTML={{__html: svg}}></div>
            {loading && <Loading size={size-20} />}
        </div>
    )
}

export default Avatar;