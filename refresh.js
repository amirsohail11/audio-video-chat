setInterval(() => {
  fetch("https://audio-video-chat.onrender.com/")
    .then(response => console.log('Audio-video chat server refreshed'))
    .catch(error => console.error('Error refreshing audio-video chat:', error));

    fetch("https://amirsohail.vercel.app/")
    .then(response => console.log('portfolio server refreshed'))
    .catch(error => console.error('Error refreshing audio-video chat:', error));

    fetch("https://email-signature-o9r3-amir-sohails-projects-71e29dca.vercel.app/")
    .then(response => console.log('singnature server refreshed'))
    .catch(error => console.error('Error refreshing audio-video chat:', error));

  fetch("https://foodmine-eakr.onrender.com/")
    .then(response => console.log('Foodmine server refreshed'))
    .catch(error => console.error('Error refreshing Foodmine:', error));
}, 20000);
