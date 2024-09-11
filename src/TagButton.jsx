import "./tagButton.css";
export default function TagButton({ title, children }) {
  return (
    <>
      <button className="tag-button">
        {title}
        {children}
      </button>
    </>
  );
}
