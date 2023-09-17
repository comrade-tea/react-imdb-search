import { Link } from "react-router-dom";
import { FaArrowAltCircleLeft, FaArrowCircleLeft, FaArrowCircleRight, FaLongArrowAltLeft } from "react-icons/fa";
import { memo } from "react";

const Pager = memo(({currentPage, totalPages}) => {
	const MAX_ITEMS = 5

	const prevIndex = currentPage - 1 > 0 ? currentPage - 1 : null;
	const nextIndex = currentPage + 1 < totalPages ? currentPage + 1 : null;

	const generatePager = (number, maximum) => {
		const result = [];
		let start = Math.max(1, number - 2);
		let end = Math.min(maximum, number + 2);

		for (let i = start; i <= end; i++) {
			result.push(i);
		}

		while (result.length < MAX_ITEMS && ( start > 1 || end < maximum )) {
			if (start > 1) {
				start--;
				result.unshift(start);
			}
			if (result.length < MAX_ITEMS && end < maximum) {
				end++;
				result.push(end);
			}
		}

		return result;
	}

	const pagerArr = generatePager(currentPage, totalPages)

	return (
		<div className="flex items-center justify-end">
			{!!prevIndex &&
				<Link className="link-main me-4" to={{search: `?page=${prevIndex}`}}>
					<FaArrowCircleLeft className={"text-2xl"}/>
				</Link>}

			<ul className="flex justify-end items-center gap-3">
				{pagerArr.map((pageIndex) => (
					<li key={pageIndex}>
						<Link className={`link-main ${pageIndex === currentPage ? "active" : ""}`}
								to={`?page=${pageIndex}`}>
							{pageIndex}
						</Link>
					</li>
				))}
			</ul>

			{!!nextIndex &&
				<Link className="link-main ms-4" to={{search: `?page=${nextIndex}`}}>
					<FaArrowCircleRight className={"text-2xl"}/>
				</Link>}
		</div>
	)
})
export default Pager
