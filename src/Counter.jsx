import { useState } from 'react';
import { TrashIcon } from '@heroicons/react/24/outline';
import { Submit } from './Submit';
export const Counter = () => {
  const [todos, setTodos] = useState([]);
  const [selectedTodo, setSelectedTodo] = useState('');

  const handleOnClick = (value) => {
    if (selectedTodo === '') {
      const newTodos = [...todos, value];
      setTodos(newTodos);
    } else {
      const index = todos.findIndex((todo) => todo === selectedTodo);
      let newTodos = [...todos];
      newTodos[index] = value;
      setTodos(newTodos);
    }
    setSelectedTodo('');
  };

  const handleOnCLickDelete = (index) => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };

  const removeAllTodos = () => {
    setTodos([]);
  };

  const handleTodoOnClick = (value) => {
    setSelectedTodo(value);
  };

  return (
    <div className='flex flex-col w-1/2 h-full mx-56 my-28 border border-gray-200 '>
      <p className=' border-b border-gray-200 text-lg'>Todos({todos.length})</p>
      <Submit onSubmit={handleOnClick} selectedTodo={selectedTodo} />{' '}
      {todos.map((todo, index) => (
        <div key={`${index}-${todo}`} className='flex flex-row '>
          <button
            className=' border border-gray-200 ml-4 w-2/3 h-12 bg-stone-50'
            onClick={() => handleTodoOnClick(todo)}
          >
            <p className='text-center my-2'>{todo}</p>
          </button>

          <button>
            <TrashIcon
              className=' w-8 h-8'
              onClick={() => handleOnCLickDelete(index)}
            />
          </button>
        </div>
      ))}
      <button className=' bg-red-500 w-24 my-6 ml-8' onClick={removeAllTodos}>
        Delete All
      </button>
    </div>
  );
};
