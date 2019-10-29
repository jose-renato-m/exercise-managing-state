import React from 'react';

const Score = props => {
 return (
   <p className="text">
     Your Score: {numCorrect} / {numQuestions}
   </p>
  );
};

export default Score;