import React from 'react';
import ReactDOM from 'react-dom';

import './index.scss';

namespace App {}

class App extends React.Component {
	render() {
		return (
			<div className='empty' style={{ backgroundColor: 'transparent' }}>
				<div className='empty-icon'>
					<i className='icon icon-shutdown icon-2x'></i>
				</div>

				<p className='empty-title h5'>Welcome to RoundSquare</p>
				<p className='empty-subtitle'>
					{'Take a look at the '}
					<a href='https://github.com/RoundSquareAU/roundsquare'>
						source
					</a>
					.
				</p>
			</div>
		);
	}
}

ReactDOM.render(<App />, document.getElementById('app'));
