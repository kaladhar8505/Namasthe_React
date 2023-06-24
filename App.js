import React from "react";
import ReactDOM from "react-dom/client";

// React Element
const Title = () => (
<h1 className="head" tabIndex={5}>
    Namasthe React using JSX!
</h1>
)

// React Component
// Class Based Component - Old 
// Functional Component - New

// React Functional Component - A Function which return some piece of JSX  is called as Functional Component

const fn = () => true;

const fn2 = () => { 
    return true 
};

// const HeadingComponent = () => {
//     return <h1>Namasthe React Functional Component</h1>
// };

// const HeadingComponent2 = () =>  <h1>Namasthe React Functional Component</h1>;

// Component Composition(Putting 1 Component inside another component)
const HeadingComponent3 = () => (
    <div id="container">
        <Title />
        <h1 className="heading">Namasthe React From Functional Compoent3</h1>
    </div>
)

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<HeadingComponent3 />);