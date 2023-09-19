import React from 'react';

export default function AppDemo() {
  const title = '해피냥이';
  const abc = 'cat1.jpg';

  return (
    <div>
      <h1>{title}</h1>
      <img src={abc} width="100" />
    </div>
  );
}
