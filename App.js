import React from 'react';
import ReactDOM from 'react-dom/client';

// const jsxHeading = <h1>JSX Haeding</h1>
// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(jsxHeading);

//Function Based Components
const HeadingComponent = ()=>(
  <div id="container">
    <h1>React Functional Component</h1>
  </div>
)
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<HeadingComponent/>);


// Adding HTML Element through React.js
// const heading = React.createElement('h1', { id: 'heading' }, 'Hello from react.js');
// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(heading);


// EXAMPLE - Add below example through React.js
//  <div id='parent'>
//     <div id='child'>
//       <h1> I am a h1 heading tag </h1>
//       <h2> I am a h2 heading tag </h2>
//     </div>
//     <div id='child2'>
//       <h1> I am a h1 heading tag </h1>
//       <h2> I am a h2 heading tag </h2>
//     </div>
//  </div>

// const parent = React.createElement('div',{id : 'parent'},
//   [React.createElement('div',{id : 'child'},
//   [React.createElement('h1',{},'I am a h1 heading tag'),React.createElement('h2',{},'I am a h2 heading tag')]
//   ),
//   React.createElement('div',{id : 'child2'},
//   [React.createElement('h1',{},'I am a h1 heading tag'),React.createElement('h2',{},'I am a h2 heading tag')]
//   )]
// );

// const root = ReactDOM.createRoot(document.getElementById('root'));

// root.render(parent);