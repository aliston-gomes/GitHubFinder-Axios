import React ,{useContext} from 'react'
import { GlobalContextApi } from '../ContentApi/GlobalContext'


const Sidebarcom = () => {
    let {loading,user} = useContext(GlobalContextApi);
    let {avatar_url,login,company,location,followers,bio,following,email} = user;
   
  return (
    <div className="sidebar">
      <header>
        <figure>
          <img src={user.avatar_url} alt={login} />
        </figure>
        <h2>{login} </h2>
        <p>{bio} </p>
      </header>
      <main>
        <div>
          <span>{following} Following</span>
          <span>{followers} Followers</span>
          <p>Company:{company} </p>
          <p>Location{location} </p>
          <p>Email:{email} </p>
        </div>
      </main>
    </div>
  );
}

export default Sidebarcom