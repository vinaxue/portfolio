import React, { Component } from 'react';

function Experience(props) {
	return (
		<div className="card cards">
			<div className="card-body">
				<h6 className="card-title xanh-mono">{props.experience.title}
					{!(props.experience.link == null) &&
						<h6 className="card-title xanh-mono"> (<a className="card-title xanh-mono" target='_blank' href={props.experience.linkAddress}>{props.experience.link}</a>)</h6>}
				</h6>

				<p className="card-subtitle mb-2 xanh-mono card-sub">{props.experience.time}</p>
				{!(props.experience.location == null) &&
					<p className="card-subtitle mb-2 xanh-mono card-sub">{props.experience.location}</p>
				}
				{!(props.experience.language == null) &&
					<p className="card-subtitle mb-2 xanh-mono card-sub">{props.experience.language}</p>
				}
				<div className='description'>
					<small className="card-text xanh-mono">{props.experience.description}</small>
				</div>
			</div>
		</div>
	)
}

export default Experience;