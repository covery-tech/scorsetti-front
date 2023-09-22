export default function DashboardContent({ children, className }) {
  return (
    <div
      className={`w-95 w-75 h-35-l mw8 center bg-white pa3${
        className ? ` ${className}` : ""
      }`}
    >
      {children}
      <style>{`
      .w-95 {
        width: 95%;
      }
      @media screen and (min-width: 60em) {
        .h-35-l {
          height: 35rem;
        }
        .w-75 {
          width: 75%;
        }
      }
        `}</style>
    </div>
  );
}
