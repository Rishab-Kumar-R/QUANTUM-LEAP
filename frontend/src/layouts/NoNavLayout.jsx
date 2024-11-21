import { Outlet } from 'react-router-dom';

const NoNavLayout = () => {
	return (
		<div className="min-h-screen bg-white">
			<Outlet />
		</div>
	);
};

export default NoNavLayout;
