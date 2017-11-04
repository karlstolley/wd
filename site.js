/* eslint-disable */
/* jshint ignore:start */
/*! modernizr 3.5.0 (Custom Build) | MIT *
 * https://modernizr.com/download/?-flexbox-setclasses !*/
!function(e,n,t){function r(e,n){return typeof e===n}function o(){var e,n,t,o,s,i,l;for(var a in S)if(S.hasOwnProperty(a)){if(e=[],n=S[a],n.name&&(e.push(n.name.toLowerCase()),n.options&&n.options.aliases&&n.options.aliases.length))for(t=0;t<n.options.aliases.length;t++)e.push(n.options.aliases[t].toLowerCase());for(o=r(n.fn,"function")?n.fn():n.fn,s=0;s<e.length;s++)i=e[s],l=i.split("."),1===l.length?Modernizr[l[0]]=o:(!Modernizr[l[0]]||Modernizr[l[0]]instanceof Boolean||(Modernizr[l[0]]=new Boolean(Modernizr[l[0]])),Modernizr[l[0]][l[1]]=o),C.push((o?"":"no-")+l.join("-"))}}function s(e){var n=x.className,t=Modernizr._config.classPrefix||"";if(_&&(n=n.baseVal),Modernizr._config.enableJSClass){var r=new RegExp("(^|\\s)"+t+"no-js(\\s|$)");n=n.replace(r,"$1"+t+"js$2")}Modernizr._config.enableClasses&&(n+=" "+t+e.join(" "+t),_?x.className.baseVal=n:x.className=n)}function i(e,n){return function(){return e.apply(n,arguments)}}function l(e,n,t){var o;for(var s in e)if(e[s]in n)return t===!1?e[s]:(o=n[e[s]],r(o,"function")?i(o,t||n):o);return!1}function a(e,n){return!!~(""+e).indexOf(n)}function f(){return"function"!=typeof n.createElement?n.createElement(arguments[0]):_?n.createElementNS.call(n,"http://www.w3.org/2000/svg",arguments[0]):n.createElement.apply(n,arguments)}function u(e){return e.replace(/([A-Z])/g,function(e,n){return"-"+n.toLowerCase()}).replace(/^ms-/,"-ms-")}function c(n,t,r){var o;if("getComputedStyle"in e){o=getComputedStyle.call(e,n,t);var s=e.console;if(null!==o)r&&(o=o.getPropertyValue(r));else if(s){var i=s.error?"error":"log";s[i].call(s,"getComputedStyle returning null, its possible modernizr test results are inaccurate")}}else o=!t&&n.currentStyle&&n.currentStyle[r];return o}function p(){var e=n.body;return e||(e=f(_?"svg":"body"),e.fake=!0),e}function d(e,t,r,o){var s,i,l,a,u="modernizr",c=f("div"),d=p();if(parseInt(r,10))for(;r--;)l=f("div"),l.id=o?o[r]:u+(r+1),c.appendChild(l);return s=f("style"),s.type="text/css",s.id="s"+u,(d.fake?d:c).appendChild(s),d.appendChild(c),s.styleSheet?s.styleSheet.cssText=e:s.appendChild(n.createTextNode(e)),c.id=u,d.fake&&(d.style.background="",d.style.overflow="hidden",a=x.style.overflow,x.style.overflow="hidden",x.appendChild(d)),i=t(c,e),d.fake?(d.parentNode.removeChild(d),x.style.overflow=a,x.offsetHeight):c.parentNode.removeChild(c),!!i}function m(n,r){var o=n.length;if("CSS"in e&&"supports"in e.CSS){for(;o--;)if(e.CSS.supports(u(n[o]),r))return!0;return!1}if("CSSSupportsRule"in e){for(var s=[];o--;)s.push("("+u(n[o])+":"+r+")");return s=s.join(" or "),d("@supports ("+s+") { #modernizr { position: absolute; } }",function(e){return"absolute"==c(e,null,"position")})}return t}function y(e){return e.replace(/([a-z])-([a-z])/g,function(e,n,t){return n+t.toUpperCase()}).replace(/^-/,"")}function v(e,n,o,s){function i(){u&&(delete N.style,delete N.modElem)}if(s=r(s,"undefined")?!1:s,!r(o,"undefined")){var l=m(e,o);if(!r(l,"undefined"))return l}for(var u,c,p,d,v,g=["modernizr","tspan","samp"];!N.style&&g.length;)u=!0,N.modElem=f(g.shift()),N.style=N.modElem.style;for(p=e.length,c=0;p>c;c++)if(d=e[c],v=N.style[d],a(d,"-")&&(d=y(d)),N.style[d]!==t){if(s||r(o,"undefined"))return i(),"pfx"==n?d:!0;try{N.style[d]=o}catch(h){}if(N.style[d]!=v)return i(),"pfx"==n?d:!0}return i(),!1}function g(e,n,t,o,s){var i=e.charAt(0).toUpperCase()+e.slice(1),a=(e+" "+z.join(i+" ")+i).split(" ");return r(n,"string")||r(n,"undefined")?v(a,n,o,s):(a=(e+" "+P.join(i+" ")+i).split(" "),l(a,n,t))}function h(e,n,r){return g(e,t,t,n,r)}var C=[],S=[],w={_version:"3.5.0",_config:{classPrefix:"",enableClasses:!0,enableJSClass:!0,usePrefixes:!0},_q:[],on:function(e,n){var t=this;setTimeout(function(){n(t[e])},0)},addTest:function(e,n,t){S.push({name:e,fn:n,options:t})},addAsyncTest:function(e){S.push({name:null,fn:e})}},Modernizr=function(){};Modernizr.prototype=w,Modernizr=new Modernizr;var x=n.documentElement,_="svg"===x.nodeName.toLowerCase(),b="Moz O ms Webkit",P=w._config.usePrefixes?b.toLowerCase().split(" "):[];w._domPrefixes=P;var z=w._config.usePrefixes?b.split(" "):[];w._cssomPrefixes=z;var E={elem:f("modernizr")};Modernizr._q.push(function(){delete E.elem});var N={style:E.elem.style};Modernizr._q.unshift(function(){delete N.style}),w.testAllProps=g,w.testAllProps=h,Modernizr.addTest("flexbox",h("flexBasis","1px",!0)),o(),s(C),delete w.addTest,delete w.addAsyncTest;for(var T=0;T<Modernizr._q.length;T++)Modernizr._q[T]();e.Modernizr=Modernizr}(window,document);
/* jshint ignore:end */
/* eslint-enable */

