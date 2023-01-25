import { useState } from 'react';

function App() {
  const [color, setColor] = useState('#000000');
  const[active,setActive] = useState(0);

  
  const changeColor = ()=>{
    setActive(setInterval(getRandomColor, 500));
  }
  const StopChangeColor = ()=>{
     clearInterval(active);
   
 }
  const getRandom = ()=>{
     return Math.floor(Math.random() * 255);
   }
   const getRandomColor=()=>{
     let localColor ='#000000';
     let red = getRandom();
     let green = getRandom();
     let blue = getRandom();
     localColor = `rgb(${red},${green},${blue})`;
     setColor(convert(localColor));
     
   }
    const convert  = (rgb)=> {
        rgb = rgb.match(/^rgb\((\d+),\s*(\d+),\s*(\d+)\)$/);
      
        function hexCode(i) {
            return ("0" + parseInt(i).toString(16)).slice(-2);
        }
        return "#" + hexCode(rgb[1]) + hexCode(rgb[2])
                + hexCode(rgb[3]);
    }
    
  return (
    <div  >
      <br/>
    <center>
    <div style={{ width: '255px', height: '255px', backgroundColor: color, border: '2px solid black'  }}
    onMouseOver={changeColor}
    onMouseLeave={StopChangeColor}
    onDoubleClick={StopChangeColor}></div>
    </center>  
    </div>
  );
}

export default App;
