<script>
  // Function to handle click and toggle description visibility hii there
  function toggleDescription() {
    var descriptionContent = this.nextElementSibling;
    if (descriptionContent.style.display === "none") {
      descriptionContent.style.display = "block";
    } else {
      descriptionContent.style.display = "none";
    }
  }

  // Attach the click event to the summary text/button
  var descriptionSummaries = document.querySelectorAll(".description-summary");
  descriptionSummaries.forEach(function (summary) {
    summary.addEventListener("click", toggleDescription);
  });
</script>
