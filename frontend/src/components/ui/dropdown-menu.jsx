/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
export const DropdownMenu = ({ children }) => {
  return <div className="relative">{children}</div>;
};

export const DropdownMenuTrigger = ({ children, asChild }) => {
  return (
    <div className="cursor-pointer">{children}</div>
  );
};

export const DropdownMenuContent = ({ children, align = "start", sideOffset = 4, className }) => {
  return (
    <div
      className={`absolute ${align === "end" ? "right-0" : "left-0"} mt-2 w-max bg-white shadow-lg rounded-md ${className}`}
      style={{ marginTop: `${sideOffset}px` }}
    >
      {children}
    </div>
  );
};

export const DropdownMenuItem = ({ children, className, onClick }) => {
  return (
    <div
      onClick={onClick}
      className={`cursor-pointer p-2 text-sm text-gray-900 rounded-md hover:bg-indigo-50 ${className}`}
    >
      {children}
    </div>
  );
};
