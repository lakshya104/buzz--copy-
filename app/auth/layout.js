const AuthLayout = ({ children }) => {
  return (
    <div className="flex justify-center items-center h-full bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-sky-100 to-sky-200">
      {children}
    </div>
  );
};

export default AuthLayout;
