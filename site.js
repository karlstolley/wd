/* eslint-disable */
/* jshint ignore:start */
/*! modernizr 3.5.0 (Custom Build) | MIT *
 * https://modernizr.com/download/?-cssgrid_cssgridlegacy-flexbox-flexwrap-setclasses !*/
!function(e,n,t){function r(e,n){return typeof e===n}function s(){var e,n,t,s,o,i,l;for(var a in w)if(w.hasOwnProperty(a)){if(e=[],n=w[a],n.name&&(e.push(n.name.toLowerCase()),n.options&&n.options.aliases&&n.options.aliases.length))for(t=0;t<n.options.aliases.length;t++)e.push(n.options.aliases[t].toLowerCase());for(s=r(n.fn,"function")?n.fn():n.fn,o=0;o<e.length;o++)i=e[o],l=i.split("."),1===l.length?Modernizr[l[0]]=s:(!Modernizr[l[0]]||Modernizr[l[0]]instanceof Boolean||(Modernizr[l[0]]=new Boolean(Modernizr[l[0]])),Modernizr[l[0]][l[1]]=s),C.push((s?"":"no-")+l.join("-"))}}function o(e){var n=S.className,t=Modernizr._config.classPrefix||"";if(_&&(n=n.baseVal),Modernizr._config.enableJSClass){var r=new RegExp("(^|\\s)"+t+"no-js(\\s|$)");n=n.replace(r,"$1"+t+"js$2")}Modernizr._config.enableClasses&&(n+=" "+t+e.join(" "+t),_?S.className.baseVal=n:S.className=n)}function i(e,n){return!!~(""+e).indexOf(n)}function l(){return"function"!=typeof n.createElement?n.createElement(arguments[0]):_?n.createElementNS.call(n,"http://www.w3.org/2000/svg",arguments[0]):n.createElement.apply(n,arguments)}function a(e){return e.replace(/([a-z])-([a-z])/g,function(e,n,t){return n+t.toUpperCase()}).replace(/^-/,"")}function f(e,n){return function(){return e.apply(n,arguments)}}function u(e,n,t){var s;for(var o in e)if(e[o]in n)return t===!1?e[o]:(s=n[e[o]],r(s,"function")?f(s,t||n):s);return!1}function d(e){return e.replace(/([A-Z])/g,function(e,n){return"-"+n.toLowerCase()}).replace(/^ms-/,"-ms-")}function c(n,t,r){var s;if("getComputedStyle"in e){s=getComputedStyle.call(e,n,t);var o=e.console;if(null!==s)r&&(s=s.getPropertyValue(r));else if(o){var i=o.error?"error":"log";o[i].call(o,"getComputedStyle returning null, its possible modernizr test results are inaccurate")}}else s=!t&&n.currentStyle&&n.currentStyle[r];return s}function p(){var e=n.body;return e||(e=l(_?"svg":"body"),e.fake=!0),e}function m(e,t,r,s){var o,i,a,f,u="modernizr",d=l("div"),c=p();if(parseInt(r,10))for(;r--;)a=l("div"),a.id=s?s[r]:u+(r+1),d.appendChild(a);return o=l("style"),o.type="text/css",o.id="s"+u,(c.fake?c:d).appendChild(o),c.appendChild(d),o.styleSheet?o.styleSheet.cssText=e:o.appendChild(n.createTextNode(e)),d.id=u,c.fake&&(c.style.background="",c.style.overflow="hidden",f=S.style.overflow,S.style.overflow="hidden",S.appendChild(c)),i=t(d,e),c.fake?(c.parentNode.removeChild(c),S.style.overflow=f,S.offsetHeight):d.parentNode.removeChild(d),!!i}function g(n,r){var s=n.length;if("CSS"in e&&"supports"in e.CSS){for(;s--;)if(e.CSS.supports(d(n[s]),r))return!0;return!1}if("CSSSupportsRule"in e){for(var o=[];s--;)o.push("("+d(n[s])+":"+r+")");return o=o.join(" or "),m("@supports ("+o+") { #modernizr { position: absolute; } }",function(e){return"absolute"==c(e,null,"position")})}return t}function y(e,n,s,o){function f(){d&&(delete E.style,delete E.modElem)}if(o=r(o,"undefined")?!1:o,!r(s,"undefined")){var u=g(e,s);if(!r(u,"undefined"))return u}for(var d,c,p,m,y,v=["modernizr","tspan","samp"];!E.style&&v.length;)d=!0,E.modElem=l(v.shift()),E.style=E.modElem.style;for(p=e.length,c=0;p>c;c++)if(m=e[c],y=E.style[m],i(m,"-")&&(m=a(m)),E.style[m]!==t){if(o||r(s,"undefined"))return f(),"pfx"==n?m:!0;try{E.style[m]=s}catch(h){}if(E.style[m]!=y)return f(),"pfx"==n?m:!0}return f(),!1}function v(e,n,t,s,o){var i=e.charAt(0).toUpperCase()+e.slice(1),l=(e+" "+P.join(i+" ")+i).split(" ");return r(n,"string")||r(n,"undefined")?y(l,n,s,o):(l=(e+" "+T.join(i+" ")+i).split(" "),u(l,n,t))}function h(e,n,r){return v(e,t,t,n,r)}var C=[],w=[],x={_version:"3.5.0",_config:{classPrefix:"",enableClasses:!0,enableJSClass:!0,usePrefixes:!0},_q:[],on:function(e,n){var t=this;setTimeout(function(){n(t[e])},0)},addTest:function(e,n,t){w.push({name:e,fn:n,options:t})},addAsyncTest:function(e){w.push({name:null,fn:e})}},Modernizr=function(){};Modernizr.prototype=x,Modernizr=new Modernizr;var S=n.documentElement,_="svg"===S.nodeName.toLowerCase(),b="Moz O ms Webkit",P=x._config.usePrefixes?b.split(" "):[];x._cssomPrefixes=P;var T=x._config.usePrefixes?b.toLowerCase().split(" "):[];x._domPrefixes=T;var z={elem:l("modernizr")};Modernizr._q.push(function(){delete z.elem});var E={style:z.elem.style};Modernizr._q.unshift(function(){delete E.style}),x.testAllProps=v,x.testAllProps=h,Modernizr.addTest("flexbox",h("flexBasis","1px",!0)),Modernizr.addTest("flexwrap",h("flexWrap","wrap",!0)),Modernizr.addTest("cssgridlegacy",h("grid-columns","10px",!0)),Modernizr.addTest("cssgrid",h("grid-template-rows","none",!0)),s(),o(C),delete x.addTest,delete x.addAsyncTest;for(var N=0;N<Modernizr._q.length;N++)Modernizr._q[N]();e.Modernizr=Modernizr}(window,document);
/* jshint ignore:end */
/* eslint-enable */

