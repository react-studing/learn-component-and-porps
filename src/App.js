import "./App.css";
import MyHeader from "./MyHeader";
import Post from "./Post";
import SideMenu from "./SideMenu";
function App() {
  return (
    <div className="App">
      <MyHeader />
      <div className="content">
        <div className="posts">
          <Post />
          <Post />
          <Post />
          <Post />
        </div>
        <SideMenu />
      </div>
    </div>
  );
}

export default App;
