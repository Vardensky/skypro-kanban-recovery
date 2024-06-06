import './App.css'
import { Header } from './components/Header/Header'
import { Main } from './components/Main/Main'
import { PopBrowse } from './components/Popups/PopBrowse/PopBrowse'
import { PopNewCard } from './components/Popups/PopNewCard/PopNewCard'
import { PopUser } from './components/Popups/PopUser/PopUser'

export default function App() {
	return (
		<>
			<div className="wrapper">
				{/* pop-up start*/}
				<PopUser />
				<PopNewCard />
				<PopBrowse />
				{/* pop-up end*/}
				<Header />
				<Main />
			</div>
		</>
	)
}


