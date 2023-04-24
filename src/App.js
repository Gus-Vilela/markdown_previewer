import './App.css';
import {useState} from 'react'
import {marked} from 'marked'

function App() {
  const iniText = `<h1>Markdown Previewer</h1>
<h2>A simple tool to convert markdown to HTML</h2>
<a href="https://github.com/myusername/markdown-previewer">View the source code on GitHub</a>
<p>This is a demo of how the markdown-previewer works.</p>
<ul>
  <li>Type some markdown in the Editor panel</li>
  <li>See the HTML output in the Preview panel</li>
  <li>Enjoy!</li>
</ul>
<pre><code>// This is a small friendly function that greets the user <br>
function greet() { <br>
  return 'Hello, Nice to meet you.'; <br>
}  <br>
// This is how you call the function <br>
console.log(greet());</code></pre>
<blockquote>The journey of a thousand miles begins with a single step. - Lao Tzu</blockquote>
<img src="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg" alt="React logo" width="300">
<p>This is some <strong>bolded text</strong> to show you how it looks.</p>
<p>This is some <em>italicized text</em> to show you how it looks.</p>`;



  const [state, setState] = useState({text: iniText, preview: true, editor: true})
  const handleEditorClick= () => {
    setState(p => ({...state, preview: !p.preview}))
  }
  const handlePreviewClick= () => {
    setState(p => ({...state, editor: !p.editor}))
  }
  return (
    <div className="App">
      {state.editor && <div className="editor--wrap">
        <div className='editor--nav'>
          <p className='boxtitle'>Editor</p>
          <button onClick={handleEditorClick}></button>
        </div>
        <textarea id='editor' onChange={(e) => setState({...state, text: (e.target.value)})}>{state.text}</textarea>
      </div>}
      {state.preview && <div className='preview--wrap'>
        <div className='editor--nav'>
          <p className='boxtitle'>Preview</p>
          <button onClick={handlePreviewClick}></button>
        </div>
        <div id='preview' dangerouslySetInnerHTML={{__html: marked(state.text)}}></div>
      </div>}
    </div>
  );
}

export default App;
