import { Card } from "../Card/Card"

export const Column = ({ title }) => {
	return (
		<div className="main__column column">
			<div className="column__title">
				<p>{title}</p>
			</div>
			<div className="cards">
				<Card title="Research" />
				<Card title="Web Design" />
				<Card title="Copywriting" />
			</div>
		</div>
	)

}