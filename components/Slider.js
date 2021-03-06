import { motion } from "framer-motion";
import { useState, useRef, UseEffect, useEffect } from "react";
import Image from "next/image";
import images from "../components/Gallery/ImagesGallery";

const Slider = () => {
	const [width, setWidth] = useState(0);
	const carousel = useRef();

	useEffect(() => {
		console.log(carousel.current.scrollWidth, carousel.current.offsetWidth);
		setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth);
	}, []);

	console.log(images);
	return (
		<main className="ml-4 mr-4 md:ml-3 md:mr-3 sm:ml-3 sm:mr-3">
			<motion.div
				ref={carousel}
				whileTap={{ cursor: "grabbing" }}
				className="carousel cursor-grab overflow-hidden"
				animate={{ x: 10 }}
			>
				<motion.div
					drag="x"
					dragConstraints={{ right: 0, left: -width }}
					className="inner-carousel flex"
				>
					{images.map((image, index) => {
						return (
							<motion.div
								className="item w-1/3 minHeight40 min-w-fit minWidthX p-10 sm:px-2 md:px-2"
								key={images}
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
		</main>
	);
};

export default Slider;
