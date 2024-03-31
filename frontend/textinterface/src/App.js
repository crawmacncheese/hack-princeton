import './App.css';
import { sendMsg } from './openai';
import { useState } from 'react';

function App() {

  const[input, setInput] = useState("");

  const handleSend = async () => {
    const res = await sendMsg(input);
    console.log(res);
  }

  return (
    <div className="App">
      <div className = "main">
        <div className='chats'>
          <div className='chat'>
            <img src='' alt=''/>
            <p className='txt'>
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras vel est mauris. Cras neque nunc, lobortis nec ultrices sed, porta et libero. Quisque et aliquam risus. Morbi ac magna vitae odio aliquam sollicitudin. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec bibendum aliquam auctor. Nunc ultricies fringilla risus eu malesuada. Sed commodo, dui eget fringilla finibus, sapien urna semper turpis, in varius diam mi eget tortor. Proin id tincidunt nisl, eu accumsan orci. Fusce scelerisque pharetra augue, porta finibus lacus dapibus eu. Nulla eleifend eleifend odio, lacinia condimentum nulla tincidunt quis. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </div>
          <div className='chat bot'>
            <img src='' alt=''/>
            <p className='txt'>
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras vel est mauris. Cras neque nunc, lobortis nec ultrices sed, porta et libero. Quisque et aliquam risus. Morbi ac magna vitae odio aliquam sollicitudin. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec bibendum aliquam auctor. Nunc ultricies fringilla risus eu malesuada. Sed commodo, dui eget fringilla finibus, sapien urna semper turpis, in varius diam mi eget tortor. Proin id tincidunt nisl, eu accumsan orci. Fusce scelerisque pharetra augue, porta finibus lacus dapibus eu. Nulla eleifend eleifend odio, lacinia condimentum nulla tincidunt quis. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </div>
        </div>
        <div className='chatFooter'>
          <div className='inp'>
            <input type='text'placeholder='Ask a question' value={input} onChange={(e)=>{setInput(e.target.value)}} />
            <button className='send' onClick={handleSend}/>
          </div>

        </div>
      </div>
    </div>
  );
}

export default App;
