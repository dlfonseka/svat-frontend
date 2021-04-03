//import './App.css';
import Header from './components/Header.js'
import Player from './components/Player.js'
import Button from './components/Button'
import AddAnnotation from './components/AddAnnotation.js'
import {useState} from 'react'

//NOTE: for now, the video is stored in the media folder
import video from './media/video.mp4'



function App() {

  var toolchoice = [
    {value: 'Scalpel', name: 'Scalpel'},
    {value: 'Dilators', name: 'Dilators'},
    {value: 'Suction Tip', name: 'Suction Tip'},
    {value: 'Forceps', name: 'Forceps'}
  ]
  
  const [pausePressed, setPausePressed] = useState(false)

  return (
    <div className="App">
      <Header />
      <Player src={video}/>
      <Button 
        onClick={() => setPausePressed()}
        text='Pause Video' id='annotate'/>
      <AddAnnotation choices={toolchoice}/>
    </div>
  );
}

export default App;
