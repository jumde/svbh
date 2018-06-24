import React from 'react';
import { Link } from "react-router-dom";
import { Button } from 'semantic-ui-react';
import { Grid } from 'semantic-ui-react';
import { Image, List } from 'semantic-ui-react'
//import image from './images/bill-melinda-gates.jpeg';

export default () => (
	<div>
		<Grid.Row>
			<Link to="/"><img className="back-button" src='/images/left-arrow.svg'/></Link>
			{/*<div className="hero">	*/}
				{/*<div className="dark-frame"></div>*/}
				{/*/!*<Image className="image-hero" src='/images/bill-melinda-gates.jpg' size='massive' />*!/*/}
	    	{/*<h1 className="image-hero-text">Bill & Melinda Gates Foundation</h1>*/}
    	{/*</div>*/}
    </Grid.Row>
		<Grid centered columns={2}>
	    <Grid.Column>
	    	<h1>Causes you have supported</h1>
            <h2> Current Balance: </h2>
			<h3> Bill and Melinda Gates Foundation</h3>
	    	<List divided verticalAlign='middle' className="margin-bottom-120">
			    <List.Item>
			      <List.Content floated='right'>
			      </List.Content>
			      <List.Content floated='right'>
			        <p className="price">2 ETH</p>
			      </List.Content>
			      <Image className="donation-image" avatar src='/images/books.jpg' />
			      <List.Content>Books <a target="_blank" href="https://www.homedepot.com/">(Home Depot)</a></List.Content>
			    </List.Item>
			    <List.Item>
			      <List.Content floated='right'>
			        <p className="price">5 ETH</p>
			      </List.Content>
			      <Image className="donation-image" avatar src='/images/tables.jpeg' />
			      <List.Content>Tables <a target="_blank" href="https://www.staples.com/">(Staples)</a></List.Content>
			    </List.Item>

			  </List>
	    </Grid.Column>
	  </Grid>
	</div>
);


/*
	<div>	
		<div>lala</div>
		<ul>
		  <li>
		    <Link to="/">Home</Link>
		  </li>
		  <li>
		    <Link to="/company">Company</Link>
		  </li>
		</ul>
	</div>
*/
x``



// export function Welcome(props) {
// 	alert("FOO");
//     // return <h1>Hello, {props.name}</h1>;
// }

// import React from 'react';

// export default () => (
// 	<div>	
// 		<div>auehauheauehauehauheuha</div>
// 	</div>
// );
