import { useState } from "react"
import { Column } from "../Column/Column"
import { tasks } from "../../data"


export const Main = () => {
	const [cards, setCard] = useState(tasks)
	return (
		<main className="main">
			<div className="container">
				<div className="main__block">
					<div className="main__content">
						<Column 
						title="Без статуса" 
						cards={cards.filter((card) => card.status) === "Без статуса"} />
					</div>
				</div>
			</div>
		</main>
	)

}