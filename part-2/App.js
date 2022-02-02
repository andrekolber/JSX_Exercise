const App = () => (
	<div>
		<Tweet
			username="slydog"
			name="Jason"
			date={new Date().toDateString()}
			msg="I wrote my first react component today!"
		/>
		<Tweet
			username="killercat"
			name="Kylie"
			date={new Date().toDateString()}
			msg="React is a very intuitive framework."
		/>
		<Tweet
			username="monstermouse"
			name="Henry"
			date={new Date().toDateString()}
			msg="I think React is highly useful."
		/>
	</div>
);

ReactDOM.render(<App />, document.getElementById('root'));
