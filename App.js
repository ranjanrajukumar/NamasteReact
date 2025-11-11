import React from "react";
import ReactDOM from "react-dom/client";


// React Element => object => HTML (UI)

 const heading = React.createElement("h1", { id: "title" }, "This React is React Element");

// JSX => JavaScript XML
// JSX is a syntactic sugar over React.createElement()
// Babel is a transpiler which converts JSX to React.createElement()
// Babel is a JavaScript compiler that converts modern JavaScript code into a backward-compatible version of JavaScript that can run in older browsers or environments.
// JSX allows us to write HTML-like syntax in our JavaScript code, which makes it easier to create and visualize the structure of our UI components.  


// JSX (transpiled before  it reaches the JS engine) -PARCEL - Bebel 

// React.createElement("h1", { id: "title" }, "This is JSX Heading");
// JSX => React.createElement() => Object => HTML (UI)

// JSX Code
const title1 = (
<h1 id="title">
  This is JSX Heading
  </h1>
  );

  // React Component

  // Functional Component -NEW 
  // class based component -OLD

  const num1 = 10;
  
// Functional Component
const Title = () => (
  <div>
  {num1}
  {title1}
    <h1 id="title1"> 
      AAAAA
    </h1>
  </div>

);

const HeadingComponent1 = () => {
  return (
    <div>
      {Title()}
     <Title/>
    <h1 id="title"> 
      This is a Functional Component Heading
    </h1>
    </div>
  );
}




const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<HeadingComponent1 />);

