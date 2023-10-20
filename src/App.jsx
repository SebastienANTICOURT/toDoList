import { Route, Routes } from "react-router-dom";
import "./App.css";
import ToDoList from "./pages/ToDoList";
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<ToDoList />} />
      </Routes>
    </>
  );
}

export default App;
