import './App.css';
import {useState} from 'react'
import {marked} from 'marked'

function App() {
  const iniText = `# Markdown Previewer \n\
## A simple tool to convert markdown to HTML\n\
View the source code on [GitHub](https://github.com/Gus-Vilela/markdown_previewer)\n\
### This is a demo of how the markdown-previewer works.\n\
- Type some markdown in the Editor panel\n\
- See the HTML output in the Preview panel\n\
- Enjoy!\n\
\`\`\`\n\
// This is a small friendly function that greets the user \n\
function greet() {\n\
  return 'Hello, Nice to meet you.'; \n\
}\n\
// This is how you call the function \n\
console.log(greet());\n\
\`\`\`\n\
And some inline \`<div>code</div>\` exemple.\n
> The journey of a thousand miles begins with a single step. - Lao Tzu \n
![React Logo](https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg)\n\
This is some **bolded** text to show you how it looks.\n
This is some _italicized_ text to show you how it looks.`;


  const [state, setState] = useState({text: iniText, preview: true, editor: true})
  const handleEditorClick= () => {
    setState(p => ({...state, preview: !p.preview}))
  }
  const handlePreviewClick= () => {
    setState(p => ({...state, editor: !p.editor}))
  }
  const handleChange=(e)=>{
    setState({...state, text: (e.target.value)})
  }
  return (
    <div className="App">
      {state.editor && <div className="editor--wrap">
        <div className='editor--nav'>
          <p className='boxtitle'>Editor</p>
          <button onClick={handleEditorClick}>Maximize</button>
        </div>
        <textarea id='editor' onChange={handleChange}>{state.text}</textarea>
      </div>}
      {state.preview && <div className='preview--wrap'>
        <div className='editor--nav'>
          <p className='boxtitle'>Preview</p>
          <button onClick={handlePreviewClick}>Maximize</button>
        </div>
        <div id='preview' dangerouslySetInnerHTML={{__html: marked(state.text)}}></div>
      </div>}
    </div>
  );
}

export default App;
