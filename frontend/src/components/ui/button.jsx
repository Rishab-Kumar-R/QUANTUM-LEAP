export const Button = ({ children, asChild, variant, className, ...props }) => {
  const baseClasses =
    'inline-flex items-center justify-center rounded-md px-4 py-2 font-semibold focus:outline-none transition duration-200';
  const variants = {
    primary: 'bg-indigo-600 text-white hover:bg-indigo-700',
    secondary: 'bg-gray-900 text-white hover:bg-gray-800',
  };

  const Component = asChild ? 'span' : 'button';

  return (
    <Component
      className={`${baseClasses} ${variants[variant] || ''} ${className}`}
      {...props}
    >
      {children}
    </Component>
  );
};
