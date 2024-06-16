document.getElementById('nextVideo').addEventListener('click', fetchVideo);
document.getElementById('play').addEventListener('click', playVideo);

async function fetchVideo() {
    try {
        const response = await fetch('/api/get-video');
        const data = await response.json();
        const videoPlayer = document.getElementById('videoPlayer');
        videoPlayer.src = data.url;
    } catch (error) {
        console.error('Error fetching video:', error);
    }
}

function playVideo() {
    const videoPlayer = document.getElementById('videoPlayer');
    videoPlayer.play();
}
