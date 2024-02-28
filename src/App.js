import { Route, Routes } from 'react-router-dom';
import Home from './Home/Home';
import News from './News/News';
import Note from './Notes/Note';
import Meme from './Memes/Meme';
function App() {
  return (
    <>
      
      <Routes>
     <Route path='/' element={<Home/>}/>
     <Route path='/news' element={<News/>}/>
     <Route path='/meme' element={<Meme/>}/>
     <Route path='/notes' element={<Note/>}/>

      </Routes>
    </>
  );
}

export default App;
