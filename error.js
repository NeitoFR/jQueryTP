"use strict"
$(function () {

    $('.input_val').change(function (evt) {
        if (evt.target.dataset.minl || evt.target.dataset.maxl) {
            switch (evt.target.type) {
                case "text":
                    (evt.target.value.length < evt.target.dataset.minl || evt.target.value.length > evt.target.dataset.maxl) ? evt.target.classList.add('border_error'): evt.target.classList.remove('border_error');
                    break;
                case "number":
                    (parseInt(evt.target.value) < parseInt(evt.target.dataset.minl) || parseInt(evt.target.value) > parseInt(evt.target.dataset.maxl) ? evt.target.classList.add('border_error'): evt.target.classList.remove('border_error'));
                    break;
            }
        }
    });
});