(function() {
  'use strict';

  var checkbox = document.querySelector('.sidebar-checkbox');
  var toggle = document.querySelector('.sidebar-toggle');

  if (!checkbox || !toggle) {
    return;
  }

  toggle.addEventListener('click', function(e) {
    e.preventDefault();
    var isChecked = checkbox.checked;
    
    if (!isChecked) {
      checkbox.checked = true;
    } else {
      checkbox.checked = false;
    }
  });

  // Close sidebar when clicking outside
  document.addEventListener('click', function(e) {
    var sidebar = document.getElementById('sidebar');
    var isClickInside = sidebar && sidebar.contains(e.target);
    var isToggleClick = toggle.contains(e.target);
    
    if (checkbox.checked && !isClickInside && !isToggleClick) {
      checkbox.checked = false;
    }
  });
})();
