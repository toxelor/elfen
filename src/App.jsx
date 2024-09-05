import './App.css'
import './header.css'
import './cards.css'
import './categories.css'
import './filters.css'
import './stripes.css'
import './blog.css'
import './item-card.css'
import './cart.css'
import './favorite.css'
import './login.css'
import './registration.css'
import './contacts.css'
import './payment.css'
import './payment-thanks.css'
import './search.css'
import { useEffect } from 'react'
import { styled, Box } from '@mui/system';
import { Slider as BaseSlider, sliderClasses } from '@mui/base/Slider';
import lamp1 from './assets/furniture/lamp1.png'
import lamp2 from './assets/furniture/lamp2.png'
import lamp3 from './assets/furniture/lamp3.png'
import lamp4 from './assets/furniture/lamp4.png'
import lamp5 from './assets/furniture/lamp5.png'
import lamp6 from './assets/furniture/lamp6.png'
import lamp7 from './assets/furniture/lamp7.png'

import mirror1 from './assets/furniture/mirror1.png'
import mirror2 from './assets/furniture/mirror2.png'
import mirror3 from './assets/furniture/mirror3.png'
import mirror4 from './assets/furniture/mirror4.png'
import mirror5 from './assets/furniture/mirror5.png'
import mirror6 from './assets/furniture/mirror6.png'

import chair1 from './assets/furniture/chair1.png'
import chair2 from './assets/furniture/chair2.png'
import chair3 from './assets/furniture/chair3.png'
import chair4 from './assets/furniture/chair4.png'
import chair5 from './assets/furniture/chair5.png'
import chair6 from './assets/furniture/chair6.png'

import table1 from './assets/furniture/table1.png'
import table2 from './assets/furniture/table2.png'
import table3 from './assets/furniture/table3.png'
import table4 from './assets/furniture/table4.png'
import table5 from './assets/furniture/table5.png'
import table6 from './assets/furniture/table6.png'
import table7 from './assets/furniture/table7.png'

import blog1 from './assets/furniture/blog1.png'
import blog2 from './assets/furniture/blog2.png'
import blog3 from './assets/furniture/blog3.png'

import map from './assets/map.png'
import CircleType from 'circletype';


function valuetext(value) {
	return `${value}°C`;
}

