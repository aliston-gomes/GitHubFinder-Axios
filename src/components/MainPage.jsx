import React, { Fragment,useContext } from 'react'
import SeachPage from './SeachPage'
import { GlobalContextApi } from '../ContentApi/GlobalContext';
import Moment from 'react-moment';

const MainPage = () => {
  let { repos } = useContext(GlobalContextApi)
  
  return (
    <section className='mainpage'>
        <article>
            <header>
            <SeachPage/>
        </header>
        <main>
          {repos === null ? ("Loading") : (<Fragment>
            {repos.map(repo => {
              return (
                <div className="container" key={repo.id}>
                  <h1>{repo.name}</h1>
                  <p className='desc'>{repo.description===null?"no description":repo.description.slice(0,20)+"..."}</p>
                  <p className="repo_content">
                    <span>{repo.language}</span>
                    <span>{repo.visibility}</span>

                    <span>
                      <Moment fromNow>{repo.created_at}</Moment>
                    </span>
                  </p>
                  <p className='btn_block'>
                    <a href={repo.clone_url}>Clone</a>
                    <a href={repo.downloads_url}>Downloads</a>
                    <a href={repo.html_url} target="_blank">
                      {" "}
                      View Github repo
                    </a>
                  </p>
                </div>
              );
            })}
          </Fragment>)}
        </main>
        </article>
    </section>
  )
}

export default MainPage