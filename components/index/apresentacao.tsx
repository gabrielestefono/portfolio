import Link from "next/link";
import styles from './Apresentacao.module.scss';

export default function Apresentacao() {
	return (
		<div className={styles.apresentacao}>
			<div>
				<div className={styles.left}>
					<h1>Olá! Eu sou</h1>
					<h2>Desenvolvedor Full Stack</h2>
					<p>Um desenvolvedor full stack é um profissional versátil que possui habilidades tanto no desenvolvimento do lado do cliente (front-end) quanto no lado do servidor (back-end) de aplicações web. Sua capacidade de trabalhar em ambas as áreas os torna ativos valiosos em equipes de desenvolvimento, pois podem abordar uma ampla gama de desafios de programação em um projeto. Eles são como "poliglotas" da programação, dominando várias linguagens e tecnologias para criar aplicativos web completos e funcionais.</p>
					<Link href="" className={styles.leftLink}>Veja Meus Projetos</Link>
				</div>
				<div className={styles.right}>
					<div></div>
					<div></div>
					<div></div>
					<div></div>
				</div>
			</div>
		</div>
	);
}
