import RestaurantCard from "./RestaurantCard";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
const Body = () => {

    // Local State Variable - Super powerful variable
    const [listOfRestaurants, setListOfRestaurants] = useState([]);
    const [filteredRestaurant, setFilteredRestaurant] = useState([]);
    const[searchText, setSearchText] = useState("");


    // Whenever state variable update, react triggers a reconciliation cycle(re-renders the component)
    console.log("Body rendered")

    useEffect(() => {
        console.log("useEffect Called");
        fetchData();
    }, []);

    const fetchData = async() => {
        const data =await fetch(
            "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9895552&lng=77.71265710000002&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
            );

            const json  = await data.json();
            console.log(json);
            // Optional Chaining
            setListOfRestaurants( json?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
            setFilteredRestaurant(json?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    };

    const onlineStatus = useOnlineStatus();

    if(onlineStatus === false) 
    return (
        <h1>
            Looks like you're offline!! Please check your internet connection;
        </h1>
        );

    return listOfRestaurants.length === 0 ? <Shimmer /> : (
        <div className="body">
            <div className="filter">
                <div className="search">
                    <input 
                        type="text" 
                        className="search-box" 
                        value = {searchText} 
                        onChange={(e) => {
                            setSearchText(e.target.value);
                    }}
                    />
                    <button onClick={() => {
                        // Filter the restaurant cards and update the UI
                        // search Text
                        console.log(searchText);
                            const filteredRestaurant = listOfRestaurants.filter((res) => res.data.name.toLowerCase().includes(searchText));
                            setFilteredRestaurant(filteredRestaurant);
                    }}>Search</button>
                </div>
                <button 
                    className="filter-btn" 
                    onClick={() => {
                    // Filter Logic here
                    const filteredList = listOfRestaurants.filter(res => res.data.avgRating > 4
                        );
                        setListOfRestaurants(filteredList);
                    }}              
                >Top Rated Restaurants</button>
            </div>
            <div className="res-container">
                {
                    filteredRestaurant.map((restaurant) => (
                        <Link
                            key={restaurant?.info.id}
                            to={"/restaurants/" + restaurant?.info.id}
                        >
                        <RestaurantCard resData={restaurant?.info} />
                        </Link>
                    ))
                }
            </div>

        </div>
    );
};
export default Body;