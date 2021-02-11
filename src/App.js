import './App.css';
import arrow from './next.png';

function App() {
  function colors(){
    let colorslist = [
  "AliceBlue",
  "AntiqueWhite",
  "Aqua",
  "Aquamarine",
  "Azure",
  "Beige",
  "Bisque",
  "Black",
  "BlanchedAlmond",
  "Blue",
  "BlueViolet",
  "Brown",
  "BurlyWood",
  "CadetBlue",
  "Chartreuse",
  "Chocolate",
  "Coral",
  "CornflowerBlue",
  "Cornsilk",
  "Crimson",
  "Cyan",
  "DarkBlue",
  "DarkCyan",
  "DarkGoldenRod",
  "DarkGray",
  "DarkGrey",
  "DarkGreen",
  "DarkKhaki",
  "DarkMagenta",
  "DarkOliveGreen",
  "DarkOrange",
  "DarkOrchid",
  "DarkRed",
  "DarkSalmon",
  "DarkSeaGreen",
  "DarkSlateBlue",
  "DarkSlateGray",
  "DarkSlateGrey",
  "DarkTurquoise",
  "DarkViolet",
  "DeepPink",
  "DeepSkyBlue",
  "DimGray",
  "DimGrey",
  "DodgerBlue",
  "FireBrick",
  "FloralWhite",
  "ForestGreen",
  "Fuchsia",
  "Gainsboro",
  "GhostWhite",
  "Gold",
  "GoldenRod",
  "Gray",
  "Grey",
  "Green",
  "GreenYellow",
  "HoneyDew",
  "HotPink",
  "IndianRed",
  "Indigo",
  "Ivory",
  "Khaki",
  "Lavender",
  "LavenderBlush",
  "LawnGreen",
  "LemonChiffon",
  "LightBlue",
  "LightCoral",
  "LightCyan",
  "LightGoldenRodYellow",
  "LightGray",
  "LightGrey",
  "LightGreen",
  "LightPink",
  "LightSalmon",
  "LightSeaGreen",
  "LightSkyBlue",
  "LightSlateGray",
  "LightSlateGrey",
  "LightSteelBlue",
  "LightYellow",
  "Lime",
  "LimeGreen",
  "Linen",
  "Magenta",
  "Maroon",
  "MediumAquaMarine",
  "MediumBlue",
  "MediumOrchid",
  "MediumPurple",
  "MediumSeaGreen",
  "MediumSlateBlue",
  "MediumSpringGreen",
  "MediumTurquoise",
  "MediumVioletRed",
  "MidnightBlue",
  "MintCream",
  "MistyRose",
  "Moccasin",
  "NavajoWhite",
  "Navy",
  "OldLace",
  "Olive",
  "OliveDrab",
  "Orange",
  "OrangeRed",
  "Orchid",
  "PaleGoldenRod",
  "PaleGreen",
  "PaleTurquoise",
  "PaleVioletRed",
  "PapayaWhip",
  "PeachPuff",
  "Peru",
  "Pink",
  "Plum",
  "PowderBlue",
  "Purple",
  "RebeccaPurple",
  "Red",
  "RosyBrown",
  "RoyalBlue",
  "SaddleBrown",
  "Salmon",
  "SandyBrown",
  "SeaGreen",
  "SeaShell",
  "Sienna",
  "Silver",
  "SkyBlue",
  "SlateBlue",
  "SlateGray",
  "SlateGrey",
  "Snow",
  "SpringGreen",
  "SteelBlue",
  "Tan",
  "Teal",
  "Thistle",
  "Tomato",
  "Turquoise",
  "Violet",
  "Wheat",
  "White",
  "WhiteSmoke",
  "Yellow",
  "YellowGreen",];
      return(
      colorslist.map(color=>{
  
        return(
          <div className="color" key={color} style={{backgroundColor:color}}></div>
        )
      })
      )
  }
  //try - start
  function getData(){
    fetch("http://localhost:8000/api/webcam",{method:"GET"}).then(resp=>{
      console.log(resp);
    }).catch(err=>{
      console.error(err);
    });
  }
  getData();
  //try - end
  function toggleconfig(){
    if(document.getElementById("config").className=="config downconfig"){
      document.getElementById("config").classList.add("upconfig");
      document.getElementById("config").classList.remove("downconfig");
      document.getElementById("btnimg").classList.remove("up");
      document.getElementById("btnimg").classList.add("down");
      // document.getElementById("capbtn").classList.remove("camrabtnshow")
      document.getElementById("capbtn").classList.add("camrabtnhide")
    }else{
      document.getElementById("config").classList.remove("upconfig");
      document.getElementById("config").classList.add("downconfig");
      document.getElementById("btnimg").classList.add("up");
      document.getElementById("btnimg").classList.remove("down");
      document.getElementById("capbtn").classList.remove("camrabtnhide")
      // document.getElementById("capbtn").classList.add("camrabtnremove")
    }
  }
  function togglemenu(){
    if(document.getElementById("submenu").className=="submenu hidden"){
      document.getElementById("submenu").classList.remove("hidden");
    }else{
      document.getElementById("submenu").classList.add("hidden");
    }
  }
  return (
    <div className="app">
      <div className="menu">
        <div className="dots" onClick={()=>{togglemenu()}}>
          <div className="dot"></div>
          <div className="dot"></div>
          <div className="dot"></div>
        </div>
        <div className="submenu hidden" id="submenu">
          <div className="link">Use Webcam</div>
          <div className="link">Upload Photo</div>
        </div>
      </div>
      <div className="camrabtnshow" id="capbtn"></div>
      <div className="config downconfig" id="config">
        {colors()}
      </div>
      <span className="configbtn" ><img onClick={()=>{toggleconfig()}} className="up" id="btnimg" src={arrow} width="30"/></span>
    </div>
  );
}

export default App;
