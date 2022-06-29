import { motion } from "framer-motion";
import { useState, useRef, UseEffect } from "react";
import Image from "next/image";
import images from "../components/Gallery/ImagesGallery";

const Slider = () => {
	console.log(images);
	return (
		<>
			<motion.div
				className="carousel cursor-grab overflow-hidden"
				animate={{ x: 50 }}
			>
				<motion.div className="inner-carousel flex">
					{images.map((image, index) => {
						return (
							<motion.div
								className="item w-1/3 minHeight40 min-w-fit minWidthX p-10"
								key={2}
							>
								<Image
									className="rounded-3xl"
									src={image}
									alt="Description"
									width={1000}
									height={1400}
								/>
							</motion.div>
						);
					})}
				</motion.div>
			</motion.div>
			<h1>Hola</h1>
		</>
	);
};

export default Slider;
