import { Component } from 'react';
import EditorMenus from './EditorMenus';
import Header from './Header';
class App extends Component {

	render() {
		return (
			<div className="App">
				<Header />
				<EditorMenus />
			</div>
		)
	}
}

export default App;