const App = () => (
	<div>
		<FirstComponent />
		<NamedComponent name="Andre" />
	</div>
);

ReactDOM.render(<App />, document.getElementById('root'));
