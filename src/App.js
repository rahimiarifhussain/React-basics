import Btn from "./Btn";
import File from "./File";
import ModeToggler from "./ModeToggler";
import "./App.css";
import "./BtnCss.css";

function App() {
  // return <Btn />;
  return (
    <div className="file1">
      <ModeToggler />
      <Btn />
      <File />
    </div>
  );
}

export default App;
