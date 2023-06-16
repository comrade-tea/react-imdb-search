import {Input} from "@/components/UI/Form/Input.jsx";

const Sidebar = () => {
	return (
		<aside className="sidebar">
			<div>
				<h3 className="section-title">Search:</h3>
				<div>
					<Input attributes={{placeholder: "Search by regex"}}/>
				</div>
			</div>

			<div><h3 className="section-title">Filters:</h3>
				<div>genre/year/actor</div>
			</div>
		</aside>
	)
}

export default Sidebar;
