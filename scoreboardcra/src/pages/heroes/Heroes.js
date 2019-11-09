import React from 'react';
import axios from 'axios';
import './Heroes.scss';
import api from '../../utils/api';

export class Heroes extends React.Component {
	state = {
		heroes: []
	}

	componentDidMount() {
		this.getHeroes();
	}

	//async 는 비동기가 되고, 반드시 await 와 같이 사용함.
	//await 는 반드시 뒤에 promise가 오고 , promise가 올때까지 기다린다.
	getHeroes = async () => {
		let response = await api.get('/api/user/heroes?start_index=0&page_size=10');
		console.log(response);//response 비동기 PROMISE RETURN
		this.setState({
			heroes: response.data.data
		});
	}

	render() {
		return (
			<ul className="img-box">
				{this.state.heroes.map(hero => (
					<li key={hero.id} className="row align-items-center m-0">
						<div className="col-1 py-2">
							<img src={hero.photo} alt={hero.name} className="img-fluid rounded-circle" />
						</div>
						<span className="col">{hero.name}</span>
					</li>
				))}
			</ul>
		);
	}
}
