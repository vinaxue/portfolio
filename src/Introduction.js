import React, { Component } from 'react'
import { ExpandMore, Menu } from '@material-ui/icons'
import scrollToComponent from 'react-scroll-to-component'
import { Slide } from 'react-awesome-reveal'
import Experience from './Experience'

import './Introduction.css'

class Introduction extends Component {

	constructor() {
		super()

		this.state = {
			experiences: [
				{
					id: 1,
					language: null,
					title: 'ECE Tutor',
					link: null,
					linkAddress: null,
					location: 'University of Texas at Austin',
					time: 'Sept 2020 - present',
					description: 'I tutored students in Intro to Computing, including topics on digital logics, finite state machine, stacks, and LC3 assembly.'
				},
				{
					id: 2,
					language: 'JavaScript, Python',
					title: 'Co-Founder of UT Review',
					link: 'utexasreview.com',
					linkAddress: 'https://www.utexasreview.com',
					location: null,
					time: 'May 2020 - present',
					description: 'I was the co-founder of UT Review, a website that allows UT students to access course and professor information at one place. It provides ratings and reviews from other students on courses and professors, and we currently have 264 unique users, 373 sessions, 1027 pageviews, 36 signups, 122 reviews, 19892, courses, 5127 profs, and 11155 scheduled courses. The website is built with React.js and Flask, and is hosted on Amazon Web Services. '
				},
				{
					id: 3,
					language: 'Java',
					title: 'Food Picker',
					link: null,
					linkAddress: null,
					location: null,
					time: 'Dec 2019 - Dec 2020',
					description: 'My partner and I used Android Studio to make an Andrio app that will pick out restaurants based on uer preferences, including distance, rating, types of food, etc. '
				},
				{
					id: 4,
					language: 'C++',
					title: 'Snake Game',
					link: null,
					linkAddress: null,
					location: null,
					time: 'May 2019',
					description: 'My partner and I created a snake game using the ARM TM4C123 microcontroller. The objective is to control the snake to eat apples to increase the length of the snake, which is also the score.'
				},
				{
					id: 5,
					language: 'C',
					title: 'Sumo Robot',
					link: null,
					linkAddress: null,
					location: null,
					time: 'Aug 2018 - Nov 2018',
					description: 'My team built a robot for the IEEE RAS Robotathod Fall 2018 competition. The objective of the competition is to stay on the platform while pushing the other robot off the platform. The robot used an IR sensor and a reflectance sensor, and parts of the robot is 3D printed. '
				},
				{
					id: 6,
					language: null,
					title: 'IT Internship',
					link: null,
					linkAddress: null,
					location: 'Duchesne Academy of the Sacred Heart',
					time: 'Aug 2016 - May 2018',
					description: 'During my internship, I worked in a team with 20 other interns to troubleshot and fix both hardware and software issues for students and faculties at Duchesne. I also conducted an independent study on Adobe Photoshop. '
				},
			]
		}
	}

