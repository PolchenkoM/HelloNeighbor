export default function Event({ name, description, date }) {
	return (
		<>
			<div className='container'>
				<div className='event'>
					<h1 className='event__title'>Event Name</h1>
					<div className='event__content-main'>
						<div className='event__photos'>
							<div className='carousel'>
								<div class='carousel__item'>
									<img
										className='carousel__image'
										src='./img/caruselPhotos/image1.jpeg'
										alt='RANDOM PHOTO'
									/>
								</div>
								<div class='carousel__item'>
									<img
										className='carousel__image'
										src='./img/caruselPhotos/image3.jpeg'
										alt='RANDOM PHOTO'
									/>
								</div>
								<div class='carousel__item'>
									<img
										className='carousel__image'
										src='./img/caruselPhotos/image4.jpeg'
										alt='RANDOM PHOTO'
									/>
								</div>
								<div class='carousel__item'>
									<img
										className='carousel__image'
										src='./img/caruselPhotos/image5.jpeg'
										alt='RANDOM PHOTO'
									/>
								</div>
							</div>
						</div>
						<div className='content-main'>
							<p className='event__description'>
								Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi
								sapiente assumenda tempore earum a exercitationem cum,
								aspernatur ipsum ad eligendi mollitia consequatur, eaque
								accusamus architecto doloremque molestias aut minima eos!
							</p>
              <hr />
							<ul className='event__tags'>
								<li className="event__tag">#JS</li>
								<li className="event__tag">#Смузи</li>
								<li className="event__tag">#Чипсы</li>
								<li className="event__tag">#Курятина</li>
							</ul>
						</div>
					</div>
					<div className='event__content-bottom'>
						<ul className='event-members'>
							<li className='event-members__member'></li>
							<li className='event-members__member'></li>
							<li className='event-members__member'></li>
						</ul>
						<span className='event__date'>07.06.2021</span>
					</div>
				</div>
			</div>
		</>
	)
}
