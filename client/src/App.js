import React,{useState} from 'react';
import './App.css';
import Input from "./components/Input";
import Todos from "./components/Todos";
import axios from "axios";

function App() {

  const [todos,setTodos] = useState([]);
  const  [loaded,setLoaded]  = useState(false);

  React.useEffect(() => {
    axios.get("/gettodos")
    .then(res=>{
      setTodos(res.data);
      setLoaded(true);
    })
  }, [])

  const addtodo = (title)=>{
    axios.post("/addtodo",{title:title})
    .then(res=>{
        setTodos([...todos,{title:title,_id:res.data.id}]);
    })
  }

  const deleteTodo = (id)=>{
      setTodos(todos.filter(todo=>todo._id!==id));
      axios.post("/delete",{id:id})
      .then(res=>console.log("deleted"));
  }
  
  return (
    <div className="App">
      <Input addtodo={addtodo} />
      {loaded?<Todos todos={todos} deleteTodo={deleteTodo} />:<h2>Loading......</h2>}
    </div>
  );
}

export default App;