	render() {
		return (
			<div className='background'>
				<nav>
					{/* <div className='dropdown'>
						<a className="dropdown-toggler"
							type="button"
							id="dropdownMenu"
							data-toggle="dropdown" >
							<Menu className='button-type' />
						</a>
						<div className="dropdown-menu menu" role='menu' aria-labelledby="dropdownMenu">
							<a className="dropdown-item" href="#">Action</a>
							<a className="dropdown-item" href="#">Another action</a>
							<a className="dropdown-item" href="#">Something else here</a>
						</div>
					</div> */}
				</nav>
				<div className='main'>
					<div id='title' className='section text-left d-flex justify-content-center align-items-center flex-column'>
						<Slide triggerOnce direction='down'>
							<div className='d-flex flex-row justify-content-center align-items-center'>
								<div className='image-border'>
									<div className='image' />
								</div>
								<div className='title-text '>
									<div className='intro xanh-mono'>Hello, my name is </div>
									<h1 className='name'>Yangle Xue,</h1>
									<div className='intro xanh-mono'>also known as Vina.</div>
									<div className='intro xanh-mono'>I am a junior studying Electrical and Computer Engineering and a future Software Developer. </div>
								</div>
							</div>
						</Slide>
						<div>
							<ExpandMore className='button-type expand-btn'
								style={{ fontSize: 60 }}
								onClick={() => scrollToComponent(this.Skills, { offset: 0, align: 'top', duration: 100 })} />
						</div>
					</div>
					<hr className='divide' />
					<section className='skills text-left' ref={(section => { this.Skills = section })}>
						<div className='section d-flex justify-content-center align-items-center flex-column'>
							<table>
								<tbody>
									<tr>
										<td className='table-elem'>
											<h5 className='intro xanh-mono subtitle'>Tools I have worked with: </h5>
										</td>
										<td className='table-elem'>
											<h5 className='intro xanh-mono subtitle'>Languages I am proficient in: </h5>
										</td>
									</tr>
									<tr>
										<td className='table-elem'>
											<ul className="dashed tools">
												<li className="list-item xanh-mono">Java</li>
												<li className="list-item xanh-mono">C</li>
												<li className="list-item xanh-mono">C++</li>
												<li className="list-item xanh-mono">JavaScript</li>
												<li className="list-item xanh-mono">Linux</li>
												<li className="list-item xanh-mono">React.js</li>
												<li className="list-item xanh-mono">Flask</li>
												<li className="list-item xanh-mono">MySQL Workbench</li>
												<li className="list-item xanh-mono">HTML/CSS</li>
												<li className="list-item xanh-mono">Bootstrap</li>
												<li className="list-item xanh-mono">Android Studio</li>
												<li className="list-item xanh-mono">Python</li>
												<li className="list-item xanh-mono">Adobe Photoshop</li>
											</ul>
										</td>
										<td className='table-elem'>
											<ul className="dashed">
												<li className="list-item xanh-mono">Chinese (Mandarin)</li>
												<li className="list-item xanh-mono">English</li>
											</ul>
										</td>
									</tr>
								</tbody>
							</table>
							<div>
								<ExpandMore className='button-type expand-btn'
									style={{ fontSize: 60 }}
									onClick={() => scrollToComponent(this.Experience, { offset: 0, align: 'top', duration: 100 })} />
							</div>
						</div>
						<hr className='divide' />
					</section>
					<section className='experience text-left' ref={(section => { this.Experience = section })}>
						<div className='section d-flex justify-content-center align-items-center flex-column'>
							<h5 className='intro xanh-mono subtitle'>Experiences and Projects</h5>
							<div className='col-9 col-lg-8 col-xl-8'>
								<div className='row row-cols-1 row-cols-sm-2 row-cols-md-2 row-cols-lg-3 row-cols-xl-3 justify-content-center'>
									{this.state.experiences.map((exp) =>
										<Experience
											experience={exp} />
									)}
								</div>
							</div>
							<div>
								<ExpandMore className='button-type expand-btn'
									style={{ fontSize: 60 }}
									onClick={() => scrollToComponent(this.Connect, { offset: 0, align: 'top', duration: 100 })} />
							</div>
						</div>
						<hr className='divide' />
					</section>
					<section className='connect text-left' ref={(section => { this.Connect = section })}>
						<div className='section d-flex justify-content-center align-items-center flex-column'>
							<div className=' d-flex justify-content-center align-items-center flex-column'>
								<h5 className='intro xanh-mono subtitle'>Connect with Me</h5>
								<div className='text-left'>
									<div className='xanh-mono intro'>Email: <a target='_blank' href='mailto:yanglexue@gmail.com'>yanglexue@gmail.com</a></div>
									<div className='xanh-mono intro'>LinkedIn: <a target='_blank' href='https://www.linkedin.com/in/yangle-xue/'>www.linkedin.com/in/yangle-xue</a></div>
									<div className='xanh-mono intro'>GitHub: <a target='_blank' href='https://github.com/vinaxue'>github.com/vinaxue</a></div>
								</div>
							</div>
						</div>
					</section>
				</div>
			</div>
		)
	}
}

export default Introduction