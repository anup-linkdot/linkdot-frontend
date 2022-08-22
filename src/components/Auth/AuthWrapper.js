const AuthWrapper = ({ children }) => (
  <div
    style={{
      display: "grid",
      gridTemplateColumns: "2fr 0fr 2fr",
      alignItems: "center",
      height: "100%",
    }}
  >
    {children}
  </div>
);

export { AuthWrapper };
