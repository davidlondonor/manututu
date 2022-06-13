import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Header from "../components/Header";
import Gallery from "../components/Gallery";
import { BsInstagram } from "react-icons/bs";

export default function Home() {
	return (
		<div className="dark:bg-slate-800,{styles.container}">
			<Head>
				<title>Manututu Art. Todo aqui es bonito</title>
				<meta name="description" content="Generated by create next app" />
				<link rel="icon" href="/favicon.ico" />
				<html />
			</Head>
			<Header />
			{/* <main className={styles.main}>
				<p> Hola</p>
			</main> */}
			<Gallery />
			<footer className={styles.footer}>
				<a
					href="https://www.instagram.com/manutututaller/"
					target="_blank"
					rel="noopener noreferrer"
				>
					<span className={styles.logo}>
						<BsInstagram />
						{/* <Image
							src="/vercel.svg"
							alt="Vercel Logo"
							width={72}
							height={16}
						/> */}
					</span>
				</a>
			</footer>
		</div>
	);
}
