import { jsx } from "react/jsx-runtime";
import "./App.css";
import MyHeader from "./MyHeader";
import Post from "./Post";
import SideMenu from "./SideMenu";
const showCategories = true;

const postAtributes = [
  {
    title: "20",
    description: "اكادمية مخصصة لتعليم البرمجة بمختلف لغاتها و تقنياتها",
    jsx: <h1>اكادمية ترميز</h1>,
  },
  {
    title: "hello world",
    description: "this is the hello world article",
  },
  {
    title: "Post 3",
    description: "this is the body of post 3",
  },
];
function App() {
  return (
    <div className="App">
      <MyHeader />
      <div className="content">
        <div className="posts">
          {postAtributes.map(function (element, index) {
            return (
              <Post
                key={index}
                title={element.title}
                description={element.description}
              >
                {element.jsx}
              </Post>
            );
          })}
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
