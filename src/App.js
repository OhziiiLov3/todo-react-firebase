import React , {useState} from 'react';
import {AiOutlinePlus} from 'react-icons/ai'
import Todo from './components/Todo';



const style = {
bg: `h-screen w-screen p-4 bg-gradient-to-r from-[#e76f51] to-[#f4a261]`
}


function App() {

  const [todos, setTodos] = useState(['Learn React','Daily Coding Challenges'])

  return (
    <div className={style.bg}>
     <div className={style.container}>
      <h3 className={style.heading}>Todo App</h3>
      <form className={style.from}>
        <input className={style.input} type="text" placeholder="Add Todo"/>
        <button className={style.button}><AiOutlinePlus size={30}/></button>
      </form>
      <ul>
        {todos.map((todo, idx )=> (
          <Todo key={idx} todo={todo} />

        ))}
      </ul>
     </div>
    </div>
  );
}

export default App;
