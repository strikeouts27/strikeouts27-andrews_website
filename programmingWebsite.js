// Array of favorite websites
const websites = [
  "https://www.spotify.com",
  "https://www.youtube.com",
  "https://www.discord.com",
];

// Function to display the websites
function displayWebsites() {
  const websitesContainer = document.getElementById("website-container");
  websitesContainer.innerHTML = ""; // Clear existing content
  websites.forEach((url) => {
    const link = document.createElement("a");
    link.href = url;
    link.textContent = url;
    link.target = "_blank"; // Open link in a new tab
    websitesContainer.appendChild(link);
    websitesContainer.appendChild(document.createElement("br")); // Add line break
  });
}

// Function to handle favorite website input and update the list
function favoriteWebsite() {
  let favoriteWebsite = prompt("User please enter your favorite website URL?");
  websites.push(favoriteWebsite); // Add the new website to the end of the array
  websites.shift(); // Remove the first website from the array
  displayWebsites(); // Display the updated list of websites
}

function Main(){
  displayWebsites(); // Display the initial list of websites
  favoriteWebsite(); // Prompt for favorite website and update the list
}

