import RestaurantCard from "./RestaurantCard";
import resList from "../utils/mockData";
import { useState } from "react";
const Body = () => {

    // Local State Variable - Super powerful variable -

    // creating a useState
    const [listOfRestaurants] = useState([
        {
            "data": {
              "id": "418",
              "name": "Ande Ka Funda",
              "cloudinaryImageId": "hwnvirxf8oxaubiflcag",
              "cuisines": ["North Indian"],
              "costForTwo": 10000,
              "deliveryTime": 47,
              "avgRating": "3.8",
            },
          },
          {
            "data": {
              "id": "419",
              "name": "Dominos",
              "cloudinaryImageId": "hwnvirxf8oxaubiflcag",
              "cuisines": ["North Indian"],
              "costForTwo": 10000,
              "deliveryTime": 47,
              "avgRating": "4.5",
            },
          },
          {
            "data": {
              "id": "420",
              "name": "MCD",
              "cloudinaryImageId": "hwnvirxf8oxaubiflcag",
              "cuisines": ["North Indian"],
              "costForTwo": 10000,
              "deliveryTime": 47,
              "avgRating": "4.1",
            },
          },
    ]);
    
    // Normal JS Variable
  //  let listOfRestaurants = [];
    let listOfRestaurantsJS = [
          {
            "data": {
              "id": "418",
              "name": "Ande Ka Funda",
              "cloudinaryImageId": "hwnvirxf8oxaubiflcag",
              "cuisines": ["North Indian"],
              "costForTwo": 10000,
              "deliveryTime": 47,
              "avgRating": "3.8",
            },
          },
          {
            "data": {
              "id": "419",
              "name": "Dominos",
              "cloudinaryImageId": "hwnvirxf8oxaubiflcag",
              "cuisines": ["North Indian"],
              "costForTwo": 10000,
              "deliveryTime": 47,
              "avgRating": "4.5",
            },
          },
          {
            "data": {
              "id": "420",
              "name": "MCD",
              "cloudinaryImageId": "hwnvirxf8oxaubiflcag",
              "cuisines": ["North Indian"],
              "costForTwo": 10000,
              "deliveryTime": 47,
              "avgRating": "4.1",
            },
          },
    ];
    return (
        <div className="body">
            <div className="filter">
                <button 
                    className="filter-btn" 
                    onClick={() => {
                    // Filter Logic here
                    listOfRestaurants = listOfRestaurants.filter(res => res.data.avgRating > 4
                        );
                        console.log(listOfRestaurants);
                    }}              
                >Top Rated Restaurants</button>
            </div>
            <div className="res-container">
                {
                    listOfRestaurants.map((restaurant) => (
                        <RestaurantCard key={restaurant.data.id} resData={restaurant} />
                    ))
                }
            </div>

        </div>
    );
};
export default Body;