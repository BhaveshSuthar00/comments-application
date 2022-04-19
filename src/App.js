import './App.css';
import Comments from "./comments/Comments";

function App() {
  return (
    <div className="App">
       <h1>Comment App</h1>
      <Comments
        commentsUrl="http://localhost:3004/comments"
        currentUserId="1"
      />
    </div>
  );
}

export default App;
