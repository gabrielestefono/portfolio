import Image from "next/image";
import Link from "next/link";
import logoDesktop from './logoDesktop.png';
import styles from './Header.module.scss';

export default function Header(){
	return (
		<header>
			<div>
				<Image src={logoDesktop}
					alt="WeBest"
					width={198}
					height={92}
					sizes="(min-width: 480px) 100px, (min-width: 576px) 100px, (min-width: 768px) 100px, (min-width: 992px) 100px, (min-width: 1200px) 100px, 198px"
					className={styles.logo}
					/>
				<div>
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
			</div>
		</header>
	);
}