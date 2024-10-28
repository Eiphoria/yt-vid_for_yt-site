// content.js

// Check if the function already exists to avoid redeclaration errors
if (typeof replaceYouTubeIframes === 'undefined') {
  // Function to replace YouTube iframes with a placeholder image
  const replaceYouTubeIframes = () => {
    // Select all YouTube iframes with lazy loading
    const youtubeIframes = document.querySelectorAll('iframe[src*="youtube.com/embed/"]');

    youtubeIframes.forEach((iframe) => {
      const src = iframe.src; // Get the src attribute

      // Regular expression to extract video ID from the YouTube embed URL
      const videoIdMatch = src.match(/embed\/([a-zA-Z0-9_-]{11})/);
      const videoId = videoIdMatch ? videoIdMatch[1] : null;

      if (videoId) {
        // Create a placeholder image element
        const placeholderImage = document.createElement("img");
        placeholderImage.src = "https://content.imageresizer.com/images/memes/Megamind-Peeking-meme-4.jpg"; // Path to local placeholder image
        placeholderImage.alt = "YouTube Video Placeholder";
        placeholderImage.style.cursor = "pointer";

        // Create a link that opens the video
        const youtubeLink = document.createElement("a");
        youtubeLink.href = `https://www.youtube.com/watch?v=${videoId}`;
        youtubeLink.target = "_blank"; // Opens in a new tab
        youtubeLink.appendChild(placeholderImage);

        // Replace the iframe with the link containing the placeholder image
        iframe.parentNode.replaceChild(youtubeLink, iframe);
      }
    });
  };

  // Listen for the DOMContentLoaded event to ensure the DOM is fully loaded before executing
  replaceYouTubeIframes();
}else{
	replaceYouTubeIframes();
}
