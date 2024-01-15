// Sample data array (replace with your actual data)
const dataArray = [
  17.45, 34.911, 52.36, 31.07, 23.39, 43.28, 25.48, 43.28, 25.48,
];

// Select all elements with class "bar"
const bars = document.querySelectorAll(".bar");

// Loop through the bars and update their heights
bars.forEach((bar, index) => {
  // Update the height of the bar using data from the array
  bar.style.height = (dataArray[index]*2.2) + "px";

  // Update the corresponding value paragraph
  bar.parentElement.querySelector(".value").textContent =
    "$" + dataArray[index];

  // Add mouseover event listener
  bar.addEventListener("mouseover", () => {
    // Show the value when mouse is over the bar
    bar.parentElement.querySelector(".value").style.display = "block";
  });

  // Add mouseout event listener
  bar.addEventListener("mouseout", () => {
    // Hide the value when mouse leaves the bar
    bar.parentElement.querySelector(".value").style.display = "none";
  });
});
