const Contact = () => {
	return (
		<div className="relative bg-white">
			<div className="lg:absolute lg:inset-0">
				<div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
					<img
						className="h-56 w-full object-cover lg:absolute lg:h-full"
						src="/img/IMG_6484.jpeg"
						alt=""
					/>
				</div>
			</div>
			<div className="relative py-16 px-4 sm:py-24 sm:px-6 lg:px-8 lg:max-w-7xl lg:mx-auto lg:py-32 lg:grid lg:grid-cols-2">
				<div className="lg:pr-8">
					<div className="max-w-md mx-auto sm:max-w-lg lg:mx-0">
						<h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl">
							Vamos a contruir un sueño juntos.
						</h2>
						<p className="mt-4 text-lg text-gray-500 sm:mt-3">
							Escríbeme un mensaje.
						</p>
						<form
							action="#"
							method="POST"
							className="mt-9 grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-8"
						>
							<div>
								<label className="block text-sm font-medium text-gray-700">
									Primer nombre
								</label>
								<div className="mt-1">
									<input
										type="text"
										name="first-name"
										id="first-name"
										autoComplete="given-name"
										className="block w-full shadow-sm sm:text-sm focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md"
									/>
								</div>
							</div>
							<div>
								<label className="block text-sm font-medium text-gray-700">
									Apellido
								</label>
								<div className="mt-1">
									<input
										type="text"
										name="last-name"
										id="last-name"
										autoComplete="family-name"
										className="block w-full shadow-sm sm:text-sm focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md"
									/>
								</div>
							</div>
							<div className="sm:col-span-2">
								<label
									htmlFor="email"
									className="block text-sm font-medium text-gray-700"
								>
									Correo electrónico
								</label>
								<div className="mt-1">
									<input
										id="email"
										name="email"
										type="email"
										autoComplete="email"
										className="block w-full shadow-sm sm:text-sm focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md"
									/>
								</div>
							</div>
							{/* <div className="sm:col-span-2">
								<label className="block text-sm font-medium text-gray-700">
									Company
								</label>
								<div className="mt-1">
									<input
										type="text"
										name="company"
										id="company"
										autoComplete="organization"
										className="block w-full shadow-sm sm:text-sm focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md"
									/>
								</div>
							</div> */}
							<div className="sm:col-span-2">
								<div className="flex justify-between">
									<label className="block text-sm font-medium text-gray-700">
										Celular
									</label>
									<span
										id="phone-description"
										className="text-sm text-gray-500"
									>
										Opcional
									</span>
								</div>
								<div className="mt-1">
									<input
										type="text"
										name="phone"
										id="phone"
										autoComplete="tel"
										aria-describedby="phone-description"
										className="block w-full shadow-sm sm:text-sm focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md"
									/>
								</div>
							</div>
							<div className="sm:col-span-2">
								<div className="flex justify-between">
									<label className="block text-sm font-medium text-gray-700">
										Cómo puedo ayudarte?
									</label>
									<span
										id="how-can-we-help-description"
										className="text-sm text-gray-500"
									>
										Max. 500 caracteres
									</span>
								</div>
								<div className="mt-1">
									<textarea
										id="how-can-we-help"
										name="how-can-we-help"
										aria-describedby="how-can-we-help-description"
										rows="4"
										className="block w-full shadow-sm sm:text-sm focus:ring-indigo-500 focus:border-indigo-500 border border-gray-300 rounded-md"
									></textarea>
								</div>
							</div>

							{/* <div className="sm:col-span-2">
								<label className="block text-sm font-medium text-gray-700">
									How did you hear about us?
								</label>
								<div className="mt-1">
									<input
										type="text"
										name="how-did-you-hear-about-us"
										id="how-did-you-hear-about-us"
										className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
									></input>
								</div>
							</div> */}
							<div classNameName="text-right sm:col-span-2">
								<button
									type="submit"
									classNameName="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 bg-gray-400"
								>
									Enviar
								</button>
							</div>
						</form>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Contact;
