function ModeToggler() {
  var onMode = false;
  const onModedark = <h1>The DarkMode is ON</h1>;
  const onModelight = <h1>The LigtMode is ON</h1>;
  function clickHandler() {
    onMode = !onMode;
    if (onMode == true) {
      console.log("the darkMode is on!");
    } else {
      console.log("the LightMode is on!");
    }
    console.log("clicked");
  }
  return (
    <div>
      {onMode ? onModedark : onModelight}
      <button onClick={clickHandler}>click me!</button>
    </div>
  );
}

export default ModeToggler;
