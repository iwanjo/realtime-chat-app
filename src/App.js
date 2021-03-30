import { ChatEngine } from 'react-chat-engine';
import ChatFeed from './components/ChatFeed';

import './App.css';

const App = () => {
  return(
    <ChatEngine
      height = "100vh"
      projectID="2d4178ac-96ca-499c-be69-910849c63e3c"
      userName="iwanjo"
      userSecret="12345"
      renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} /> }


    />
  )
}


export default App;