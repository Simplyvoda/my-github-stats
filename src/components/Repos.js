import React from 'react'
import { useState } from 'react';
import ReactLoading from "react-loading";
import { Link } from 'react-router-dom';

import {Pagination} from './Pagination';


export const Repos = ({ data, loading}) => {
    // for pagination
  const [currentPage, setCurrentPage] = useState(1);
  const reposPerPage = 6;
  const lastPostIndex = currentPage - reposPerPage;
  const firstPostIndex = lastPostIndex - reposPerPage;
  const currentPosts = data.slice(firstPostIndex, lastPostIndex)
 
    return (
        <div className='repo-container flex justify-center items-center flex-col h-screen'>

            {loading && <ReactLoading type="bars" color="#FF731D" height={150} width={100} />}
            {!loading && (
            <div>
                
             <h1 className="repo-header text-3xl p-6 m-4">Simplyvoda's repositories</h1>
              {currentPosts.map((repo) =>
                    <li key={repo.id} className="repo-list">
                        <Link to={`/repos/${repo.name}`}>
                            <button>{repo.name}</button>
                        </Link>
                    </li>)}
           </div>
            )}
            <Pagination
            totalPosts = {data.length}
            reposPerPage = {reposPerPage}
            setCurrentPage = {setCurrentPage}
            />
            <div className='mt-6 text-2xl'>
            <Link to='/'>Back Home...</Link>
            </div>
        </div>
    )
}

export default Repos