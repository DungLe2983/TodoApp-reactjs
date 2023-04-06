import { useEffect, useState } from 'react';

export const Submit = (props) => {
  const [inputValue, setInputValue] = useState('');
  useEffect(() => {
    setInputValue(props.selectedTodo);
  }, [props.selectedTodo]);

  const handleSubmit = () => {
    props.onSubmit(inputValue);
    setInputValue('');
  };
  const handleKeyPress = (event) => {
  if(event.key === 'Enter'){
    props.onSubmit(inputValue);
    setInputValue('');
  }
}
  return (
    <div className='flex flex-row ml-4'>
      <input
        value={inputValue}
        onChange={(event) => setInputValue(event.target.value)}
        className='w-2/3 border border-gray-200 my-7 bg-slate-50'
        placeholder='Enter todo here'
        onKeyDown={(event)=>handleKeyPress(event)}
      />
      <button
        onClick={handleSubmit}
        className='border border-gray-400 bg-blue-500 my-7 h-10 w-16'
      >
        {props.selectedTodo === '' ? 'Submit' : 'Update'}
      </button>
    </div>
  );
};
