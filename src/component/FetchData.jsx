import React, { useEffect } from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { starting_request,data_fetch,failure_request,fetchposts } from '../redux/actions/fetchingActions'
import axios from 'axios'
const FetchData = () => {
    const {loading,data,error}=useSelector(state=>state)
    console.log("data",data)
    const dispatch=useDispatch()
    useEffect(()=>{
        dispatch(fetchposts())

    },[])
  return (
    <div>
        <h1>Fetched Data using Lorem ipsum api(Redux)</h1>
        <div className='card-container'>
        {
            data?.text?.split(".").map((item,i)=>{
                return <div key={i} className='card'>{item}</div>
            })
        }
        </div>
       
    </div>
  )
}

export default FetchData