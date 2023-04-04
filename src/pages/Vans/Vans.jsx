import React from "react"
import { Link,useSearchParams,useLoaderData } from "react-router-dom"
import { getVans } from "../../Api"

export function Loader(){
    return getVans()
}

export default function Vans() {
    const [searchParams,setSearchParams] = useSearchParams()
    // const [vans, setVans] = React.useState([])
    // const [loading , setLoading] = React.useState(false)

    const typeFilter = searchParams.get("type")

    const vans = useLoaderData()
    

    const displayedVans = typeFilter ? 
                        vans.filter(vanObj => vanObj.type===typeFilter) :
                        vans

    const vanElements = displayedVans.map(van => (
        <div key={van.id} className="van-tile">
            <Link 
                to={`/vans/${van.id}`} 
                state={{ 
                    search: `?${searchParams.toString()}` ,
                    type : typeFilter
                }}
            >
                <img src={van.imageUrl} alt="yo"/>
                <div className="van-info">
                    <h3>{van.name}</h3>
                    <p>${van.price}<span>/day</span></p>
                </div>
                <i className={`van-type ${van.type} selected`}>{van.type}</i>
            </Link>
        </div>
    ))

    // function handleFilterChange(key , value){
    //     setSearchParams(prevParams => {
    //         if(value===null) {
    //             prevParams.delete(key)
    //         } else {
    //             prevParams.set(key,value)
    //         }
    //         return prevParams
    //     })
    // }
    // if (loading) { //early return 
    //     return <h1>Loading...dum dum</h1>
    // }
    return (
        <div className="van-list-container">
            <h1>Explore our van options</h1>
            <div className="van-list-filter-buttons">
                {/* <button onClick={setSearchParams({type:"simple"})} className="van-type simple">Simple</button> */}
                {/* <button onClick={setSearchParams({type:"rugged"})} className="van-type luxury">Rugged</button> */}
                {/* <button onClick={setSearchParams({type:"luxury"})} className="van-type rugged">Luxury</button> */}
                {/* <button onClick={setSearchParams({})} className="van-type clear-filters">Clear Filters</button> */}
                {/* <button onClick={handleFilterChange("type" , "simple" )}>Simple</button>
                <button onClick={handleFilterChange("type" , "luxury" )}>luxury</button> */}
                <Link 
                    to="?type=simple" 
                    className={`van-type simple ${typeFilter==="simple" && "selected"}`}
                >Simple</Link>
                <Link 
                    to="?type=rugged" 
                    className={`van-type luxury ${typeFilter==="rugged" && "selected"}`}
                >Rugged</Link>
                <Link 
                    to="?type=luxury" 
                    className={`van-type rugged ${typeFilter==="luxury" && "selected"}`}
                >Luxury</Link>
                {typeFilter && <Link to="." className="van-type clear-filters">Clear filters</Link> }
            </div>
            <div className="van-list">
                {vanElements}
            </div>
        </div>
    )
}