import { Column } from "../Column/Column"

export const Main = () => {
	return (
		<main className="main">
			<div className="container">
				<div className="main__block">
					<div className="main__content">
						<Column title="Без заголовка"/>
						<Column title="Нужно сделать"/>
						<Column title="В работе"/>
						<Column title="Тестирование"/>
					</div>
				</div>
			</div>
		</main>
	)

}