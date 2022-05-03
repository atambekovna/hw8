import Comment from './components/Comment';
import './App.css';

const comment = [
  {
    date: new Date(),
    text: 'I hope you enjoy learning React!',
    author: {
      name: 'Hello Kitty',
      avatarUrl: 'http://placekitten.com/g/62/62',
    },
  },
  {
    date: new Date(),
    text: 'I hope you enjoy learning React!',
    author: {
      name: 'Hello Kitty',
      avatarUrl: 'http://placekitten.com/g/64/64',
    },
  },
  {
    date: new Date(),
    text: 'I hope you enjoy learning React!',
    author: {
      name: 'Hello Kitty',
      avatarUrl: 'http://placekitten.com/g/64/64',
    },
  },
];
console.log(comment);
function App() {
  return (
    <div className='App'>
      {comment.map((item) =>{
        return(
        <Comment
         key={Math.random().toString()}
        author={item.author} 
        text={item.text} 
        date={item.date}

        />
        )
      })}
      
    </div>
  );
}

export default App;
