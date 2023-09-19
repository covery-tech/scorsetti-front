export default function DashboardContainer({ children, className }) {
  return (
    <div
      className={`w-70-l w-90 h-35-l mw8 mh4 bg-white pa3${
        className ? ` ${className}` : ""
      }`}
    >
      {children}
      <style>{`
      @media screen and (min-width: 60em) {
        .h-35-l {
          height: 35rem;
        }
      }
        `}</style>
    </div>
  );
}
