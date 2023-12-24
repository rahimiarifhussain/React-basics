// function Btn() {
//   const clickHandler = () => console.log("clicked");
//   return <button onClick={clickHandler}>Click me</button>;
// }

// export default Btn;

function Btn() {
  const clickHandler = () => console.log("Mouse Overed");
  return <button onMouseOver={clickHandler}>Mouse Over</button>;
}

export default Btn;
