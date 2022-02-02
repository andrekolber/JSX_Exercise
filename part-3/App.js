const App = () => (
	<div>
		<Person name="Jason" age={17} hobbies={[ 'swimming', 'running' ]} />
		<Person name="Amanda" age={24} />
		<Person name="Christopher" age={19} hobbies={[ 'video games', 'cooking' ]} />
	</div>
);

ReactDOM.render(<App />, document.getElementById('root'));
