export default function DashboardContainer({ children, className }) {
  return (
    <div
      className={`w-70-l w-90 center bg-white pa3${
        className ? ` ${className}` : ""
      }`}
    >
      {children}
      <style>{`
        .h-30 {
          height: 30rem;
        }
        `}</style>
    </div>
  );
}
