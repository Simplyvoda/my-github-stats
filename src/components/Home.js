import React from 'react';
import ReactLoading from 'react-loading';
// import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export const Home = ({ data, loading }) => {
  const navigate = useNavigate();

  return (
    <div>
      {loading &&  <ReactLoading type="bars" color="#FF731D" height={150} width={100} /> }
      { !loading && 
      (<article className="home-container flex justify-center items-center flex-col h-screen space-y-6">
      <h1>Hey! Welcome to {data.login}'s Github stats ⭐⭐</h1>
      <div className='user-card space-y-2 text-center'>
        <img className="avatar-image" src={data.avatar_url} alt="Github Avatar" />
          <div className='home-text p-6'>
            <div className='flex justify-around items-center flex-row'>
              <div className='flex flex-col justify-center items-center'>
                <span>{data.followers}</span>
                Followers
              </div>
              <div className="flex flex-col justify-center items-center">
                <span>{data.following}</span>
                Following
              </div>
            </div>
            <h1>I'm {data.name} a Front End Developer from {data.location}</h1>
            <h2>I enjoy working with technologies like ReactJs, MongoDb, Express, NodeJs, HTML, CSS, Tailwind and BootStrap</h2>
            <h3>I have a total of {data.public_repos} repositories which include projects written in languages and technologies listed above, Click the button below to check them out ! </h3>
          </div>
        <button className="home-button mb-2" onClick={()=> navigate('/repos')}>See More</button>
      </div>
      </article>)}
    </div>

  );
}

export default Home