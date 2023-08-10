import logo from './logo.svg';
import './App.css';
import {useEffect,useState} from 'react';
import Header from './componets/header';
import Search from './componets/searchcountry';
import AddCountry from './componets/addingcountry';
function App() {
 
    const [countryurl,setCountryUrl]=useState('https://restcountries.com/v3.1/all')
    const[countryname,setCountryName]=useState('')
    const[countries,setCountries]=useState([])
    const url='https://restcountries.com/v3.1/name/'
    const data= async ()=>{
        const countrydata=await fetch(countryurl)
        const result =await countrydata.json()
    
        setCountries(result)
    }

    useEffect(  ()=>{  data() },[countryurl] )
    return(
        <div>
            <div className='nav-bar'>
            <Header/>
            <Search handleCountryName={setCountryName} url={url} handleCountryUrl={setCountryUrl}/>
            </div>
             <AddCountry  countries={countries} countryname={countryname}/>
        </div>
    )

}

export default App;
