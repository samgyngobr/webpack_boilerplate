
window.$ = window.jQuery = require('jquery');

//const {es2015Test} = require('./teste/teste.js');

var bootstrap = require('bootstrap');

import "./scss/style.scss";

import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel';
import 'jquery-mask-plugin';


$(document).ready(function(){

    //es2015Test()
    $(".m-telefone").mask("(99) 9999-99999");
    $('.owl-carousel').owlCarousel();
});

