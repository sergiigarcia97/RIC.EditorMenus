import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './App';
import reportWebVitals from './reportWebVitals';
//CSS + JS Bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
//CSS
import './index.css';
import './EM.css';
//CSS importado del dnd de menus
import './Menu/styles.css';
//svg convertidos a icon-nombreIcono(https://medium.com/@adebalanced02/using-fontello-with-react-6bdc32b3c868)
import "./fontello/css/ric-icons.css";
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';

//STANDALONE
const root = ReactDOM.createRoot(document.getElementById('RICEditorMenus'));
root.render(
  <React.StrictMode>
    <DndProvider backend={HTML5Backend}>
      <App />
    </DndProvider>

  </React.StrictMode>
);
//CORE (PORTAL)
// window.editorFunctions = {
//   renderEditorMenus: function () {
//     const root = ReactDOM.createRoot(document.getElementById('RICEditorMenus'));
//     root.render(
//       <React.StrictMode>
//         <DndProvider backend={HTML5Backend}>
//           <App />
//         </DndProvider>
//       </React.StrictMode>
//     );
//   }
// }
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals(); 
