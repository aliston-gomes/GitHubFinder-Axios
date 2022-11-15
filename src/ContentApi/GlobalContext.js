import axios from 'axios';
import React , {useState,useEffect,createContext} from 'react';
export let GlobalContextApi = createContext();


const GlobalContextProvider = ({children})=>{
    let [user,setUser] = useState([]);
    let [loading, setLoading] = useState(false);
    let [repos, setRepos] = useState(null);
    let client_id = "Iv1.143d231ee09e42a7";
    let client_secret = "841806e1f785a3f5b463ce15d757ca4ce454fab6";

    let onTermSubmit = async term => {
        try {
            let { data } = await axios.get(`https://api.github.com/users/${term}?client_id=${client_id}&client_secret=${client_secret}`);
            setUser(data);
            let rep = await axios.get(`https://api.github.com/users/${term}/repos`);
            setRepos(rep.data)
        } catch (error) {
            console.log(error);
        }
        setLoading(false)
    };
    useEffect(() => {
        onTermSubmit("aliston-gomes")
    },[onTermSubmit])
return(
    <GlobalContextApi.Provider value={{onTermSubmit ,user,loading,repos}}>
        {children}
    </GlobalContextApi.Provider>
)
};
export default GlobalContextProvider;
