import "./post.css";
export default function Post({ title, description, children }) {
  return (
    <>
      <div className="post">
        <h1 className="post-h1">{title}</h1>
        {children}
        <hr className="post-hr" />
        <p className="post-p">{description}</p>
      </div>
    </>
  );
}
