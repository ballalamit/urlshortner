import React, { useEffect, useState } from 'react'
import Input from '../Components/Input'
import axios from 'axios'
import { Link } from 'react-router-dom';

function Dashboard() {

    const [data, setData] = useState([]);
    const [visitCount, setVisitedCount] = useState(null);

    const getData = async () =>{
        const response =  await axios.get(`http://localhost:8000/url`)
        console.log(response.data.url);
        setData(response.data.url);
    }

    useEffect(()=>{
        getData();

    },[visitCount])

  return (
    <div>
        <Input getData={getData}/>
        <div>
            {
                data.map((elem)=>{
                   
                    return  <div key={elem._id}>
                        <h2>Original URL: <span>{elem.original_Url}</span> </h2>
                            
                        <p>
                        Sorted URL: <Link to={`${elem.shorted_Url}`}>
                            <span>https://localhost:3000/{elem.shorted_Url}</span>
                        </Link>
                        </p>
                        <p>Visitors: {elem.visit_Count}</p>
                   </div>
                })
            }
        </div>
    </div>
  )
}

export default Dashboard