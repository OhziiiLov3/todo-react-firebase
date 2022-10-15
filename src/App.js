import React , {useState, useEffect} from 'react';
import {AiOutlinePlus} from 'react-icons/ai'
import Todo from './components/Todo';
import {db} from './firebase';
import {query,collection, onSnapshot, QuerySnapshot} from 'firebase/firestore';





const style = {
bg: `h-screen w-screen p-4 bg-gradient-to-r from-[#e76f51] to-[#f4a261]`,
container: `bg-slate-100 max-w-[600px] w-full m-auto rounded-md shadow-xl p-4 py-2`,
heading: `text-3xl font-bold text-center text-gray-800 p-2`,
form: `flex justify-between`,
input: `border p-2 w-full text-xl`,
button: `border p-4 ml-2 bg-[#2a9d8f] text-slate-100`, 
count: `text-center p-2`
}


function App() {

  const [todos, setTodos] = useState(['Learn React','Daily Coding Challenges'])

// Create todo
// Read todo  from firebase 
useEffect(()=>{
  const q = query(collection(db,'reactTodos'))
  const unsubscribe = onSnapshot(q,(querySnapshot) =>{
    let todoArr = []
    querySnapshot.forEach((doc)=>{
      todoArr.push({...doc.data(), id:doc.id})
    })
  })
},[])

// Update todo in firebase 
// Delete todo


  return (
    <div className={style.bg}>
     <div className={style.container}>
      <h3 className={style.heading}>Todo App</h3>
      <form className={style.form}>
        <input className={style.input} type="text" placeholder="Add Todo"/>
        <button className={style.button}>
          <AiOutlinePlus size={30}/>
          </button>
      </form>
      <ul>
        {todos.map((todo, idx )=> (
          <Todo key={idx} todo={todo} />

        ))}
      </ul>
      <p className={style.count}>You have 2 todos</p>
     </div>
    </div>
  );
}

export default App;
