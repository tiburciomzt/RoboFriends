import Card from "./Card";

const CardList = ({ robots }) => {
		const ArrayCards = robots.map((user, i) =>{
			return <Card key={i} id={robots[i].id} name={robots[i].name} email={robots[i].email} />
		});
	  
			return (
				<div>
					{ArrayCards}
				</div>
		);
}

export default CardList;