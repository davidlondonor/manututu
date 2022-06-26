import { motion } from "framer-motion";
import { useState, useRef, UseEffect } from "react";
import Image from "next/image";
import images from "../components/Gallery/ImagesGallery";

const Slider = () => {
	console.log(images);
	return (
		<>
			<motion.div className="carousel" animate={{ x: 50 }}>
				<motion.div className="inner-carousel">
					{images.map((image, index) => {
						return (
							<motion.div className="item" key={2}>
								<Image
									src={image}
									alt="Description"
									width={100}
									height={100}
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
