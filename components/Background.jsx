const StarryBackground = ({ children }) => (
  <div className="relative w-full h-full overflow-hidden">
    <div className="absolute inset-0 bg-star-pattern bg-[3px_3px] opacity-50 animate-move-stars"></div>
    {children}
  </div>
);

export default StarryBackground;
