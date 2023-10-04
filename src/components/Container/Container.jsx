export default function Container({ children, className }) {
  return (
    <div
      className={`w-75-m w-75-l w-90 mw8-l center bg-white pa3 mv5${
        className ? ` ${className}` : ""
      }`}
    >
      {children}
    </div>
  );
}
