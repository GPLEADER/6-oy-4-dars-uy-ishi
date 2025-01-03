import React, { useState } from 'react';

function createForm() {
  const [inputs, setInputs] = useState(['']);

  const handleAddInput = () => setInputs([...inputs, '']);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(inputs);
  };

  return (
    <form onSubmit={handleSubmit}>
      {inputs.map((input, index) => (
        <input
          key={index}
          type="text"
          placeholder={`Input ${index + 1}`}
          value={input}
          onChange={(e) => setInputs(inputs.map((val, i) => i === index ? e.target.value : val))}
          required
        />
      ))}
      <button type="button" onClick={handleAddInput}>Input qo'shish</button>
      <button type="submit">Yuborish</button>
    </form>
  );
}

export default createForm;
