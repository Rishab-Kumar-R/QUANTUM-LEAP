import { ChevronRight } from 'lucide-react';

const Hero = () => (
	<div className="relative pt-40 md:pt-40 pb-20 overflow-hidden">
		<div className="absolute inset-0 -z-10">
			<div className="absolute inset-0 bg-[linear-gradient(to_right,#4f46e580_1px,transparent_1px),linear-gradient(to_bottom,#4f46e580_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_110%)]" />
		</div>

		<div className="relative">
			<div className="absolute -top-4 -z-10 transform-gpu overflow-hidden blur-3xl" aria-hidden="true">
				<div className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-indigo-500 to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]" />
			</div>

			<div className="mx-auto max-w-7xl px-6 lg:px-8">
				<div className="mx-auto max-w-2xl text-center">
					<div className="mb-8 flex justify-center">
						<div className="relative rounded-full px-3 py-1 text-sm leading-6 text-indigo-600 ring-1 ring-indigo-900/10 hover:ring-indigo-900/20">
							Announcing our next-gen vision AI{' '}
							<a href="#" className="font-semibold text-indigo-600">
								<span className="absolute inset-0" aria-hidden="true" />
								Read more <span aria-hidden="true">&rarr;</span>
							</a>
						</div>
					</div>
					<h1 className="text-4xl font-bold tracking-tight sm:text-6xl bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 to-indigo-800">
						QUANTUM-LEAP: Conversational Vision AI
					</h1>
					<p className="mt-6 text-lg leading-8 text-gray-600">
						Unlock the power of AI to understand images and engage in natural conversations. Upload any image and get started.
					</p>
					<div className="mt-10 flex items-center justify-center gap-x-6">
						<button className="rounded-md bg-indigo-600 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-indigo-600/20 hover:bg-indigo-700 transition-all duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
							Get Started
						</button>
						<a href="#" className="text-sm font-semibold leading-6 text-gray-900 flex items-center group">
							Documentation
							<ChevronRight className="ml-1 h-4 w-4 transform transition-transform duration-200 ease-in-out group-hover:translate-x-2" />
						</a>
					</div>
				</div>
			</div>
		</div>
	</div>
);

export default Hero;