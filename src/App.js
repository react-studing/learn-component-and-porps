import "./App.css";
import MyHeader from "./MyHeader";
import Post from "./Post";
import SideMenu from "./SideMenu";
const showCategories = true;

function App() {
  return (
    <div className="App">
      <MyHeader />
      <div className="content">
        <div className="posts">
          <Post
            title="20"
            description="اكادمية مخصصة لتعليم البرمجة بمختلف لغاتها و تقنياتها"
          >
            <h1>اكادمية ترميز</h1>
          </Post>
          <Post
            title="hello world"
            description="this is the hello world article"
          />
          <Post title="Post 3" description="this is the body of post 3" />
        </div>
        <AppSideMenu />
      </div>
    </div>
  );
}
function AppSideMenu() {
  if (showCategories) {
    return <SideMenu />;
  } else {
    return <></>;
  }
}

export default App;
