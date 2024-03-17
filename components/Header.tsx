import Image from "next/image";
import Link from "next/link";
import logoDesktop from './logoDesktop.png';
import styles from './Header.module.scss';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons/faBars";
import { useState } from "react";

export default function Header(){
	
	const [menu, setMenu] = useState(false);

	let abrirMenu = () => {
		setMenu(!menu);
	}

	return (
		<header className={styles.header}>
			<div>
				<Image src={logoDesktop}
					alt="WeBest"
					width={198}
					height={92}
					className={styles.logo}
					sizes="(min-width: 480px) 100px, (min-width: 576px) 100px, (min-width: 768px) 100px, (min-width: 992px) 100px, (min-width: 1200px) 100px, 198px"
					loading="eager"
					/>
				<div className={menu ? styles.menuAberto : styles.menu}>
					<ul>
						<li><Link href=""/>Início</li>
						<li><Link href=""/>Sobre Mim</li>
						<li><Link href=""/>Projetos</li>
						<li><Link href=""/>Habilidades</li>
						<li><Link href=""/>Contato</li>
						{/* <li><Link href=""/>Blog</li> */}
						{/* <li><Link href=""/>Login</li> */}
					</ul>
				</div>
				<button className={styles.mobileIcon} onClick={abrirMenu}>
					<FontAwesomeIcon icon={faBars} className={styles.icon}/>
				</button>
			</div>
		</header>
	);
}