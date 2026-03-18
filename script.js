// 🔴 Use ONLY the video ID
const VIDEO_ID = "0EWcxtOAJE4";

// Build embed URL
const url = `https://www.youtube.com/embed/${VIDEO_ID}?autoplay=1&mute=1&controls=0&loop=1&playlist=${VIDEO_ID}&modestbranding=1&rel=0`;

document.getElementById("yt-player").src = url;