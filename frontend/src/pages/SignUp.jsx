import React from 'react';
import { Eye, EyeOff, ArrowRight, Github } from 'lucide-react';
import { Alert, AlertDescription } from '../components/ui/alert';
import { Link } from 'react-router-dom';
import { FcGoogle } from 'react-icons/fc';

const SignUp = () => {
	const [showPassword, setShowPassword] = React.useState(false);
	const [error, setError] = React.useState('');

	const handleSubmit = (e) => {
		e.preventDefault();
		setError(''); // Clear previous errors
		// Add your signup logic here
	};

	return (
		<div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-cyan-50 flex items-center justify-center p-4">
			<div className="max-w-7xl w-full bg-white p-8 rounded-2xl shadow-xl flex">
				<div className="w-1/2 p-8 flex flex-col justify-center">
					<h2 className="text-4xl font-bold text-gray-900">Create an Account</h2>
					<p className="mt-4 text-gray-600">
						Start your journey with us by signing up. Join now to explore all the great content and features.
					</p>
					<p className="mt-4 text-sm text-gray-500">
						Already have an account?{' '}
						<Link to="/login" className="text-indigo-600 hover:text-indigo-500 font-medium">
							Login here
						</Link>
					</p>
				</div>

				<div className="w-px bg-gray-200 mx-4"></div>

				<div className="w-1/2 p-8">
					<div className="text-center space-y-2">
						<h1 className="text-3xl font-bold text-gray-900">Sign Up</h1>
					</div>

					<div className="space-y-3 mt-6">
						<button className="w-full flex items-center justify-center gap-2 bg-gray-900 text-white p-3 rounded-lg hover:bg-gray-800 transition-colors">
							<Github size={20} />
							<span>Sign up with GitHub</span>
						</button>
						<button className="w-full flex items-center justify-center gap-2 bg-white border border-gray-300 text-gray-700 p-3 rounded-lg hover:bg-gray-100 transition-colors">
							<FcGoogle size={20} />
							<span>Sign up with Google</span>
						</button>
					</div>

					<div className="relative my-6">
						<div className="absolute inset-0 flex items-center">
							<div className="w-full border-t border-gray-200"></div>
						</div>
						<div className="relative flex justify-center text-sm">
							<span className="px-4 bg-white text-gray-500">Or continue with</span>
						</div>
					</div>

					<form onSubmit={handleSubmit} className="space-y-4">
						{error && (
							<Alert variant="destructive">
								<AlertDescription>{error}</AlertDescription>
							</Alert>
						)}

						<div className="space-y-3">
							<div className="grid grid-cols-2 gap-4">
								<div>
									<label htmlFor="firstName" className="block text-sm font-medium text-gray-700">
										First name
									</label>
									<input
										type="text"
										id="firstName"
										className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-indigo-500 focus:transition-all duration-300 ease-in-out focus:border-indigo-500 outline-none"
										required
									/>
								</div>
								<div>
									<label htmlFor="lastName" className="block text-sm font-medium text-gray-700">
										Last name
									</label>
									<input
										type="text"
										id="lastName"
										className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-indigo-500 focus:transition-all duration-300 ease-in-out focus:border-indigo-500 outline-none"
										required
									/>
								</div>
							</div>

							<div>
								<label htmlFor="email" className="block text-sm font-medium text-gray-700">
									Email address
								</label>
								<input
									type="email"
									id="email"
									className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-indigo-500 focus:transition-all duration-300 ease-in-out focus:border-indigo-500 outline-none"
									required
								/>
							</div>

							<div>
								<label htmlFor="password" className="block text-sm font-medium text-gray-700">
									Password
								</label>
								<div className="mt-1 relative">
									<input
										type={showPassword ? 'text' : 'password'}
										id="password"
										className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-indigo-500 focus:transition-all duration-300 ease-in-out focus:border-indigo-500 outline-none"
										required
									/>
									<button
										type="button"
										className="absolute inset-y-0 right-0 pr-3 flex items-center"
										onClick={() => setShowPassword(!showPassword)}
									>
										{showPassword ? (
											<EyeOff className="h-5 w-5 text-gray-400" />
										) : (
											<Eye className="h-5 w-5 text-gray-400" />
										)}
									</button>
								</div>
							</div>
						</div>

						<button
							type="submit"
							className="w-full flex items-center justify-center gap-2 bg-indigo-600 text-white p-3 rounded-lg hover:bg-indigo-700 transition-colors"
						>
							Create Account
							<ArrowRight size={20} />
						</button>
					</form>

					<p className="text-center text-xs text-gray-500 mt-6">
						By signing up, you agree to our{' '}
						<a href="#" className="text-indigo-600 hover:text-indigo-500">
							Terms of Service
						</a>{' '}
						and{' '}
						<a href="#" className="text-indigo-600 hover:text-indigo-500">
							Privacy Policy
						</a>
					</p>
				</div>
			</div>
		</div>
	);
};

export default SignUp;
