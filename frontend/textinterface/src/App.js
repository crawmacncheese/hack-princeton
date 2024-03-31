import './App.css';
import { sendMsg } from './openai';
import { useState } from 'react';
import sendBTN from './assets/send.svg';

function App() {

  const[input, setInput] = useState("");
  const[messages, setMessages] = useState([{
    text: "Hi, I am NAME OF OUR APP",
    isBot: true,
  }]);

  const handleSend = async () => {
    const text = input;
    setInput("");
    setMessages([
      ...messages,
      {text, isBot: false},
    ])
    const res = await sendMsg(input);
    setMessages([
      ...messages,
      {text: input, isBot: false},
      {text: res, isBot: true}
    ]);
  }

  return (
    <div className="App">
      <div className = "main">
        <div className='chats'>
          {messages.map((message, i) => 
            <div key={i} className={message.isBot?"chat bot":"chat"}>
            <img src='' alt=''/>
            <p className='txt'>{message.text}</p>
            </div>
          )}
        </div>
        <div className='chatFooter'>
          <div className='inp'>
            <input type='text'placeholder='Ask a question...' value={input} onChange={(e)=>{setInput(e.target.value)}} />
            <button className='send' onClick={handleSend}><img src={sendBTN} alt="button"/></button>
          </div>

        </div>
      </div>
    </div>
  );
}

export default App;
