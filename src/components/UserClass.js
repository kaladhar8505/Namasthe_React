import React from "react";

class UserClass extends React.Component{

    constructor(props){
        super(props);
        this.state= {
            userInfo: {
                name: "Dummy",
                location: "Default",
            }
        };
        console.log(this.props.name + "Child Contructor");
    }

    async componentDidMount() {
        console.log(this.props.name + "Child Component Did Mount");
        const data = await fetch("https://api.github.com/users/kaladhar8505");
        const json  = await data.json();
        this.setState({
            userInfo: json,
        });
        console.log(json);
    }

    componentDidUpdate() {
        console.log("Component Did Update");
    }

    componentWillUnmount(){
        console.log("component will Unmount");
    }
    render () {

        const { name, location, avatar_url } = this.state.userInfo;
        return (<div className="user-card">
            <img src={avatar_url}></img>

        <h2>Name: {name}</h2>
        <h3>Location: {location}</h3>
    </div>
    );
    }
}

export default UserClass;

/**
 * <----MOUNTING------>
 * Constructor (dummy data)
 * Render (dummy data)
 * <HTML dummy >
 * Component Did Mount
 *      <API Call>
 *      <this.setState>   --> State variable is updated
 * 
 * 
 * -------UPDATE----
 * 
 *      render(API data)
 *      <html (new API data>)
 *      ComponentDid Update 
 * 
 */