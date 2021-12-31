import { useReducer, createContext } from "react";
import Header from "./components/Header";
import SideBar from './components/SideBar';
import RightContent from './components/RightContent';
import './App.css';

const INITIAL_STATE = {
    seed: "",
    draftSVG: {svg: "", loading: false},
    contacts: [],
    setSeed: (seed: string) => {},
    setDraftSVG: (svg: string, loading: boolean) => {},
    addContact: (contact: object) => {}
}

export const Context = createContext(INITIAL_STATE);

const reducer = (state: any, action: any) => {
    switch(action.type) {
        case "UPDATE_SEED":
            return {...state, seed: action.payload}
        case "UPDATE_DRAFT_SVG":
            return {...state, draftSVG: {svg: action.payload.svg, loading: action.payload.loading}}
        case "ADD_CONTACT":
            return {...state, contacts: [{image: state.draftSVG.svg, username: state.seed, ...action.payload}, ...state.contacts]}
        default:
            throw new Error();
    }
}

const App = () => {
    const [state, dispatch] = useReducer(reducer, INITIAL_STATE);

    const setSeed = (seed: string) => {
        dispatch({type: "UPDATE_SEED", payload: seed});
    }

    const setDraftSVG = (svg: string, loading: boolean) => {
        dispatch({type: "UPDATE_DRAFT_SVG", payload: {svg, loading}});
    }

    const addContact = (contact: object) => {
        dispatch({type: "ADD_CONTACT", payload: contact});
        dispatch({type: "UPDATE_SEED", payload: ""});
        dispatch({type: "UPDATE_DRAFT_SVG", payload: {svg: "", loading: false}});
    }

    return (
        <Context.Provider value={{
            ...state,
            setSeed,
            setDraftSVG,
            addContact
        }}>
            <div className="App">
                <Header />
                <div style={{display: "flex", justifyContent: "center", alignItems: "center"}}>
                    <SideBar />
                    <RightContent />
                </div>
            </div>
        </Context.Provider>
    );
}

export default App;