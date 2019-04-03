/**
 * implements jQuery.on() to older version
 * did not incorporate "one" parameter as it would need jQuery.off()
 * 2019-04-03 Thomas Fellinger
 */
;(function(c){function b(){return false}function a(h,e,d,i,g){var j,f;if(typeof e==="object"){if(typeof d!=="string"){i=i||d;d=undefined}for(f in e){a(h,f,d,i,e[f])}return h}if(i==null&&g==null){g=d;i=d=undefined}else{if(g==null){if(typeof d==="string"){g=i;i=undefined}else{g=i;i=d;d=undefined}}}if(g===false){g=b}else{if(!g){return h}}return h.each(function(){jQuery.event.add(this,e,g,i,d)})}c.fn.extend({on:function(e,d,g,f){return a(this,e,d,g,f)}})})(jQuery);
