import Navigation from "@/components/layout/Navigation.jsx";
import logoSrc from "@/assets/react.svg"

const Header = () => {
	return (
		<header className="header">
			<div className="header__inner">
				<a href="/" className="header__logo flex items-center">
					<img src={ logoSrc } alt="logo"/>
					<div className="ms-3">RoadFlix 😎</div>
				</a>

				<Navigation/>

				{/*<div className="header__lang">*/ }
				{/*    <select>*/ }
				{/*        <option value="en" selected>en</option>*/ }
				{/*        <option value="ru">ru</option>*/ }
				{/*    </select>*/ }
				{/*</div>*/ }
			</div>
		</header>
	)
}
export default Header
