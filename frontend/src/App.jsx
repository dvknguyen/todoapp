import { useEffect, useState } from "react";
import "./App.css";
import ListHeader from "./components/ListHeader";
import ListItem from "./components/ListItem";

function App() {
  const [tasks, setTasks] = useState(null);
  const userEmail = "duy@duy.de";

  const getData = async () => {
    try {
      const response = await fetch(`http://localhost:8000/todo/${userEmail}`);
      const json = await response.json();
      setTasks(json);
      console.log(json);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => getData, []);

  const sortedTasks = tasks?.sort((a, b) => a.progress - b.progress);

  console.log(sortedTasks);

  return (
    <>
      <div className="app">
        <ListHeader title={"My Tasks"} />
        {sortedTasks?.map((task) => (
          <ListItem key={task.id} item={task} />
        ))}
      </div>
    </>
  );
}

export default App;
