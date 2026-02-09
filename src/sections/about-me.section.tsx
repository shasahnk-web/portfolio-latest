import { SectionTitle } from '../components/section-title.component';

const timeline = [
	{
		title: 'Certification',
		items: [
			{
				title: 'SMART TRAFFIC CONTROL SYSTEM & CS ID',
				place: 'SIH',
				timePeriod: '2025',
				description: (
					<ul>
						<li>Developed an innovative Smart Traffic Control System solution.</li>
						<li>Recognized as CS ID for excellence in innovation.</li>
					</ul>
				),
			},
		],
	},
	{
		title: 'Education',
		items: [
			{
				title: 'B.TECH 2ND YEAR',
				place: 'MPDREC GONDA',
				timePeriod: '2025',
				description: '',
			},
		],
	},
];

export const AboutMe = () => {
	return (
		<section
			className='about-me container'
			id='about-me'
		>
			<div>
				<SectionTitle
					title='About'
					subTitle='ME'
				/>
			</div>
			<div>
				<div className='intro'>
					<p style={{ marginTop: '20px' }}>
						👋 Hey, I'm Aayush, a Full Stack Developer.
					</p>
					<p>
						I've been working with <strong>React</strong> and{' '}
						<strong>Node</strong> for the past <strong>three years</strong>,
						building web applications that are fast, scalable and user-friendly.
					</p>
					<p>
						I like solving problems, learning new things, and experimenting with
						different technologies. When I'm not coding, I'm probably working on
						a side project or exploring something new.
					</p>
				</div>
				<div>
					{timeline.map(({ items, title }, idx) => (
						<div
							className='timeline'
							key={idx}
						>
							<h1>{title}</h1>
							{items.map(({ title, place, timePeriod, description }, idx) => (
								<div
									className='timeline-list'
									key={idx}
								>
									<div className='timeline-item'>
										<p className='designation'>{title}</p>
										<p className='place'>
											{place} | {timePeriod}
										</p>
										<div className='timeline-description'>{description}</div>
									</div>
								</div>
							))}
						</div>
					))}
				</div>
			</div>
		</section>
	);
};
