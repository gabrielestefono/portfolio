import Header from "../Header";

export default function Layout({ children }: Readonly<{ children: React.ReactNode }>) {
	return (
		<div>
			<Header/>
			{children}
		</div>
	);
}