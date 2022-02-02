const Person = ({ name, age, hobbies = [] }) => {
	let voteText = age >= 18 ? 'Please go vote!' : 'You must be 18!';
	let hobbiesList = hobbies.map((h) => <li>{h}</li>);

	return (
		<div>
			<p>Learn more about {name.length <= 8 ? name : name.slice(0, 6)}:</p>
			<h3>{voteText}</h3>
			<h5>{hobbies.length > 0 ? <b>Hobbies:</b> : <b />}</h5>
			<ul>{hobbiesList}</ul>
		</div>
	);
};
