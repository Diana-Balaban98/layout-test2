import './index.html'
import "bootstrap/dist/css/bootstrap.css";
import "swiper/swiper-bundle.css"
import './styles/boilerplate.less'
import './styles/main.less'
import 'intl-tel-input/build/css/intlTelInput.css';
import * as intlTel from "./utils/intl-tel-input";
import {showAllCards, showMoreArticles} from "./utils/showHiddenCards";
import {moveArrows} from "./utils/swiper";

const input = document.querySelector("#phone");
const swiperButtonNext = document.querySelector(".swiper-button-next");
const swiperButtonPrev = document.querySelector(".swiper-button-prev");

moveArrows(swiperButtonNext, "next");
moveArrows(swiperButtonPrev, "prev");

intlTel.identifyPhone(input);

showAllCards();
showMoreArticles();










