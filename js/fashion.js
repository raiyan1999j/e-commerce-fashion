$(document).ready(function(){
	$('.example').square1({
  // or 'contain'
  fill_mode: 'cover',

  // CSS background-position property
  scale_from: 'center center',
  lazy_load: true,
  // use slide transition
  animation: 'slide',

  // in milliseconds
  slide_duration: 2000,
  transition_time: 500,
  auto_start: true,
  start_delay: 0,
  pause_on_hover: false,
  theme: 'light',
  // 'inside', 'outside', 'hover', 'none'
  prev_next_nav: 'inside',
  dots_nav: 'inside',
  caption: 'inside',
  width:'', 
  height: '',
  background: 'none',

  
});
});
  AOS.init({
  // Global settings:
  disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
  startEvent: 'DOMContentLoaded', // name of the event dispatched on the document, that AOS should initialize on
  initClassName: 'aos-init', // class applied after initialization
  animatedClassName: 'aos-animate', // class applied on animation
  useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
  disableMutationObserver: false, // disables automatic mutations' detections (advanced)
  debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
  throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)
  

  // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
  offset: 120, // offset (in px) from the original trigger point
  delay: 0, // values from 0 to 3000, with step 50ms
  duration: 400, // values from 0 to 3000, with step 50ms
  easing: 'ease', // default easing for AOS animations
  once: false, // whether animation should happen only once - while scrolling down
  mirror: false, // whether elements should animate out while scrolling past them
  anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation

});