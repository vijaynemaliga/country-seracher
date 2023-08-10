export default function AddCountry({countries,countryname}){
    console.log(countries)
    const desiredCountry=countries.filter((value) =>{
        let officalName=value.name.official
        officalName=officalName.toLowerCase()
        if(officalName.includes(countryname))
        return true
        else
        return false
    } )
    
   return(
        <div className="country-list">
            { 
              desiredCountry.map((value)=>{
                    return <div className="country">
                  <img src={value.flags.png}></img>
                  <ul>
                     <li> COUNTRY   &nbsp; :  &nbsp;{ value.name.official}</li>
                     <li> POPULATION &nbsp;:  &nbsp;{ value.population.toLocaleString()}</li>
                     <li> CONTIENET &nbsp; :  &nbsp;{ value.region}</li>
                  </ul>
                 </div>
                    
                })}
        </div>
   )
}