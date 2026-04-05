const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main>
      {/* Header component should be here */}
      <div>{children}</div>
    </main>
  );
};

export default layout;
