import { motion } from "framer-motion";
import { useState, useRef, UseEffect } from "react";
import Image from "next/image";
import images from "../components/Gallery/ImagesGallery";

const Slider = () => {
	console.log(images);
	return (
		<main className="ml-5 mr-5">
			<motion.div
				className="carousel cursor-grab overflow-hidden"
				animate={{ x: 50 }}
			>
				<motion.div
					drag="x"
					dragConstraints={{ right: 0 }}
					className="inner-carousel flex"
				>
					{images.map((image, index) => {
						return (
							<motion.div
								className="item w-1/3 minHeight40 min-w-fit minWidthX p-10"
								key={2}
							>
								<Image
									className="rounded-3xl pointer-events-none"
									src={image}
									alt="Description"
									width={300}
									height={440}
								/>
							</motion.div>
						);
					})}
				</motion.div>
			</motion.div>
			<h1>Hola</h1>
		</main>
	);
};

export default Slider;
