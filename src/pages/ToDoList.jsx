import { useEffect, useState } from "react";

function ToDoList() {
  const [value, setValue] = useState("");
  const [list, setList] = useState([]);

  const addList = () => {
    const updatedList = [...list, value];
    setList(updatedList);
    localStorage.setItem("value", JSON.stringify(updatedList));
  };

  useEffect(() => {
    const savedList = JSON.parse(localStorage.getItem("value"));
    if (savedList) {
      setList(savedList);
    }
  }, []);

  const removeItem = (indexToRemove) => {
    const updatedList = [...list];
    updatedList.splice(indexToRemove, 1);
    setList(updatedList);
    localStorage.setItem("value", JSON.stringify(updatedList));
  };

  return (
    <div>
      <input
        type="text"
        placeholder="element"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <button onClick={addList}>Ajouter</button>
      <ul>
        {list.map((item, index) => (
          <li key={index}>
            {item}
            <button onClick={() => removeItem(index)}>X</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ToDoList;
