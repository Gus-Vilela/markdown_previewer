import './App.css';
import {useState} from 'react'

function App() {
  const [text, setText] = useState('Hello World')
  
  return (
    <div className="App">
      <div className="editor--wrap">
        <div className='editor--nav'><p className='boxtitle'>Editor</p><button></button></div>
        <textarea id='editor' onChange={(e) => setText(e.target.value)} >{text}</textarea>
      </div>
      <div className='preview--wrap'>
        <div className='editor--nav'><p className='boxtitle'>Preview</p><button></button></div>
        <div id='preview'>{text}</div>
      </div>
    </div>
  );
}

export default App;
