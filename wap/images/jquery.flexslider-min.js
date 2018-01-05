/*
 * jQuery FlexSlider v1.2
 * http://flex.madebymufffin.com
 *
 * Copyright 2011, Tyler Smith
 * Free to use under the MIT license.
 * http://www.opensource.org/licenses/mit-license.php
 *
 * TouchWipe gesture credits: http://www.netcu.de/jquery-touchwipe-iphone-ipad-library
 */
(function(a){a.fn.extend({flexslider:function(q){var h={animation:"fade",slideshow:true,slideshowSpeed:7000,animationDuration:500,directionNav:true,controlNav:true,keyboardNav:true,touchSwipe:true,prevText:"Previous",nextText:"Next",randomize:false,slideToStart:0,pauseOnAction:true,pauseOnHover:false,controlsContainer:""};var q=a.extend(h,q),d=this,c=a(".slides",d),b=a(".slides li",d),g=false,m=q.slideToStart;if(q.randomize){b.sort(function(){return(Math.round(Math.random())-0.5)});c.empty().append(b)}if(q.animation.toLowerCase()=="slide"){b.show();d.css({overflow:"hidden"});b.width(d.width()).css({"float":"left"});c.width((b.length*d.width())+200);c.css({marginLeft:(-1*m)*d.width()+"px"})}else{b.hide().eq(m).fadeIn(400)}function o(i){if(!g){g=true;if(q.animation.toLowerCase()=="slide"){c.animate({marginLeft:(-1*i)*d.width()+"px"},q.animationDuration,function(){g=false;m=i})}else{d.css({minHeight:b.eq(m).height()});b.eq(m).fadeOut(q.animationDuration,function(){b.eq(i).fadeIn(q.animationDuration,function(){g=false;m=i});d.css({minHeight:"inherit"})})}}}if(q.controlNav){if(b.length>1){var e=a('<ol class="flex-control-nav"></ol>');var k=1;for(var l=0;l<b.length;l++){e.append("<li><a>"+k+"</a></li>");k++}if(q.controlsContainer!=""&&a(q.controlsContainer).length>0){a(q.controlsContainer).append(e)}else{d.append(e)}}e=a(".flex-control-nav li a");e.eq(m).addClass("active");e.click(function(j){j.preventDefault();if(a(this).hasClass("active")||g){return}else{e.removeClass("active");a(this).addClass("active");var i=e.index(a(this));o(i);if(q.pauseOnAction){clearInterval(n)}}})}if(q.directionNav){if(q.controlsContainer!=""&&a(q.controlsContainer).length>0){a(q.controlsContainer).append(a('<ul class="flex-direction-nav"><li><a class="prev" href="#">'+q.prevText+'</a></li><li><a class="next" href="#">'+q.nextText+"</a></li></ul>"))}else{d.append(a('<ul class="flex-direction-nav"><li><a class="prev" href="#">'+q.prevText+'</a></li><li><a class="next" href="#">'+q.nextText+"</a></li></ul>"))}a(".flex-direction-nav li a").click(function(i){i.preventDefault();if(g){return}else{if(a(this).hasClass("next")){var j=(m==b.length-1)?0:m+1}else{var j=(m==0)?b.length-1:m-1}if(q.controlNav){e.removeClass("active");e.eq(j).addClass("active")}o(j);if(q.pauseOnAction){clearInterval(n)}}})}if(q.keyboardNav){a(document).keyup(function(i){if(g){return}else{if(i.keyCode!=39&&i.keyCode!=37){return}else{if(i.keyCode==39){var j=(m==b.length-1)?0:m+1}else{if(i.keyCode==37){var j=(m==0)?b.length-1:m-1}}if(q.controlNav){e.removeClass("active");e.eq(j).addClass("active")}o(j);if(q.pauseOnAction){clearInterval(n)}}}})}if(q.slideshow){var n;function p(){if(g){return}else{var i=(m==b.length-1)?0:m+1;if(q.controlNav){e.removeClass("active");e.eq(i).addClass("active")}o(i)}}if(q.pauseOnHover){d.hover(function(){clearInterval(n)},function(){n=setInterval(p,q.slideshowSpeed)})}if(b.length>1){n=setInterval(p,q.slideshowSpeed)}}if(q.touchSwipe&&"ontouchstart" in document.documentElement){d.each(function(){var i,j=20;isMoving=false;function t(){this.removeEventListener("touchmove",r);i=null;isMoving=false}function r(y){if(isMoving){var u=y.touches[0].pageX,v=i-u;if(Math.abs(v)>=j){t();if(v>0){var w=(m==b.length-1)?0:m+1}else{var w=(m==0)?b.length-1:m-1}if(q.controlNav){e.removeClass("active");e.eq(w).addClass("active")}o(w);if(q.pauseOnAction){clearInterval(n)}}}}function s(u){if(u.touches.length==1){i=u.touches[0].pageX;isMoving=true;this.addEventListener("touchmove",r,false)}}if("ontouchstart" in document.documentElement){this.addEventListener("touchstart",s,false)}})}if(q.animation.toLowerCase()=="slide"){var f;a(window).resize(function(){b.width(d.width());c.width((b.length*d.width())+200);clearTimeout(f);f=setTimeout(function(){o(m)},300)})}}})})(jQuery);