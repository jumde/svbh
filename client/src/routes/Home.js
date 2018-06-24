import React from 'react';
import { Link } from "react-router-dom";
import { Button } from 'semantic-ui-react';
import { Grid } from 'semantic-ui-react';
import { Image, List } from 'semantic-ui-react'
//import image from './images/bill-melinda-gates.jpeg';

export default () => (
	<div>	
		<Grid.Row>
			<Image className="teste"src='/images/bill-melinda-gates.jpg' size='massive' />
    	<h1>Bill & Melinda Gates Foundation</h1>
    </Grid.Row>
		<Grid centered columns={2}>
	    <Grid.Column>
	    	<List divided verticalAlign='middle'>
			    <List.Item>
			      <List.Content floated='right'>
			        <Button>Donate</Button>
			      </List.Content>
			      <Image avatar src='/images/books.jpg' />
			      <List.Content>Books</List.Content>
			    </List.Item>
			    <List.Item>
			      <List.Content floated='right'>
			        <Button>Donate</Button>
			      </List.Content>
			      <Image avatar src='/images/tables.jpeg' />
			      <List.Content>Tables</List.Content>
			    </List.Item>
			    <List.Item>
			      <List.Content floated='right'>
			        <Button>Donate</Button>
			      </List.Content>
			      <Image avatar src='/images/paper.jpg' />
			      <List.Content>Sheets</List.Content>
			    </List.Item>
			    <List.Item>
			      <List.Content floated='right'>
			        <Button>Donate</Button>
			      </List.Content>
			      <Image avatar src='/images/pens.jpeg' />
			      <List.Content>Pens</List.Content>
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

