class DrumMachine extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.handleKeyPress = this.handleKeyPress.bind(this);
  }

  handleClick(e) {
    document.getElementById("display").textContent = document.querySelector(
    `#${e.target.id} .clip`).
    title;
    document.querySelector(`#${e.target.id}.drum-pad .clip`).play();
    document.querySelector(`#${e.target.id}.drum-pad .clip`).currentTime = 0;
  }

  handleKeyPress(e) {
    const keys = document.querySelectorAll(".clip");
    keys.forEach(key => {
      if (e.keyCode == key.id.charCodeAt(0)) {
        document.getElementById("display").textContent = key.title;
        key.play();
        key.currentTime = 0;
      }
    });
  }

  render() {
    document.addEventListener("keydown", this.handleKeyPress);

    const handleKeyPress = function (e) {
      const keys = document.querySelectorAll(".clip");
      keys.forEach(key => {
        if (e.keyCode == key.id.charCodeAt(0)) {
          document.getElementById("display").textContent = key.title;
          key.play();
          key.currentTime = 0;
        }
      });
    };

    $(document).ready(function () {
      $(".main").click(function () {
        $(this).effect("shake", { distance: 1, speed: "fast" });
      });
      $(document).keydown(function (e) {
        $(`.main:contains(${String.fromCharCode(e.keyCode)})`).effect("shake", {
          distance: 1,
          speed: "fast" });

      });
    });

    return /*#__PURE__*/(
      React.createElement("div", { id: "drum-machine", className: "fill center" }, /*#__PURE__*/
      React.createElement("div", { id: "display", className: "display" }), /*#__PURE__*/
      React.createElement("p", { id: "fesliyanstudios" }, "free sound effects from",
      " ", /*#__PURE__*/
      React.createElement("a", { href: "https://www.fesliyanstudios.com" }, "https://www.fesliyanstudios.com")), /*#__PURE__*/



      React.createElement("div", { id: "container", className: "container" }, /*#__PURE__*/
      React.createElement("div", { id: "bass", className: "bass main", onClick: this.handleClick }, /*#__PURE__*/
      React.createElement("div", { id: "bass-back", className: "back" }), /*#__PURE__*/
      React.createElement("div", { id: "bass-mid", className: "rectangle" }), /*#__PURE__*/
      React.createElement("div", { id: "bass-front", className: "drum-pad center front" }, /*#__PURE__*/
      React.createElement("audio", {
        src: "https://www.fesliyanstudios.com/play-mp3/6659",
        id: "Q",
        className: "clip",
        title: "Bass Drum",
        preload: "auto" }), "Q")), /*#__PURE__*/




      React.createElement("div", {
        id: "snare",
        className: "drum-pad snare-tom center main",
        onClick: this.handleClick }, /*#__PURE__*/

      React.createElement("audio", {
        src: "https://www.fesliyanstudios.com/play-mp3/6774",
        id: "W",
        className: "clip",
        title: "Snare Drum",
        preload: "auto" }), "W"), /*#__PURE__*/



      React.createElement("div", {
        id: "high-tom",
        className: "mid-high-tom main",
        onClick: this.handleClick }, /*#__PURE__*/

      React.createElement("div", { id: "high-tom-back", className: "back" }), /*#__PURE__*/
      React.createElement("div", { id: "high-tom-mid", className: "rectangle" }), /*#__PURE__*/
      React.createElement("div", { id: "high-tom-front", className: "drum-pad front center" }, /*#__PURE__*/
      React.createElement("audio", {
        src: "https://www.fesliyanstudios.com/play-mp3/6763",
        id: "E",
        className: "clip",
        title: "Hi-Tom Drum",
        preload: "auto" }), "E")), /*#__PURE__*/




      React.createElement("div", {
        id: "mid-tom",
        className: "mid-high-tom main",
        onClick: this.handleClick }, /*#__PURE__*/

      React.createElement("div", { id: "mid-tom-back", className: "back" }), /*#__PURE__*/
      React.createElement("div", { id: "mid-tom-mid", className: "rectangle" }), /*#__PURE__*/
      React.createElement("div", { id: "mid-tom-front", className: "drum-pad center front" }, /*#__PURE__*/
      React.createElement("audio", {
        src: "https://www.fesliyanstudios.com/play-mp3/6730",
        id: "A",
        className: "clip",
        title: "Mid-Tom Drum",
        preload: "auto" }), "A")), /*#__PURE__*/




      React.createElement("div", {
        id: "floor-tom",
        className: "drum-pad snare-tom center main",
        onClick: this.handleClick }, /*#__PURE__*/

      React.createElement("audio", {
        src: "https://www.fesliyanstudios.com/play-mp3/6697",
        id: "S",
        className: "clip",
        title: "Floor-Tom Drum",
        preload: "auto" }), "S"), /*#__PURE__*/



      React.createElement("div", {
        id: "hi-hat",
        className: "drum-pad cymbal center main",
        onClick: this.handleClick }, /*#__PURE__*/

      React.createElement("audio", {
        src: "https://www.fesliyanstudios.com/play-mp3/6710",
        id: "D",
        className: "clip",
        title: "Hi-Hat Cymbal",
        preload: "auto" }), /*#__PURE__*/

      React.createElement("div", { class: "dot" }, "D")), /*#__PURE__*/

      React.createElement("div", {
        id: "crash-cymbal",
        className: "drum-pad cymbal center main",
        onClick: this.handleClick }, /*#__PURE__*/

      React.createElement("audio", {
        src: "https://www.fesliyanstudios.com/play-mp3/6676",
        id: "Z",
        className: "clip",
        title: "Crash Cymbal",
        preload: "auto" }), /*#__PURE__*/

      React.createElement("div", { class: "dot" }, "Z")), /*#__PURE__*/

      React.createElement("div", {
        id: "ride-cymbal",
        className: "drum-pad cymbal center main",
        onClick: this.handleClick }, /*#__PURE__*/

      React.createElement("audio", {
        src: "https://www.fesliyanstudios.com/play-mp3/6740",
        id: "X",
        className: "clip",
        title: "Ride Cymbal",
        preload: "auto" }), /*#__PURE__*/

      React.createElement("div", { class: "dot" }, "X")), /*#__PURE__*/

      React.createElement("div", {
        id: "splash-cymbal",
        className: "drum-pad cymbal center main",
        onClick: this.handleClick }, /*#__PURE__*/

      React.createElement("audio", {
        src: "https://www.fesliyanstudios.com/play-mp3/6778",
        id: "C",
        className: "clip",
        title: "Splash Cymbal",
        preload: "auto" }), /*#__PURE__*/

      React.createElement("div", { class: "dot" }, "C")))));




  }}


ReactDOM.render( /*#__PURE__*/React.createElement(DrumMachine, null), document.getElementById("drums"));