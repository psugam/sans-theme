console.log('This theme was created by psugam.');



  
// FOOTNOTE TEXT
// const elements = document.querySelector('.footnotes');

// console.log(elements);
//   elements.style.color = 'blue'; // Example: change text color
//   elements.style.backgroundColor = 'yellow'; 

document.addEventListener('DOMContentLoaded', function () {
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

// Auto-initialize all accordion groups on page load
document.addEventListener('DOMContentLoaded', function() {
  document.querySelectorAll('[data-accordion-group]').forEach(function(accordion) {
    const groupId = accordion.getAttribute('data-accordion-group');
    window.initAccordionGroup(groupId);
  });
});




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