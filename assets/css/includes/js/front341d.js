window.ET = window.ET || {};
ET.Models      = ET.Models || {};
ET.Collections = ET.Collections || {};
ET.Views       = ET.Views || {};
ET.Routers     = ET.Routers || {};
ET.globals     = et_globals;
ET.pubsub      = ET.pubsub || {};
_.extend(ET.pubsub, Backbone.Events);

(function($, Models, Collections, Views) {
	/**
	*
	* F R O N T  V I E W S
	*
	**/
	Views.Front = Backbone.View.extend({
		el: 'body',
		events: {
			'click .btn-buy-we' : 'scrollToWEPackage',
			'click .btn-scroll' : 'scrollToPackage',
			'click .icon-email-newsletters' : 'submitSubscriber'
		},
		initialize: function() {
			//find max height pricing
			var maxHeight = 1;
			var maxWidth = 1;
			$(".pricing-list-option-wrapper").each(function() {
				var h     = $(this).height();
				var w     = $(this).width();
				maxHeight = h > maxHeight ? h : maxHeight;
				maxWidth = maxWidth + w;
				// console.log(h);
			});
			//set height
			$(".pricing-list-option-wrapper").css('height', maxHeight);
			$(".xmas-price").css('width', maxWidth + 3);
			// console.log(maxWidth);

			setTimeout(function(){
				if($('.test-full-bg').length > 0)
				{
					$('.test-full-bg').width($('.blog-list').offset().left)
				}
			},500);
			setTimeout(function(){
				$('.line-blog-home').width(( $(window).width() - $('.test-full-bg').width() + 60) +'px').css('margin-left', '-75px')  ;
			},1000);

			$( window ).resize(function() {
			    setTimeout(function(){
					if($('.test-full-bg').length > 0){
						$('.test-full-bg').width( $('.blog-list').offset().left );
					}
				},500);
				setTimeout(function(){
					$('.line-blog-home').width(( $(window).width() - $('.test-full-bg').width() + 60) +'px').css('margin-left', '-75px')  ;
				},1000);

				var maxWidth = 1;
				$(".pricing-list-option-wrapper").each(function() {
					var w     = $(this).width();
					maxWidth = maxWidth + w;
				});
				$(".xmas-price").css('width', maxWidth + 3);
			});



			$('.et-in-viewport-check').each(function() {

		        var _this 		= $(this),
					anim        = _this.attr('et-anim'),
					anim_speed  = parseInt(_this.attr('et-anim-duration')),
					anim_delay  = parseInt(_this.attr('et-anim-delay')),
					anim_easing = _this.attr('et-anim-easing'),
					anim_params = anim + ' ' + anim_speed + 'ms' + ' ' + anim_easing + ' forwards';

		        $(this).addClass('et-in-viewport-'+anim);

		        _this.waypoint(function() {
		            if (anim_delay > 0) {
		                setTimeout(function() {
		                    _this.css({
		                        '-webkit-animation': anim_params,
		                        '-moz-animation': anim_params,
		                        'animation': anim_params
		                    });
		                }, anim_delay);
		            } else {
		                $(this).css({
		                    '-webkit-animation': anim_params,
		                    '-moz-animation': anim_params,
		                    'animation': anim_params
		                });
		            }
		        }, {offset: '80%', triggerOnce: true});

		    });
		},
		scrollToPackage: function(event){
			if($("#pricing-item").length > 0){
				event.preventDefault();
				$('html, body').animate({
					scrollTop: $("#pricing-item").offset().top - 70
				}, 1000);
			} else {
				return true;
			}
		},
		scrollToWEPackage: function(event){
			if($("#we_salepage_pricing_plan").length > 0){
				event.preventDefault();
				$('html, body').animate({
					scrollTop: $("#we_salepage_pricing_plan").offset().top - 70
				}, 1000);
			} else {
				return true;
			}
		},
		submitSubscriber: function(event){
			var form = $('form.newsletters-form'),
				text = form.find('input#mce-EMAIL');
			if(text.val())
				form.submit();
			else
				text.focus();
		}
	});
})(jQuery, window.ET.Models, window.ET.Collections, window.ET.Views);

jQuery.fn.serializeObject = function() {
	var self = this,
		json = {},
		push_counters = {},
		patterns = {
			"validate": /^[a-zA-Z][a-zA-Z0-9_]*(?:\[(?:\d*|[a-zA-Z0-9_]+)\])*$/,
			"key": /[a-zA-Z0-9_]+|(?=\[\])/g,
			"push": /^$/,
			"fixed": /^\d+$/,
			"named": /^[a-zA-Z0-9_]+$/
		};
	this.build = function(base, key, value) {
		base[key] = value;
		return base;
	};
	this.push_counter = function(key) {
		if (push_counters[key] === undefined) {
			push_counters[key] = 0;
		}
		return push_counters[key]++;
	};
	jQuery.each(jQuery(this).serializeArray(), function() {
		// skip invalid keys
		if (!patterns.validate.test(this.name)) {
			return;
		}
		var k,
			keys = this.name.match(patterns.key),
			merge = this.value,
			reverse_key = this.name;
		while ((k = keys.pop()) !== undefined) {
			// adjust reverse_key
			reverse_key = reverse_key.replace(new RegExp("\\[" + k + "\\]$"), '');
			// push
			if (k.match(patterns.push)) {
				merge = self.build([], self.push_counter(reverse_key), merge);
			}
			// fixed
			else if (k.match(patterns.fixed)) {
				merge = self.build([], k, merge);
			}
			// named
			else if (k.match(patterns.named)) {
				merge = self.build({}, k, merge);
			}
		}
		json = jQuery.extend(true, json, merge);
	});
	return json;
};
