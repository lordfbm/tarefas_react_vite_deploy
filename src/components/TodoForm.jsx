import {useState} from 'react';
import { MdLibraryAdd } from "react-icons/md";

const TodoForm = ( {addTodo} ) => {
  const [value, setValue] = useState("");
  const [category, setCategory] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('click', value, category);
    if(!value || !category) return;
    //adicionar to do
    addTodo(value, category);
    //limpar os camppos
    setValue("");
    setCategory("");
  };

  return ( 
  <div className="todo-form">
    <h2>Criar Tarefa</h2>
    <form onSubmit={handleSubmit}>
        <input className='entrada' 
        type="text" 
        placeholder='Descreva a tarefa' 
        value={value}
        onChange={(e)=>setValue(e.target.value)}
        />
        <select value={category} onChange={(e)=>setCategory(e.target.value)}>
            <option value="">Selecione a Categoria</option>
            <option value="Trabalho">Trabalho</option>
            <option value="Pessoal">Pessoal</option>
            <option value="Estudos">Estudos</option>

        </select>
        <button type='submit'><MdLibraryAdd />
Guardar tarefa </button>
    </form>
  </div>
  )
}

export default TodoForm