(function() {

  if (typeof document.querySelector === 'undefined' || typeof window.getComputedStyle === 'undefined') {
    // Go no further if a browser doesn't have querySelector
    return;
  }
  // Used in the calendar but also the fetch to GitHub
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

  // Get the current time as a Unix timestamp
  function processCalendar() {
    var currentDate = new Date();
    var currentTime = Math.round(currentDate.getTime() / 1000);

    // Collection of all the weeks from the calendar
    var weeks = document.querySelectorAll('.week');

    // Create an array to hold the future weeks
    var futureWeeks = [];
    var dueDate;

    // Go through each week to build the array of future weeks

    for (var i = 0; i < weeks.length; i++) {
      var weekTime = new Date(weeks[i].getAttribute('data-expires'));
      weekTime = Math.round(weekTime.getTime() / 1000);
      if ((weekTime - currentTime) > 0) {
        futureWeeks.push(weeks[i]);
        weeks[i].classList.add('is-future');
      }
    }

    // Until the semester is over, do nice things with the calendar
    if (futureWeeks.length > 0) {
      // Set up a non-semantic container to highlight the current week
      var this_week = document.createElement('div');
      this_week.setAttribute('id', 'this-week');
      var content = document.querySelector('#calendar #content');
      var content_parent = content.parentNode;
      content_parent.insertBefore(this_week, content);

      // Identify the current week
      this_week.innerHTML = '<header><h2>This Week</h2><small class="next"><a href="#next-week">Jump Ahead to Next Week</a></small></header>';
      document.querySelector('#calendar .primary > header h2').innerText = 'Full Calendar';
      var future_dupe = futureWeeks[0].cloneNode(true);
      future_dupe.classList.remove('is-future');
      this_week.appendChild(future_dupe);
      futureWeeks[0].classList.add('is-current');
      futureWeeks[0].classList.remove('is-future');
      futureWeeks[0].setAttribute('id', 'current-week');
      // Identify the due date for assigned work based on the week's expiration
      dueDate = new Date(futureWeeks[0].getAttribute('data-expires'));
      // Append a human-readable due-date to the assigned header
      var small = document.createElement('small');
      small.innerHTML = 'Complete by ' + namedDays[dueDate.getDay()] + ', ' + namedMonths[dueDate.getMonth()] + ' ' + dueDate.getDate();
      document.querySelector('#this-week .assigned header').appendChild(small);

      if (typeof(futureWeeks[1])!=="undefined") {
        // If there is another week beyond the current one, identify it as well
        futureWeeks[1].setAttribute('id', 'next-week');
      }

      // Insert upcoming deadlines at the end of current week's assigned work
      var upcoming_deadlines = document.querySelector('#upcoming-deadlines');
      document.querySelector('#this-week .assigned').appendChild(upcoming_deadlines);
    }

  }

  // Responsive detection
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

  // Handle navigation responsively with a toggle
  function toggledNav() {
    // Test DOMTokenList for toggle support (for use with classList API)
    // see https://developer.mozilla.org/en-US/docs/Web/API/Element/classList
    if (typeof DOMTokenList.prototype.toggle === 'undefined') {
      return;
    }
    if(responsiveFeature('menu')) {
      if(document.querySelector('#navigation h2') === null) {
        document.querySelector('#navigation').innerHTML += '<h2 id="nav-menu"><a tabindex="1" href="#navigation">Menu</a></h2>';
        document.querySelector('#nav-menu').addEventListener('click', function(e) {
          // TODO: Fix edge case to remove tabindex when nav is collapsed
          var nav_elements = document.querySelectorAll('.nav a');
          for (var i = 0; i < nav_elements.length; i++) {
            nav_elements[i].setAttribute('tabindex', i+1);
          }
          // TODO: Add feature detection or polyfill for the classList API
          document.querySelector('#header').classList.add('expandable');
          document.querySelector('#header').classList.toggle('is-expanded');

          e.preventDefault();
        });
      }
    } else {
      if (document.querySelector('#nav-menu')) {
        document.querySelector('#nav-menu').remove();
        document.querySelector('#header').classList.remove('expandable');
      }
    }
  }



  // DOM Manipulation
  document.addEventListener('DOMContentLoaded', function(e) {
    // Utility class for JavaScript detection in CSS (.js)
    document.querySelector('html').className += ' js';
    // Run the nav toggle function when the document loads
    toggledNav();
    // Also run it whenever the window is resized
    // TODO: throttle or debounce this
    window.addEventListener('resize', toggledNav);

    // Process calendar weeks
    if (document.querySelector('#calendar')) {
      processCalendar();
    }

    if (typeof fetch !== 'undefined') {
      // Fetch latest commit from GitHub
      var github_url = (function() {
        var url = document.querySelector('#github').getAttribute('href'); // grab the href value of the repo link
        if (typeof(url) !== 'undefined') {
          var fragment = url.substring(url.indexOf('.com/') + 5); // find the tail end (5 = .com/)
          return 'https://api.github.com/repos/' + fragment + '/commits?per_page=1'; // return the API url
        }
      })();

      if(typeof(github_url) !== "undefined") {
        fetch(github_url)
        .then(function(response) {
          return response.json();
        })
        .then(function(data) {
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
          document.querySelector('#footer p:first-child').innerHTML +=
            ' Course last updated on <time datetime="' + commit.stamp + '">' + commit.time_string +
            '</time> to <a id="commit-message" href="' + commit.url + '">' + commit.message + '</a>.';
        });
      }
    }

  // end DOMContentLoaded event listener
  });

  // Register service worker
  if (typeof navigator.serviceWorker !== 'undefined') {
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
})();
