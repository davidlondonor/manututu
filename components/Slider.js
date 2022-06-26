import { motion } from "framer-motion";
import { useState, useRef, UseEffect } from "react";

const Slider = () => {
	return (
		<>
			<motion.div className="carousel" animate={{ x: 50 }}>
				<motion.div className="inner-carousel">
					{/* {images.map((image, index) => {
						return (
							<motion.div className="item">
								<img
									src={"/denim/connection-denim-01.jpeg"}
									alt="Description"
								/>
							</motion.div>
						);
					})} */}
				</motion.div>
			</motion.div>
			<h1>Hola</h1>
		</>
	);
};

export default Slider;
