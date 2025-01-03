import React, { useState } from 'react';

function VotingForm() {
  const [votes, setVotes] = useState({ JavaScript: 0, Python: 0, Java: 0 });

  const handleVote = (language) => {
    setVotes({
      ...votes,
      [language]: votes[language] + 1
    });
  };

  return (
    <div style={{ textAlign: 'center' }}>
      <h1>Ovoz berish</h1>
      <button onClick={() => handleVote('JavaScript')}>JavaScript</button>
      <button onClick={() => handleVote('Python')}>Python</button>
      <button onClick={() => handleVote('Java')}>Java</button>
      <h2>Natijalar:</h2>
      <p>JavaScript: {votes.JavaScript}</p>
      <p>Python: {votes.Python}</p>
      <p>Java: {votes.Java}</p>
    </div>
  );
}

export default VotingForm;
