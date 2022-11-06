import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import axios from 'axios';
import ReactLoading from "react-loading";


//for chart
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip } from "chart.js"

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip)

export const SingleRepo = () => {
  const params = useParams();
  const [repo, setRepo] = useState([]);
  const [languages, setLanguages] = useState([]);
  const [loading, setLoading] = useState(false);

  //fetch single repo
  useEffect(() => {
    const singleRepoUrl = `https://api.github.com/repos/Simplyvoda/${params.id}`
    const fetchData = async () => {
      setLoading(true);
      try {
        const { data: response } = await axios.get(singleRepoUrl);
        setRepo(response);
      } catch (error) {
        console.error(error.message);
      }
      setLoading(false);
    }

    fetchData();
  }, [params]);

  //fetch languages
  useEffect(() => {
    const languageUrl = `https://api.github.com/repos/Simplyvoda/${params.id}/languages`
    const fetchData = async () => {
      setLoading(true);
      try {
        const { data: response } = await axios.get(languageUrl);
        setLanguages(response);
      } catch (error) {
        console.error(error.message);
      }
      setLoading(false);
    }

    fetchData();
  }, [params]);

  const data = {
    labels: Object.keys(languages),
    datasets: [
      {
        backgroundColor: "hsl(10, 79%, 65%)",
        hoverBackgroundColor: "hsl(186, 34%, 60%)",
        borderRadius: 8,
        data: Object.values(languages)
      }
    ]
  }
  return (
    <div className='flex justify-center items-center flex-col'>
      {
        loading && <ReactLoading type="bars" color="#FF731D" height={150} width={100}/>
      }
      {
        !loading && (
          <div className='repo-container flex justify-center items-center flex-col h-screen text-center text-2xl'>
            <h1 className="text-4xl m-6">{repo.name}</h1>
            <h2>This repo was created at: {repo.created_at} and was last updated at {repo.updated_at}</h2>
            <div className='bar-chart flex justify-center flex-col items-center m-6 space-y-4'>
              <h1>Language(s) used in repository</h1>
              <Bar data={data} height={350} width={600}/>
            </div>
            <Link to='/repos'>Go back to repos</Link>
          </div>
        )
      }

    </div>
  )
}

export default SingleRepo