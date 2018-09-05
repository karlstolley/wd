/* eslint-disable */
/* jshint ignore:start */
/*! modernizr 3.5.0 (Custom Build) | MIT *
 * https://modernizr.com/download/?-cssgrid_cssgridlegacy-flexbox-flexwrap-setclasses !*/
!function(e,n,t){function r(e,n){return typeof e===n}function s(){var e,n,t,s,o,i,l;for(var a in w)if(w.hasOwnProperty(a)){if(e=[],n=w[a],n.name&&(e.push(n.name.toLowerCase()),n.options&&n.options.aliases&&n.options.aliases.length))for(t=0;t<n.options.aliases.length;t++)e.push(n.options.aliases[t].toLowerCase());for(s=r(n.fn,"function")?n.fn():n.fn,o=0;o<e.length;o++)i=e[o],l=i.split("."),1===l.length?Modernizr[l[0]]=s:(!Modernizr[l[0]]||Modernizr[l[0]]instanceof Boolean||(Modernizr[l[0]]=new Boolean(Modernizr[l[0]])),Modernizr[l[0]][l[1]]=s),C.push((s?"":"no-")+l.join("-"))}}function o(e){var n=S.className,t=Modernizr._config.classPrefix||"";if(_&&(n=n.baseVal),Modernizr._config.enableJSClass){var r=new RegExp("(^|\\s)"+t+"no-js(\\s|$)");n=n.replace(r,"$1"+t+"js$2")}Modernizr._config.enableClasses&&(n+=" "+t+e.join(" "+t),_?S.className.baseVal=n:S.className=n)}function i(e,n){return!!~(""+e).indexOf(n)}function l(){return"function"!=typeof n.createElement?n.createElement(arguments[0]):_?n.createElementNS.call(n,"http://www.w3.org/2000/svg",arguments[0]):n.createElement.apply(n,arguments)}function a(e){return e.replace(/([a-z])-([a-z])/g,function(e,n,t){return n+t.toUpperCase()}).replace(/^-/,"")}function f(e,n){return function(){return e.apply(n,arguments)}}function u(e,n,t){var s;for(var o in e)if(e[o]in n)return t===!1?e[o]:(s=n[e[o]],r(s,"function")?f(s,t||n):s);return!1}function d(e){return e.replace(/([A-Z])/g,function(e,n){return"-"+n.toLowerCase()}).replace(/^ms-/,"-ms-")}function c(n,t,r){var s;if("getComputedStyle"in e){s=getComputedStyle.call(e,n,t);var o=e.console;if(null!==s)r&&(s=s.getPropertyValue(r));else if(o){var i=o.error?"error":"log";o[i].call(o,"getComputedStyle returning null, its possible modernizr test results are inaccurate")}}else s=!t&&n.currentStyle&&n.currentStyle[r];return s}function p(){var e=n.body;return e||(e=l(_?"svg":"body"),e.fake=!0),e}function m(e,t,r,s){var o,i,a,f,u="modernizr",d=l("div"),c=p();if(parseInt(r,10))for(;r--;)a=l("div"),a.id=s?s[r]:u+(r+1),d.appendChild(a);return o=l("style"),o.type="text/css",o.id="s"+u,(c.fake?c:d).appendChild(o),c.appendChild(d),o.styleSheet?o.styleSheet.cssText=e:o.appendChild(n.createTextNode(e)),d.id=u,c.fake&&(c.style.background="",c.style.overflow="hidden",f=S.style.overflow,S.style.overflow="hidden",S.appendChild(c)),i=t(d,e),c.fake?(c.parentNode.removeChild(c),S.style.overflow=f,S.offsetHeight):d.parentNode.removeChild(d),!!i}function g(n,r){var s=n.length;if("CSS"in e&&"supports"in e.CSS){for(;s--;)if(e.CSS.supports(d(n[s]),r))return!0;return!1}if("CSSSupportsRule"in e){for(var o=[];s--;)o.push("("+d(n[s])+":"+r+")");return o=o.join(" or "),m("@supports ("+o+") { #modernizr { position: absolute; } }",function(e){return"absolute"==c(e,null,"position")})}return t}function y(e,n,s,o){function f(){d&&(delete E.style,delete E.modElem)}if(o=r(o,"undefined")?!1:o,!r(s,"undefined")){var u=g(e,s);if(!r(u,"undefined"))return u}for(var d,c,p,m,y,v=["modernizr","tspan","samp"];!E.style&&v.length;)d=!0,E.modElem=l(v.shift()),E.style=E.modElem.style;for(p=e.length,c=0;p>c;c++)if(m=e[c],y=E.style[m],i(m,"-")&&(m=a(m)),E.style[m]!==t){if(o||r(s,"undefined"))return f(),"pfx"==n?m:!0;try{E.style[m]=s}catch(h){}if(E.style[m]!=y)return f(),"pfx"==n?m:!0}return f(),!1}function v(e,n,t,s,o){var i=e.charAt(0).toUpperCase()+e.slice(1),l=(e+" "+P.join(i+" ")+i).split(" ");return r(n,"string")||r(n,"undefined")?y(l,n,s,o):(l=(e+" "+T.join(i+" ")+i).split(" "),u(l,n,t))}function h(e,n,r){return v(e,t,t,n,r)}var C=[],w=[],x={_version:"3.5.0",_config:{classPrefix:"",enableClasses:!0,enableJSClass:!0,usePrefixes:!0},_q:[],on:function(e,n){var t=this;setTimeout(function(){n(t[e])},0)},addTest:function(e,n,t){w.push({name:e,fn:n,options:t})},addAsyncTest:function(e){w.push({name:null,fn:e})}},Modernizr=function(){};Modernizr.prototype=x,Modernizr=new Modernizr;var S=n.documentElement,_="svg"===S.nodeName.toLowerCase(),b="Moz O ms Webkit",P=x._config.usePrefixes?b.split(" "):[];x._cssomPrefixes=P;var T=x._config.usePrefixes?b.toLowerCase().split(" "):[];x._domPrefixes=T;var z={elem:l("modernizr")};Modernizr._q.push(function(){delete z.elem});var E={style:z.elem.style};Modernizr._q.unshift(function(){delete E.style}),x.testAllProps=v,x.testAllProps=h,Modernizr.addTest("flexbox",h("flexBasis","1px",!0)),Modernizr.addTest("flexwrap",h("flexWrap","wrap",!0)),Modernizr.addTest("cssgridlegacy",h("grid-columns","10px",!0)),Modernizr.addTest("cssgrid",h("grid-template-rows","none",!0)),s(),o(C),delete x.addTest,delete x.addAsyncTest;for(var N=0;N<Modernizr._q.length;N++)Modernizr._q[N]();e.Modernizr=Modernizr}(window,document);
/* jshint ignore:end */
/* eslint-enable */

