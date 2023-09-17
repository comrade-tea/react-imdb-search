export const Footer = () => {
	return (
		<>
			<footer className="bg-black py-5 text-white">
				<div className="container mx-auto flex justify-between">
					<div className={"max-w-[340px]"}>
						The site was created as a demonstration of&nbsp;react.js and themoviedb api
					</div>

					<div>
						created by <a className={"link-line"} href={"https://comrade-tea.github.io/"}
										  target="_blank"
										  rel="noreferrer">
						comrade-tea</a>
					</div>
				</div>
			</footer>
		</>
	)
}
