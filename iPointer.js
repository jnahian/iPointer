/*! iPointer v 1.0.0 | (c) 2015 Julkar N. Nahian | License MIT */
(function($){

	$.fn.iPointer = function(opt){

		var t = $(this),
			child = t.children('div'),
			options = $.extend({

				'type' : 'slide'	//	slide, color , fade

			}, opt);


		t.on('mousemove', function(e){
	        var x = e.pageX;

	        if(options.type === 'slide') {
	        	$(child).css('left', x);
	        }

	        else if(options.type === 'color') {

	        	x = Math.round(x/50);

		        t.css({
		        	'filter' : 'hue-rotate('+ x +'deg)',
		        	'-webkit-filter' : 'hue-rotate('+ x +'deg)'
		        });
		    }

		    else if(options.type === 'fade') {

		    	var w = $(window).width();
		    		opacity = x / w;

		    	$(child).css({
		    		'left' : 0,
		    		'opacity' : opacity
		    	});
		    }
        
    	});

	}
    
}(jQuery));