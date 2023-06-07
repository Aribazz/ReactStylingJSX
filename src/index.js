import React from "react";
import ReactDom from "react-dom";

const date =new Date(2023,7,6,19);
//console.log(date);
const currentTime = date.getHours();
//console.log(currentTime);

let greeting; 

const decoration = {
  color : ""
}

if(currentTime < 6){
  greeting = "Good Mornings";
  decoration.color ="green";
}else if(currentTime <18){
  greeting= "Good Afternoon";
  decoration.color ="red";

}else{
  greeting = "Good Evening";
  decoration.color ="yellow";

}

ReactDom.render(<h1 className = "heading" style = {decoration}>{greeting}</h1>,
  document.getElementById("root"));
  
//Create a React app from scratch.
//Show a single h1 that says "Good morning" if between midnight and 12PM.
//or "Good Afternoon" if between 12PM and 6PM.
//or "Good evening" if between 6PM and midnight.
//Apply the "heading" style in the styles.css
//Dynamically change the color of the h1 using inline css styles.
//Morning = red, Afternoon = green, Night = blue.
