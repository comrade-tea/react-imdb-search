import {Link, useMatches} from "react-router-dom";

const Breadcrumbs = () => {
    const matches = useMatches();
    
    const crumbs = matches
        .filter(item => item.handle)
        .map((item, index) => {
            const {pathname, handle} = item;

            return (
                <li className="breadcrumbs__item" key={index}>
                    <Link to={pathname}>{handle.crumb()}</Link>
                </li>
            )
        })
    

    return (
        <div className="breadcrumbs">
            <div className="container">
                {crumbs.length > 1 && <ul className="breadcrumbs__list">
                    {crumbs.map((crumb) => (crumb))}
                </ul>}
            </div>
        </div>
    )
}
export default Breadcrumbs