function App() {

	  const Slider = styled(BaseSlider)(
		() => `
		color:#d9ff5a;
		height: 6px;
		width: 100%;
		padding: 16px 0;
		display: inline-flex;
		align-items: center;
		position: relative;
		cursor: pointer;
		touch-action: none;
		-webkit-tap-highlight-color: transparent;
	  
	  
		& .${sliderClasses.rail} {
		  display: block;
		  position: absolute;
		  width: 100%;
		  height: 4px;
		  border-radius: 6px;
		  background-color: #ffffff;
		  opacity: 0.3;
		}
	  
		& .${sliderClasses.track} {
		  display: block;
		  position: absolute;
		  height: 4px;
		  border-radius: 6px;
		  background-color: #d9ff5a;
		}
	  
		& .${sliderClasses.thumb} {
		  display: flex;
		  align-items: center;
		  justify-content: center;
		  position: absolute;
		  margin-left: -6px;
		  width: 10px;
		  height: 10px;
		  box-sizing: border-box;
		  border-radius: 50%;
		  outline: 0;
		  background-color: #d9ff5a;
		  padding: 4px 4px;
		  border: 1px solid #d9ff5a;
		  transition-property: box-shadow, transform;
		  transition-timing-function: ease;
		  transition-duration: 120ms;
		  transform-origin: center;
		  position: relative;
		  box-shadow: 0 0 10px 6px rgba(0, 0, 0, 0.2);

		  &::after {
		  	content: "";
			position: absolute;
			width: 20px;
			height: 20px;
			border-radius: 25px;
			border: 2px solid #d9ff5a;
		  }
	  
		  &.${sliderClasses.active} {
			transform: scale(1.2);
		  }
		}
	  `,
	  )

	  function SliderValueLabel({ children }) {
		return (
		  <span className="label">
			<div className="value">{children}</div>
		  </span>
		);
	  }

	let allCategories = undefined
	let allResulstWrappers = undefined

	useEffect(() => {
		Array.from(document.getElementsByClassName('category-arc')).map((item) => {
			const arc = new CircleType(item)
			arc.radius(300)
			arc.destroy.bind(arc)
		})
	})

	useEffect(() => {
		allCategories = Array.from(document.getElementsByClassName('category'))
		allResulstWrappers = Array.from(document.getElementsByClassName('results-wrapper'))
	})

	const toggleActive = (index) => {
		allCategories.map((item) => item.classList.remove("active"))
		allCategories[index].classList.add("active")
		allResulstWrappers.map((item) => item.classList.remove("active"))
		allResulstWrappers[index].classList.add("active")
		document.getElementsByClassName('filter-options')[0].classList.remove('active')
	}

	const toggleFilters = (index) => {
		document.getElementsByClassName('filters-svg')[index].classList.toggle('active')
		document.getElementsByClassName('filter-options')[0].classList.toggle('active')

	}
	
	const closeCard = () => {
		document.getElementsByClassName('item-card-wrapper')[0].classList.toggle('active')
		document.body.classList.toggle('lock')
	}

	const toggleLike = (event) => {
		document.getElementsByClassName('like-button-div')[0].classList.toggle('active')
	}

	const toggleCart = () => {
		document.getElementsByClassName('cart-wrapper')[0].classList.toggle('active')
		document.getElementsByClassName('favorite-wrapper')[0].classList.remove('active')
	}

	const toggleFavorite = () => {
		document.getElementsByClassName('favorite-wrapper')[0].classList.toggle('active')
		document.getElementsByClassName('cart-wrapper')[0].classList.remove('active')
	}

	const toggleLogin = () => {
		document.getElementsByClassName('login-wrapper')[0].classList.toggle('active')
		document.getElementsByClassName('registration-wrapper')[0].classList.remove('active')
	}

	const toggleRegistration = () => {
		document.getElementsByClassName('login-wrapper')[0].classList.remove('active')
		document.getElementsByClassName('registration-wrapper')[0].classList.toggle('active')
	}

	const toggleContacts = () => {
		document.getElementsByClassName('contacts-wrapper')[0].classList.toggle('active')
		document.body.classList.toggle('lock')
	}

	const toPayment = () => {
		document.getElementsByClassName('payment-wrapper')[0].classList.add('active')
		document.getElementsByClassName('header')[0].classList.add('active')
		document.getElementsByClassName('cart-wrapper')[0].classList.remove('active')
		document.body.classList.add('lock')
	}

	const closePayment = () => {
		document.getElementsByClassName('payment-wrapper')[0].classList.remove('active')
		document.getElementsByClassName('header')[0].classList.remove('active')
		document.body.classList.remove('lock')
	}

	const showThanks = () => {
		document.getElementsByClassName('payment-wrapper')[0].classList.remove('active')
		document.getElementsByClassName('payment-thanks-wrapper')[0].classList.add('active')
		setTimeout(() => {
			document.getElementsByClassName('payment-thanks-wrapper')[0].classList.remove('active')
			document.getElementsByClassName('header')[0].classList.remove('active')
			document.body.classList.remove('lock')
		}, 3000)
	}

	const toggleSearch = () => {
		document.getElementsByClassName('search-wrapper')[0].classList.toggle('active')
		document.getElementsByClassName('search-wrapper')[0].classList.remove('searched')
		document.getElementsByClassName('search-result-wrapper')[0].classList.remove('active')
		document.getElementsByClassName('search-result-empty-wrapper')[0].classList.remove('active')
		document.getElementsByClassName('header')[0].classList.toggle('active')
	}

	const search = () => {
		document.getElementsByClassName('search-result-empty-wrapper')[0].classList.remove('active')
		document.getElementsByClassName('search-result-wrapper')[0].classList.remove('active')
		const input = document.getElementsByClassName('search-input')[0].value.toLowerCase()
		if (input.includes('зеркало напольное')) {
			document.getElementsByClassName('search-wrapper')[0].classList.add('searched')
			document.getElementsByClassName('search-result-wrapper')[0].classList.add('active')
			document.getElementsByClassName('header')[0].classList.add('active')
		} else {
			document.getElementsByClassName('search-wrapper')[0].classList.add('searched')
			document.getElementsByClassName('search-result-empty-wrapper')[0].classList.add('active')
			document.getElementsByClassName('header')[0].classList.add('active')
		}

	}

	return (
		<div className='wrapper'>
			<header className='header'>
				<span style={{cursor: "pointer"}} onClick={closePayment} className='company-name'>Elfen lied</span>
				<div className='catalogue-div'>
					<svg width="15" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
						<circle cx="3" cy="3.32324" r="3" fill="white"/>
						<circle cx="12" cy="3.32324" r="3" fill="white"/>
						<circle cx="12" cy="12.3232" r="3" fill="white"/>
						<circle cx="3" cy="12.3232" r="3" fill="white"/>
					</svg>

					<span>Каталог</span>
				</div>

				<div className='info-div'>
					<span>
						Новости
					</span>
					<span style={{cursor: "pointer"}} onClick={toggleContacts}>
						Контакты
					</span>
				</div>
				<div style={{cursor: "pointer"}} onClick={toggleSearch} className='search-div'>
					<svg width="26" height="27" viewBox="0 0 26 27" fill="none" xmlns="http://www.w3.org/2000/svg">
						<path d="M11.5 20.3335C16.1944 20.3335 20 16.5279 20 11.8335C20 7.13908 16.1944 3.3335 11.5 3.3335C6.80558 3.3335 3 7.13908 3 11.8335C3 16.5279 6.80558 20.3335 11.5 20.3335Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
						<path d="M23 23.3335L18 18.3335" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
					</svg>

					<span>
						Поиск
					</span>
				</div>
				<div  className='interactions-div'>
					<svg onClick={toggleFavorite} width="22" height="21" viewBox="0 0 22 21" fill="none" xmlns="http://www.w3.org/2000/svg">
						<path d="M15.884 0.326172C13.893 0.326172 12.111 1.31494 11 2.83179C9.889 1.31494 8.107 0.326172 6.116 0.326172C2.739 0.326172 0 3.13516 0 6.60707C0 7.94415 0.209 9.18011 0.572 10.3262C2.31 15.9441 7.667 19.3037 10.318 20.225C10.692 20.3599 11.308 20.3599 11.682 20.225C14.333 19.3037 19.69 15.9441 21.428 10.3262C21.791 9.18011 22 7.94415 22 6.60707C22 3.13516 19.261 0.326172 15.884 0.326172Z" fill="white"/>
					</svg>
					<svg onClick={toggleLogin} width="19" height="22" viewBox="0 0 19 22" fill="none" xmlns="http://www.w3.org/2000/svg">
						<path fill-rule="evenodd" clip-rule="evenodd" d="M14 5.32617C14 8.0876 11.7614 10.3262 9 10.3262C6.23858 10.3262 4 8.0876 4 5.32617C4 2.56475 6.23858 0.326172 9 0.326172C11.7614 0.326172 14 2.56475 14 5.32617ZM0 19.8262C0 15.6862 4.0396 13.3262 9 13.3262C13.9604 13.3262 18 15.6862 18 19.8262C18 20.9112 17.4157 21.3262 16.5149 21.3262H1.48515C1.07905 21.3262 0 21.3262 0 19.8262Z" fill="white"/>
					</svg>
					<svg onClick={toggleCart} width="21" height="23" viewBox="0 0 21 23" fill="none" xmlns="http://www.w3.org/2000/svg">
						<path fill-rule="evenodd" clip-rule="evenodd" d="M3.71513 3.01617L3.51817 5.46617C3.47877 5.93617 3.84315 6.32617 4.30601 6.32617H19.3833C19.7969 6.32617 20.1416 6.00617 20.1712 5.58617C20.2992 3.81617 18.9697 2.37617 17.2266 2.37617H5.12339C5.02491 1.93617 4.82795 1.51617 4.52266 1.16617C4.03026 0.636172 3.3409 0.326172 2.63184 0.326172H0.918289C0.51452 0.326172 0.179688 0.666172 0.179688 1.07617C0.179688 1.48617 0.51452 1.82617 0.918289 1.82617H2.63184C2.93713 1.82617 3.22273 1.95617 3.42953 2.17617C3.63634 2.40617 3.73482 2.70617 3.71513 3.01617ZM9.17969 20.3262C9.17969 21.4307 8.28426 22.3262 7.17969 22.3262C6.07512 22.3262 5.17969 21.4307 5.17969 20.3262C5.17969 19.2216 6.07512 18.3262 7.17969 18.3262C8.28426 18.3262 9.17969 19.2216 9.17969 20.3262ZM17.1797 20.3262C17.1797 21.4307 16.2843 22.3262 15.1797 22.3262C14.0751 22.3262 13.1797 21.4307 13.1797 20.3262C13.1797 19.2216 14.0751 18.3262 15.1797 18.3262C16.2843 18.3262 17.1797 19.2216 17.1797 20.3262ZM4.32925 8.32617H19.4005C19.8623 8.32617 20.216 8.70435 20.1767 9.15041L19.8525 13.6789C19.7444 15.1334 18.4475 16.3262 16.9738 16.3262H6.04859C4.36854 16.3262 3.05202 14.9104 3.18956 13.2522L3.54326 9.03405C3.58256 8.63647 3.9166 8.32617 4.32925 8.32617Z" fill="white"/>
					</svg>


				</div>
				
			</header>

			<div className='slides-div'>
				<div className='slide slide-1' onClick={closeCard}>
					<div className='slide-content'>
						<div className='slide-image-div'>
							<span className='slide-image-text'>Benjamin Moore</span>
							<img className='slide-image' src={lamp1}></img>
						</div>
						<div className='slide-info'>
							<div className='slide-info-alt'>
								<span className='slide-info-name slide-info-name-alt'>светильник</span>
									<span className='slide-info-desc slide-info-desc-alt'>Функциональная дизайнерская лампа для создания максимально 
									комфортного освещения</span>
									<span className='slide-info-lines lide-info-line-alt'></span>
									<span className='slide-info-price slide-info-price-alt'>150 000<span className='slide-info-ruble'>₽</span></span>
							</div>
							<div className='slide-info-content'>
								<span className='slide-info-name'>светильник</span>
								<span className='slide-info-desc'>Функциональная дизайнерская лампа для создания максимально 
								комфортного освещения</span>
								<span className='slide-info-line'></span>
								<span className='slide-info-price'>150 000<span className='slide-info-ruble'>₽</span></span>
							</div>
							<div className='slide-number'>
								<span className='slide-number-text'>Слайд</span>
								<span className='slide-number-numeric'>01</span>
							</div>
						</div>
						<button className='buy-button'>
									<svg className='buy-button-ellips buy-button-ellips-1' viewBox="0 0 200 100" xmlns="http://www.w3.org/2000/svg">
										<ellipse cx="100" cy="50" rx="100" ry="50" />
									</svg>
									<svg className='buy-button-ellips buy-button-ellips-2' viewBox="0 0 200 100" xmlns="http://www.w3.org/2000/svg">
										<ellipse cx="100" cy="50" rx="100" ry="50" />
									</svg>
								<div className='buy-button-content'>

									<svg className='buy-button-cart' viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
										<path d="M3.71513 3.01617L3.51817 5.46617C3.47877 5.93617 3.84315 6.32617 4.30601 6.32617H19.3833C19.7969 6.32617 20.1416 6.00617 20.1712 5.58617C20.2992 3.81617 18.9697 2.37617 17.2266 2.37617H5.12339C5.02491 1.93617 4.82795 1.51617 4.52266 1.16617C4.03026 0.636172 3.3409 0.326172 2.63184 0.326172H0.918289C0.51452 0.326172 0.179688 0.666172 0.179688 1.07617C0.179688 1.48617 0.51452 1.82617 0.918289 1.82617H2.63184C2.93713 1.82617 3.22273 1.95617 3.42953 2.17617C3.63634 2.40617 3.73482 2.70617 3.71513 3.01617ZM9.17969 20.3262C9.17969 21.4307 8.28426 22.3262 7.17969 22.3262C6.07512 22.3262 5.17969 21.4307 5.17969 20.3262C5.17969 19.2216 6.07512 18.3262 7.17969 18.3262C8.28426 18.3262 9.17969 19.2216 9.17969 20.3262ZM17.1797 20.3262C17.1797 21.4307 16.2843 22.3262 15.1797 22.3262C14.0751 22.3262 13.1797 21.4307 13.1797 20.3262C13.1797 19.2216 14.0751 18.3262 15.1797 18.3262C16.2843 18.3262 17.1797 19.2216 17.1797 20.3262ZM4.32925 8.32617H19.4005C19.8623 8.32617 20.216 8.70435 20.1767 9.15041L19.8525 13.6789C19.7444 15.1334 18.4475 16.3262 16.9738 16.3262H6.04859C4.36854 16.3262 3.05202 14.9104 3.18956 13.2522L3.54326 9.03405C3.58256 8.63647 3.9166 8.32617 4.32925 8.32617Z"/>
									</svg>
									<span className='buy-button-text'>
										Купить
									</span>

								</div>

						</button>
					</div>
					
				</div>
				<div className='slide slide-2' onClick={closeCard}>
					<div className='slide-content'>
						<div className='slide-image-div'>
							<span className='slide-image-text'>paint here glory</span>
							<img className='slide-image' src={chair1}></img>
						</div>
						<div className='slide-info'>
							<div className='slide-info-alt'>
								<span className='slide-info-name slide-info-name-alt'>кресло</span>
									<span className='slide-info-desc slide-info-desc-alt'>Функциональная дизайнерское кресло для создания максимально 
									уюта в помещении</span>
									<span className='slide-info-lines lide-info-line-alt'></span>
									<span className='slide-info-price slide-info-price-alt'>120 000<span className='slide-info-ruble'>₽</span></span>
							</div>
							<div className='slide-info-content'>
								<span className='slide-info-name'>кресло</span>
								<span className='slide-info-desc'>Функциональная дизайнерское кресло для создания максимально 
								уюта в помещении</span>
								<span className='slide-info-line'></span>
								<span className='slide-info-price'>120 000<span className='slide-info-ruble'>₽</span></span>
							</div>
							<div className='slide-number'>
								<span className='slide-number-text'>Слайд</span>
								<span className='slide-number-numeric'>02</span>
							</div>
						</div>
						<button className='buy-button'>
									<svg className='buy-button-ellips buy-button-ellips-1' viewBox="0 0 200 100" xmlns="http://www.w3.org/2000/svg">
										<ellipse cx="100" cy="50" rx="100" ry="50" />
									</svg>
									<svg className='buy-button-ellips buy-button-ellips-2' viewBox="0 0 200 100" xmlns="http://www.w3.org/2000/svg">
										<ellipse cx="100" cy="50" rx="100" ry="50" />
									</svg>
								<div className='buy-button-content'>

									<svg className='buy-button-cart' viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
										<path d="M3.71513 3.01617L3.51817 5.46617C3.47877 5.93617 3.84315 6.32617 4.30601 6.32617H19.3833C19.7969 6.32617 20.1416 6.00617 20.1712 5.58617C20.2992 3.81617 18.9697 2.37617 17.2266 2.37617H5.12339C5.02491 1.93617 4.82795 1.51617 4.52266 1.16617C4.03026 0.636172 3.3409 0.326172 2.63184 0.326172H0.918289C0.51452 0.326172 0.179688 0.666172 0.179688 1.07617C0.179688 1.48617 0.51452 1.82617 0.918289 1.82617H2.63184C2.93713 1.82617 3.22273 1.95617 3.42953 2.17617C3.63634 2.40617 3.73482 2.70617 3.71513 3.01617ZM9.17969 20.3262C9.17969 21.4307 8.28426 22.3262 7.17969 22.3262C6.07512 22.3262 5.17969 21.4307 5.17969 20.3262C5.17969 19.2216 6.07512 18.3262 7.17969 18.3262C8.28426 18.3262 9.17969 19.2216 9.17969 20.3262ZM17.1797 20.3262C17.1797 21.4307 16.2843 22.3262 15.1797 22.3262C14.0751 22.3262 13.1797 21.4307 13.1797 20.3262C13.1797 19.2216 14.0751 18.3262 15.1797 18.3262C16.2843 18.3262 17.1797 19.2216 17.1797 20.3262ZM4.32925 8.32617H19.4005C19.8623 8.32617 20.216 8.70435 20.1767 9.15041L19.8525 13.6789C19.7444 15.1334 18.4475 16.3262 16.9738 16.3262H6.04859C4.36854 16.3262 3.05202 14.9104 3.18956 13.2522L3.54326 9.03405C3.58256 8.63647 3.9166 8.32617 4.32925 8.32617Z"/>
									</svg>
									<span className='buy-button-text'>
										Купить
									</span>

								</div>

						</button>
					</div>
				</div>
				<div className='slide slide-3' onClick={closeCard}>
					<div className='slide-content'>
						<div className='slide-image-div'>
							<span className='slide-image-text'>Benjamin Moore</span>
							<img className='slide-image' src={table1}></img>
						</div>
						<div className='slide-info'>
							<div className='slide-info-alt'>
								<span className='slide-info-name slide-info-name-alt'>высокий стол</span>
									<span className='slide-info-desc slide-info-desc-alt'>Функциональная дизайнерская лампа для создания максимально 
									комфортного освещения</span>
									<span className='slide-info-lines lide-info-line-alt'></span>
									<span className='slide-info-price slide-info-price-alt'>235 000<span className='slide-info-ruble'>₽</span></span>
							</div>
							<div className='slide-info-content'>
								<span className='slide-info-name'>стол</span>
								<span className='slide-info-desc'>Функциональная дизайнерская лампа для создания максимально 
								комфортного освещения</span>
								<span className='slide-info-line'></span>
								<span className='slide-info-price'>235 000<span className='slide-info-ruble'>₽</span></span>
							</div>

							<div className='slide-number'>
								<span className='slide-number-text'>Слайд</span>
								<span className='slide-number-numeric'>03</span>
							</div>
							
						</div>
						<button className='buy-button'>
									<svg className='buy-button-ellips buy-button-ellips-1' viewBox="0 0 200 100" xmlns="http://www.w3.org/2000/svg">
										<ellipse cx="100" cy="50" rx="100" ry="50" />
									</svg>
									<svg className='buy-button-ellips buy-button-ellips-2' viewBox="0 0 200 100" xmlns="http://www.w3.org/2000/svg">
										<ellipse cx="100" cy="50" rx="100" ry="50" />
									</svg>
								<div className='buy-button-content'>

									<svg className='buy-button-cart' viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
										<path d="M3.71513 3.01617L3.51817 5.46617C3.47877 5.93617 3.84315 6.32617 4.30601 6.32617H19.3833C19.7969 6.32617 20.1416 6.00617 20.1712 5.58617C20.2992 3.81617 18.9697 2.37617 17.2266 2.37617H5.12339C5.02491 1.93617 4.82795 1.51617 4.52266 1.16617C4.03026 0.636172 3.3409 0.326172 2.63184 0.326172H0.918289C0.51452 0.326172 0.179688 0.666172 0.179688 1.07617C0.179688 1.48617 0.51452 1.82617 0.918289 1.82617H2.63184C2.93713 1.82617 3.22273 1.95617 3.42953 2.17617C3.63634 2.40617 3.73482 2.70617 3.71513 3.01617ZM9.17969 20.3262C9.17969 21.4307 8.28426 22.3262 7.17969 22.3262C6.07512 22.3262 5.17969 21.4307 5.17969 20.3262C5.17969 19.2216 6.07512 18.3262 7.17969 18.3262C8.28426 18.3262 9.17969 19.2216 9.17969 20.3262ZM17.1797 20.3262C17.1797 21.4307 16.2843 22.3262 15.1797 22.3262C14.0751 22.3262 13.1797 21.4307 13.1797 20.3262C13.1797 19.2216 14.0751 18.3262 15.1797 18.3262C16.2843 18.3262 17.1797 19.2216 17.1797 20.3262ZM4.32925 8.32617H19.4005C19.8623 8.32617 20.216 8.70435 20.1767 9.15041L19.8525 13.6789C19.7444 15.1334 18.4475 16.3262 16.9738 16.3262H6.04859C4.36854 16.3262 3.05202 14.9104 3.18956 13.2522L3.54326 9.03405C3.58256 8.63647 3.9166 8.32617 4.32925 8.32617Z"/>
									</svg>
									<span className='buy-button-text'>
										Купить
									</span>

								</div>

						</button>
					</div>
				</div>
			</div>

			<div className='categories-wrapper'>
				<div className='categories-name'>
					категории
				</div>

				
				<div className='categories-div'>
					<div className='category' onClick={() => toggleActive(0)}>
						<div className='category-image-div'>
							<svg className='category-image-frame' width="388" height="462" viewBox="0 0 388 462" fill="none" xmlns="http://www.w3.org/2000/svg">
								<path fill-rule="evenodd" clip-rule="evenodd" d="M83.6289 455.625C98.8589 469.226 121.265 458.556 132.088 441.241C146.648 417.948 169.193 403 194.5 403C219.626 403 242.029 417.735 256.598 440.741C267.533 458.011 290.025 468.583 305.196 454.884C355.264 409.675 388 334.764 388 250C388 243.069 382.224 237.709 375.336 236.937C355.438 234.707 337.984 226.446 330.992 211.451C321.908 191.971 330.108 169.463 348.347 150.371C357.937 140.333 362.795 125.802 356.517 113.42C321.885 45.1273 262.032 0 194 0C86.8568 0 0 111.929 0 250C0 335.229 33.0956 410.496 83.6289 455.625Z" fill="#CBB6FF"/>
							</svg>
							<img className='category-image' src={mirror1}/>
							
						</div>
						<div className='category-arc'>
							изготовление на заказ
						</div>
						<div className='category-quantity'>
							<svg className='category-quantity-ellips' width="81" height="75" viewBox="0 0 81 75" fill="none" xmlns="http://www.w3.org/2000/svg">
								<ellipse cx="40.3468" cy="37.3136" rx="40.5" ry="36" transform="rotate(-23 40.3468 37.3136)" fill="#FA8FEF"/>
							</svg>

							<div className='category-quantity-text'>
								<span className='category-quantity-number'>4</span><span>шт</span>
							</div>
						</div>
						<div className='category-name'>
							напольные зеркала
						</div>
						<div className='category-showbutton-div'>
							<button className='category-showbutton'>
								<svg className='category-arrow' width="22" height="34" viewBox="0 0 22 34" fill="none" xmlns="http://www.w3.org/2000/svg">
									<path d="M21 22.6667C19.94 22.6667 18.3571 23.7051 17.0286 24.7562C15.3143 26.1077 13.8186 27.7227 12.6771 29.5743C11.8214 30.9627 11 32.6457 11 34M11 34C11 32.6457 10.1786 30.9612 9.32286 29.5743C8.18 27.7227 6.68429 26.1077 4.97286 24.7562C3.64286 23.7051 2.05714 22.6667 1 22.6667M11 34L11 -1.11265e-06" stroke-width="2" stroke-linecap="round"/>
								</svg>
							</button>
						</div>

					</div>
					<div className='category' onClick={() => toggleActive(1)}>
						<div className='category-image-div'>
						<svg className='category-image-frame' width="388" height="462" viewBox="0 0 388 462" fill="none" xmlns="http://www.w3.org/2000/svg">
							<path fill-rule="evenodd" clip-rule="evenodd" d="M83.6289 455.625C98.8589 469.226 121.265 458.556 132.088 441.241C146.648 417.948 169.193 403 194.5 403C219.626 403 242.029 417.735 256.598 440.741C267.533 458.011 290.025 468.583 305.196 454.884C355.264 409.675 388 334.764 388 250C388 243.069 382.224 237.709 375.336 236.937C355.438 234.707 337.984 226.446 330.992 211.451C321.908 191.971 330.108 169.463 348.347 150.371C357.937 140.333 362.795 125.802 356.517 113.42C321.885 45.1273 262.032 0 194 0C86.8568 0 0 111.929 0 250C0 335.229 33.0956 410.496 83.6289 455.625Z" fill="#CBB6FF"/>
						</svg>
							<img className='category-image' src={lamp2}/>
							
						</div>
						<div className='category-arc'>
							изготовление на заказ
						</div>
						<div className='category-quantity'>
							<svg className='category-quantity-ellips' width="81" height="75" viewBox="0 0 81 75" fill="none" xmlns="http://www.w3.org/2000/svg">
								<ellipse cx="40.3468" cy="37.3136" rx="40.5" ry="36" transform="rotate(-23 40.3468 37.3136)" fill="#FA8FEF"/>
							</svg>

							<div className='category-quantity-text'>
								<span className='category-quantity-number'>4</span><span>шт</span>
							</div>
						</div>
						<div className='category-name'>
						торшеры и лампы
						</div>
						<div className='category-showbutton-div'>
							<button className='category-showbutton'>
								<svg className='category-arrow' width="22" height="34" viewBox="0 0 22 34" fill="none" xmlns="http://www.w3.org/2000/svg">
									<path d="M21 22.6667C19.94 22.6667 18.3571 23.7051 17.0286 24.7562C15.3143 26.1077 13.8186 27.7227 12.6771 29.5743C11.8214 30.9627 11 32.6457 11 34M11 34C11 32.6457 10.1786 30.9612 9.32286 29.5743C8.18 27.7227 6.68429 26.1077 4.97286 24.7562C3.64286 23.7051 2.05714 22.6667 1 22.6667M11 34L11 -1.11265e-06" stroke-width="2" stroke-linecap="round"/>
								</svg>
							</button>
						</div>

					</div>
					<div className='category' onClick={() => toggleActive(2)}>

						<div className='category-image-div'>
						<svg className='category-image-frame' width="388" height="462" viewBox="0 0 388 462" fill="none" xmlns="http://www.w3.org/2000/svg">
							<path fill-rule="evenodd" clip-rule="evenodd" d="M83.6289 455.625C98.8589 469.226 121.265 458.556 132.088 441.241C146.648 417.948 169.193 403 194.5 403C219.626 403 242.029 417.735 256.598 440.741C267.533 458.011 290.025 468.583 305.196 454.884C355.264 409.675 388 334.764 388 250C388 243.069 382.224 237.709 375.336 236.937C355.438 234.707 337.984 226.446 330.992 211.451C321.908 191.971 330.108 169.463 348.347 150.371C357.937 140.333 362.795 125.802 356.517 113.42C321.885 45.1273 262.032 0 194 0C86.8568 0 0 111.929 0 250C0 335.229 33.0956 410.496 83.6289 455.625Z" fill="#CBB6FF"/>
						</svg>
							<img className='category-image' src={chair2}/>
						</div>
						<div className='category-arc'>
							изготовление на заказ
						</div>
						<div className='category-quantity'>
							<svg className='category-quantity-ellips' width="81" height="75" viewBox="0 0 81 75" fill="none" xmlns="http://www.w3.org/2000/svg">
								<ellipse cx="40.3468" cy="37.3136" rx="40.5" ry="36" transform="rotate(-23 40.3468 37.3136)" fill="#FA8FEF"/>
							</svg>

							<div className='category-quantity-text'>
								<span className='category-quantity-number'>4</span><span>шт</span>
							</div>
						</div>
						<div className='category-name'>
						кресла
						и стулья
						</div>
						<div className='category-showbutton-div'>
							<button className='category-showbutton'>
								<svg className='category-arrow' width="22" height="34" viewBox="0 0 22 34" fill="none" xmlns="http://www.w3.org/2000/svg">
									<path d="M21 22.6667C19.94 22.6667 18.3571 23.7051 17.0286 24.7562C15.3143 26.1077 13.8186 27.7227 12.6771 29.5743C11.8214 30.9627 11 32.6457 11 34M11 34C11 32.6457 10.1786 30.9612 9.32286 29.5743C8.18 27.7227 6.68429 26.1077 4.97286 24.7562C3.64286 23.7051 2.05714 22.6667 1 22.6667M11 34L11 -1.11265e-06" stroke-width="2" stroke-linecap="round"/>
								</svg>
							</button>
						</div>

					</div>
					<div className='category' onClick={() => toggleActive(3)}>

						<div className='category-image-div'>
						<svg className='category-image-frame' width="388" height="462" viewBox="0 0 388 462" fill="none" xmlns="http://www.w3.org/2000/svg">
							<path fill-rule="evenodd" clip-rule="evenodd" d="M83.6289 455.625C98.8589 469.226 121.265 458.556 132.088 441.241C146.648 417.948 169.193 403 194.5 403C219.626 403 242.029 417.735 256.598 440.741C267.533 458.011 290.025 468.583 305.196 454.884C355.264 409.675 388 334.764 388 250C388 243.069 382.224 237.709 375.336 236.937C355.438 234.707 337.984 226.446 330.992 211.451C321.908 191.971 330.108 169.463 348.347 150.371C357.937 140.333 362.795 125.802 356.517 113.42C321.885 45.1273 262.032 0 194 0C86.8568 0 0 111.929 0 250C0 335.229 33.0956 410.496 83.6289 455.625Z" fill="#CBB6FF"/>
						</svg>
							<img className='category-image' src={table2}/>
						</div>
						<div className='category-arc'>
							изготовление на заказ
						</div>
						<div className='category-quantity'>
							<svg className='category-quantity-ellips' width="81" height="75" viewBox="0 0 81 75" fill="none" xmlns="http://www.w3.org/2000/svg">
								<ellipse cx="40.3468" cy="37.3136" rx="40.5" ry="36" transform="rotate(-23 40.3468 37.3136)" fill="#FA8FEF"/>
							</svg>

							<div className='category-quantity-text'>
								<span className='category-quantity-number'>4</span><span>шт</span>
							</div>
						</div>
						<div className='category-name'>
						столы
						и тумбы
						</div>
						<div className='category-showbutton-div'>
							<button className='category-showbutton'>
								<svg className='category-arrow' width="22" height="34" viewBox="0 0 22 34" fill="none" xmlns="http://www.w3.org/2000/svg">
									<path d="M21 22.6667C19.94 22.6667 18.3571 23.7051 17.0286 24.7562C15.3143 26.1077 13.8186 27.7227 12.6771 29.5743C11.8214 30.9627 11 32.6457 11 34M11 34C11 32.6457 10.1786 30.9612 9.32286 29.5743C8.18 27.7227 6.68429 26.1077 4.97286 24.7562C3.64286 23.7051 2.05714 22.6667 1 22.6667M11 34L11 -1.11265e-06" stroke-width="2" stroke-linecap="round"/>
								</svg>
							</button>
						</div>

					</div>
				</div>
			
				<div className='filter-options'>
						<div className='filters-first-block'>
							<span className='filters-first-block-heading'>Цена</span>
							<div className='filters-first-block-pricing'>
								<span>от 67 000</span>
								<span>до 521 000</span>
							</div>

							<Box>
								<Slider
									defaultValue={[67000, 521000]}
									getAriaLabel={() => 'Temperature range'}
									getAriaValueText={valuetext}
									min={0}
									max={1000000}
									slots={{ valueLabel: SliderValueLabel }}
								/>
							</Box>
						</div>

						<div className='filters-second-block'>
							<span className='filters-name'>
								цвета
							</span>
							<div className='color-wrapper'>
								<div className='radio-color'>
									<input type='radio'/>
									<span>Зеленый <span className='color-quantity'>(580)</span></span>
								</div>
								<div className='radio-color'>
									<input type='radio'/>
									<span>Синий <span className='color-quantity'>(1296)</span></span>
								</div>
								<div className='radio-color'>
									<input type='radio'/>
									<span>Оранжевый <span className='color-quantity'>(2340)</span></span>
								</div>
								<div className='radio-color'>
									<input type='radio'/>
									<span>Розовый <span className='color-quantity'>(656)</span></span>
								</div>
								<div className='radio-color'>
									<input type='radio'/>
									<span>Лавандовый <span className='color-quantity'>(1)</span></span>
								</div>
								<div className='radio-color'>
									<input type='radio'/>
									<span>Голубой <span className='color-quantity'>(113)</span></span>
								</div>
							</div>
						</div>
						</div>
				
			</div>
			<div className='results-wrapper'>
				<div className='results-header'>
					<div className='filters-div'>
						<div className='filters-name-div' onClick={() => toggleFilters(0)}>
							<svg className='filters-svg' width="20" height="21" viewBox="-1 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
								<path d="M18.8889 0H1.11111C0.816426 0 0.533811 0.116448 0.325437 0.323727C0.117063 0.531005 0 0.812136 0 1.10527V3.96793C0 4.54598 0.236667 5.11409 0.647778 5.52304L6.66667 11.5103V19.8949C6.66688 20.0832 6.71542 20.2683 6.80767 20.4328C6.89992 20.5972 7.03283 20.7355 7.19382 20.8346C7.35482 20.9336 7.53857 20.9902 7.72767 20.9988C7.91677 21.0075 8.10497 20.968 8.27444 20.8841L12.7189 18.6736C13.0956 18.4857 13.3333 18.1032 13.3333 17.6843V11.5103L19.3522 5.52304C19.7633 5.11409 20 4.54598 20 3.96793V1.10527C20 0.812136 19.8829 0.531005 19.6746 0.323727C19.4662 0.116448 19.1836 0 18.8889 0Z"/>
							</svg>
							<span className='filters-name'>
								фильтры
							</span>
						</div>
					</div>
					<span>20 позиций в категории</span>
					
				</div>
				<div className='results-div'>
						<div className='result'>
							<div className='result-image-div'>
								<img className='result-image' src={mirror2}/>
								<span style={{backgroundColor: "rgba(165, 212, 255, 1)"}} className='result-color'></span>
							</div>
							<span className='result-name'>Kristin</span>
							<span className='result-description'>Зеркало напольное</span>
							<div className='result-pricing'>
								<span className='result-price'>150 000 <span className='result-ruble'>₽</span></span>
								<div className='result-buy'>
									<svg className='result-cart' viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
										<path d="M3.71513 3.01617L3.51817 5.46617C3.47877 5.93617 3.84315 6.32617 4.30601 6.32617H19.3833C19.7969 6.32617 20.1416 6.00617 20.1712 5.58617C20.2992 3.81617 18.9697 2.37617 17.2266 2.37617H5.12339C5.02491 1.93617 4.82795 1.51617 4.52266 1.16617C4.03026 0.636172 3.3409 0.326172 2.63184 0.326172H0.918289C0.51452 0.326172 0.179688 0.666172 0.179688 1.07617C0.179688 1.48617 0.51452 1.82617 0.918289 1.82617H2.63184C2.93713 1.82617 3.22273 1.95617 3.42953 2.17617C3.63634 2.40617 3.73482 2.70617 3.71513 3.01617ZM9.17969 20.3262C9.17969 21.4307 8.28426 22.3262 7.17969 22.3262C6.07512 22.3262 5.17969 21.4307 5.17969 20.3262C5.17969 19.2216 6.07512 18.3262 7.17969 18.3262C8.28426 18.3262 9.17969 19.2216 9.17969 20.3262ZM17.1797 20.3262C17.1797 21.4307 16.2843 22.3262 15.1797 22.3262C14.0751 22.3262 13.1797 21.4307 13.1797 20.3262C13.1797 19.2216 14.0751 18.3262 15.1797 18.3262C16.2843 18.3262 17.1797 19.2216 17.1797 20.3262ZM4.32925 8.32617H19.4005C19.8623 8.32617 20.216 8.70435 20.1767 9.15041L19.8525 13.6789C19.7444 15.1334 18.4475 16.3262 16.9738 16.3262H6.04859C4.36854 16.3262 3.05202 14.9104 3.18956 13.2522L3.54326 9.03405C3.58256 8.63647 3.9166 8.32617 4.32925 8.32617Z"/>
									</svg>
									<span>Купить</span>
								</div>
							</div>
						</div>



						<div className='result'>
							<div className='result-image-div'>
								<img className='result-image' src={mirror3}/>
								<span style={{backgroundColor: "rgba(240, 179, 234, 1)"}} className='result-color'></span>
							</div>
							<span className='result-name'>Arlene</span>
							<span className='result-description'>Зеркало напольное</span>
							<div className='result-pricing'>
								<span className='result-price'>150 000 <span className='result-ruble'>₽</span></span>
								<div className='result-buy'>
									<svg className='result-cart' viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
										<path d="M3.71513 3.01617L3.51817 5.46617C3.47877 5.93617 3.84315 6.32617 4.30601 6.32617H19.3833C19.7969 6.32617 20.1416 6.00617 20.1712 5.58617C20.2992 3.81617 18.9697 2.37617 17.2266 2.37617H5.12339C5.02491 1.93617 4.82795 1.51617 4.52266 1.16617C4.03026 0.636172 3.3409 0.326172 2.63184 0.326172H0.918289C0.51452 0.326172 0.179688 0.666172 0.179688 1.07617C0.179688 1.48617 0.51452 1.82617 0.918289 1.82617H2.63184C2.93713 1.82617 3.22273 1.95617 3.42953 2.17617C3.63634 2.40617 3.73482 2.70617 3.71513 3.01617ZM9.17969 20.3262C9.17969 21.4307 8.28426 22.3262 7.17969 22.3262C6.07512 22.3262 5.17969 21.4307 5.17969 20.3262C5.17969 19.2216 6.07512 18.3262 7.17969 18.3262C8.28426 18.3262 9.17969 19.2216 9.17969 20.3262ZM17.1797 20.3262C17.1797 21.4307 16.2843 22.3262 15.1797 22.3262C14.0751 22.3262 13.1797 21.4307 13.1797 20.3262C13.1797 19.2216 14.0751 18.3262 15.1797 18.3262C16.2843 18.3262 17.1797 19.2216 17.1797 20.3262ZM4.32925 8.32617H19.4005C19.8623 8.32617 20.216 8.70435 20.1767 9.15041L19.8525 13.6789C19.7444 15.1334 18.4475 16.3262 16.9738 16.3262H6.04859C4.36854 16.3262 3.05202 14.9104 3.18956 13.2522L3.54326 9.03405C3.58256 8.63647 3.9166 8.32617 4.32925 8.32617Z"/>
									</svg>
									<span>Купить</span>
								</div>
							</div>
						</div>
						<div className='result'>
							<div className='result-image-div'>
								<img className='result-image' src={mirror4}/>
								<span style={{backgroundColor: "rgba(142, 205, 250, 1)"}} className='result-color'></span>
							</div>
							<span className='result-name'>Colleen</span>
							<span className='result-description'>Зеркало напольное</span>
							<div className='result-pricing'>
								<span className='result-price'>150 000 <span className='result-ruble'>₽</span></span>
								<div className='result-buy'>
									<svg className='result-cart' viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
										<path d="M3.71513 3.01617L3.51817 5.46617C3.47877 5.93617 3.84315 6.32617 4.30601 6.32617H19.3833C19.7969 6.32617 20.1416 6.00617 20.1712 5.58617C20.2992 3.81617 18.9697 2.37617 17.2266 2.37617H5.12339C5.02491 1.93617 4.82795 1.51617 4.52266 1.16617C4.03026 0.636172 3.3409 0.326172 2.63184 0.326172H0.918289C0.51452 0.326172 0.179688 0.666172 0.179688 1.07617C0.179688 1.48617 0.51452 1.82617 0.918289 1.82617H2.63184C2.93713 1.82617 3.22273 1.95617 3.42953 2.17617C3.63634 2.40617 3.73482 2.70617 3.71513 3.01617ZM9.17969 20.3262C9.17969 21.4307 8.28426 22.3262 7.17969 22.3262C6.07512 22.3262 5.17969 21.4307 5.17969 20.3262C5.17969 19.2216 6.07512 18.3262 7.17969 18.3262C8.28426 18.3262 9.17969 19.2216 9.17969 20.3262ZM17.1797 20.3262C17.1797 21.4307 16.2843 22.3262 15.1797 22.3262C14.0751 22.3262 13.1797 21.4307 13.1797 20.3262C13.1797 19.2216 14.0751 18.3262 15.1797 18.3262C16.2843 18.3262 17.1797 19.2216 17.1797 20.3262ZM4.32925 8.32617H19.4005C19.8623 8.32617 20.216 8.70435 20.1767 9.15041L19.8525 13.6789C19.7444 15.1334 18.4475 16.3262 16.9738 16.3262H6.04859C4.36854 16.3262 3.05202 14.9104 3.18956 13.2522L3.54326 9.03405C3.58256 8.63647 3.9166 8.32617 4.32925 8.32617Z"/>
									</svg>
									<span>Купить</span>
								</div>
							</div>
						</div>
						<div className='result'>
							<div className='result-image-div'>
								<img className='result-image' src={mirror5}/>
								<span style={{backgroundColor: "rgba(251, 228, 202, 1)"}} className='result-color'></span>
							</div>
							<span className='result-name'>coppelia</span>
							<span className='result-description'>Зеркало напольное</span>
							<div className='result-pricing'>
								<span className='result-price'>150 000 <span className='result-ruble'>₽</span></span>
								<div className='result-buy'>
									<svg className='result-cart' viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
										<path d="M3.71513 3.01617L3.51817 5.46617C3.47877 5.93617 3.84315 6.32617 4.30601 6.32617H19.3833C19.7969 6.32617 20.1416 6.00617 20.1712 5.58617C20.2992 3.81617 18.9697 2.37617 17.2266 2.37617H5.12339C5.02491 1.93617 4.82795 1.51617 4.52266 1.16617C4.03026 0.636172 3.3409 0.326172 2.63184 0.326172H0.918289C0.51452 0.326172 0.179688 0.666172 0.179688 1.07617C0.179688 1.48617 0.51452 1.82617 0.918289 1.82617H2.63184C2.93713 1.82617 3.22273 1.95617 3.42953 2.17617C3.63634 2.40617 3.73482 2.70617 3.71513 3.01617ZM9.17969 20.3262C9.17969 21.4307 8.28426 22.3262 7.17969 22.3262C6.07512 22.3262 5.17969 21.4307 5.17969 20.3262C5.17969 19.2216 6.07512 18.3262 7.17969 18.3262C8.28426 18.3262 9.17969 19.2216 9.17969 20.3262ZM17.1797 20.3262C17.1797 21.4307 16.2843 22.3262 15.1797 22.3262C14.0751 22.3262 13.1797 21.4307 13.1797 20.3262C13.1797 19.2216 14.0751 18.3262 15.1797 18.3262C16.2843 18.3262 17.1797 19.2216 17.1797 20.3262ZM4.32925 8.32617H19.4005C19.8623 8.32617 20.216 8.70435 20.1767 9.15041L19.8525 13.6789C19.7444 15.1334 18.4475 16.3262 16.9738 16.3262H6.04859C4.36854 16.3262 3.05202 14.9104 3.18956 13.2522L3.54326 9.03405C3.58256 8.63647 3.9166 8.32617 4.32925 8.32617Z"/>
									</svg>
									<span>Купить</span>
								</div>
							</div>
						</div>
						<div className='result'>
							<div className='result-image-div'>
								<img className='result-image' src={mirror6}/>
								<span style={{backgroundColor: "rgba(240, 181, 250, 1)"}} className='result-color'></span>
							</div>
							<span className='result-name'>artemide</span>
							<span className='result-description'>Зеркало напольное</span>
							<div className='result-pricing'>
								<span className='result-price'>150 000 <span className='result-ruble'>₽</span></span>
								<div className='result-buy'>
									<svg className='result-cart' viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
										<path d="M3.71513 3.01617L3.51817 5.46617C3.47877 5.93617 3.84315 6.32617 4.30601 6.32617H19.3833C19.7969 6.32617 20.1416 6.00617 20.1712 5.58617C20.2992 3.81617 18.9697 2.37617 17.2266 2.37617H5.12339C5.02491 1.93617 4.82795 1.51617 4.52266 1.16617C4.03026 0.636172 3.3409 0.326172 2.63184 0.326172H0.918289C0.51452 0.326172 0.179688 0.666172 0.179688 1.07617C0.179688 1.48617 0.51452 1.82617 0.918289 1.82617H2.63184C2.93713 1.82617 3.22273 1.95617 3.42953 2.17617C3.63634 2.40617 3.73482 2.70617 3.71513 3.01617ZM9.17969 20.3262C9.17969 21.4307 8.28426 22.3262 7.17969 22.3262C6.07512 22.3262 5.17969 21.4307 5.17969 20.3262C5.17969 19.2216 6.07512 18.3262 7.17969 18.3262C8.28426 18.3262 9.17969 19.2216 9.17969 20.3262ZM17.1797 20.3262C17.1797 21.4307 16.2843 22.3262 15.1797 22.3262C14.0751 22.3262 13.1797 21.4307 13.1797 20.3262C13.1797 19.2216 14.0751 18.3262 15.1797 18.3262C16.2843 18.3262 17.1797 19.2216 17.1797 20.3262ZM4.32925 8.32617H19.4005C19.8623 8.32617 20.216 8.70435 20.1767 9.15041L19.8525 13.6789C19.7444 15.1334 18.4475 16.3262 16.9738 16.3262H6.04859C4.36854 16.3262 3.05202 14.9104 3.18956 13.2522L3.54326 9.03405C3.58256 8.63647 3.9166 8.32617 4.32925 8.32617Z"/>
									</svg>
									<span>Купить</span>
								</div>
							</div>
						</div>
					</div>
					<div className='result-load-button-div'>
						<button className='result-load-button'>
							<svg className='result-load-button-ellips' viewBox="0 0 200 100" xmlns="http://www.w3.org/2000/svg">
								<ellipse cx="100" cy="50" rx="100" ry="50" />
							</svg>
							<div className='result-load-button-content'>
								<span className='result-load-button-text'>Загрузить ещё</span>
								<svg className='result-load-button-arrow' width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
									<path d="M18.8377 14L12.8388 20L6.83984 14" stroke="#D9FF5A" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
									<path d="M12.8359 4V21" stroke="#D9FF5A" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
								</svg>
							</div>
						</button>
					</div>
			</div>
			


			<div className='results-wrapper'>
				<div className='results-header'>
				<div className='filters-div'>
						<div className='filters-name-div' onClick={() => toggleFilters(1)}>
							<svg className='filters-svg' width="20" height="21" viewBox="-1 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
								<path d="M18.8889 0H1.11111C0.816426 0 0.533811 0.116448 0.325437 0.323727C0.117063 0.531005 0 0.812136 0 1.10527V3.96793C0 4.54598 0.236667 5.11409 0.647778 5.52304L6.66667 11.5103V19.8949C6.66688 20.0832 6.71542 20.2683 6.80767 20.4328C6.89992 20.5972 7.03283 20.7355 7.19382 20.8346C7.35482 20.9336 7.53857 20.9902 7.72767 20.9988C7.91677 21.0075 8.10497 20.968 8.27444 20.8841L12.7189 18.6736C13.0956 18.4857 13.3333 18.1032 13.3333 17.6843V11.5103L19.3522 5.52304C19.7633 5.11409 20 4.54598 20 3.96793V1.10527C20 0.812136 19.8829 0.531005 19.6746 0.323727C19.4662 0.116448 19.1836 0 18.8889 0Z"/>
							</svg>
							<span className='filters-name'>
								фильтры
							</span>
						</div>
					</div>
					<span>20 позиций в категории</span>
					
				</div>
				<div className='results-div'>
						<div className='result'>
							<div className='result-image-div'>
								<img className='result-image' src={lamp3}/>
								<span style={{backgroundColor: "rgba(255, 196, 165, 1)"}} className='result-color'></span>
							</div>
							<span className='result-name'>aubrey</span>
							<span className='result-description'>Лампа настольная</span>
							<div className='result-pricing'>
								<span className='result-price'>150 000 <span className='result-ruble'>₽</span></span>
								<div className='result-buy'>
									<svg className='result-cart' viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
										<path d="M3.71513 3.01617L3.51817 5.46617C3.47877 5.93617 3.84315 6.32617 4.30601 6.32617H19.3833C19.7969 6.32617 20.1416 6.00617 20.1712 5.58617C20.2992 3.81617 18.9697 2.37617 17.2266 2.37617H5.12339C5.02491 1.93617 4.82795 1.51617 4.52266 1.16617C4.03026 0.636172 3.3409 0.326172 2.63184 0.326172H0.918289C0.51452 0.326172 0.179688 0.666172 0.179688 1.07617C0.179688 1.48617 0.51452 1.82617 0.918289 1.82617H2.63184C2.93713 1.82617 3.22273 1.95617 3.42953 2.17617C3.63634 2.40617 3.73482 2.70617 3.71513 3.01617ZM9.17969 20.3262C9.17969 21.4307 8.28426 22.3262 7.17969 22.3262C6.07512 22.3262 5.17969 21.4307 5.17969 20.3262C5.17969 19.2216 6.07512 18.3262 7.17969 18.3262C8.28426 18.3262 9.17969 19.2216 9.17969 20.3262ZM17.1797 20.3262C17.1797 21.4307 16.2843 22.3262 15.1797 22.3262C14.0751 22.3262 13.1797 21.4307 13.1797 20.3262C13.1797 19.2216 14.0751 18.3262 15.1797 18.3262C16.2843 18.3262 17.1797 19.2216 17.1797 20.3262ZM4.32925 8.32617H19.4005C19.8623 8.32617 20.216 8.70435 20.1767 9.15041L19.8525 13.6789C19.7444 15.1334 18.4475 16.3262 16.9738 16.3262H6.04859C4.36854 16.3262 3.05202 14.9104 3.18956 13.2522L3.54326 9.03405C3.58256 8.63647 3.9166 8.32617 4.32925 8.32617Z"/>
									</svg>
									<span>Купить</span>
								</div>
							</div>
						</div>



						<div className='result'>
							<div className='result-image-div'>
								<img className='result-image' src={lamp4}/>
								<span style={{backgroundColor: "rgba(136, 227, 121, 1)"}} className='result-color'></span>
							</div>
							<span className='result-name'>leslie</span>
							<span className='result-description'>Лампа настольная</span>
							<div className='result-pricing'>
								<span className='result-price'>150 000 <span className='result-ruble'>₽</span></span>
								<div className='result-buy'>
									<svg className='result-cart' viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
										<path d="M3.71513 3.01617L3.51817 5.46617C3.47877 5.93617 3.84315 6.32617 4.30601 6.32617H19.3833C19.7969 6.32617 20.1416 6.00617 20.1712 5.58617C20.2992 3.81617 18.9697 2.37617 17.2266 2.37617H5.12339C5.02491 1.93617 4.82795 1.51617 4.52266 1.16617C4.03026 0.636172 3.3409 0.326172 2.63184 0.326172H0.918289C0.51452 0.326172 0.179688 0.666172 0.179688 1.07617C0.179688 1.48617 0.51452 1.82617 0.918289 1.82617H2.63184C2.93713 1.82617 3.22273 1.95617 3.42953 2.17617C3.63634 2.40617 3.73482 2.70617 3.71513 3.01617ZM9.17969 20.3262C9.17969 21.4307 8.28426 22.3262 7.17969 22.3262C6.07512 22.3262 5.17969 21.4307 5.17969 20.3262C5.17969 19.2216 6.07512 18.3262 7.17969 18.3262C8.28426 18.3262 9.17969 19.2216 9.17969 20.3262ZM17.1797 20.3262C17.1797 21.4307 16.2843 22.3262 15.1797 22.3262C14.0751 22.3262 13.1797 21.4307 13.1797 20.3262C13.1797 19.2216 14.0751 18.3262 15.1797 18.3262C16.2843 18.3262 17.1797 19.2216 17.1797 20.3262ZM4.32925 8.32617H19.4005C19.8623 8.32617 20.216 8.70435 20.1767 9.15041L19.8525 13.6789C19.7444 15.1334 18.4475 16.3262 16.9738 16.3262H6.04859C4.36854 16.3262 3.05202 14.9104 3.18956 13.2522L3.54326 9.03405C3.58256 8.63647 3.9166 8.32617 4.32925 8.32617Z"/>
									</svg>
									<span>Купить</span>
								</div>
							</div>
						</div>
						<div className='result'>
							<div className='result-image-div'>
								<img className='result-image' src={lamp5}/>
								<span style={{backgroundColor: "rgba(250, 142, 239, 1)"}} className='result-color'></span>
							</div>
							<span className='result-name'>darrell</span>
							<span className='result-description'>Лампа настольная</span>
							<div className='result-pricing'>
								<span className='result-price'>150 000 <span className='result-ruble'>₽</span></span>
								<div className='result-buy'>
									<svg className='result-cart' viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
										<path d="M3.71513 3.01617L3.51817 5.46617C3.47877 5.93617 3.84315 6.32617 4.30601 6.32617H19.3833C19.7969 6.32617 20.1416 6.00617 20.1712 5.58617C20.2992 3.81617 18.9697 2.37617 17.2266 2.37617H5.12339C5.02491 1.93617 4.82795 1.51617 4.52266 1.16617C4.03026 0.636172 3.3409 0.326172 2.63184 0.326172H0.918289C0.51452 0.326172 0.179688 0.666172 0.179688 1.07617C0.179688 1.48617 0.51452 1.82617 0.918289 1.82617H2.63184C2.93713 1.82617 3.22273 1.95617 3.42953 2.17617C3.63634 2.40617 3.73482 2.70617 3.71513 3.01617ZM9.17969 20.3262C9.17969 21.4307 8.28426 22.3262 7.17969 22.3262C6.07512 22.3262 5.17969 21.4307 5.17969 20.3262C5.17969 19.2216 6.07512 18.3262 7.17969 18.3262C8.28426 18.3262 9.17969 19.2216 9.17969 20.3262ZM17.1797 20.3262C17.1797 21.4307 16.2843 22.3262 15.1797 22.3262C14.0751 22.3262 13.1797 21.4307 13.1797 20.3262C13.1797 19.2216 14.0751 18.3262 15.1797 18.3262C16.2843 18.3262 17.1797 19.2216 17.1797 20.3262ZM4.32925 8.32617H19.4005C19.8623 8.32617 20.216 8.70435 20.1767 9.15041L19.8525 13.6789C19.7444 15.1334 18.4475 16.3262 16.9738 16.3262H6.04859C4.36854 16.3262 3.05202 14.9104 3.18956 13.2522L3.54326 9.03405C3.58256 8.63647 3.9166 8.32617 4.32925 8.32617Z"/>
									</svg>
									<span>Купить</span>
								</div>
							</div>
						</div>
						<div className='result'>
							<div className='result-image-div'>
								<img className='result-image' src={lamp6}/>
								<span style={{backgroundColor: "rgba(41, 208, 217, 1)"}} className='result-color'></span>
							</div>
							<span className='result-name'>coppelia</span>
							<span className='result-description'>Лампа настольная</span>
							<div className='result-pricing'>
								<span className='result-price'>150 000 <span className='result-ruble'>₽</span></span>
								<div className='result-buy'>
									<svg className='result-cart' viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
										<path d="M3.71513 3.01617L3.51817 5.46617C3.47877 5.93617 3.84315 6.32617 4.30601 6.32617H19.3833C19.7969 6.32617 20.1416 6.00617 20.1712 5.58617C20.2992 3.81617 18.9697 2.37617 17.2266 2.37617H5.12339C5.02491 1.93617 4.82795 1.51617 4.52266 1.16617C4.03026 0.636172 3.3409 0.326172 2.63184 0.326172H0.918289C0.51452 0.326172 0.179688 0.666172 0.179688 1.07617C0.179688 1.48617 0.51452 1.82617 0.918289 1.82617H2.63184C2.93713 1.82617 3.22273 1.95617 3.42953 2.17617C3.63634 2.40617 3.73482 2.70617 3.71513 3.01617ZM9.17969 20.3262C9.17969 21.4307 8.28426 22.3262 7.17969 22.3262C6.07512 22.3262 5.17969 21.4307 5.17969 20.3262C5.17969 19.2216 6.07512 18.3262 7.17969 18.3262C8.28426 18.3262 9.17969 19.2216 9.17969 20.3262ZM17.1797 20.3262C17.1797 21.4307 16.2843 22.3262 15.1797 22.3262C14.0751 22.3262 13.1797 21.4307 13.1797 20.3262C13.1797 19.2216 14.0751 18.3262 15.1797 18.3262C16.2843 18.3262 17.1797 19.2216 17.1797 20.3262ZM4.32925 8.32617H19.4005C19.8623 8.32617 20.216 8.70435 20.1767 9.15041L19.8525 13.6789C19.7444 15.1334 18.4475 16.3262 16.9738 16.3262H6.04859C4.36854 16.3262 3.05202 14.9104 3.18956 13.2522L3.54326 9.03405C3.58256 8.63647 3.9166 8.32617 4.32925 8.32617Z"/>
									</svg>
									<span>Купить</span>
								</div>
							</div>
						</div>
						<div className='result'>
							<div className='result-image-div'>
								<img className='result-image' src={lamp7}/>
								<span style={{backgroundColor: "rgba(137, 213, 255, 1)"}} className='result-color'></span>
							</div>
							<span className='result-name'>artemide</span>
							<span className='result-description'>Лампа настольная</span>
							<div className='result-pricing'>
								<span className='result-price'>150 000 <span className='result-ruble'>₽</span></span>
								<div className='result-buy'>
									<svg className='result-cart' viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
										<path d="M3.71513 3.01617L3.51817 5.46617C3.47877 5.93617 3.84315 6.32617 4.30601 6.32617H19.3833C19.7969 6.32617 20.1416 6.00617 20.1712 5.58617C20.2992 3.81617 18.9697 2.37617 17.2266 2.37617H5.12339C5.02491 1.93617 4.82795 1.51617 4.52266 1.16617C4.03026 0.636172 3.3409 0.326172 2.63184 0.326172H0.918289C0.51452 0.326172 0.179688 0.666172 0.179688 1.07617C0.179688 1.48617 0.51452 1.82617 0.918289 1.82617H2.63184C2.93713 1.82617 3.22273 1.95617 3.42953 2.17617C3.63634 2.40617 3.73482 2.70617 3.71513 3.01617ZM9.17969 20.3262C9.17969 21.4307 8.28426 22.3262 7.17969 22.3262C6.07512 22.3262 5.17969 21.4307 5.17969 20.3262C5.17969 19.2216 6.07512 18.3262 7.17969 18.3262C8.28426 18.3262 9.17969 19.2216 9.17969 20.3262ZM17.1797 20.3262C17.1797 21.4307 16.2843 22.3262 15.1797 22.3262C14.0751 22.3262 13.1797 21.4307 13.1797 20.3262C13.1797 19.2216 14.0751 18.3262 15.1797 18.3262C16.2843 18.3262 17.1797 19.2216 17.1797 20.3262ZM4.32925 8.32617H19.4005C19.8623 8.32617 20.216 8.70435 20.1767 9.15041L19.8525 13.6789C19.7444 15.1334 18.4475 16.3262 16.9738 16.3262H6.04859C4.36854 16.3262 3.05202 14.9104 3.18956 13.2522L3.54326 9.03405C3.58256 8.63647 3.9166 8.32617 4.32925 8.32617Z"/>
									</svg>
									<span>Купить</span>
								</div>
							</div>
						</div>
					</div>
					<div className='result-load-button-div'>
						<button className='result-load-button'>
							<svg className='result-load-button-ellips' viewBox="0 0 200 100" xmlns="http://www.w3.org/2000/svg">
								<ellipse cx="100" cy="50" rx="100" ry="50" />
							</svg>
							<div className='result-load-button-content'>
								<span className='result-load-button-text'>Загрузить ещё</span>
								<svg className='result-load-button-arrow' width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
									<path d="M18.8377 14L12.8388 20L6.83984 14" stroke="#D9FF5A" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
									<path d="M12.8359 4V21" stroke="#D9FF5A" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
								</svg>
							</div>
						</button>
					</div>
			</div>



			<div className='results-wrapper'>
				<div className='results-header'>
				<div className='filters-div'>
						<div className='filters-name-div' onClick={() => toggleFilters(2)}>
							<svg className='filters-svg' width="20" height="21" viewBox="-1 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
								<path d="M18.8889 0H1.11111C0.816426 0 0.533811 0.116448 0.325437 0.323727C0.117063 0.531005 0 0.812136 0 1.10527V3.96793C0 4.54598 0.236667 5.11409 0.647778 5.52304L6.66667 11.5103V19.8949C6.66688 20.0832 6.71542 20.2683 6.80767 20.4328C6.89992 20.5972 7.03283 20.7355 7.19382 20.8346C7.35482 20.9336 7.53857 20.9902 7.72767 20.9988C7.91677 21.0075 8.10497 20.968 8.27444 20.8841L12.7189 18.6736C13.0956 18.4857 13.3333 18.1032 13.3333 17.6843V11.5103L19.3522 5.52304C19.7633 5.11409 20 4.54598 20 3.96793V1.10527C20 0.812136 19.8829 0.531005 19.6746 0.323727C19.4662 0.116448 19.1836 0 18.8889 0Z"/>
							</svg>
							<span className='filters-name'>
								фильтры
							</span>
						</div>
					</div>
					<span>20 позиций в категории</span>
					
				</div>
				<div className='results-div'>
						<div className='result'>
							<div className='result-image-div'>
								<img className='result-image' src={chair3}/>
								<span style={{backgroundColor: "rgba(251, 228, 202, 1)"}} className='result-color'></span>
							</div>
							<span className='result-name'>Kathryn</span>
							<span className='result-description'>Кресло</span>
							<div className='result-pricing'>
								<span className='result-price'>150 000 <span className='result-ruble'>₽</span></span>
								<div className='result-buy'>
									<svg className='result-cart' viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
										<path d="M3.71513 3.01617L3.51817 5.46617C3.47877 5.93617 3.84315 6.32617 4.30601 6.32617H19.3833C19.7969 6.32617 20.1416 6.00617 20.1712 5.58617C20.2992 3.81617 18.9697 2.37617 17.2266 2.37617H5.12339C5.02491 1.93617 4.82795 1.51617 4.52266 1.16617C4.03026 0.636172 3.3409 0.326172 2.63184 0.326172H0.918289C0.51452 0.326172 0.179688 0.666172 0.179688 1.07617C0.179688 1.48617 0.51452 1.82617 0.918289 1.82617H2.63184C2.93713 1.82617 3.22273 1.95617 3.42953 2.17617C3.63634 2.40617 3.73482 2.70617 3.71513 3.01617ZM9.17969 20.3262C9.17969 21.4307 8.28426 22.3262 7.17969 22.3262C6.07512 22.3262 5.17969 21.4307 5.17969 20.3262C5.17969 19.2216 6.07512 18.3262 7.17969 18.3262C8.28426 18.3262 9.17969 19.2216 9.17969 20.3262ZM17.1797 20.3262C17.1797 21.4307 16.2843 22.3262 15.1797 22.3262C14.0751 22.3262 13.1797 21.4307 13.1797 20.3262C13.1797 19.2216 14.0751 18.3262 15.1797 18.3262C16.2843 18.3262 17.1797 19.2216 17.1797 20.3262ZM4.32925 8.32617H19.4005C19.8623 8.32617 20.216 8.70435 20.1767 9.15041L19.8525 13.6789C19.7444 15.1334 18.4475 16.3262 16.9738 16.3262H6.04859C4.36854 16.3262 3.05202 14.9104 3.18956 13.2522L3.54326 9.03405C3.58256 8.63647 3.9166 8.32617 4.32925 8.32617Z"/>
									</svg>
									<span>Купить</span>
								</div>
							</div>
						</div>



						<div className='result'>
							<div className='result-image-div'>
								<img className='result-image' src={chair4}/>
								<span style={{backgroundColor: "rgba(240, 179, 234, 1)"}} className='result-color'></span>
							</div>
							<span className='result-name'>Wendy</span>
							<span className='result-description'>Кресло</span>
							<div className='result-pricing'>
								<span className='result-price'>150 000 <span className='result-ruble'>₽</span></span>
								<div className='result-buy'>
									<svg className='result-cart' viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
										<path d="M3.71513 3.01617L3.51817 5.46617C3.47877 5.93617 3.84315 6.32617 4.30601 6.32617H19.3833C19.7969 6.32617 20.1416 6.00617 20.1712 5.58617C20.2992 3.81617 18.9697 2.37617 17.2266 2.37617H5.12339C5.02491 1.93617 4.82795 1.51617 4.52266 1.16617C4.03026 0.636172 3.3409 0.326172 2.63184 0.326172H0.918289C0.51452 0.326172 0.179688 0.666172 0.179688 1.07617C0.179688 1.48617 0.51452 1.82617 0.918289 1.82617H2.63184C2.93713 1.82617 3.22273 1.95617 3.42953 2.17617C3.63634 2.40617 3.73482 2.70617 3.71513 3.01617ZM9.17969 20.3262C9.17969 21.4307 8.28426 22.3262 7.17969 22.3262C6.07512 22.3262 5.17969 21.4307 5.17969 20.3262C5.17969 19.2216 6.07512 18.3262 7.17969 18.3262C8.28426 18.3262 9.17969 19.2216 9.17969 20.3262ZM17.1797 20.3262C17.1797 21.4307 16.2843 22.3262 15.1797 22.3262C14.0751 22.3262 13.1797 21.4307 13.1797 20.3262C13.1797 19.2216 14.0751 18.3262 15.1797 18.3262C16.2843 18.3262 17.1797 19.2216 17.1797 20.3262ZM4.32925 8.32617H19.4005C19.8623 8.32617 20.216 8.70435 20.1767 9.15041L19.8525 13.6789C19.7444 15.1334 18.4475 16.3262 16.9738 16.3262H6.04859C4.36854 16.3262 3.05202 14.9104 3.18956 13.2522L3.54326 9.03405C3.58256 8.63647 3.9166 8.32617 4.32925 8.32617Z"/>
									</svg>
									<span>Купить</span>
								</div>
							</div>
						</div>
						<div className='result'>
							<div className='result-image-div'>
								<img className='result-image' src={chair1}/>
								<span style={{backgroundColor: "rgba(241, 142, 250, 1)"}} className='result-color'></span>
							</div>
							<span className='result-name'>Judith</span>
							<span className='result-description'>Кресло</span>
							<div className='result-pricing'>
								<span className='result-price'>150 000 <span className='result-ruble'>₽</span></span>
								<div className='result-buy'>
									<svg className='result-cart' viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
										<path d="M3.71513 3.01617L3.51817 5.46617C3.47877 5.93617 3.84315 6.32617 4.30601 6.32617H19.3833C19.7969 6.32617 20.1416 6.00617 20.1712 5.58617C20.2992 3.81617 18.9697 2.37617 17.2266 2.37617H5.12339C5.02491 1.93617 4.82795 1.51617 4.52266 1.16617C4.03026 0.636172 3.3409 0.326172 2.63184 0.326172H0.918289C0.51452 0.326172 0.179688 0.666172 0.179688 1.07617C0.179688 1.48617 0.51452 1.82617 0.918289 1.82617H2.63184C2.93713 1.82617 3.22273 1.95617 3.42953 2.17617C3.63634 2.40617 3.73482 2.70617 3.71513 3.01617ZM9.17969 20.3262C9.17969 21.4307 8.28426 22.3262 7.17969 22.3262C6.07512 22.3262 5.17969 21.4307 5.17969 20.3262C5.17969 19.2216 6.07512 18.3262 7.17969 18.3262C8.28426 18.3262 9.17969 19.2216 9.17969 20.3262ZM17.1797 20.3262C17.1797 21.4307 16.2843 22.3262 15.1797 22.3262C14.0751 22.3262 13.1797 21.4307 13.1797 20.3262C13.1797 19.2216 14.0751 18.3262 15.1797 18.3262C16.2843 18.3262 17.1797 19.2216 17.1797 20.3262ZM4.32925 8.32617H19.4005C19.8623 8.32617 20.216 8.70435 20.1767 9.15041L19.8525 13.6789C19.7444 15.1334 18.4475 16.3262 16.9738 16.3262H6.04859C4.36854 16.3262 3.05202 14.9104 3.18956 13.2522L3.54326 9.03405C3.58256 8.63647 3.9166 8.32617 4.32925 8.32617Z"/>
									</svg>
									<span>Купить</span>
								</div>
							</div>
						</div>
						<div className='result'>
							<div className='result-image-div'>
								<img className='result-image' src={chair5}/>
								<span style={{backgroundColor: "rgba(92, 84, 74, 1)"}} className='result-color'></span>
							</div>
							<span className='result-name'>Jane</span>
							<span className='result-description'>Кресло</span>
							<div className='result-pricing'>
								<span className='result-price'>150 000 <span className='result-ruble'>₽</span></span>
								<div className='result-buy'>
									<svg className='result-cart' viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
										<path d="M3.71513 3.01617L3.51817 5.46617C3.47877 5.93617 3.84315 6.32617 4.30601 6.32617H19.3833C19.7969 6.32617 20.1416 6.00617 20.1712 5.58617C20.2992 3.81617 18.9697 2.37617 17.2266 2.37617H5.12339C5.02491 1.93617 4.82795 1.51617 4.52266 1.16617C4.03026 0.636172 3.3409 0.326172 2.63184 0.326172H0.918289C0.51452 0.326172 0.179688 0.666172 0.179688 1.07617C0.179688 1.48617 0.51452 1.82617 0.918289 1.82617H2.63184C2.93713 1.82617 3.22273 1.95617 3.42953 2.17617C3.63634 2.40617 3.73482 2.70617 3.71513 3.01617ZM9.17969 20.3262C9.17969 21.4307 8.28426 22.3262 7.17969 22.3262C6.07512 22.3262 5.17969 21.4307 5.17969 20.3262C5.17969 19.2216 6.07512 18.3262 7.17969 18.3262C8.28426 18.3262 9.17969 19.2216 9.17969 20.3262ZM17.1797 20.3262C17.1797 21.4307 16.2843 22.3262 15.1797 22.3262C14.0751 22.3262 13.1797 21.4307 13.1797 20.3262C13.1797 19.2216 14.0751 18.3262 15.1797 18.3262C16.2843 18.3262 17.1797 19.2216 17.1797 20.3262ZM4.32925 8.32617H19.4005C19.8623 8.32617 20.216 8.70435 20.1767 9.15041L19.8525 13.6789C19.7444 15.1334 18.4475 16.3262 16.9738 16.3262H6.04859C4.36854 16.3262 3.05202 14.9104 3.18956 13.2522L3.54326 9.03405C3.58256 8.63647 3.9166 8.32617 4.32925 8.32617Z"/>
									</svg>
									<span>Купить</span>
								</div>
							</div>
						</div>
						<div className='result'>
							<div className='result-image-div'>
								<img className='result-image' src={chair6}/>
								<span style={{backgroundColor: "rgba(240, 181, 250, 1)"}} className='result-color'></span>
							</div>
							<span className='result-name'>Darlene</span>
							<span className='result-description'>Кресло</span>
							<div className='result-pricing'>
								<span className='result-price'>150 000 <span className='result-ruble'>₽</span></span>
								<div className='result-buy'>
									<svg className='result-cart' viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
										<path d="M3.71513 3.01617L3.51817 5.46617C3.47877 5.93617 3.84315 6.32617 4.30601 6.32617H19.3833C19.7969 6.32617 20.1416 6.00617 20.1712 5.58617C20.2992 3.81617 18.9697 2.37617 17.2266 2.37617H5.12339C5.02491 1.93617 4.82795 1.51617 4.52266 1.16617C4.03026 0.636172 3.3409 0.326172 2.63184 0.326172H0.918289C0.51452 0.326172 0.179688 0.666172 0.179688 1.07617C0.179688 1.48617 0.51452 1.82617 0.918289 1.82617H2.63184C2.93713 1.82617 3.22273 1.95617 3.42953 2.17617C3.63634 2.40617 3.73482 2.70617 3.71513 3.01617ZM9.17969 20.3262C9.17969 21.4307 8.28426 22.3262 7.17969 22.3262C6.07512 22.3262 5.17969 21.4307 5.17969 20.3262C5.17969 19.2216 6.07512 18.3262 7.17969 18.3262C8.28426 18.3262 9.17969 19.2216 9.17969 20.3262ZM17.1797 20.3262C17.1797 21.4307 16.2843 22.3262 15.1797 22.3262C14.0751 22.3262 13.1797 21.4307 13.1797 20.3262C13.1797 19.2216 14.0751 18.3262 15.1797 18.3262C16.2843 18.3262 17.1797 19.2216 17.1797 20.3262ZM4.32925 8.32617H19.4005C19.8623 8.32617 20.216 8.70435 20.1767 9.15041L19.8525 13.6789C19.7444 15.1334 18.4475 16.3262 16.9738 16.3262H6.04859C4.36854 16.3262 3.05202 14.9104 3.18956 13.2522L3.54326 9.03405C3.58256 8.63647 3.9166 8.32617 4.32925 8.32617Z"/>
									</svg>
									<span>Купить</span>
								</div>
							</div>
						</div>
					</div>
					<div className='result-load-button-div'>
						<button className='result-load-button'>
							<svg className='result-load-button-ellips' viewBox="0 0 200 100" xmlns="http://www.w3.org/2000/svg">
								<ellipse cx="100" cy="50" rx="100" ry="50" />
							</svg>
							<div className='result-load-button-content'>
								<span className='result-load-button-text'>Загрузить ещё</span>
								<svg className='result-load-button-arrow' width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
									<path d="M18.8377 14L12.8388 20L6.83984 14" stroke="#D9FF5A" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
									<path d="M12.8359 4V21" stroke="#D9FF5A" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
								</svg>
							</div>
						</button>
					</div>
			</div>



			<div className='results-wrapper'>
				<div className='results-header'>
				<div className='filters-div'>
						<div className='filters-name-div' onClick={() => toggleFilters(3)}>
							<svg className='filters-svg' width="20" height="21" viewBox="-1 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
								<path d="M18.8889 0H1.11111C0.816426 0 0.533811 0.116448 0.325437 0.323727C0.117063 0.531005 0 0.812136 0 1.10527V3.96793C0 4.54598 0.236667 5.11409 0.647778 5.52304L6.66667 11.5103V19.8949C6.66688 20.0832 6.71542 20.2683 6.80767 20.4328C6.89992 20.5972 7.03283 20.7355 7.19382 20.8346C7.35482 20.9336 7.53857 20.9902 7.72767 20.9988C7.91677 21.0075 8.10497 20.968 8.27444 20.8841L12.7189 18.6736C13.0956 18.4857 13.3333 18.1032 13.3333 17.6843V11.5103L19.3522 5.52304C19.7633 5.11409 20 4.54598 20 3.96793V1.10527C20 0.812136 19.8829 0.531005 19.6746 0.323727C19.4662 0.116448 19.1836 0 18.8889 0Z"/>
							</svg>
							<span className='filters-name'>
								фильтры
							</span>
						</div>
					</div>
					<span>20 позиций в категории</span>
					
				</div>
				<div className='results-div'>
						<div className='result'>
							<div className='result-image-div'>
								<img className='result-image' src={table3}/>
								<span style={{backgroundColor: "rgba(165, 212, 255, 1)"}} className='result-color'></span>
							</div>
							<span className='result-name'>Kathryn</span>
							<span className='result-description'>Стол</span>
							<div className='result-pricing'>
								<span className='result-price'>150 000 <span className='result-ruble'>₽</span></span>
								<div className='result-buy'>
									<svg className='result-cart' viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
										<path d="M3.71513 3.01617L3.51817 5.46617C3.47877 5.93617 3.84315 6.32617 4.30601 6.32617H19.3833C19.7969 6.32617 20.1416 6.00617 20.1712 5.58617C20.2992 3.81617 18.9697 2.37617 17.2266 2.37617H5.12339C5.02491 1.93617 4.82795 1.51617 4.52266 1.16617C4.03026 0.636172 3.3409 0.326172 2.63184 0.326172H0.918289C0.51452 0.326172 0.179688 0.666172 0.179688 1.07617C0.179688 1.48617 0.51452 1.82617 0.918289 1.82617H2.63184C2.93713 1.82617 3.22273 1.95617 3.42953 2.17617C3.63634 2.40617 3.73482 2.70617 3.71513 3.01617ZM9.17969 20.3262C9.17969 21.4307 8.28426 22.3262 7.17969 22.3262C6.07512 22.3262 5.17969 21.4307 5.17969 20.3262C5.17969 19.2216 6.07512 18.3262 7.17969 18.3262C8.28426 18.3262 9.17969 19.2216 9.17969 20.3262ZM17.1797 20.3262C17.1797 21.4307 16.2843 22.3262 15.1797 22.3262C14.0751 22.3262 13.1797 21.4307 13.1797 20.3262C13.1797 19.2216 14.0751 18.3262 15.1797 18.3262C16.2843 18.3262 17.1797 19.2216 17.1797 20.3262ZM4.32925 8.32617H19.4005C19.8623 8.32617 20.216 8.70435 20.1767 9.15041L19.8525 13.6789C19.7444 15.1334 18.4475 16.3262 16.9738 16.3262H6.04859C4.36854 16.3262 3.05202 14.9104 3.18956 13.2522L3.54326 9.03405C3.58256 8.63647 3.9166 8.32617 4.32925 8.32617Z"/>
									</svg>
									<span>Купить</span>
								</div>
							</div>
						</div>

						<div className='result'>
							<div className='result-image-div'>
								<img className='result-image' src={table4}/>
								<span style={{backgroundColor: "rgba(240, 223, 179, 1)"}} className='result-color'></span>
							</div>
							<span className='result-name'>Wendy</span>
							<span className='result-description'>Стол</span>
							<div className='result-pricing'>
								<span className='result-price'>150 000 <span className='result-ruble'>₽</span></span>
								<div className='result-buy'>
									<svg className='result-cart' viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
										<path d="M3.71513 3.01617L3.51817 5.46617C3.47877 5.93617 3.84315 6.32617 4.30601 6.32617H19.3833C19.7969 6.32617 20.1416 6.00617 20.1712 5.58617C20.2992 3.81617 18.9697 2.37617 17.2266 2.37617H5.12339C5.02491 1.93617 4.82795 1.51617 4.52266 1.16617C4.03026 0.636172 3.3409 0.326172 2.63184 0.326172H0.918289C0.51452 0.326172 0.179688 0.666172 0.179688 1.07617C0.179688 1.48617 0.51452 1.82617 0.918289 1.82617H2.63184C2.93713 1.82617 3.22273 1.95617 3.42953 2.17617C3.63634 2.40617 3.73482 2.70617 3.71513 3.01617ZM9.17969 20.3262C9.17969 21.4307 8.28426 22.3262 7.17969 22.3262C6.07512 22.3262 5.17969 21.4307 5.17969 20.3262C5.17969 19.2216 6.07512 18.3262 7.17969 18.3262C8.28426 18.3262 9.17969 19.2216 9.17969 20.3262ZM17.1797 20.3262C17.1797 21.4307 16.2843 22.3262 15.1797 22.3262C14.0751 22.3262 13.1797 21.4307 13.1797 20.3262C13.1797 19.2216 14.0751 18.3262 15.1797 18.3262C16.2843 18.3262 17.1797 19.2216 17.1797 20.3262ZM4.32925 8.32617H19.4005C19.8623 8.32617 20.216 8.70435 20.1767 9.15041L19.8525 13.6789C19.7444 15.1334 18.4475 16.3262 16.9738 16.3262H6.04859C4.36854 16.3262 3.05202 14.9104 3.18956 13.2522L3.54326 9.03405C3.58256 8.63647 3.9166 8.32617 4.32925 8.32617Z"/>
									</svg>
									<span>Купить</span>
								</div>
							</div>
						</div>
						<div className='result'>
							<div className='result-image-div'>
								<img className='result-image' src={table5}/>
								<span style={{backgroundColor: "rgba(248, 142, 250, 1)"}} className='result-color'></span>
							</div>
							<span className='result-name'>Judith</span>
							<span className='result-description'>Стол</span>
							<div className='result-pricing'>
								<span className='result-price'>150 000 <span className='result-ruble'>₽</span></span>
								<div className='result-buy'>
									<svg className='result-cart' viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
										<path d="M3.71513 3.01617L3.51817 5.46617C3.47877 5.93617 3.84315 6.32617 4.30601 6.32617H19.3833C19.7969 6.32617 20.1416 6.00617 20.1712 5.58617C20.2992 3.81617 18.9697 2.37617 17.2266 2.37617H5.12339C5.02491 1.93617 4.82795 1.51617 4.52266 1.16617C4.03026 0.636172 3.3409 0.326172 2.63184 0.326172H0.918289C0.51452 0.326172 0.179688 0.666172 0.179688 1.07617C0.179688 1.48617 0.51452 1.82617 0.918289 1.82617H2.63184C2.93713 1.82617 3.22273 1.95617 3.42953 2.17617C3.63634 2.40617 3.73482 2.70617 3.71513 3.01617ZM9.17969 20.3262C9.17969 21.4307 8.28426 22.3262 7.17969 22.3262C6.07512 22.3262 5.17969 21.4307 5.17969 20.3262C5.17969 19.2216 6.07512 18.3262 7.17969 18.3262C8.28426 18.3262 9.17969 19.2216 9.17969 20.3262ZM17.1797 20.3262C17.1797 21.4307 16.2843 22.3262 15.1797 22.3262C14.0751 22.3262 13.1797 21.4307 13.1797 20.3262C13.1797 19.2216 14.0751 18.3262 15.1797 18.3262C16.2843 18.3262 17.1797 19.2216 17.1797 20.3262ZM4.32925 8.32617H19.4005C19.8623 8.32617 20.216 8.70435 20.1767 9.15041L19.8525 13.6789C19.7444 15.1334 18.4475 16.3262 16.9738 16.3262H6.04859C4.36854 16.3262 3.05202 14.9104 3.18956 13.2522L3.54326 9.03405C3.58256 8.63647 3.9166 8.32617 4.32925 8.32617Z"/>
									</svg>
									<span>Купить</span>
								</div>
							</div>
						</div>
						<div className='result'>
							<div className='result-image-div'>
								<img className='result-image' src={table6}/>
								<span style={{backgroundColor: "rgba(202, 207, 251, 1)"}} className='result-color'></span>
							</div>
							<span className='result-name'>Jane</span>
							<span className='result-description'>Стол</span>
							<div className='result-pricing'>
								<span className='result-price'>150 000 <span className='result-ruble'>₽</span></span>
								<div className='result-buy'>
									<svg className='result-cart' viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
										<path d="M3.71513 3.01617L3.51817 5.46617C3.47877 5.93617 3.84315 6.32617 4.30601 6.32617H19.3833C19.7969 6.32617 20.1416 6.00617 20.1712 5.58617C20.2992 3.81617 18.9697 2.37617 17.2266 2.37617H5.12339C5.02491 1.93617 4.82795 1.51617 4.52266 1.16617C4.03026 0.636172 3.3409 0.326172 2.63184 0.326172H0.918289C0.51452 0.326172 0.179688 0.666172 0.179688 1.07617C0.179688 1.48617 0.51452 1.82617 0.918289 1.82617H2.63184C2.93713 1.82617 3.22273 1.95617 3.42953 2.17617C3.63634 2.40617 3.73482 2.70617 3.71513 3.01617ZM9.17969 20.3262C9.17969 21.4307 8.28426 22.3262 7.17969 22.3262C6.07512 22.3262 5.17969 21.4307 5.17969 20.3262C5.17969 19.2216 6.07512 18.3262 7.17969 18.3262C8.28426 18.3262 9.17969 19.2216 9.17969 20.3262ZM17.1797 20.3262C17.1797 21.4307 16.2843 22.3262 15.1797 22.3262C14.0751 22.3262 13.1797 21.4307 13.1797 20.3262C13.1797 19.2216 14.0751 18.3262 15.1797 18.3262C16.2843 18.3262 17.1797 19.2216 17.1797 20.3262ZM4.32925 8.32617H19.4005C19.8623 8.32617 20.216 8.70435 20.1767 9.15041L19.8525 13.6789C19.7444 15.1334 18.4475 16.3262 16.9738 16.3262H6.04859C4.36854 16.3262 3.05202 14.9104 3.18956 13.2522L3.54326 9.03405C3.58256 8.63647 3.9166 8.32617 4.32925 8.32617Z"/>
									</svg>
									<span>Купить</span>
								</div>
							</div>
						</div>
						<div className='result'>
							<div className='result-image-div'>
								<img className='result-image' src={table7}/>
								<span style={{backgroundColor: "rgba(240, 181, 250, 1)"}} className='result-color'></span>
							</div>
							<span className='result-name'>Darlene</span>
							<span className='result-description'>Стол</span>
							<div className='result-pricing'>
								<span className='result-price'>150 000 <span className='result-ruble'>₽</span></span>
								<div className='result-buy'>
									<svg className='result-cart' viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
										<path d="M3.71513 3.01617L3.51817 5.46617C3.47877 5.93617 3.84315 6.32617 4.30601 6.32617H19.3833C19.7969 6.32617 20.1416 6.00617 20.1712 5.58617C20.2992 3.81617 18.9697 2.37617 17.2266 2.37617H5.12339C5.02491 1.93617 4.82795 1.51617 4.52266 1.16617C4.03026 0.636172 3.3409 0.326172 2.63184 0.326172H0.918289C0.51452 0.326172 0.179688 0.666172 0.179688 1.07617C0.179688 1.48617 0.51452 1.82617 0.918289 1.82617H2.63184C2.93713 1.82617 3.22273 1.95617 3.42953 2.17617C3.63634 2.40617 3.73482 2.70617 3.71513 3.01617ZM9.17969 20.3262C9.17969 21.4307 8.28426 22.3262 7.17969 22.3262C6.07512 22.3262 5.17969 21.4307 5.17969 20.3262C5.17969 19.2216 6.07512 18.3262 7.17969 18.3262C8.28426 18.3262 9.17969 19.2216 9.17969 20.3262ZM17.1797 20.3262C17.1797 21.4307 16.2843 22.3262 15.1797 22.3262C14.0751 22.3262 13.1797 21.4307 13.1797 20.3262C13.1797 19.2216 14.0751 18.3262 15.1797 18.3262C16.2843 18.3262 17.1797 19.2216 17.1797 20.3262ZM4.32925 8.32617H19.4005C19.8623 8.32617 20.216 8.70435 20.1767 9.15041L19.8525 13.6789C19.7444 15.1334 18.4475 16.3262 16.9738 16.3262H6.04859C4.36854 16.3262 3.05202 14.9104 3.18956 13.2522L3.54326 9.03405C3.58256 8.63647 3.9166 8.32617 4.32925 8.32617Z"/>
									</svg>
									<span>Купить</span>
								</div>
							</div>
						</div>
					</div>
					<div className='result-load-button-div'>
						<button className='result-load-button'>
							<svg className='result-load-button-ellips' viewBox="0 0 200 100" xmlns="http://www.w3.org/2000/svg">
								<ellipse cx="100" cy="50" rx="100" ry="50" />
							</svg>
							<div className='result-load-button-content'>
								<span className='result-load-button-text'>Загрузить ещё</span>
								<svg className='result-load-button-arrow' width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
									<path d="M18.8377 14L12.8388 20L6.83984 14" stroke="#D9FF5A" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
									<path d="M12.8359 4V21" stroke="#D9FF5A" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
								</svg>
							</div>
						</button>
					</div>
			</div>


			<div className='stripes-wrapper'>
				<div className='stripe-1'>
					<span>creating a great art</span>
					<svg width="21" height="22" viewBox="0 0 21 22" fill="none" xmlns="http://www.w3.org/2000/svg">
						<path d="M11.461 0.915624L11.834 10.2959L21.0072 12.2909L11.6272 12.6627L9.63329 21.8359L9.26034 12.4557L0.0871087 10.4606L9.46713 10.0888L11.461 0.915624Z" fill="white"/>
					</svg>
					<span>creating a great art</span>
					<svg width="21" height="22" viewBox="0 0 21 22" fill="none" xmlns="http://www.w3.org/2000/svg">
						<path d="M11.461 0.915624L11.834 10.2959L21.0072 12.2909L11.6272 12.6627L9.63329 21.8359L9.26034 12.4557L0.0871087 10.4606L9.46713 10.0888L11.461 0.915624Z" fill="white"/>
					</svg>
					<span>creating a great art</span>
					<svg width="21" height="22" viewBox="0 0 21 22" fill="none" xmlns="http://www.w3.org/2000/svg">
						<path d="M11.461 0.915624L11.834 10.2959L21.0072 12.2909L11.6272 12.6627L9.63329 21.8359L9.26034 12.4557L0.0871087 10.4606L9.46713 10.0888L11.461 0.915624Z" fill="white"/>
					</svg>
					<span>creating a great art</span>
					<svg width="21" height="22" viewBox="0 0 21 22" fill="none" xmlns="http://www.w3.org/2000/svg">
						<path d="M11.461 0.915624L11.834 10.2959L21.0072 12.2909L11.6272 12.6627L9.63329 21.8359L9.26034 12.4557L0.0871087 10.4606L9.46713 10.0888L11.461 0.915624Z" fill="white"/>
					</svg>
					<span>creating a great art</span>
				</div>
				<div className='stripe-2'>
				<span>creating a great art</span>
					<svg width="21" height="22" viewBox="0 0 21 22" fill="none" xmlns="http://www.w3.org/2000/svg">
						<path d="M11.461 0.915624L11.834 10.2959L21.0072 12.2909L11.6272 12.6627L9.63329 21.8359L9.26034 12.4557L0.0871087 10.4606L9.46713 10.0888L11.461 0.915624Z" fill="white"/>
					</svg>
					<span>creating a great art</span>
					<svg width="21" height="22" viewBox="0 0 21 22" fill="none" xmlns="http://www.w3.org/2000/svg">
						<path d="M11.461 0.915624L11.834 10.2959L21.0072 12.2909L11.6272 12.6627L9.63329 21.8359L9.26034 12.4557L0.0871087 10.4606L9.46713 10.0888L11.461 0.915624Z" fill="white"/>
					</svg>
					<span>creating a great art</span>
					<svg width="21" height="22" viewBox="0 0 21 22" fill="none" xmlns="http://www.w3.org/2000/svg">
						<path d="M11.461 0.915624L11.834 10.2959L21.0072 12.2909L11.6272 12.6627L9.63329 21.8359L9.26034 12.4557L0.0871087 10.4606L9.46713 10.0888L11.461 0.915624Z" fill="white"/>
					</svg>
					<span>creating a great art</span>
					<svg width="21" height="22" viewBox="0 0 21 22" fill="none" xmlns="http://www.w3.org/2000/svg">
						<path d="M11.461 0.915624L11.834 10.2959L21.0072 12.2909L11.6272 12.6627L9.63329 21.8359L9.26034 12.4557L0.0871087 10.4606L9.46713 10.0888L11.461 0.915624Z" fill="white"/>
					</svg>
					<span>creating a great art</span>
				</div>
			</div>

			<div className='blog-wrapper'>
				<div className='blog-header'>
					<div className='blog-heading'>
						<svg width="35" height="8" viewBox="0 0 35 8" fill="none" xmlns="http://www.w3.org/2000/svg">
							<g filter="url(#filter0_b_2460_1537)">
							<circle cx="31.5" cy="4.2666" r="3.5" fill="white" fill-opacity="0.3"/>
							</g>
							<g filter="url(#filter1_b_2460_1537)">
							<circle cx="17.5" cy="4.2666" r="3.5" fill="white" fill-opacity="0.3"/>
							</g>
							<circle cx="3.5" cy="4.2666" r="3.5" fill="white"/>
							<defs>
							<filter id="filter0_b_2460_1537" x="-22" y="-49.2334" width="107" height="107" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
							<feFlood flood-opacity="0" result="BackgroundImageFix"/>
							<feGaussianBlur in="BackgroundImageFix" stdDeviation="25"/>
							<feComposite in2="SourceAlpha" operator="in" result="effect1_backgroundBlur_2460_1537"/>
							<feBlend mode="normal" in="SourceGraphic" in2="effect1_backgroundBlur_2460_1537" result="shape"/>
							</filter>
							<filter id="filter1_b_2460_1537" x="-36" y="-49.2334" width="107" height="107" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
							<feFlood flood-opacity="0" result="BackgroundImageFix"/>
							<feGaussianBlur in="BackgroundImageFix" stdDeviation="25"/>
							<feComposite in2="SourceAlpha" operator="in" result="effect1_backgroundBlur_2460_1537"/>
							<feBlend mode="normal" in="SourceGraphic" in2="effect1_backgroundBlur_2460_1537" result="shape"/>
							</filter>
							</defs>
						</svg>
						<span>блог</span>
					</div>
					<div className='blog-pages'>
						<span className='blog-pages-1'>02</span>
						<span className='blog-pages-2'></span>
						<span className='blog-pages-3'>04</span>
					</div>
				</div>

				<div className='blog-content'>
					<div className='blog-entry'>
						<div className='blog-entry-text'>
							<div className='blog-entry-text-1'>
								<span className='blog-entry-text-id'>01</span>
								<span className='blog-entry-text-author'>Laura Busche</span>
							</div>
							<div className='blog-entry-text-2'>
								новая коллекция кресел
							</div>
							<div className='blog-entry-text-3'>
								14 января 2023
							</div>
						</div>
						<div className='blog-enty-image-div'>
							<img src={blog1}/>
						</div>
						<div className='blog-entry-time-div'>
							<svg className='blog-entry-time-ellips' width="96" height="83" viewBox="0 -1 97 85" fill="none" xmlns="http://www.w3.org/2000/svg">
							<g filter="url(#filter0_b_2460_1489)">
							<ellipse cx="48" cy="40.5" rx="48" ry="40.5" transform="matrix(0.965926 -0.258819 0.260073 0.965589 -9 14.8184)"/>
							<path d="M93.2959 29.3369C98.9298 50.2542 83.4035 72.881 58.1703 79.6422C32.937 86.4034 8.13277 74.5832 2.49887 53.6659C-3.13502 32.7486 12.3913 10.1219 37.6245 3.36063C62.8577 -3.40058 87.662 8.41959 93.2959 29.3369Z"/>
							</g>
							<defs>
							<filter id="filter0_b_2460_1489" x="-19.6592" y="-19.542" width="135.112" height="122.086" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
							<feFlood flood-opacity="0" result="BackgroundImageFix"/>
							<feGaussianBlur in="BackgroundImageFix" stdDeviation="10"/>
							<feComposite in2="SourceAlpha" operator="in" result="effect1_backgroundBlur_2460_1489"/>
							<feBlend mode="normal" in="SourceGraphic" in2="effect1_backgroundBlur_2460_1489" result="shape"/>
							</filter>
							</defs>
							</svg>
							<div className='blog-entry-time'>
								<span className='blog-entry-time-numeric'>
									3
								</span>
								<span className='blog-entry-time-text'>
									мин
								</span>
							</div>
						</div>
					</div>


					<div className='blog-entry'>
						<div className='blog-entry-text'>
							<div className='blog-entry-text-1'>
								<span className='blog-entry-text-id'>02</span>
								<span className='blog-entry-text-author'>Laura Busche</span>
							</div>
							<div className='blog-entry-text-2'>
							Световой дизайн 
							в интерьере
							</div>
							<div className='blog-entry-text-3'>
								14 января 2023
							</div>
						</div>
						<div className='blog-enty-image-div'>
							<img src={blog2}/>
						</div>
						<div className='blog-entry-time-div'>
							<svg className='blog-entry-time-ellips' width="96" height="83" viewBox="0 -1 97 85" fill="none" xmlns="http://www.w3.org/2000/svg">
							<g filter="url(#filter0_b_2460_1489)">
							<ellipse cx="48" cy="40.5" rx="48" ry="40.5" transform="matrix(0.965926 -0.258819 0.260073 0.965589 -9 14.8184)"/>
							<path d="M93.2959 29.3369C98.9298 50.2542 83.4035 72.881 58.1703 79.6422C32.937 86.4034 8.13277 74.5832 2.49887 53.6659C-3.13502 32.7486 12.3913 10.1219 37.6245 3.36063C62.8577 -3.40058 87.662 8.41959 93.2959 29.3369Z"/>
							</g>
							<defs>
							<filter id="filter0_b_2460_1489" x="-19.6592" y="-19.542" width="135.112" height="122.086" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
							<feFlood flood-opacity="0" result="BackgroundImageFix"/>
							<feGaussianBlur in="BackgroundImageFix" stdDeviation="10"/>
							<feComposite in2="SourceAlpha" operator="in" result="effect1_backgroundBlur_2460_1489"/>
							<feBlend mode="normal" in="SourceGraphic" in2="effect1_backgroundBlur_2460_1489" result="shape"/>
							</filter>
							</defs>
							</svg>
							<div className='blog-entry-time'>
								<span className='blog-entry-time-numeric'>
									3
								</span>
								<span className='blog-entry-time-text'>
									мин
								</span>
							</div>
						</div>
					</div>


					<div className='blog-entry'>
						<div className='blog-entry-text'>
							<div className='blog-entry-text-1'>
								<span className='blog-entry-text-id'>03</span>
								<span className='blog-entry-text-author'>Laura Busche</span>
							</div>
							<div className='blog-entry-text-2'>
							как выбрать
							шкаф 
							в спальню
							</div>
							<div className='blog-entry-text-3'>
								14 января 2023
							</div>
						</div>
						<div className='blog-enty-image-div'>
							<img src={blog3}/>
						</div>
						<div className='blog-entry-time-div'>
							<svg className='blog-entry-time-ellips' width="96" height="83" viewBox="0 -1 97 85" fill="none" xmlns="http://www.w3.org/2000/svg">
							<g filter="url(#filter0_b_2460_1489)">
							<ellipse cx="48" cy="40.5" rx="48" ry="40.5" transform="matrix(0.965926 -0.258819 0.260073 0.965589 -9 14.8184)"/>
							<path d="M93.2959 29.3369C98.9298 50.2542 83.4035 72.881 58.1703 79.6422C32.937 86.4034 8.13277 74.5832 2.49887 53.6659C-3.13502 32.7486 12.3913 10.1219 37.6245 3.36063C62.8577 -3.40058 87.662 8.41959 93.2959 29.3369Z"/>
							</g>
							<defs>
							<filter id="filter0_b_2460_1489" x="-19.6592" y="-19.542" width="135.112" height="122.086" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
							<feFlood flood-opacity="0" result="BackgroundImageFix"/>
							<feGaussianBlur in="BackgroundImageFix" stdDeviation="10"/>
							<feComposite in2="SourceAlpha" operator="in" result="effect1_backgroundBlur_2460_1489"/>
							<feBlend mode="normal" in="SourceGraphic" in2="effect1_backgroundBlur_2460_1489" result="shape"/>
							</filter>
							</defs>
							</svg>
							<div className='blog-entry-time'>
								<span className='blog-entry-time-numeric'>
									3
								</span>
								<span className='blog-entry-time-text'>
									мин
								</span>
							</div>
						</div>
					</div>
				</div>
			</div>

			<footer className='footer'>
				<span>@2023</span>
				<span>Все права защищены</span>
			</footer>

			<div className='item-card-wrapper'>
				<div className='item-card'>
					<div className='item-card-close' onClick={closeCard}>
						Закрыть
						<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
						<g clip-path="url(#clip0_2504_1256)">
						<path d="M19 1L1 19" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
						<path d="M1 1L19 19" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
						</g>
						<defs>
						<clipPath id="clip0_2504_1256">
						<rect width="20" height="20" fill="white"/>
						</clipPath>
						</defs>
						</svg>

					</div>

					<div className='like-button-div' onClick={(e) => toggleLike(e)}>
						<svg className='like-button-div-circle' width="79" height="79" viewBox="0 0 79 79" fill="none" xmlns="http://www.w3.org/2000/svg">
							<g filter="url(#filter0_b_2504_1249)">
							<circle cx="39.5" cy="39.5" r="39.5" />
							<circle cx="39.5" cy="39.5" r="38.5" />
							</g>
						</svg>
						<svg className='like-button-div-heart' width="26" height="24" viewBox="0 0 26 24" fill="none" xmlns="http://www.w3.org/2000/svg">
							<path d="M23.1494 2.85655L22.441 3.56236L22.4413 3.56269L23.1494 2.85655ZM18.6831 1V2V1ZM14.2167 2.85655L14.925 3.56253L14.9251 3.56236L14.2167 2.85655ZM12.9997 4.07749L12.2915 4.78347L12.9997 5.49397L13.7079 4.78347L12.9997 4.07749ZM11.7826 2.85655L11.0744 3.56253L11.0744 3.56253L11.7826 2.85655ZM2.85001 11.8178L3.55825 11.1118H3.55825L2.85001 11.8178ZM4.06705 13.0387L3.35882 13.7447H3.35882L4.06705 13.0387ZM12.9997 22L12.2915 22.706L12.9997 23.4165L13.7079 22.706L12.9997 22ZM21.9323 13.0387L22.6406 13.7447L21.9323 13.0387ZM23.1494 11.8178L22.4413 11.1117L22.4411 11.1118L23.1494 11.8178ZM23.8578 2.15074C23.1786 1.4691 22.3721 0.928207 21.4842 0.559113L20.7165 2.40591C21.3612 2.67393 21.9473 3.06684 22.441 3.56236L23.8578 2.15074ZM21.4842 0.559113C20.5962 0.190016 19.6444 0 18.6831 0V2C19.3808 2 20.0717 2.1379 20.7165 2.40591L21.4842 0.559113ZM18.6831 0C17.7217 0 16.7699 0.190016 15.8819 0.559113L16.6496 2.40591C17.2944 2.1379 17.9853 2 18.6831 2V0ZM15.8819 0.559113C14.994 0.928207 14.1875 1.4691 13.5083 2.15074L14.9251 3.56236C15.4188 3.06684 16.0049 2.67393 16.6496 2.40591L15.8819 0.559113ZM13.5085 2.15058L12.2915 3.37152L13.7079 4.78347L14.925 3.56253L13.5085 2.15058ZM13.7079 3.37152L12.4909 2.15058L11.0744 3.56253L12.2915 4.78347L13.7079 3.37152ZM12.4909 2.15058C11.1191 0.774353 9.25778 0.000615954 7.31633 0.000615954V2.00062C8.72527 2.00062 10.0772 2.56208 11.0744 3.56253L12.4909 2.15058ZM7.31633 0.000615954C5.37488 0.000615954 3.5136 0.774353 2.14177 2.15058L3.55825 3.56253C4.5555 2.56208 5.90739 2.00062 7.31633 2.00062V0.000615954ZM2.14177 2.15058C0.770051 3.52669 0 5.39243 0 7.33718H2C2 5.9208 2.56089 4.56308 3.55825 3.56253L2.14177 2.15058ZM0 7.33718C0 9.28193 0.770051 11.1477 2.14177 12.5238L3.55825 11.1118C2.56089 10.1113 2 8.75355 2 7.33718H0ZM2.14177 12.5238L3.35882 13.7447L4.77529 12.3328L3.55825 11.1118L2.14177 12.5238ZM3.35882 13.7447L12.2915 22.706L13.7079 21.294L4.77529 12.3328L3.35882 13.7447ZM13.7079 22.706L22.6406 13.7447L21.2241 12.3328L12.2915 21.294L13.7079 22.706ZM22.6406 13.7447L23.8576 12.5238L22.4411 11.1118L21.2241 12.3328L22.6406 13.7447ZM23.8574 12.5239C24.5369 11.8426 25.0757 11.0339 25.4433 10.1439L23.5948 9.38045C23.3273 10.0281 22.9352 10.6164 22.4413 11.1117L23.8574 12.5239ZM25.4433 10.1439C25.8109 9.25402 26 8.30028 26 7.33718H24C24 8.03844 23.8623 8.73276 23.5948 9.38045L25.4433 10.1439ZM26 7.33718C26 6.37407 25.8109 5.42033 25.4433 4.53042L23.5948 5.29391C23.8623 5.94159 24 6.63591 24 7.33718H26ZM25.4433 4.53042C25.0757 3.64049 24.5369 2.83173 23.8574 2.15041L22.4413 3.56269C22.9352 4.05799 23.3273 4.64624 23.5948 5.29391L25.4433 4.53042Z"/>
						</svg>

					</div>

					<span className='item-card-height'>высота: 60см</span>

					<span className='item-card-article'>Арт. GNM007</span>

					<span className='item-card-color'>Цвет:<span className='item-card-color-circle'></span><span className='item-card-color-name'>лаванда</span></span>
					
					<div className='item-card-content'>
						<div className='item-card-image-div'>
							<span className='item-card-image-text'>Benjamin Moore</span>
							<img className='item-card-image' src={lamp1}></img>
						</div>
						<div className='item-card-center-text'>
							<span className='item-card-info-name'>светильник</span>
							<span className='item-card-info-price'>150 000<span className='item-card-info-ruble'>₽</span></span>
						</div>
						<div className='item-card-info'>
							<div className='item-card-info-content'>
								<span className='item-card-info-desc'>Функциональная дизайнерская лампа для создания максимально 
								комфортного освещения</span>
							</div>
						</div>
						<button className='item-card-buy-button'>
									<svg className='buy-button-ellips buy-button-ellips-1' viewBox="0 0 200 100" xmlns="http://www.w3.org/2000/svg">
										<ellipse cx="100" cy="50" rx="100" ry="50" />
									</svg>
									<svg className='buy-button-ellips buy-button-ellips-2' viewBox="0 0 200 100" xmlns="http://www.w3.org/2000/svg">
										<ellipse cx="100" cy="50" rx="100" ry="50" />
									</svg>
								<div className='buy-button-content'>

									<svg className='buy-button-cart' viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
										<path d="M3.71513 3.01617L3.51817 5.46617C3.47877 5.93617 3.84315 6.32617 4.30601 6.32617H19.3833C19.7969 6.32617 20.1416 6.00617 20.1712 5.58617C20.2992 3.81617 18.9697 2.37617 17.2266 2.37617H5.12339C5.02491 1.93617 4.82795 1.51617 4.52266 1.16617C4.03026 0.636172 3.3409 0.326172 2.63184 0.326172H0.918289C0.51452 0.326172 0.179688 0.666172 0.179688 1.07617C0.179688 1.48617 0.51452 1.82617 0.918289 1.82617H2.63184C2.93713 1.82617 3.22273 1.95617 3.42953 2.17617C3.63634 2.40617 3.73482 2.70617 3.71513 3.01617ZM9.17969 20.3262C9.17969 21.4307 8.28426 22.3262 7.17969 22.3262C6.07512 22.3262 5.17969 21.4307 5.17969 20.3262C5.17969 19.2216 6.07512 18.3262 7.17969 18.3262C8.28426 18.3262 9.17969 19.2216 9.17969 20.3262ZM17.1797 20.3262C17.1797 21.4307 16.2843 22.3262 15.1797 22.3262C14.0751 22.3262 13.1797 21.4307 13.1797 20.3262C13.1797 19.2216 14.0751 18.3262 15.1797 18.3262C16.2843 18.3262 17.1797 19.2216 17.1797 20.3262ZM4.32925 8.32617H19.4005C19.8623 8.32617 20.216 8.70435 20.1767 9.15041L19.8525 13.6789C19.7444 15.1334 18.4475 16.3262 16.9738 16.3262H6.04859C4.36854 16.3262 3.05202 14.9104 3.18956 13.2522L3.54326 9.03405C3.58256 8.63647 3.9166 8.32617 4.32925 8.32617Z"/>
									</svg>
									<span className='buy-button-text'>
										Купить
									</span>

								</div>

						</button>
					</div>
					
				</div>
			</div>

			<div className='cart-wrapper'>
				<div className='cart'>
					<svg onClick={toggleCart} className='cart-close' width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
						<path d="M27 9L9 27" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
						<path d="M9 9L27 27" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
					</svg>

					<span className='cart-heading'>ваша корзина</span>
					<div className='cart-items'>
						<div className='cart-item'>
							<div className='cart-item-image-div'>
								<img className='cart-item-image' src={lamp6}/>
							</div>
							<div className='cart-item-content'>
								<div className='cart-item-content-name-div'>
									<span style={{backgroundColor: "rgba(41, 208, 217, 1)"}} className='cart-item-content-color'></span>
									<span className='cart-item-content-name'>coppelia</span>
								</div>
								<span className='cart-item-content-description'>
									Лампа настольная
								</span>
								<svg className='cart-item-content-bin' width="29" height="29" viewBox="0 0 29 29" fill="none" xmlns="http://www.w3.org/2000/svg">
									<path d="M26.1489 5.08394C24.169 4.87956 22.189 4.72628 20.1968 4.61131V4.59854L19.9262 2.93796C19.7417 1.76277 19.4712 0 16.5935 0H13.3715C10.5061 0 10.2355 1.68613 10.0388 2.92518L9.7805 4.56022C8.6368 4.63686 7.4931 4.7135 6.34941 4.82847L3.84065 5.08394C3.32414 5.13504 2.95521 5.60766 3.0044 6.13139C3.05359 6.65511 3.49631 7.03832 4.01282 6.98723L6.52158 6.73175C12.9656 6.06752 19.4589 6.32299 25.9767 7C26.0136 7 26.0382 7 26.0751 7C26.5424 7 26.9483 6.62956 26.9975 6.13139C27.0344 5.60766 26.6654 5.13504 26.1489 5.08394Z" fill="#D9FF5A"/>
									<path d="M23.5935 9.46769C23.3082 9.16789 22.916 9 22.5119 9H7.48813C7.08401 9 6.67989 9.16789 6.40651 9.46769C6.13314 9.76749 5.97862 10.1752 6.0024 10.5949L6.73932 22.8987C6.87006 24.7215 7.03647 27 11.1846 27H18.8154C22.9635 27 23.1299 24.7335 23.2607 22.8987L23.9976 10.6069C24.0214 10.1752 23.8669 9.76749 23.5935 9.46769ZM16.9731 20.992H13.0151C12.5277 20.992 12.1236 20.5843 12.1236 20.0926C12.1236 19.6009 12.5277 19.1932 13.0151 19.1932H16.9731C17.4604 19.1932 17.8645 19.6009 17.8645 20.0926C17.8645 20.5843 17.4604 20.992 16.9731 20.992ZM17.9715 16.1952H12.0285C11.5412 16.1952 11.1371 15.7875 11.1371 15.2958C11.1371 14.8041 11.5412 14.3964 12.0285 14.3964H17.9715C18.4588 14.3964 18.8629 14.8041 18.8629 15.2958C18.8629 15.7875 18.4588 16.1952 17.9715 16.1952Z" fill="#D9FF5A"/>
								</svg>
								<div className='cart-item-content-pricing'>
									<span className='cart-item-content-price'>150 000<span className='cart-item-content-ruble'>₽</span></span>
									<div className='cart-item-content-quantity-div'>
										<button className='cart-item-content-button cart-item-content-minus'>
											-
										</button>
										<span className='cart-item-content-quantity'>
											1
										</span>
										<button className='cart-item-content-button cart-item-content-plus'>
											+
										</button>
									</div>
								</div>
							</div>
						</div>

						<div className='cart-item'>
							<div className='cart-item-image-div'>
								<img className='cart-item-image' src={lamp3}/>
							</div>
							<div className='cart-item-content'>
								<div className='cart-item-content-name-div'>
									<span style={{backgroundColor: "rgba(255, 196, 165, 1)"}} className='cart-item-content-color'></span>
									<span className='cart-item-content-name'>Facchetta</span>
								</div>
								<span className='cart-item-content-description'>
									Лампа настольная
								</span>
								<svg className='cart-item-content-bin' width="29" height="29" viewBox="0 0 29 29" fill="none" xmlns="http://www.w3.org/2000/svg">
									<path d="M26.1489 5.08394C24.169 4.87956 22.189 4.72628 20.1968 4.61131V4.59854L19.9262 2.93796C19.7417 1.76277 19.4712 0 16.5935 0H13.3715C10.5061 0 10.2355 1.68613 10.0388 2.92518L9.7805 4.56022C8.6368 4.63686 7.4931 4.7135 6.34941 4.82847L3.84065 5.08394C3.32414 5.13504 2.95521 5.60766 3.0044 6.13139C3.05359 6.65511 3.49631 7.03832 4.01282 6.98723L6.52158 6.73175C12.9656 6.06752 19.4589 6.32299 25.9767 7C26.0136 7 26.0382 7 26.0751 7C26.5424 7 26.9483 6.62956 26.9975 6.13139C27.0344 5.60766 26.6654 5.13504 26.1489 5.08394Z" fill="#D9FF5A"/>
									<path d="M23.5935 9.46769C23.3082 9.16789 22.916 9 22.5119 9H7.48813C7.08401 9 6.67989 9.16789 6.40651 9.46769C6.13314 9.76749 5.97862 10.1752 6.0024 10.5949L6.73932 22.8987C6.87006 24.7215 7.03647 27 11.1846 27H18.8154C22.9635 27 23.1299 24.7335 23.2607 22.8987L23.9976 10.6069C24.0214 10.1752 23.8669 9.76749 23.5935 9.46769ZM16.9731 20.992H13.0151C12.5277 20.992 12.1236 20.5843 12.1236 20.0926C12.1236 19.6009 12.5277 19.1932 13.0151 19.1932H16.9731C17.4604 19.1932 17.8645 19.6009 17.8645 20.0926C17.8645 20.5843 17.4604 20.992 16.9731 20.992ZM17.9715 16.1952H12.0285C11.5412 16.1952 11.1371 15.7875 11.1371 15.2958C11.1371 14.8041 11.5412 14.3964 12.0285 14.3964H17.9715C18.4588 14.3964 18.8629 14.8041 18.8629 15.2958C18.8629 15.7875 18.4588 16.1952 17.9715 16.1952Z" fill="#D9FF5A"/>
								</svg>
								<div className='cart-item-content-pricing'>
									<span className='cart-item-content-price'>150 000<span className='cart-item-content-ruble'>₽</span></span>
									<div className='cart-item-content-quantity-div'>
										<button className='cart-item-content-button cart-item-content-minus'>
											-
										</button>
										<span className='cart-item-content-quantity'>
											1
										</span>
										<button className='cart-item-content-button cart-item-content-plus'>
											+
										</button>
									</div>
								</div>
							</div>
						</div>

						<div className='cart-item'>
							<div className='cart-item-image-div'>
								<img className='cart-item-image' src={lamp5}/>
							</div>
							<div className='cart-item-content'>
								<div className='cart-item-content-name-div'>
									<span style={{backgroundColor: "rgba(250, 142, 239, 1)"}} className='cart-item-content-color'></span>
									<span className='cart-item-content-name'>coppelia</span>
								</div>
								<span className='cart-item-content-description'>
									Лампа настольная
								</span>
								<svg className='cart-item-content-bin' width="29" height="29" viewBox="0 0 29 29" fill="none" xmlns="http://www.w3.org/2000/svg">
									<path d="M26.1489 5.08394C24.169 4.87956 22.189 4.72628 20.1968 4.61131V4.59854L19.9262 2.93796C19.7417 1.76277 19.4712 0 16.5935 0H13.3715C10.5061 0 10.2355 1.68613 10.0388 2.92518L9.7805 4.56022C8.6368 4.63686 7.4931 4.7135 6.34941 4.82847L3.84065 5.08394C3.32414 5.13504 2.95521 5.60766 3.0044 6.13139C3.05359 6.65511 3.49631 7.03832 4.01282 6.98723L6.52158 6.73175C12.9656 6.06752 19.4589 6.32299 25.9767 7C26.0136 7 26.0382 7 26.0751 7C26.5424 7 26.9483 6.62956 26.9975 6.13139C27.0344 5.60766 26.6654 5.13504 26.1489 5.08394Z" fill="#D9FF5A"/>
									<path d="M23.5935 9.46769C23.3082 9.16789 22.916 9 22.5119 9H7.48813C7.08401 9 6.67989 9.16789 6.40651 9.46769C6.13314 9.76749 5.97862 10.1752 6.0024 10.5949L6.73932 22.8987C6.87006 24.7215 7.03647 27 11.1846 27H18.8154C22.9635 27 23.1299 24.7335 23.2607 22.8987L23.9976 10.6069C24.0214 10.1752 23.8669 9.76749 23.5935 9.46769ZM16.9731 20.992H13.0151C12.5277 20.992 12.1236 20.5843 12.1236 20.0926C12.1236 19.6009 12.5277 19.1932 13.0151 19.1932H16.9731C17.4604 19.1932 17.8645 19.6009 17.8645 20.0926C17.8645 20.5843 17.4604 20.992 16.9731 20.992ZM17.9715 16.1952H12.0285C11.5412 16.1952 11.1371 15.7875 11.1371 15.2958C11.1371 14.8041 11.5412 14.3964 12.0285 14.3964H17.9715C18.4588 14.3964 18.8629 14.8041 18.8629 15.2958C18.8629 15.7875 18.4588 16.1952 17.9715 16.1952Z" fill="#D9FF5A"/>
								</svg>
								<div className='cart-item-content-pricing'>
									<span className='cart-item-content-price'>150 000<span className='cart-item-content-ruble'>₽</span></span>
									<div className='cart-item-content-quantity-div'>
										<button className='cart-item-content-button cart-item-content-minus'>
											-
										</button>
										<span className='cart-item-content-quantity'>
											1
										</span>
										<button className='cart-item-content-button cart-item-content-plus'>
											+
										</button>
									</div>
								</div>
							</div>
						</div>

					</div>
					<div className='cart-payment'>
						<div className='cart-total-price'>
							<span className='cart-total-price-heading'>итого:</span>
							<span className='cart-item-content-price cart-total-price-number'>450 000<span className='cart-item-content-ruble'>₽</span></span>
						</div>
						<button onClick={toPayment} className='cart-pay'>
							Оформить
						</button>
						<svg className='cart-pay-ellips' width="189" height="95" viewBox="0 0 189 95" fill="none" xmlns="http://www.w3.org/2000/svg">
							<path d="M187.824 37.5946C189.102 49.7771 180.225 62.141 164.191 72.2379C148.217 82.2966 125.419 89.9043 99.5853 92.6195C73.7515 95.3348 49.8715 92.6331 32.1579 86.1152C14.377 79.5724 3.12677 69.3239 1.84818 57.1415C0.569596 44.959 9.44656 32.5951 25.4811 22.4982C41.4549 12.4395 64.2529 4.83184 90.0867 2.1166C115.92 -0.598641 139.8 2.10301 157.514 8.62095C175.295 15.1637 186.545 25.4122 187.824 37.5946Z" fill="#EBE3FF" fill-opacity="0.19" stroke="#D9FF5A" stroke-width="2"/>
						</svg>

					</div>
				</div>
			</div>

			<div className='favorite-wrapper'>
				<div className='favorite'>
					<svg onClick={toggleFavorite} className='favorite-close' width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
						<path d="M27 9L9 27" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
						<path d="M9 9L27 27" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
					</svg>

					<span className='favorite-heading'>товары в избранном</span>
					<div className='favorite-items'>
						<div className='favorite-item'>
							<div className='favorite-item-image-div'>
								<img className='favorite-item-image' src={lamp6}/>
							</div>
							<div className='favorite-item-content'>
								<div className='favorite-item-content-name-div'>
									<span style={{backgroundColor: "rgba(41, 208, 217, 1)"}} className='favorite-item-content-color'></span>
									<span className='favorite-item-content-name'>coppelia</span>
								</div>
								<span className='favorite-item-content-description'>
									Лампа настольная
								</span>
								<svg className='favorite-item-content-like' width="54" height="54" viewBox="0 0 54 54" fill="none" xmlns="http://www.w3.org/2000/svg">
									<g filter="url(#filter0_b_2509_2606)">
									<circle cx="27" cy="27" r="27" fill="white" fill-opacity="0.19"/>
									<circle cx="27" cy="27" r="26" stroke="#FFB1F7" stroke-width="2"/>
									</g>
									<path d="M33.7662 22.2377C33.3753 21.8453 32.9111 21.534 32.4002 21.3217C31.8893 21.1093 31.3417 21 30.7887 21C30.2357 21 29.6881 21.1093 29.1772 21.3217C28.6663 21.534 28.2021 21.8453 27.8112 22.2377L26.9998 23.0517L26.1884 22.2377C25.3987 21.4455 24.3277 21.0004 23.2109 21.0004C22.0941 21.0004 21.023 21.4455 20.2333 22.2377C19.4436 23.0299 19 24.1044 19 25.2248C19 26.3452 19.4436 27.4196 20.2333 28.2119L21.0447 29.0258L26.9998 35L32.9549 29.0258L33.7662 28.2119C34.1574 27.8197 34.4677 27.354 34.6793 26.8415C34.891 26.3289 35 25.7796 35 25.2248C35 24.67 34.891 24.1206 34.6793 23.6081C34.4677 23.0956 34.1574 22.6299 33.7662 22.2377Z" fill="white"/>
									<path d="M33.7662 22.2377L33.0578 22.9435L33.0582 22.9438L33.7662 22.2377ZM30.7887 21V22V21ZM27.8112 22.2377L28.5194 22.9437L28.5196 22.9435L27.8112 22.2377ZM26.9998 23.0517L26.2916 23.7576L26.9998 24.4681L27.708 23.7576L26.9998 23.0517ZM26.1884 22.2377L25.4802 22.9437V22.9437L26.1884 22.2377ZM20.2333 28.2119L20.9416 27.5059H20.9416L20.2333 28.2119ZM21.0447 29.0258L20.3365 29.7318H20.3365L21.0447 29.0258ZM26.9998 35L26.2916 35.706L26.9998 36.4165L27.708 35.706L26.9998 35ZM32.9549 29.0258L33.6631 29.7318H33.6631L32.9549 29.0258ZM33.7662 28.2119L33.0582 27.5057L33.058 27.5059L33.7662 28.2119ZM34.4747 21.5319C33.991 21.0464 33.4165 20.6612 32.7841 20.3983L32.0164 22.2451C32.4057 22.4069 32.7596 22.6442 33.0578 22.9435L34.4747 21.5319ZM32.7841 20.3983C32.1516 20.1354 31.4735 20 30.7887 20V22C31.2099 22 31.6271 22.0833 32.0164 22.2451L32.7841 20.3983ZM30.7887 20C30.1039 20 29.4258 20.1354 28.7934 20.3983L29.561 22.2451C29.9503 22.0833 30.3675 22 30.7887 22V20ZM28.7934 20.3983C28.1609 20.6612 27.5864 21.0464 27.1028 21.5319L28.5196 22.9435C28.8178 22.6442 29.1717 22.4069 29.561 22.2451L28.7934 20.3983ZM27.1029 21.5317L26.2916 22.3457L27.708 23.7576L28.5194 22.9437L27.1029 21.5317ZM27.708 22.3457L26.8967 21.5317L25.4802 22.9437L26.2916 23.7576L27.708 22.3457ZM26.8967 21.5317C25.9197 20.5516 24.5939 20.0004 23.2109 20.0004V22.0004C24.0614 22.0004 24.8778 22.3393 25.4802 22.9437L26.8967 21.5317ZM23.2109 20.0004C21.8278 20.0004 20.5021 20.5516 19.5251 21.5317L20.9416 22.9437C21.544 22.3393 22.3603 22.0004 23.2109 22.0004V20.0004ZM19.5251 21.5317C18.5482 22.5117 18 23.8402 18 25.2248H20C20 24.3686 20.3391 23.5481 20.9416 22.9437L19.5251 21.5317ZM18 25.2248C18 26.6093 18.5482 27.9378 19.5251 28.9178L20.9416 27.5059C20.3391 26.9015 20 26.081 20 25.2248H18ZM19.5251 28.9178L20.3365 29.7318L21.7529 28.3199L20.9416 27.5059L19.5251 28.9178ZM20.3365 29.7318L26.2916 35.706L27.708 34.294L21.7529 28.3199L20.3365 29.7318ZM27.708 35.706L33.6631 29.7318L32.2467 28.3199L26.2916 34.294L27.708 35.706ZM33.6631 29.7318L34.4745 28.9178L33.058 27.5059L32.2467 28.3199L33.6631 29.7318ZM34.4743 28.918C34.9582 28.4328 35.3419 27.8569 35.6036 27.2232L33.7551 26.4597C33.5934 26.8511 33.3566 27.2065 33.0582 27.5057L34.4743 28.918ZM35.6036 27.2232C35.8653 26.5896 36 25.9105 36 25.2248H34C34 25.6487 33.9167 26.0683 33.7551 26.4597L35.6036 27.2232ZM36 25.2248C36 24.5391 35.8653 23.86 35.6036 23.2264L33.7551 23.9899C33.9167 24.3813 34 24.8009 34 25.2248H36ZM35.6036 23.2264C35.3419 22.5927 34.9582 22.0168 34.4743 21.5316L33.0582 22.9438C33.3566 23.243 33.5934 23.5984 33.7551 23.9899L35.6036 23.2264Z" fill="#FFB1F7"/>
								</svg>


								<div className='favorite-item-content-pricing'>
									<span className='favorite-item-content-price'>150 000<span className='favorite-item-content-ruble'>₽</span></span>
								</div>
							</div>
						</div>

						<div className='favorite-item'>
							<div className='favorite-item-image-div'>
								<img className='favorite-item-image' src={lamp3}/>
							</div>
							<div className='favorite-item-content'>
								<div className='favorite-item-content-name-div'>
									<span style={{backgroundColor: "rgba(255, 196, 165, 1)"}} className='favorite-item-content-color'></span>
									<span className='favorite-item-content-name'>Facchetta</span>
								</div>
								<span className='favorite-item-content-description'>
									Лампа настольная
								</span>
								<svg className='favorite-item-content-like' width="54" height="54" viewBox="0 0 54 54" fill="none" xmlns="http://www.w3.org/2000/svg">
									<g filter="url(#filter0_b_2509_2606)">
									<circle cx="27" cy="27" r="27" fill="white" fill-opacity="0.19"/>
									<circle cx="27" cy="27" r="26" stroke="#FFB1F7" stroke-width="2"/>
									</g>
									<path d="M33.7662 22.2377C33.3753 21.8453 32.9111 21.534 32.4002 21.3217C31.8893 21.1093 31.3417 21 30.7887 21C30.2357 21 29.6881 21.1093 29.1772 21.3217C28.6663 21.534 28.2021 21.8453 27.8112 22.2377L26.9998 23.0517L26.1884 22.2377C25.3987 21.4455 24.3277 21.0004 23.2109 21.0004C22.0941 21.0004 21.023 21.4455 20.2333 22.2377C19.4436 23.0299 19 24.1044 19 25.2248C19 26.3452 19.4436 27.4196 20.2333 28.2119L21.0447 29.0258L26.9998 35L32.9549 29.0258L33.7662 28.2119C34.1574 27.8197 34.4677 27.354 34.6793 26.8415C34.891 26.3289 35 25.7796 35 25.2248C35 24.67 34.891 24.1206 34.6793 23.6081C34.4677 23.0956 34.1574 22.6299 33.7662 22.2377Z" fill="white"/>
									<path d="M33.7662 22.2377L33.0578 22.9435L33.0582 22.9438L33.7662 22.2377ZM30.7887 21V22V21ZM27.8112 22.2377L28.5194 22.9437L28.5196 22.9435L27.8112 22.2377ZM26.9998 23.0517L26.2916 23.7576L26.9998 24.4681L27.708 23.7576L26.9998 23.0517ZM26.1884 22.2377L25.4802 22.9437V22.9437L26.1884 22.2377ZM20.2333 28.2119L20.9416 27.5059H20.9416L20.2333 28.2119ZM21.0447 29.0258L20.3365 29.7318H20.3365L21.0447 29.0258ZM26.9998 35L26.2916 35.706L26.9998 36.4165L27.708 35.706L26.9998 35ZM32.9549 29.0258L33.6631 29.7318H33.6631L32.9549 29.0258ZM33.7662 28.2119L33.0582 27.5057L33.058 27.5059L33.7662 28.2119ZM34.4747 21.5319C33.991 21.0464 33.4165 20.6612 32.7841 20.3983L32.0164 22.2451C32.4057 22.4069 32.7596 22.6442 33.0578 22.9435L34.4747 21.5319ZM32.7841 20.3983C32.1516 20.1354 31.4735 20 30.7887 20V22C31.2099 22 31.6271 22.0833 32.0164 22.2451L32.7841 20.3983ZM30.7887 20C30.1039 20 29.4258 20.1354 28.7934 20.3983L29.561 22.2451C29.9503 22.0833 30.3675 22 30.7887 22V20ZM28.7934 20.3983C28.1609 20.6612 27.5864 21.0464 27.1028 21.5319L28.5196 22.9435C28.8178 22.6442 29.1717 22.4069 29.561 22.2451L28.7934 20.3983ZM27.1029 21.5317L26.2916 22.3457L27.708 23.7576L28.5194 22.9437L27.1029 21.5317ZM27.708 22.3457L26.8967 21.5317L25.4802 22.9437L26.2916 23.7576L27.708 22.3457ZM26.8967 21.5317C25.9197 20.5516 24.5939 20.0004 23.2109 20.0004V22.0004C24.0614 22.0004 24.8778 22.3393 25.4802 22.9437L26.8967 21.5317ZM23.2109 20.0004C21.8278 20.0004 20.5021 20.5516 19.5251 21.5317L20.9416 22.9437C21.544 22.3393 22.3603 22.0004 23.2109 22.0004V20.0004ZM19.5251 21.5317C18.5482 22.5117 18 23.8402 18 25.2248H20C20 24.3686 20.3391 23.5481 20.9416 22.9437L19.5251 21.5317ZM18 25.2248C18 26.6093 18.5482 27.9378 19.5251 28.9178L20.9416 27.5059C20.3391 26.9015 20 26.081 20 25.2248H18ZM19.5251 28.9178L20.3365 29.7318L21.7529 28.3199L20.9416 27.5059L19.5251 28.9178ZM20.3365 29.7318L26.2916 35.706L27.708 34.294L21.7529 28.3199L20.3365 29.7318ZM27.708 35.706L33.6631 29.7318L32.2467 28.3199L26.2916 34.294L27.708 35.706ZM33.6631 29.7318L34.4745 28.9178L33.058 27.5059L32.2467 28.3199L33.6631 29.7318ZM34.4743 28.918C34.9582 28.4328 35.3419 27.8569 35.6036 27.2232L33.7551 26.4597C33.5934 26.8511 33.3566 27.2065 33.0582 27.5057L34.4743 28.918ZM35.6036 27.2232C35.8653 26.5896 36 25.9105 36 25.2248H34C34 25.6487 33.9167 26.0683 33.7551 26.4597L35.6036 27.2232ZM36 25.2248C36 24.5391 35.8653 23.86 35.6036 23.2264L33.7551 23.9899C33.9167 24.3813 34 24.8009 34 25.2248H36ZM35.6036 23.2264C35.3419 22.5927 34.9582 22.0168 34.4743 21.5316L33.0582 22.9438C33.3566 23.243 33.5934 23.5984 33.7551 23.9899L35.6036 23.2264Z" fill="#FFB1F7"/>
								</svg>
								<div className='favorite-item-content-pricing'>
									<span className='favorite-item-content-price'>150 000<span className='favorite-item-content-ruble'>₽</span></span>
								</div>
							</div>
						</div>

						<div className='favorite-item'>
							<div className='favorite-item-image-div'>
								<img className='favorite-item-image' src={lamp5}/>
							</div>
							<div className='favorite-item-content'>
								<div className='favorite-item-content-name-div'>
									<span style={{backgroundColor: "rgba(250, 142, 239, 1)"}} className='favorite-item-content-color'></span>
									<span className='favorite-item-content-name'>coppelia</span>
								</div>
								<span className='favorite-item-content-description'>
									Лампа настольная
								</span>
								<svg className='favorite-item-content-like' width="54" height="54" viewBox="0 0 54 54" fill="none" xmlns="http://www.w3.org/2000/svg">
									<g filter="url(#filter0_b_2509_2606)">
									<circle cx="27" cy="27" r="27" fill="white" fill-opacity="0.19"/>
									<circle cx="27" cy="27" r="26" stroke="#FFB1F7" stroke-width="2"/>
									</g>
									<path d="M33.7662 22.2377C33.3753 21.8453 32.9111 21.534 32.4002 21.3217C31.8893 21.1093 31.3417 21 30.7887 21C30.2357 21 29.6881 21.1093 29.1772 21.3217C28.6663 21.534 28.2021 21.8453 27.8112 22.2377L26.9998 23.0517L26.1884 22.2377C25.3987 21.4455 24.3277 21.0004 23.2109 21.0004C22.0941 21.0004 21.023 21.4455 20.2333 22.2377C19.4436 23.0299 19 24.1044 19 25.2248C19 26.3452 19.4436 27.4196 20.2333 28.2119L21.0447 29.0258L26.9998 35L32.9549 29.0258L33.7662 28.2119C34.1574 27.8197 34.4677 27.354 34.6793 26.8415C34.891 26.3289 35 25.7796 35 25.2248C35 24.67 34.891 24.1206 34.6793 23.6081C34.4677 23.0956 34.1574 22.6299 33.7662 22.2377Z" fill="white"/>
									<path d="M33.7662 22.2377L33.0578 22.9435L33.0582 22.9438L33.7662 22.2377ZM30.7887 21V22V21ZM27.8112 22.2377L28.5194 22.9437L28.5196 22.9435L27.8112 22.2377ZM26.9998 23.0517L26.2916 23.7576L26.9998 24.4681L27.708 23.7576L26.9998 23.0517ZM26.1884 22.2377L25.4802 22.9437V22.9437L26.1884 22.2377ZM20.2333 28.2119L20.9416 27.5059H20.9416L20.2333 28.2119ZM21.0447 29.0258L20.3365 29.7318H20.3365L21.0447 29.0258ZM26.9998 35L26.2916 35.706L26.9998 36.4165L27.708 35.706L26.9998 35ZM32.9549 29.0258L33.6631 29.7318H33.6631L32.9549 29.0258ZM33.7662 28.2119L33.0582 27.5057L33.058 27.5059L33.7662 28.2119ZM34.4747 21.5319C33.991 21.0464 33.4165 20.6612 32.7841 20.3983L32.0164 22.2451C32.4057 22.4069 32.7596 22.6442 33.0578 22.9435L34.4747 21.5319ZM32.7841 20.3983C32.1516 20.1354 31.4735 20 30.7887 20V22C31.2099 22 31.6271 22.0833 32.0164 22.2451L32.7841 20.3983ZM30.7887 20C30.1039 20 29.4258 20.1354 28.7934 20.3983L29.561 22.2451C29.9503 22.0833 30.3675 22 30.7887 22V20ZM28.7934 20.3983C28.1609 20.6612 27.5864 21.0464 27.1028 21.5319L28.5196 22.9435C28.8178 22.6442 29.1717 22.4069 29.561 22.2451L28.7934 20.3983ZM27.1029 21.5317L26.2916 22.3457L27.708 23.7576L28.5194 22.9437L27.1029 21.5317ZM27.708 22.3457L26.8967 21.5317L25.4802 22.9437L26.2916 23.7576L27.708 22.3457ZM26.8967 21.5317C25.9197 20.5516 24.5939 20.0004 23.2109 20.0004V22.0004C24.0614 22.0004 24.8778 22.3393 25.4802 22.9437L26.8967 21.5317ZM23.2109 20.0004C21.8278 20.0004 20.5021 20.5516 19.5251 21.5317L20.9416 22.9437C21.544 22.3393 22.3603 22.0004 23.2109 22.0004V20.0004ZM19.5251 21.5317C18.5482 22.5117 18 23.8402 18 25.2248H20C20 24.3686 20.3391 23.5481 20.9416 22.9437L19.5251 21.5317ZM18 25.2248C18 26.6093 18.5482 27.9378 19.5251 28.9178L20.9416 27.5059C20.3391 26.9015 20 26.081 20 25.2248H18ZM19.5251 28.9178L20.3365 29.7318L21.7529 28.3199L20.9416 27.5059L19.5251 28.9178ZM20.3365 29.7318L26.2916 35.706L27.708 34.294L21.7529 28.3199L20.3365 29.7318ZM27.708 35.706L33.6631 29.7318L32.2467 28.3199L26.2916 34.294L27.708 35.706ZM33.6631 29.7318L34.4745 28.9178L33.058 27.5059L32.2467 28.3199L33.6631 29.7318ZM34.4743 28.918C34.9582 28.4328 35.3419 27.8569 35.6036 27.2232L33.7551 26.4597C33.5934 26.8511 33.3566 27.2065 33.0582 27.5057L34.4743 28.918ZM35.6036 27.2232C35.8653 26.5896 36 25.9105 36 25.2248H34C34 25.6487 33.9167 26.0683 33.7551 26.4597L35.6036 27.2232ZM36 25.2248C36 24.5391 35.8653 23.86 35.6036 23.2264L33.7551 23.9899C33.9167 24.3813 34 24.8009 34 25.2248H36ZM35.6036 23.2264C35.3419 22.5927 34.9582 22.0168 34.4743 21.5316L33.0582 22.9438C33.3566 23.243 33.5934 23.5984 33.7551 23.9899L35.6036 23.2264Z" fill="#FFB1F7"/>
								</svg>
								<div className='favorite-item-content-pricing'>
									<span className='favorite-item-content-price'>150 000<span className='favorite-item-content-ruble'>₽</span></span>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>

			<div className='login-wrapper'>
				<div className='login'>
					<svg onClick={toggleLogin} className='login-close' width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
						<path d="M27 9L9 27" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
						<path d="M9 9L27 27" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
					</svg>

					<span className='login-heading'>вход</span>
					<div className='login-input-div'>
						<input className='login-input email' placeholder='e-mail'></input>
						<input className='login-input password' placeholder='пароль'></input>
					</div>
					<div className='login-button-div'>
						<button className='login-button'>Войти</button>
						<svg className='login-button-ellips' width="189" height="95" viewBox="0 0 189 95" fill="none" xmlns="http://www.w3.org/2000/svg">
							<path d="M187.824 37.5946C189.102 49.7771 180.225 62.141 164.191 72.2379C148.217 82.2966 125.419 89.9043 99.5853 92.6195C73.7515 95.3348 49.8715 92.6331 32.1579 86.1152C14.377 79.5724 3.12677 69.3239 1.84818 57.1415C0.569596 44.959 9.44656 32.5951 25.4811 22.4982C41.4549 12.4395 64.2529 4.83184 90.0867 2.1166C115.92 -0.598641 139.8 2.10301 157.514 8.62095C175.295 15.1637 186.545 25.4122 187.824 37.5946Z" fill="#EBE3FF" fill-opacity="0.19" stroke="#D9FF5A" stroke-width="2"/>
						</svg>
					</div>
					<div className='login-to-registration'>
						<span>
							нет аккаунта?
						</span>
						<span className='login-to-reg' onClick={toggleRegistration}>
							регистрация
							<svg width="42" height="16" viewBox="0 0 42 16" fill="none" xmlns="http://www.w3.org/2000/svg">
								<path d="M41.7071 8.70711C42.0976 8.31658 42.0976 7.68342 41.7071 7.29289L35.3431 0.928932C34.9526 0.538408 34.3195 0.538408 33.9289 0.928932C33.5384 1.31946 33.5384 1.95262 33.9289 2.34315L39.5858 8L33.9289 13.6569C33.5384 14.0474 33.5384 14.6805 33.9289 15.0711C34.3195 15.4616 34.9526 15.4616 35.3431 15.0711L41.7071 8.70711ZM0 9H41V7H0V9Z" fill="white"/>
							</svg>

						</span>
					</div>
				</div>
			</div>

			<div className='registration-wrapper'>
				<div className='registration'>
					<svg onClick={toggleRegistration} className='registration-close' width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
						<path d="M27 9L9 27" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
						<path d="M9 9L27 27" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
					</svg>

					<span className='registration-heading'>регистрация</span>
					<div className='registration-input-div'>
						<input className='registration-input email' placeholder='e-mail'></input>
						<input className='registration-input password' placeholder='пароль'></input>
						<input className='registration-input password' placeholder='повторите пароль'></input>
					</div>
					<div className='registration-button-div'>
						<button className='registration-button'>Регистрация</button>
						<svg className='registration-button-ellips' width="189" height="95" viewBox="0 0 189 95" fill="none" xmlns="http://www.w3.org/2000/svg">
							<path d="M187.824 37.5946C189.102 49.7771 180.225 62.141 164.191 72.2379C148.217 82.2966 125.419 89.9043 99.5853 92.6195C73.7515 95.3348 49.8715 92.6331 32.1579 86.1152C14.377 79.5724 3.12677 69.3239 1.84818 57.1415C0.569596 44.959 9.44656 32.5951 25.4811 22.4982C41.4549 12.4395 64.2529 4.83184 90.0867 2.1166C115.92 -0.598641 139.8 2.10301 157.514 8.62095C175.295 15.1637 186.545 25.4122 187.824 37.5946Z" fill="#EBE3FF" fill-opacity="0.19" stroke="#D9FF5A" stroke-width="2"/>
						</svg>
					</div>
					<div onClick={toggleLogin} className='registration-to-login'>
						<span>
							<svg width="42" height="16" viewBox="0 0 42 16" fill="none" xmlns="http://www.w3.org/2000/svg">
								<path d="M0.292892 8.70711C-0.0976295 8.31658 -0.0976295 7.68342 0.292892 7.29289L6.65685 0.928932C7.04738 0.538408 7.68054 0.538408 8.07107 0.928932C8.46159 1.31946 8.46159 1.95262 8.07107 2.34315L2.41422 8L8.07107 13.6569C8.46159 14.0474 8.46159 14.6805 8.07107 15.0711C7.68054 15.4616 7.04738 15.4616 6.65685 15.0711L0.292892 8.70711ZM42 9L1 9V7L42 7V9Z" fill="white"/>
							</svg>

							вход
						</span>
					</div>
				</div>
			</div>

			<div className='contacts-wrapper'>
				<div className='contacts'>
					<svg onClick={toggleContacts} className='contacts-close' width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
						<path d="M27 9L9 27" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
						<path d="M9 9L27 27" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
					</svg>
					<div className='contacts-top'>
						<div className='contacts-info-div'>
							<div className='contacts-info-address-div'>
								<span className='contacts-info-address-heading'>
									адрес
								</span>
								<span className='contacts-info-address-city'>
									москва
								</span>
								<span className='contacts-info-address-full-address'>
									Хохловский переулок д. 11, стр. 3
								</span>
								<div className='contacts-info-address-map'>
									<span>Адрес на карте</span>
									<svg width="16" height="24" viewBox="0 0 16 24" fill="none" xmlns="http://www.w3.org/2000/svg">
										<path d="M9 1C9 0.447715 8.55228 0 8 0C7.44772 0 7 0.447715 7 1L9 1ZM7.29289 23.7071C7.68342 24.0976 8.31658 24.0976 8.70711 23.7071L15.0711 17.3431C15.4616 16.9526 15.4616 16.3195 15.0711 15.9289C14.6805 15.5384 14.0474 15.5384 13.6569 15.9289L8 21.5858L2.34315 15.9289C1.95262 15.5384 1.31946 15.5384 0.928932 15.9289C0.538408 16.3195 0.538408 16.9526 0.928932 17.3431L7.29289 23.7071ZM7 1L7 23H9L9 1L7 1Z" fill="white"/>
									</svg>
								</div>
							</div>
							<div className='contacts-info-number-div'>
								<span className='contacts-info-number-heading'>
									телефон
								</span>
								<span className='contacts-info-number'>
									+7 (495) 621-26-17
								</span>
								<span className='contacts-info-number-promise'>
									Ответим на все вопросы
								</span>
								<div className='contacts-info-number-logos'>
									<svg width="40" height="41" viewBox="0 0 40 41" fill="none" xmlns="http://www.w3.org/2000/svg">
									<circle cx="19.8" cy="20.5998" r="19.8" fill="white"/>
									<path d="M27.6993 14.6515L25.0586 27.1046C24.8593 27.9834 24.3399 28.2021 23.6018 27.7884L19.578 24.8234L17.6368 26.6909C17.4218 26.9059 17.2424 27.0853 16.828 27.0853L17.1174 22.9878L24.5743 16.2496C24.8986 15.9609 24.5036 15.8003 24.0705 16.0896L14.8517 21.8946L10.883 20.6521C10.0199 20.3828 10.0042 19.789 11.063 19.3746L26.5861 13.394C27.3049 13.1246 27.9336 13.554 27.6993 14.6521V14.6515Z" fill="#AE97E8"/>
									</svg>


									<svg width="40" height="41" viewBox="0 0 40 41" fill="none" xmlns="http://www.w3.org/2000/svg">
									<circle cx="19.801" cy="20.5998" r="19.8" fill="white"/>
									<path d="M28.001 16.2232C27.4126 16.4638 26.7805 16.6263 26.116 16.6998C26.8016 16.3213 27.3146 15.7255 27.5592 15.0238C26.915 15.3768 26.21 15.6253 25.4748 15.7584C24.9804 15.2714 24.3255 14.9486 23.6119 14.8401C22.8982 14.7316 22.1658 14.8436 21.5281 15.1585C20.8905 15.4735 20.3834 15.9738 20.0856 16.5819C19.7878 17.19 19.716 17.8717 19.8812 18.5213C18.5759 18.4609 17.299 18.1479 16.1334 17.6027C14.9677 17.0575 13.9394 16.2922 13.115 15.3566C12.8332 15.8052 12.6711 16.3253 12.6711 16.8792C12.6708 17.3778 12.8039 17.8688 13.0586 18.3086C13.3133 18.7484 13.6817 19.1234 14.1312 19.4003C13.6099 19.385 13.1002 19.255 12.6443 19.0213V19.0603C12.6443 19.7596 12.9065 20.4375 13.3865 20.9787C13.8664 21.52 14.5346 21.8915 15.2776 22.03C14.7941 22.1507 14.2871 22.1685 13.795 22.082C14.0047 22.6837 14.413 23.2099 14.9629 23.5869C15.5128 23.9639 16.1767 24.1728 16.8617 24.1844C15.6989 25.0266 14.2629 25.4834 12.7846 25.4814C12.5227 25.4815 12.261 25.4673 12.001 25.4391C13.5015 26.3292 15.2483 26.8016 17.0322 26.7998C23.0712 26.7998 26.3725 22.1853 26.3725 18.1833C26.3725 18.0533 26.369 17.922 26.3626 17.7919C27.0048 17.3635 27.5591 16.833 27.9996 16.2252L28.001 16.2232Z" fill="#AE97E8"/>
									</svg>

									<svg width="40" height="41" viewBox="0 0 40 41" fill="none" xmlns="http://www.w3.org/2000/svg">
									<circle cx="19.799" cy="20.5998" r="19.8" fill="white"/>
									<g clip-path="url(#clip0_6827_1882)">
									<path d="M15.6498 27.5498H12.3845V17.0344H15.6498V27.5498ZM14.0151 15.6001C12.9711 15.6001 12.124 14.7349 12.124 13.6909C12.124 13.1894 12.3233 12.7084 12.6779 12.3537C13.0326 11.999 13.5136 11.7998 14.0151 11.7998C14.5167 11.7998 14.9977 11.999 15.3524 12.3537C15.707 12.7084 15.9063 13.1894 15.9063 13.6909C15.9063 14.7349 15.0591 15.6001 14.0151 15.6001ZM27.8706 27.5498H24.6126V22.4311C24.6126 21.211 24.5879 19.6467 22.915 19.6467C21.2174 19.6467 20.957 20.9719 20.957 22.3433V27.5498H17.695V17.0344H20.8265V18.4688H20.872C21.308 17.6425 22.3728 16.7706 23.9613 16.7706C27.266 16.7706 27.8735 18.9469 27.8735 21.7735V27.5498H27.8706Z" fill="#AE97E8"/>
									</g>
									</svg>

									<svg width="40" height="41" viewBox="0 0 40 41" fill="none" xmlns="http://www.w3.org/2000/svg">
									<circle cx="20.1999" cy="20.5998" r="19.8" fill="white"/>
									<path d="M24.0227 21.8252L24.4788 18.6641H21.6258V16.6136C21.6258 15.7488 22.0244 14.9049 23.3022 14.9049H24.5993V12.2136C24.5993 12.2136 23.4222 12 22.2966 12C19.947 12 18.4112 13.5139 18.4112 16.2548V18.6641H15.7993V21.8252H18.4112V29.4671C19.4762 29.6443 20.5607 29.6443 21.6258 29.4671V21.8252H24.0227Z" fill="#AE97E8"/>
									</svg>

								</div>
							</div>
						</div>
						<div className='contacts-form-div'>
							<span className='contacts-form-heading'>форма обратной связи</span>
							<div className='contacts-form-input-div'>
								<input className='contacts-form-input email' placeholder='e-mail'></input>
								<input className='contacts-form-input password' placeholder='сообщение'></input>
							</div>
							<div className='contacts-form-button-div'>
								<button className='contacts-form-button'>Отправить</button>
								<svg className='contacts-form-button-ellips' width="189" height="95" viewBox="0 0 189 95" fill="none" xmlns="http://www.w3.org/2000/svg">
									<path d="M187.824 37.5946C189.102 49.7771 180.225 62.141 164.191 72.2379C148.217 82.2966 125.419 89.9043 99.5853 92.6195C73.7515 95.3348 49.8715 92.6331 32.1579 86.1152C14.377 79.5724 3.12677 69.3239 1.84818 57.1415C0.569596 44.959 9.44656 32.5951 25.4811 22.4982C41.4549 12.4395 64.2529 4.83184 90.0867 2.1166C115.92 -0.598641 139.8 2.10301 157.514 8.62095C175.295 15.1637 186.545 25.4122 187.824 37.5946Z" fill="#EBE3FF" fill-opacity="0.19" stroke="#D9FF5A" stroke-width="2"/>
								</svg>
							</div>
						</div>
					</div>
					<div className='contacts-bottom'>
					<svg width="70" height="96" viewBox="0 0 70 96" fill="none" xmlns="http://www.w3.org/2000/svg">
					<path d="M70 36.3619C70 54.0207 56.7063 68.6562 40.3261 71.2985C39.5652 71.7238 37.2826 73.9808 35 80C31.1956 71.7238 30.4348 71.7238 29.674 71.2985C13.2937 68.6562 0 54.0207 0 36.3619C0 16.8321 16.0902 1 35 1C53.9098 1 70 16.8321 70 36.3619Z" fill="#FA8FEF"/>
					<path d="M35 45C40.5228 45 45 40.5228 45 35C45 29.4772 40.5228 25 35 25C29.4772 25 25 29.4772 25 35C25 40.5228 29.4772 45 35 45Z" fill="white"/>
					<path d="M35 95C38.3137 95 41 92.3137 41 89C41 85.6863 38.3137 83 35 83C31.6863 83 29 85.6863 29 89C29 92.3137 31.6863 95 35 95Z" fill="white"/>
					<path d="M35 92C36.6569 92 38 90.6569 38 89C38 87.3431 36.6569 86 35 86C33.3431 86 32 87.3431 32 89C32 90.6569 33.3431 92 35 92Z" fill="#FA8FEF"/>
					</svg>

						<img src={map}/>
					</div>
				</div>
			</div>

			<div className='payment-wrapper'>
					<div className='payment'>
						<div className='payment-info'>
							<span className='payment-info-heading'>оформление заказа</span>
							<div className='payment-info-input-div'>
								<input className='payment-info-input email' placeholder='ваше имя'></input>
								<input className='payment-info-input password' placeholder='адрес'></input>
								<input className='payment-info-input password' placeholder='телефон'></input>
							</div>
							<div className='payment-info-button-div'>
								<button onClick={showThanks} className='payment-info-button'>Заказать</button>
								<svg className='payment-info-button-ellips' width="189" height="95" viewBox="0 0 189 95" fill="none" xmlns="http://www.w3.org/2000/svg">
									<path d="M187.824 37.5946C189.102 49.7771 180.225 62.141 164.191 72.2379C148.217 82.2966 125.419 89.9043 99.5853 92.6195C73.7515 95.3348 49.8715 92.6331 32.1579 86.1152C14.377 79.5724 3.12677 69.3239 1.84818 57.1415C0.569596 44.959 9.44656 32.5951 25.4811 22.4982C41.4549 12.4395 64.2529 4.83184 90.0867 2.1166C115.92 -0.598641 139.8 2.10301 157.514 8.62095C175.295 15.1637 186.545 25.4122 187.824 37.5946Z" fill="#EBE3FF" fill-opacity="0.19" stroke="#D9FF5A" stroke-width="2"/>
								</svg>
							</div>
						</div>
						<div className='payment-cart-wrapper'>
							<div className='payment-cart'>
								<span className='payment-cart-heading'>ваша корзина</span>
								<div className='payment-cart-items'>
									<div className='payment-cart-item'>
										<div className='payment-cart-item-image-div'>
											<img className='payment-cart-item-image' src={lamp6}/>
										</div>
										<div className='payment-cart-item-content'>
											<div className='payment-cart-item-content-name-div'>
												<span style={{backgroundColor: "rgba(41, 208, 217, 1)"}} className='payment-cart-item-content-color'></span>
												<span className='payment-cart-item-content-name'>coppelia</span>
											</div>
											<span className='payment-cart-item-content-description'>
												Лампа настольная
											</span>
											<svg className='payment-cart-item-content-bin' width="29" height="29" viewBox="0 0 29 29" fill="none" xmlns="http://www.w3.org/2000/svg">
												<path d="M26.1489 5.08394C24.169 4.87956 22.189 4.72628 20.1968 4.61131V4.59854L19.9262 2.93796C19.7417 1.76277 19.4712 0 16.5935 0H13.3715C10.5061 0 10.2355 1.68613 10.0388 2.92518L9.7805 4.56022C8.6368 4.63686 7.4931 4.7135 6.34941 4.82847L3.84065 5.08394C3.32414 5.13504 2.95521 5.60766 3.0044 6.13139C3.05359 6.65511 3.49631 7.03832 4.01282 6.98723L6.52158 6.73175C12.9656 6.06752 19.4589 6.32299 25.9767 7C26.0136 7 26.0382 7 26.0751 7C26.5424 7 26.9483 6.62956 26.9975 6.13139C27.0344 5.60766 26.6654 5.13504 26.1489 5.08394Z" fill="#D9FF5A"/>
												<path d="M23.5935 9.46769C23.3082 9.16789 22.916 9 22.5119 9H7.48813C7.08401 9 6.67989 9.16789 6.40651 9.46769C6.13314 9.76749 5.97862 10.1752 6.0024 10.5949L6.73932 22.8987C6.87006 24.7215 7.03647 27 11.1846 27H18.8154C22.9635 27 23.1299 24.7335 23.2607 22.8987L23.9976 10.6069C24.0214 10.1752 23.8669 9.76749 23.5935 9.46769ZM16.9731 20.992H13.0151C12.5277 20.992 12.1236 20.5843 12.1236 20.0926C12.1236 19.6009 12.5277 19.1932 13.0151 19.1932H16.9731C17.4604 19.1932 17.8645 19.6009 17.8645 20.0926C17.8645 20.5843 17.4604 20.992 16.9731 20.992ZM17.9715 16.1952H12.0285C11.5412 16.1952 11.1371 15.7875 11.1371 15.2958C11.1371 14.8041 11.5412 14.3964 12.0285 14.3964H17.9715C18.4588 14.3964 18.8629 14.8041 18.8629 15.2958C18.8629 15.7875 18.4588 16.1952 17.9715 16.1952Z" fill="#D9FF5A"/>
											</svg>
											<div className='payment-cart-item-content-pricing'>
												<span className='payment-cart-item-content-price'>150 000<span className='payment-cart-item-content-ruble'>₽</span></span>
												<div className='payment-cart-item-content-quantity-div'>
													<span className='payment-cart-item-content-quantity'>
														x1
													</span>
												</div>
											</div>
										</div>
									</div>

									<div className='payment-cart-item'>
										<div className='payment-cart-item-image-div'>
											<img className='payment-cart-item-image' src={lamp3}/>
										</div>
										<div className='payment-cart-item-content'>
											<div className='payment-cart-item-content-name-div'>
												<span style={{backgroundColor: "rgba(255, 196, 165, 1)"}} className='payment-cart-item-content-color'></span>
												<span className='payment-cart-item-content-name'>Facchetta</span>
											</div>
											<span className='payment-cart-item-content-description'>
												Лампа настольная
											</span>
											<svg className='payment-cart-item-content-bin' width="29" height="29" viewBox="0 0 29 29" fill="none" xmlns="http://www.w3.org/2000/svg">
												<path d="M26.1489 5.08394C24.169 4.87956 22.189 4.72628 20.1968 4.61131V4.59854L19.9262 2.93796C19.7417 1.76277 19.4712 0 16.5935 0H13.3715C10.5061 0 10.2355 1.68613 10.0388 2.92518L9.7805 4.56022C8.6368 4.63686 7.4931 4.7135 6.34941 4.82847L3.84065 5.08394C3.32414 5.13504 2.95521 5.60766 3.0044 6.13139C3.05359 6.65511 3.49631 7.03832 4.01282 6.98723L6.52158 6.73175C12.9656 6.06752 19.4589 6.32299 25.9767 7C26.0136 7 26.0382 7 26.0751 7C26.5424 7 26.9483 6.62956 26.9975 6.13139C27.0344 5.60766 26.6654 5.13504 26.1489 5.08394Z" fill="#D9FF5A"/>
												<path d="M23.5935 9.46769C23.3082 9.16789 22.916 9 22.5119 9H7.48813C7.08401 9 6.67989 9.16789 6.40651 9.46769C6.13314 9.76749 5.97862 10.1752 6.0024 10.5949L6.73932 22.8987C6.87006 24.7215 7.03647 27 11.1846 27H18.8154C22.9635 27 23.1299 24.7335 23.2607 22.8987L23.9976 10.6069C24.0214 10.1752 23.8669 9.76749 23.5935 9.46769ZM16.9731 20.992H13.0151C12.5277 20.992 12.1236 20.5843 12.1236 20.0926C12.1236 19.6009 12.5277 19.1932 13.0151 19.1932H16.9731C17.4604 19.1932 17.8645 19.6009 17.8645 20.0926C17.8645 20.5843 17.4604 20.992 16.9731 20.992ZM17.9715 16.1952H12.0285C11.5412 16.1952 11.1371 15.7875 11.1371 15.2958C11.1371 14.8041 11.5412 14.3964 12.0285 14.3964H17.9715C18.4588 14.3964 18.8629 14.8041 18.8629 15.2958C18.8629 15.7875 18.4588 16.1952 17.9715 16.1952Z" fill="#D9FF5A"/>
											</svg>
											<div className='payment-cart-item-content-pricing'>
												<span className='payment-cart-item-content-price'>150 000<span className='payment-cart-item-content-ruble'>₽</span></span>
												<div className='payment-cart-item-content-quantity-div'>
													<span className='payment-cart-item-content-quantity'>
														x1
													</span>
												</div>
											</div>
										</div>
									</div>

									<div className='payment-cart-item'>
										<div className='payment-cart-item-image-div'>
											<img className='payment-cart-item-image' src={lamp5}/>
										</div>
										<div className='payment-cart-item-content'>
											<div className='payment-cart-item-content-name-div'>
												<span style={{backgroundColor: "rgba(250, 142, 239, 1)"}} className='payment-cart-item-content-color'></span>
												<span className='payment-cart-item-content-name'>coppelia</span>
											</div>
											<span className='payment-cart-item-content-description'>
												Лампа настольная
											</span>
											<svg className='payment-cart-item-content-bin' width="29" height="29" viewBox="0 0 29 29" fill="none" xmlns="http://www.w3.org/2000/svg">
												<path d="M26.1489 5.08394C24.169 4.87956 22.189 4.72628 20.1968 4.61131V4.59854L19.9262 2.93796C19.7417 1.76277 19.4712 0 16.5935 0H13.3715C10.5061 0 10.2355 1.68613 10.0388 2.92518L9.7805 4.56022C8.6368 4.63686 7.4931 4.7135 6.34941 4.82847L3.84065 5.08394C3.32414 5.13504 2.95521 5.60766 3.0044 6.13139C3.05359 6.65511 3.49631 7.03832 4.01282 6.98723L6.52158 6.73175C12.9656 6.06752 19.4589 6.32299 25.9767 7C26.0136 7 26.0382 7 26.0751 7C26.5424 7 26.9483 6.62956 26.9975 6.13139C27.0344 5.60766 26.6654 5.13504 26.1489 5.08394Z" fill="#D9FF5A"/>
												<path d="M23.5935 9.46769C23.3082 9.16789 22.916 9 22.5119 9H7.48813C7.08401 9 6.67989 9.16789 6.40651 9.46769C6.13314 9.76749 5.97862 10.1752 6.0024 10.5949L6.73932 22.8987C6.87006 24.7215 7.03647 27 11.1846 27H18.8154C22.9635 27 23.1299 24.7335 23.2607 22.8987L23.9976 10.6069C24.0214 10.1752 23.8669 9.76749 23.5935 9.46769ZM16.9731 20.992H13.0151C12.5277 20.992 12.1236 20.5843 12.1236 20.0926C12.1236 19.6009 12.5277 19.1932 13.0151 19.1932H16.9731C17.4604 19.1932 17.8645 19.6009 17.8645 20.0926C17.8645 20.5843 17.4604 20.992 16.9731 20.992ZM17.9715 16.1952H12.0285C11.5412 16.1952 11.1371 15.7875 11.1371 15.2958C11.1371 14.8041 11.5412 14.3964 12.0285 14.3964H17.9715C18.4588 14.3964 18.8629 14.8041 18.8629 15.2958C18.8629 15.7875 18.4588 16.1952 17.9715 16.1952Z" fill="#D9FF5A"/>
											</svg>
											<div className='payment-cart-item-content-pricing'>
												<span className='payment-cart-item-content-price'>150 000<span className='payment-cart-item-content-ruble'>₽</span></span>
												<div className='payment-cart-item-content-quantity-div'>
													<span className='payment-cart-item-content-quantity'>
														x1
													</span>
												</div>
											</div>
										</div>
									</div>

								</div>
								<div className='payment-cart-payment'>
									<div className='payment-cart-total-price'>
										<span className='payment-cart-total-price-heading'>итого:</span>
									</div>
									<button className='payment-cart-pay'>
										<span className='payment-cart-item-content-price payment-cart-total-price-number'>450 000<span className='payment-cart-item-content-ruble'>₽</span></span>
									</button>
									<svg className='payment-cart-pay-ellips' width="189" height="95" viewBox="0 0 189 95" fill="none" xmlns="http://www.w3.org/2000/svg">
										<path d="M187.824 37.5946C189.102 49.7771 180.225 62.141 164.191 72.2379C148.217 82.2966 125.419 89.9043 99.5853 92.6195C73.7515 95.3348 49.8715 92.6331 32.1579 86.1152C14.377 79.5724 3.12677 69.3239 1.84818 57.1415C0.569596 44.959 9.44656 32.5951 25.4811 22.4982C41.4549 12.4395 64.2529 4.83184 90.0867 2.1166C115.92 -0.598641 139.8 2.10301 157.514 8.62095C175.295 15.1637 186.545 25.4122 187.824 37.5946Z" fill="#EBE3FF" fill-opacity="0.19" stroke="#D9FF5A" stroke-width="2"/>
									</svg>

								</div>
							</div>
						</div>
					</div>
					
			</div>

			<div className='payment-thanks-wrapper'>
				<div className='payment-thanks-heading'>
					<span>ваш заказ оформлен</span>
					<span>спасибо за заказ</span>
				</div>

				<div className='payment-thanks'>
					<span>thank you</span>
					<span>thank you</span>
					<span>thank you</span>
				</div>

				<img className='payment-thank-img payment-thank-img-1' src={lamp1}/>
				<img className='payment-thank-img payment-thank-img-2' src={lamp6}/>
				<img className='payment-thank-img payment-thank-img-3' src={lamp3}/>
				<img className='payment-thank-img payment-thank-img-4' src={lamp4}/>
				<img className='payment-thank-img payment-thank-img-5' src={lamp5}/>

			</div>

			<div className='search-wrapper'>
				<div className='search-input-div'>
					<input className='search-input' placeholder='Поиск...'></input>
					<svg onClick={toggleSearch} className='search-input-close' width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
						<path d="M27 9L9 27" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
						<path d="M9 9L27 27" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
					</svg>
					<svg onClick={search} className='search-input-search' width="58" height="58" viewBox="0 0 58 58" fill="none" xmlns="http://www.w3.org/2000/svg">
						<g filter="url(#filter0_b_2719_6173)">
						<rect width="58" height="58" rx="29" fill="#AE97E8"/>
						<rect x="0.5" y="0.5" width="57" height="57" rx="28.5" stroke="white"/>
						</g>
						<path d="M28 37C32.9706 37 37 32.9706 37 28C37 23.0294 32.9706 19 28 19C23.0294 19 19 23.0294 19 28C19 32.9706 23.0294 37 28 37Z" stroke="#D9FF5A" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
						<path d="M40 39L35 34" stroke="#D9FF5A" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
					</svg>
				</div>
					
				<div className='search-result-wrapper'>
					<span className='search-result-header'>результаты поиска</span>
							<div className='results-div'>
									<div className='result'>
										<div className='result-image-div'>
											<img className='result-image' src={mirror2}/>
											<span style={{backgroundColor: "rgba(165, 212, 255, 1)"}} className='result-color'></span>
										</div>
										<span className='result-name'>Kristin</span>
										<span className='result-description'>Зеркало напольное</span>
										<div className='result-pricing'>
											<span className='result-price'>150 000 <span className='result-ruble'>₽</span></span>
											<div className='result-buy'>
												<svg className='result-cart' viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
													<path d="M3.71513 3.01617L3.51817 5.46617C3.47877 5.93617 3.84315 6.32617 4.30601 6.32617H19.3833C19.7969 6.32617 20.1416 6.00617 20.1712 5.58617C20.2992 3.81617 18.9697 2.37617 17.2266 2.37617H5.12339C5.02491 1.93617 4.82795 1.51617 4.52266 1.16617C4.03026 0.636172 3.3409 0.326172 2.63184 0.326172H0.918289C0.51452 0.326172 0.179688 0.666172 0.179688 1.07617C0.179688 1.48617 0.51452 1.82617 0.918289 1.82617H2.63184C2.93713 1.82617 3.22273 1.95617 3.42953 2.17617C3.63634 2.40617 3.73482 2.70617 3.71513 3.01617ZM9.17969 20.3262C9.17969 21.4307 8.28426 22.3262 7.17969 22.3262C6.07512 22.3262 5.17969 21.4307 5.17969 20.3262C5.17969 19.2216 6.07512 18.3262 7.17969 18.3262C8.28426 18.3262 9.17969 19.2216 9.17969 20.3262ZM17.1797 20.3262C17.1797 21.4307 16.2843 22.3262 15.1797 22.3262C14.0751 22.3262 13.1797 21.4307 13.1797 20.3262C13.1797 19.2216 14.0751 18.3262 15.1797 18.3262C16.2843 18.3262 17.1797 19.2216 17.1797 20.3262ZM4.32925 8.32617H19.4005C19.8623 8.32617 20.216 8.70435 20.1767 9.15041L19.8525 13.6789C19.7444 15.1334 18.4475 16.3262 16.9738 16.3262H6.04859C4.36854 16.3262 3.05202 14.9104 3.18956 13.2522L3.54326 9.03405C3.58256 8.63647 3.9166 8.32617 4.32925 8.32617Z"/>
												</svg>
												<span>Купить</span>
											</div>
										</div>
									</div>



									<div className='result'>
										<div className='result-image-div'>
											<img className='result-image' src={mirror3}/>
											<span style={{backgroundColor: "rgba(240, 179, 234, 1)"}} className='result-color'></span>
										</div>
										<span className='result-name'>Arlene</span>
										<span className='result-description'>Зеркало напольное</span>
										<div className='result-pricing'>
											<span className='result-price'>150 000 <span className='result-ruble'>₽</span></span>
											<div className='result-buy'>
												<svg className='result-cart' viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
													<path d="M3.71513 3.01617L3.51817 5.46617C3.47877 5.93617 3.84315 6.32617 4.30601 6.32617H19.3833C19.7969 6.32617 20.1416 6.00617 20.1712 5.58617C20.2992 3.81617 18.9697 2.37617 17.2266 2.37617H5.12339C5.02491 1.93617 4.82795 1.51617 4.52266 1.16617C4.03026 0.636172 3.3409 0.326172 2.63184 0.326172H0.918289C0.51452 0.326172 0.179688 0.666172 0.179688 1.07617C0.179688 1.48617 0.51452 1.82617 0.918289 1.82617H2.63184C2.93713 1.82617 3.22273 1.95617 3.42953 2.17617C3.63634 2.40617 3.73482 2.70617 3.71513 3.01617ZM9.17969 20.3262C9.17969 21.4307 8.28426 22.3262 7.17969 22.3262C6.07512 22.3262 5.17969 21.4307 5.17969 20.3262C5.17969 19.2216 6.07512 18.3262 7.17969 18.3262C8.28426 18.3262 9.17969 19.2216 9.17969 20.3262ZM17.1797 20.3262C17.1797 21.4307 16.2843 22.3262 15.1797 22.3262C14.0751 22.3262 13.1797 21.4307 13.1797 20.3262C13.1797 19.2216 14.0751 18.3262 15.1797 18.3262C16.2843 18.3262 17.1797 19.2216 17.1797 20.3262ZM4.32925 8.32617H19.4005C19.8623 8.32617 20.216 8.70435 20.1767 9.15041L19.8525 13.6789C19.7444 15.1334 18.4475 16.3262 16.9738 16.3262H6.04859C4.36854 16.3262 3.05202 14.9104 3.18956 13.2522L3.54326 9.03405C3.58256 8.63647 3.9166 8.32617 4.32925 8.32617Z"/>
												</svg>
												<span>Купить</span>
											</div>
										</div>
									</div>
									<div className='result'>
										<div className='result-image-div'>
											<img className='result-image' src={mirror4}/>
											<span style={{backgroundColor: "rgba(142, 205, 250, 1)"}} className='result-color'></span>
										</div>
										<span className='result-name'>Colleen</span>
										<span className='result-description'>Зеркало напольное</span>
										<div className='result-pricing'>
											<span className='result-price'>150 000 <span className='result-ruble'>₽</span></span>
											<div className='result-buy'>
												<svg className='result-cart' viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
													<path d="M3.71513 3.01617L3.51817 5.46617C3.47877 5.93617 3.84315 6.32617 4.30601 6.32617H19.3833C19.7969 6.32617 20.1416 6.00617 20.1712 5.58617C20.2992 3.81617 18.9697 2.37617 17.2266 2.37617H5.12339C5.02491 1.93617 4.82795 1.51617 4.52266 1.16617C4.03026 0.636172 3.3409 0.326172 2.63184 0.326172H0.918289C0.51452 0.326172 0.179688 0.666172 0.179688 1.07617C0.179688 1.48617 0.51452 1.82617 0.918289 1.82617H2.63184C2.93713 1.82617 3.22273 1.95617 3.42953 2.17617C3.63634 2.40617 3.73482 2.70617 3.71513 3.01617ZM9.17969 20.3262C9.17969 21.4307 8.28426 22.3262 7.17969 22.3262C6.07512 22.3262 5.17969 21.4307 5.17969 20.3262C5.17969 19.2216 6.07512 18.3262 7.17969 18.3262C8.28426 18.3262 9.17969 19.2216 9.17969 20.3262ZM17.1797 20.3262C17.1797 21.4307 16.2843 22.3262 15.1797 22.3262C14.0751 22.3262 13.1797 21.4307 13.1797 20.3262C13.1797 19.2216 14.0751 18.3262 15.1797 18.3262C16.2843 18.3262 17.1797 19.2216 17.1797 20.3262ZM4.32925 8.32617H19.4005C19.8623 8.32617 20.216 8.70435 20.1767 9.15041L19.8525 13.6789C19.7444 15.1334 18.4475 16.3262 16.9738 16.3262H6.04859C4.36854 16.3262 3.05202 14.9104 3.18956 13.2522L3.54326 9.03405C3.58256 8.63647 3.9166 8.32617 4.32925 8.32617Z"/>
												</svg>
												<span>Купить</span>
											</div>
										</div>
									</div>
									<div className='result'>
										<div className='result-image-div'>
											<img className='result-image' src={mirror5}/>
											<span style={{backgroundColor: "rgba(251, 228, 202, 1)"}} className='result-color'></span>
										</div>
										<span className='result-name'>coppelia</span>
										<span className='result-description'>Зеркало напольное</span>
										<div className='result-pricing'>
											<span className='result-price'>150 000 <span className='result-ruble'>₽</span></span>
											<div className='result-buy'>
												<svg className='result-cart' viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
													<path d="M3.71513 3.01617L3.51817 5.46617C3.47877 5.93617 3.84315 6.32617 4.30601 6.32617H19.3833C19.7969 6.32617 20.1416 6.00617 20.1712 5.58617C20.2992 3.81617 18.9697 2.37617 17.2266 2.37617H5.12339C5.02491 1.93617 4.82795 1.51617 4.52266 1.16617C4.03026 0.636172 3.3409 0.326172 2.63184 0.326172H0.918289C0.51452 0.326172 0.179688 0.666172 0.179688 1.07617C0.179688 1.48617 0.51452 1.82617 0.918289 1.82617H2.63184C2.93713 1.82617 3.22273 1.95617 3.42953 2.17617C3.63634 2.40617 3.73482 2.70617 3.71513 3.01617ZM9.17969 20.3262C9.17969 21.4307 8.28426 22.3262 7.17969 22.3262C6.07512 22.3262 5.17969 21.4307 5.17969 20.3262C5.17969 19.2216 6.07512 18.3262 7.17969 18.3262C8.28426 18.3262 9.17969 19.2216 9.17969 20.3262ZM17.1797 20.3262C17.1797 21.4307 16.2843 22.3262 15.1797 22.3262C14.0751 22.3262 13.1797 21.4307 13.1797 20.3262C13.1797 19.2216 14.0751 18.3262 15.1797 18.3262C16.2843 18.3262 17.1797 19.2216 17.1797 20.3262ZM4.32925 8.32617H19.4005C19.8623 8.32617 20.216 8.70435 20.1767 9.15041L19.8525 13.6789C19.7444 15.1334 18.4475 16.3262 16.9738 16.3262H6.04859C4.36854 16.3262 3.05202 14.9104 3.18956 13.2522L3.54326 9.03405C3.58256 8.63647 3.9166 8.32617 4.32925 8.32617Z"/>
												</svg>
												<span>Купить</span>
											</div>
										</div>
									</div>
									<div className='result'>
										<div className='result-image-div'>
											<img className='result-image' src={mirror6}/>
											<span style={{backgroundColor: "rgba(240, 181, 250, 1)"}} className='result-color'></span>
										</div>
										<span className='result-name'>artemide</span>
										<span className='result-description'>Зеркало напольное</span>
										<div className='result-pricing'>
											<span className='result-price'>150 000 <span className='result-ruble'>₽</span></span>
											<div className='result-buy'>
												<svg className='result-cart' viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
													<path d="M3.71513 3.01617L3.51817 5.46617C3.47877 5.93617 3.84315 6.32617 4.30601 6.32617H19.3833C19.7969 6.32617 20.1416 6.00617 20.1712 5.58617C20.2992 3.81617 18.9697 2.37617 17.2266 2.37617H5.12339C5.02491 1.93617 4.82795 1.51617 4.52266 1.16617C4.03026 0.636172 3.3409 0.326172 2.63184 0.326172H0.918289C0.51452 0.326172 0.179688 0.666172 0.179688 1.07617C0.179688 1.48617 0.51452 1.82617 0.918289 1.82617H2.63184C2.93713 1.82617 3.22273 1.95617 3.42953 2.17617C3.63634 2.40617 3.73482 2.70617 3.71513 3.01617ZM9.17969 20.3262C9.17969 21.4307 8.28426 22.3262 7.17969 22.3262C6.07512 22.3262 5.17969 21.4307 5.17969 20.3262C5.17969 19.2216 6.07512 18.3262 7.17969 18.3262C8.28426 18.3262 9.17969 19.2216 9.17969 20.3262ZM17.1797 20.3262C17.1797 21.4307 16.2843 22.3262 15.1797 22.3262C14.0751 22.3262 13.1797 21.4307 13.1797 20.3262C13.1797 19.2216 14.0751 18.3262 15.1797 18.3262C16.2843 18.3262 17.1797 19.2216 17.1797 20.3262ZM4.32925 8.32617H19.4005C19.8623 8.32617 20.216 8.70435 20.1767 9.15041L19.8525 13.6789C19.7444 15.1334 18.4475 16.3262 16.9738 16.3262H6.04859C4.36854 16.3262 3.05202 14.9104 3.18956 13.2522L3.54326 9.03405C3.58256 8.63647 3.9166 8.32617 4.32925 8.32617Z"/>
												</svg>
												<span>Купить</span>
											</div>
										</div>
									</div>
								</div>
				</div>
				<div className='search-result-empty-wrapper'>
					<span className='search-result-empty-header'>результаты поиска</span>
					<span className='no-results'>
						no results
					</span>
					<img src={mirror4}/>
				</div>
			</div>
		</div>
	)
}

export default App
