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
