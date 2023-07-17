#Namasthe React

# Parcel
   - Dev Build
   - Local Server
   - HMR = Hot Module Replacement (If we change anything and save it it automatically refreshes our page)- This is being done by parcel.
   - File Watching Algorithm - Written in C++
   - Caching - Faster Builds
   - Image Optimization
   - Minification
   - Bundling
   - Compress
   - Consistent Hashing
   - Code Splitting
   - Differential Bundling - To support older browsers
   - Diagnostic
   - Error Handling
   - HTTPs
   - Tree Shaking - Remove unused code
   - Different dev and prod bundles 

# Namasthe Food

/**
 * Header
 *  - Logo
 *  - Nav Items
 * Body
 *  - Search
 *  - Restaurant Container
 *      - RestaurantCard
 *          - Img
 *          - Name of Rest, Star Rating, cuisine, delivery time
 * Footer
 *  - Copyright
 *  - Address
 *  - Contact
 */

 Two types of Export/Import

 - Default Export/Import

 export default Component
 import Component from "path";


 Named Export/Import

 export const Component;
 import {Component} from "path"; 

 # React Hooks
  - Normal JS utility functions
    - useState() - Super powerful State variable in react
    - useEffect()

    // creating a useState
    const [listOfRestaurants] = useState();
    // Normal JS Variable
    let listOfRestaurants;

# Render
   - Whenever a state variable updates react re-renders the component
   - The logic of updating the compoent is also called as re-rendering

# UseState 
const arr = useState(resList);
const [listOfRestaurants, setListOfRestaurants] = arr;

# 2 Types Routing in web apps
   - Client Side Routing
   - Server Side Routing