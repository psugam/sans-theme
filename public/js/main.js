(() => {
  // <stdin>
  console.log("This theme was created by psugam.");
  document.addEventListener("DOMContentLoaded", function() {
    const footnoteDiv = document.querySelector(".footnotes");
    if (footnoteDiv) {
      const hr = footnoteDiv.querySelector("hr");
      const ol = footnoteDiv.querySelector("ol");
      const footnoteText = document.createElement("div");
      footnoteText.id = "myfootnoteText";
      footnoteText.textContent = "FOOTNOTES";
      if (ol) {
        footnoteDiv.insertBefore(footnoteText, ol);
      } else if (hr) {
        footnoteDiv.insertBefore(footnoteText, hr.nextSibling);
      } else {
        footnoteDiv.appendChild(footnoteText);
      }
    }
  });
})();
