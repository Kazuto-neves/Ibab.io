// Substitua 'UCw7E0lQUNkq9l1l9o1t9Q9w' pelo ID do canal do YouTube da igreja
const YOUTUBE_CHANNEL_ID = 'UCw7E0lQUNkq9l1l9o1t9Q9w';
const YOUTUBE_API_KEY = 'SUA_CHAVE_API_AQUI'; // Insira sua chave da API do YouTube Data v3

async function fetchLiveVideo() {
  const url = `https://www.googleapis.com/youtube/v3/search?part=snippet&channelId=${YOUTUBE_CHANNEL_ID}&eventType=live&type=video&key=${YOUTUBE_API_KEY}`;
  const res = await fetch(url);
  const data = await res.json();
  if (data.items && data.items.length > 0) {
    return data.items[0].id.videoId;
  }
  return null;
}

async function fetchLastVideos() {
  const url = `https://www.googleapis.com/youtube/v3/search?part=snippet&channelId=${YOUTUBE_CHANNEL_ID}&maxResults=3&order=date&type=video&key=${YOUTUBE_API_KEY}`;
  const res = await fetch(url);
  const data = await res.json();
  return data.items.map(item => item.id.videoId);
}

async function showYoutubeSection() {
  const liveId = await fetchLiveVideo();
  const section = document.getElementById('youtube-section');
  section.innerHTML = '<h2 class="section-title">Transmissão ao Vivo</h2>';
  if (liveId) {
    section.innerHTML += `<div class="youtube-videos"><iframe width="400" height="225" src="https://www.youtube.com/embed/${liveId}?autoplay=1" frameborder="0" allowfullscreen></iframe></div>`;
  } else {
    section.innerHTML += '<div><b>Nenhuma live ao vivo no momento. Últimos vídeos:</b></div>';
    const lastVideos = await fetchLastVideos();
    section.innerHTML += '<div class="youtube-videos">' + lastVideos.map(id => `<iframe width="320" height="180" src="https://www.youtube.com/embed/${id}" frameborder="0" allowfullscreen></iframe>`).join('') + '</div>';
  }
}

document.addEventListener('DOMContentLoaded', showYoutubeSection);
