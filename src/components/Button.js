export default function Button({ value, onClick, children, className }) {
  return (
    <button className={className} onClick={() => onClick(value)}>
      {children}
    </button>
  );
}
