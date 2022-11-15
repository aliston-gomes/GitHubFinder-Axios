import React , {useState,useContext} from 'react'
import { GlobalContextApi } from '../ContentApi/GlobalContext';

const SeachPage = () => {
    let {onTermSubmit}  = useContext(GlobalContextApi);

    let [search ,setSearch] = useState("");

    let handleSubmit = (e)=>{
        e.preventDefault();
        onTermSubmit(search)
    }
  return (
    <section id= "search"> 
    <article>
        <header>
        <form onSubmit={handleSubmit}>
            <div className="form-group">
            <input type="text" placeholder='enter git users' value={search} onChange={e => setSearch(e.target.value)} />
            <button>search </button>
            </div>
           
        </form>
        </header>
       

       
    </article>
    </section>
  )
}

export default SeachPage