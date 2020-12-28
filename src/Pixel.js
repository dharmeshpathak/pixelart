import React,{useState} from 'react'
import "./pixel.css";
 function Pixel(props) {
    const {selectedColor} = props;
    const [pixelColor, setPixelColor] = useState("#fff")
  const [oldColor, setOldColor] = useState(pixelColor)
  const [canChangeColor, setCanChangeColor] = useState(true)
   
  function applyColor(){
       setPixelColor(selectedColor);
       setCanChangeColor(false);
   }
   function changeColorOnHover(){
       setOldColor(pixelColor);
       setPixelColor(selectedColor);
   }
  
   function resetColor(){
       if(canChangeColor){
           setPixelColor(oldColor);
       }
       setCanChangeColor(true);
   }
  return (
        <div onClick = {applyColor} className = "pixel" onMouseEnter = {changeColorOnHover} onMouseLeave = {resetColor} style ={{background:pixelColor}}>
            
        </div>
    )
}
export default Pixel;