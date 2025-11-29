console.log('This theme was created by psugam.');

// SINGLE DOMContentLoaded EVENT LISTENER
document.addEventListener('DOMContentLoaded', function () {
  
  // FOOTNOTE TEXT
  const footnoteDiv = document.querySelector('.footnotes');
  if (footnoteDiv) {
    const hr = footnoteDiv.querySelector('hr');
    const ol = footnoteDiv.querySelector('ol');

    // Create the new div element
    const footnoteText = document.createElement('div');
    footnoteText.id = 'myfootnoteText';
    footnoteText.textContent = 'FOOTNOTES';

    // Insert before the <ol>, or after the <hr> if no <ol>
    if (ol) {
      footnoteDiv.insertBefore(footnoteText, ol);
    } else if (hr) {
      footnoteDiv.insertBefore(footnoteText, hr.nextSibling);
    } else {
      footnoteDiv.appendChild(footnoteText);
    }
  }

  // AUTO-INITIALIZE ALL ACCORDION GROUPS
  document.querySelectorAll('[data-accordion-group]').forEach(function(accordion) {
    const groupId = accordion.getAttribute('data-accordion-group');
    window.initAccordionGroup(groupId);
  });

  // DARK MODE TOGGLE
  const toggleButton = document.getElementById('dark-mode-toggle');
  const body = document.body;
  const darkCircle = document.getElementById('dark-circle');
  const lightCircle = document.getElementById('light-circle');

  // Default: light theme
  let theme = localStorage.getItem('theme') || 'light';

  // Apply theme
  if (theme === 'dark') {
    body.classList.add('dark-mode');
    darkCircle.style.display = 'inline';
    lightCircle.style.display = 'none';
  } else {
    body.classList.remove('dark-mode');
    darkCircle.style.display = 'none';
    lightCircle.style.display = 'inline';
  }

  toggleButton.addEventListener('click', () => {
    body.classList.toggle('dark-mode');

    // Save preference to local storage
    if (body.classList.contains('dark-mode')) {
      localStorage.setItem('theme', 'dark');
      lightCircle.style.setProperty('display', 'none');
      darkCircle.style.setProperty('display', 'inline');
    } else {
      localStorage.setItem('theme', 'light');
      darkCircle.style.setProperty('display', 'none');
      lightCircle.style.setProperty('display', 'inline');
    }
  });

  // TAXONOMY CLOUD
  try {
    const cloud = document.querySelector('.taxo-cloud[data-taxonomy="{{ $taxonomy }}"]');
    if (cloud) {
      const terms = Array.from(cloud.children);
      // Shuffle for visual variety
      terms.sort(() => Math.random() - 0.5);
      cloud.innerHTML = '';
      terms.forEach(t => cloud.appendChild(t));
    }
  } catch (err) {
    console.error("Taxonomy cloud error:", err);
  }

  // hamburger menu toggle
    const hamburger = document.getElementById("hamburger-menu");
    const navMenu = document.getElementById("nav-menu");

    if (hamburger && navMenu) {
      hamburger.addEventListener("click", function() {
        hamburger.classList.toggle("active");
        navMenu.classList.toggle("active");
      });
    }
  });



// For ACCORDIAN WORKING 
// Initialize accordion management (only once)
if (!window.accordionInitialized) {
  window.accordionInitialized = {};
  
  window.initAccordionGroup = function(groupId) {
    const container = document.querySelector('[data-accordion-group="' + groupId + '"]');
    if (!container || window.accordionInitialized[groupId]) return;
    
    window.accordionInitialized[groupId] = true;
    
    const buttons = container.querySelectorAll('.accordion-btn');
    const contents = container.querySelectorAll('.accordion-content');
    
    buttons.forEach(btn => {
      btn.addEventListener('click', () => {
        const targetId = btn.getAttribute('data-accordion-target');
        const content = document.getElementById(targetId);
        const icon = btn.querySelector('.accordion-icon');
        const isHidden = content.classList.contains('hidden');
        
        // Close all accordions in THIS group only
        contents.forEach(c => c.classList.add('hidden'));
        buttons.forEach(b => {
          b.classList.remove('active');
          b.querySelector('.accordion-icon').style.transform = 'rotate(0deg)';
        });
        
        // Open clicked accordion if it was closed
        if (isHidden) {
          content.classList.remove('hidden');
          btn.classList.add('active');
          icon.style.transform = 'rotate(90deg)';
        }
      });
    });
  };
}


// TABS
if (!window.tabGroupInitialized) {
  window.tabGroupInitialized = {};
  
  window.initTabGroup = function(groupId) {
    const container = document.querySelector('[data-tab-group="' + groupId + '"]');
    if (!container || window.tabGroupInitialized[groupId]) return;
    
    window.tabGroupInitialized[groupId] = true;
    
    const buttons = container.querySelectorAll('.tab-btn');
    const contents = container.querySelectorAll('.tab-content');
    
    buttons.forEach(btn => {
      btn.addEventListener('click', () => {
        const targetId = btn.getAttribute('data-tab-target');
        
        // Hide all contents in THIS group only
        contents.forEach(c => c.classList.add('hidden'));
        
        // Remove active from all buttons in THIS group only
        buttons.forEach(b => b.classList.remove('active'));
        
        // Show selected tab and activate button
        document.getElementById(targetId).classList.remove('hidden');
        btn.classList.add('active');
      });
    });
    
    // Activate first tab by default
    if (buttons.length > 0) {
      buttons[0].click();
    }
  };
}

// Initialize this specific tab group
const groupId = '{{ $tabGroupId }}';

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', function() {
    window.initTabGroup(groupId);
  });
} else {
  window.initTabGroup(groupId);
}


// GITHUB COMMENTS 
function updateGiscusTheme() {
  const isDarkMode = document.body.classList.contains('dark-mode');
  const theme = isDarkMode ? 'transparent_dark' : 'light';

  const iframe = document.querySelector('iframe.giscus-frame');
  if (!iframe) return; // not loaded yet

  iframe.contentWindow.postMessage(
    { giscus: { setConfig: { theme: theme } } },
    'https://giscus.app'
  );
}




