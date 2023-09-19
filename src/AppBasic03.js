import React from 'react';

export default function AppBasic03() {
  const msg = '안녕';
  const title = '강남영화마을';

  return (
    <div>
      Hello React !! {msg}
      <h1>
        {title} {3 + 4} {'hello'}
      </h1>
    </div> // jsx 문법 : HTML + {} 표현식
  );
}
