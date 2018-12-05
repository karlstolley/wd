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

      if (typeof(futureWeeks[1])!=="undefined") {
        // If there is another week beyond the current one, identify it as well
        futureWeeks[1].setAttribute('id', 'next-week');
        // Identify the due date for assigned work based on the week's expiration
        dueDate = new Date(futureWeeks[0].getAttribute('data-expires'));
        // Append a human-readable due-date to the assigned header
        var small = document.createElement('small');
        small.innerHTML = 'Complete by ' + namedDays[dueDate.getDay()] + ', ' + namedMonths[dueDate.getMonth()] + ' ' + dueDate.getDate();
        document.querySelector('#this-week .assigned header').appendChild(small);
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

      function escapeHTML(str) {
        var div = document.createElement('div');
        div.appendChild(document.createTextNode(str));
        return div.innerHTML;
      }

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
            '</time> to <a id="commit-message" href="' + commit.url + '">' + escapeHTML(commit.message) + '</a>.';
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
