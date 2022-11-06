import React, { useEffect, useState } from "react";
import axios from "axios";
import { Route, Routes } from 'react-router-dom'
import { Home } from "./components/Home";
import { Repos } from "./components/Repos";
import { SingleRepo } from "./components/SingleRepo";
import { ErrorPage } from "./components/ErrorPage";

function App() {
  const [repoData, setRepoData] = useState([]);
  const [userData, setUserData] = useState([]);
  const [loading, setLoading] = useState(true);
  

  useEffect(() => {
    const fetchData = async () =>{
      setLoading(true);
      try {
        const {data: response} = await axios.get("https://api.github.com/users/Simplyvoda");
        setUserData(response);
      } catch (error) {
        console.error(error.message);
      }
      setLoading(false);
    }

    fetchData();
  }, []);

  useEffect(() => {
    const fetchData = async () =>{
      setLoading(true);
      try {
        const {data: response} = await axios.get("https://api.github.com/users/Simplyvoda/repos");
        setRepoData(response);
      } catch (error) {
        console.error(error.message);
      }
      setLoading(false);
    }

    fetchData();
  }, []);

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home data={userData} />} />
        <Route path="repos" element={<Repos data={repoData} loading={loading}/>} />
        <Route path="repos/:id" element={<SingleRepo />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </div>
  );
}

export default App;
