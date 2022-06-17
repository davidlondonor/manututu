import Image from "next/image";
import Slider from "./Slider";

const Header = () => {
	const features = [
		{ name: "Costume Design", description: "Designed by Manuela" },
		{
			name: "Material",
			description: "Designed by Manuela",
		},
		{ name: "SFX Makeup", description: "Designed by Manuela" },
	];

	return (
		<div className="bg-white">
			<div aria-hidden="true" className="relative">
				<img
					src="/img/tallerTeam.jpeg"
					alt="Taller"
					className="w-full h-96 object-center object-cover"
				/>
				<div className="absolute inset-0 bg-gradient-to-t from-white" />
			</div>
			<Slider></Slider>
			<div className="relative -mt-12 max-w-7xl mx-auto pb-6 px-4 sm:pb-24 sm:px-6 lg:px-8">
				<div className="max-w-2xl mx-auto text-center lg:max-w-4xl">
					<img className="52 " src="img/Logo-manututu.png" alt="Logo" />
					<p className="mt-4 text-gray-500">
						Neque porro quisquam est qui dolorem ipsum quia dolor sit
						amet, consectetur, adipisci velit...
					</p>
				</div>

				<dl className="mt-16 max-w-2xl mx-auto grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 sm:gap-y-16 lg:max-w-none lg:grid-cols-3 lg:gap-x-8">
					{features.map((feature) => (
						<div
							key={feature.name}
							className="border-t border-gray-200 pt-4"
						>
							<dt className="font-medium text-gray-900">
								{feature.name}
							</dt>
							<dd className="mt-2 text-sm text-gray-500">
								{feature.description}
							</dd>
						</div>
					))}
				</dl>
			</div>
		</div>
	);
};

export default Header;
