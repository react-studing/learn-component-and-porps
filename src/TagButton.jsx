import "./tagButton.css";
export default function TagButton({ title, children }) {
  return (
    <>
      {title === undefined || title === "" ? (
        <></>
      ) : (
        <button className="tag-button">
          {title}
          {children}
        </button>
      )}
    </>
  );
}