(function($) {
  // TODO: Put all of the calendar stuff inside of a function and call it only on the calendar page
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
  var github_url = (function() {
    var url = $('#github').attr('href'); // grab the href value of the repo link
    if (typeof(url) !== "undefined") {
      var fragment = url.substring(url.indexOf('.com/') + 5); // find the tail end (5 = .com/)
      return 'https://api.github.com/repos/' + fragment + '/commits?per_page=1'; // return the API url
    }
  })();

  // Create a variable to hold HTML for the toggle label
  var toggledLabel;

  // Register service worker
  if (typeof(navigator.serviceWorker) !== 'undefined') {
    // Grab the course directory from the URL off of courses.karlstolley.com:
    sw_path = '/' + window.location.href.split('/')[3] + '/';
    navigator.serviceWorker.register(sw_path + 'sw.js')
    .then(function(registration) {
      console.log('Registered service worker scoped to', registration.scope);
    })
    .catch(function(error) {
      console.error('Failed to register service worker', error)
    });
  }

  // Helper for toggling label text
  $.fn.toggleLabel = function(current, all) {
    var state = current;
    if ($('.toggle').html()===state.action) {
      state = all;
    }
    //$('.showing').html(state.status);
    $('.toggle').html(state.action).attr('href', state.href);
  };

  // Utility class for JavaScript detection in CSS
  $('html').addClass('js');

  // Navigation menu toggle

  function responsiveFeature(feature) {
    var size = window
      .getComputedStyle(document.body, ':after')
      .getPropertyValue('content');
    var has_feature = true;
    if(size.indexOf(feature) === -1) {
      has_feature = false;
    }
    return has_feature;
  }

  function toggledNav() {
    if(responsiveFeature('menu')) {
      if($('#navigation h2').length === 0) {
        $('#navigation').prepend('<h2 id="nav-menu"><a tabindex="1" href="#navigation">Menu</a></h2>');
        $('#nav-menu').on('click', function(e) {
          // TODO: Fix edge case to remove tabindex when nav is collapsed
          $('.nav a').each(function(i,e) {
            $(e).attr('tabindex', i+1);
          });
          $('#header').addClass('expandable').toggleClass('is-expanded');
          e.preventDefault();
        });
      }
    } else {
      $('#nav-menu').remove();
      $('#header').removeClass('expandable');
    }
  }

  $(document).ready(toggledNav());
  $(window).on('resize', toggledNav);

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
    // Set up a non-semantic container to highlight the current week
    $('#calendar #content').before('<div id="this-week"></div>');
    // Put an .extended class on all weeks
    $('.week').each(function() {
      $(this).addClass('is-future');
    });

    // Identify the current week
    $('#this-week').html('<header><h2>This Week</h2><small class="next"><a href="#next-week">Jump Ahead to Next Week</a></small></header>');
    $('#calendar .primary > header h2').text('Full Calendar');
    futureWeeks[0].clone().removeClass('is-future').appendTo('#this-week');
    futureWeeks[0].addClass('is-current').removeClass('is-future').attr('id', 'current-week');
    // Identify the due date for assigned work based on the week's expiration
    dueDate = new Date(futureWeeks[0].attr('data-expires'));
    // Append a human-readable due-date to the assigned header
    $('#this-week .assigned h3').after('<small>Complete by ' + namedDays[dueDate.getDay()] + ', ' + namedMonths[dueDate.getMonth()] + ' ' + dueDate.getDate() +'</small>');


    if (typeof(futureWeeks[1])!=="undefined") {
      // If there is another week beyond the current one, identify it as well
      futureWeeks[1].attr('id', 'next-week');
    }
  }

  // Insert upcoming deadlines at the end of current week's assigned work
  $('#this-week .assigned').append($('#upcoming-deadlines'));

  if(typeof(github_url) !== "undefined") {
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
          '</time> to <a id="commit-message" href="' + commit.url + '"></a>.'
        );
        // Prevent HTML and problem characters from being rendered as HTML
        $('#commit-message').text(commit.message);
    });
  }

})(jQuery);
