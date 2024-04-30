import React, { useEffect, useState } from 'react'
import {Link} from 'react-router-dom'
import { getVideoHistoryAPI } from '../Services/allAPI'

function HIstory() {
  const [videoHistory,setVideoHistory] = useState([])
  console.log(videoHistory)
  useEffect(()=>{
    getAllHistory()
  },[])
  const getAllHistory = async () => {
    try{
      const result = await getVideoHistoryAPI()
      setVideoHistory(result.data)
    }catch(err){
      console.log(err);
    }
  }
  return (
    <div className='container my-5'>
      <div className="d-flex justify-content-between">
        <h3>Watch History</h3>
        <Link to={'/home'}> Back to Home</Link>
      </div>
      <table className='table my-5'>
        <thead>
          <tr>
            <th>#</th>
            <th>Caption</th>
            <th>Video Link</th>
            <th>Time Stamp</th>
            <th><i className="fa-solid fa-ellipsis-vertical"></i></th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>Avesham trailer</td>
            <td><a href="https://www.youtube.com/embed/L0yEMl8PXnw?autoplay=1" target='_blank'>https://www.youtube.com/embed/L0yEMl8PXnw?autoplay=1</a></td>
            <td>22/4/2024</td>
            <td><button className="btn"><i className="fa-solid fa-trash text-danger"></i></button></td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

export default HIstory