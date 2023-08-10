import {useState} from 'react';
export default function Search({handleCountryName,url, handleCountryUrl}){
    const[name,setName]=useState('')
    const handleSubmit=(event)=>{
        if(name.length>0)
        {
       event.preventDefault()
       handleCountryName(name.toLowerCase())
       handleCountryUrl(url+name)
       setName('')
         }
    }

    return(
        <form className='search-form'>
            <input className='search-value' type='text' placeholder=" ENTER COUNTRY NAME"  minLength={1}  value={name} required onChange={(e)=>setName(e.target.value) }></input>
            <button className='search-button' onClick={handleSubmit}>SEARCH</button>
        </form>
    )
}