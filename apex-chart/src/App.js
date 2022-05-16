import React, { useEffect } from "react";

function App() {
  // const [imageWidth, setImageWidth] = useState("auto");
  // const [imageHeight, setImageHeight] = useState("auto");
  // const [imageOverflow, setImageOverflow] = useState("unset");
  // const [imgUr, setImageUrl] = useState("https://i.imgur.com/0wMJHZK.jpg");
  // // const canvasRef = createRef();
  // const imageRef = createRef();

  const Marker = function () {
    this.Sprite = new Image();
    this.Sprite.src =
      "http://www.clker.com/cliparts/w/O/e/P/x/i/map-marker-hi.png";
    this.Width = 12;
    this.Height = 20;
    this.XPos = 0;
    this.YPos = 0;
  };

  let canvasRef;
  let context;

  useEffect(() => {
    canvasRef = document.getElementById("Canvas");
    context = canvasRef.getContext("2d");
    const mapSprite = new Image();
    mapSprite.src =
      "https://www.roomsketcher.com/wp-content/uploads/2017/11/RoomSketcher-Commercial-Space-Coworking-Office-Design-2D-Floor-Plan-PID3529710-800x600-2.jpg";
    context.drawImage(mapSprite, 0, 0, 700, 700);
  }, []);

  const mouseClicked = (mouse) => {
    // Get corrent mouse coords
    let rect = canvasRef.getBoundingClientRect();
    let mouseXPos = mouse.clientX - rect.left;
    let mouseYPos = mouse.clientY - rect.top;

    console.log("Marker added");

    // Move the marker when placed to a better location
    const tempDiv = document.createElement("div");
    tempDiv.innerText = "chennai";
    let tempMarker = tempDiv;
    tempMarker.style.left = (mouseXPos - tempMarker.Width) / 2 + "px";
    tempMarker.style.top = mouseYPos - tempMarker.Height + "px";
    console.log(
      "test",
      (mouseXPos - tempMarker.Width) / 2,
      mouseYPos - tempMarker.Height
    );
  };

  return (
    <div className="App">
      <canvas onMouseDownCapture={mouseClicked} id="Canvas"></canvas>
      <div>test</div>
    </div>
  );
}

export default App;