(function($) {

  // Get the current time as a Unix timestamp
  var currentDate = new Date();
  var currentTime = Math.round(currentDate.getTime() / 1000);

  // Arrays to make reader-friendly days and months
  var namedDays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  var namedMonths = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December'
  ];

  // Create an array to hold the future weeks
  var futureWeeks = [];
  var dueDate;

  // GitHub URL
  var github_url = 'https://api.github.com/repos/karlstolley/fwd/commits?per_page=1';

  // Create a variable to hold HTML for the toggle label
  var toggledLabel;

  // Helper for toggling label text
  $.fn.toggleLabel = function(current, all) {
    var state = current;
    if ($('.showing').html()===state.status) {
      state = all;
    }
    $('.showing').html(state.status);
    $('.toggle').html(state.action).attr('href', state.href);
  };

  // Utility class for JavaScript detection in CSS
  $('html').addClass('hasjs');


  // Highlight the current and next weeks

  // Go through each week to build the array of future weeks
  $('.week').each(function() {
    var weekTime = new Date($(this).attr('data-expires'));
    weekTime = Math.round(weekTime.getTime() / 1000);
    if ((weekTime - currentTime) > 0) {
      futureWeeks.push($(this));
    }
  });

  // Until the semester is over, do nice things with the calendar
  if (futureWeeks.length > 0) {
    // Put an .extended class on all weeks
    $('.week').each(function() {
      $(this).addClass('extended');
    });

    // Show the current week
    futureWeeks[0].addClass('preview is-current').removeClass('extended').attr('id', 'current-week');

    if (typeof(futureWeeks[1])!=="undefined") {
      // If there is another week beyond the current one, show it as well
      futureWeeks[1].attr('id', 'next-week');
      dueDate = new Date(futureWeeks[0].attr('data-expires'));
      $('#current-week .assigned h3').html('Assigned Work <small>Due ' + namedDays[dueDate.getDay()] + ' ' + namedMonths[dueDate.getMonth()] + ' ' + dueDate.getDate() +'</small>');
    }

    // Watch for hashes pointing to #week-XX
    if (window.location.hash.indexOf('week-') === -1) {

      toggledLabel = ' <small class="button"><span class="showing">Current Week</span> <a class="toggle" href="#next-week">Show Future Weeks</a></small>';

    }
    else {

      $('.primary').addClass('is-visible');
      toggledLabel = ' <small class="button"><span class="showing">All Weeks</span> <a class="toggle" href="#current-week">Show Current Week Only</a></small>';

    }

  }

  // Toggles for showing full calendar
  // Append a show link (.button)
  $('.label, .is-current').append(toggledLabel);
  // Toggle to actually show/hide content
  $('.toggle').on('click', function(e) {
    var hash = $(this).attr('href');
    $(this).closest('.primary').toggleClass('is-visible');
    window.location.assign(hash); // set the page-location hash to the current href value
    $('.toggle').toggleLabel(
      {status: 'All Weeks', action: 'Show Current Week Only', href: '#current-week'},
      {status: 'Current Week', action: 'Show Future Weeks', href: '#next-week'}
    );
    e.preventDefault(); // default behavior handled above, with window.location.assign
  });

  $.get(github_url, function(data) {
    var commit = {};
    data = data[0]; // only need most recent commit
    // Lowercase commit message's first word to run in `...to XYZ` copy:
    commit.message = data.commit.message.charAt(0).toLowerCase() + data.commit.message.slice(1);
    commit.url = data.html_url;
    commit.stamp = data.commit.author.date;
    commit.date = new Date(commit.stamp);
    // Put the date in Day, Month 31 at <Local Time String> format
    commit.time_string = namedDays[commit.date.getDay()] + ', ' +
      namedMonths[commit.date.getMonth()] + ' ' +
      commit.date.getDate() + ' at ' + commit.date.toLocaleTimeString();

    // Append to footer on calendar
    $('#footer p:first-child').append(
      ' Course last updated on <time datetime="' + commit.stamp + '">' + commit.time_string +
      '</time> to <a href="' + commit.url + '">' + commit.message + '</a>.'
    );

  });

})(jQuery);
