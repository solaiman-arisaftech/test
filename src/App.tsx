import "./App.css";
import PostsView from "./components/PostsView";
import CounterView from "./components/CounterView";

function App() {
  return (
    <div>
      <div className="font-bold text-4xl">Counter App Using Redux-Toolkit </div>
      <CounterView />
      <PostsView />
    </div>
  );
}

export default App;
