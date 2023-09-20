import React from "react";
import UserClass from "./UserClass";

class About extends React.Component {
constructor(props){
    super(props);
    console.log("Parent Contructor")
}

async componentDidMount() {
    console.log("Parent Compoent Did Mount")
}

    render() {
        console.log("Parent - Render")
        return (
            <div>
                <h1>About</h1>
                <h2>This is Namaste React Web Series</h2>
                <UserClass name={"First"} location={"Bangalore"} contact={"@kaladhark"}/>
            </div>
        );
    }
}

export default About;