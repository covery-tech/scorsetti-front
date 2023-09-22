export default function DashboardContainer({ children, className }) {
  return (
    <div
      className={`w-70-l w-95 h-35-l mw8 mh4-l center bg-white pa3${
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
      }
        `}</style>
    </div>
  );
}
