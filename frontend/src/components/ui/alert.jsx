import PropTypes from "prop-types";

export const Alert = ({ variant = "default", children }) => {
	// Define the Tailwind classes based on the variant
	const baseClasses = "p-4 rounded-md text-sm";
	const variantClasses = {
		default: "bg-gray-100 text-gray-800",
		success: "bg-green-100 text-green-800",
		destructive: "bg-red-100 text-red-800",
		warning: "bg-yellow-100 text-yellow-800",
		info: "bg-blue-100 text-blue-800",
	};

	return (
		<div className={`${baseClasses} ${variantClasses[variant]}`}>
			{children}
		</div>
	);
};

Alert.propTypes = {
	variant: PropTypes.oneOf(["default", "success", "destructive", "warning", "info"]),
	children: PropTypes.node.isRequired,
};

export const AlertDescription = ({ children }) => (
	<p className="mt-1 text-sm">{children}</p>
);

AlertDescription.propTypes = {
	children: PropTypes.node.isRequired,
};
