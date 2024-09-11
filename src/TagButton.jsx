import "./tagButton.css";
export default function TagButton({ children }) {
  return (
    <>
      <button className="tag-button">
        Tag Button
        {children}
      </button>
    </>
  );
}
