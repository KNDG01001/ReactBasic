import React from 'react';

export default function AppBasic05() {
  let sum = 0;
  for (let i = 1; i <= 10; i++) sum += i;
  return <div>
    1부터 10까지의 합 : {sum}
    </div>;
}
