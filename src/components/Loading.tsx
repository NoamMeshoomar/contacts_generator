import LoadingPNG from "../assets/loading.png";
import "../styles/Loading.css";

interface Props {
    size: number
}

const Loading = ({size}: Props) => {
    return(
        <div className="Loading">
            <img src={LoadingPNG} width={size} alt="loading" />
        </div>
    )
}

export default Loading;