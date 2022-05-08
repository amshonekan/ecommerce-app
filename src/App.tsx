import Directory from './components/directory/directory.component';
import Categories from './components/directory/categories/categories.component';
import NavigationBar from './components/navigation-bar/navigation-bar.component';

const App = () => {

	return (
		<div>
			<NavigationBar />
			<Directory categories={Categories} />
		</div>

	)

}

export default App;
