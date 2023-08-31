import './App.css';
import { Chatbot } from 'react-chatbot-kit'
import config from './config';
import ActionProvider from './ActionProvider';
import MessageParser from './MessageParser';

function App() {
  return (
    <>
      <div className="chat" >
        <Chatbot config={config} actionProvider={ActionProvider} messageParser={MessageParser}/>
      </div>
    </>
  );
}

export default App;
