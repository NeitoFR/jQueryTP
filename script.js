"use strict"
$(function(){
    var elem_list = $('.input_val');
    console.log(elem_list);
    $('.input_val').change(function(evt){
        console.log(evt.target.id, evt.target.value);
    });

});