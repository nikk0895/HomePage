
document.querySelectorAll('.ts-video-wrapper').forEach(wrapper => {
  wrapper.addEventListener('click', () => {
    const videoId = wrapper.dataset.videoId;
    const iframe = document.createElement('iframe');
    iframe.src = `https://www.youtube.com/embed/${videoId}?autoplay=1&controls=1`;
    iframe.frameBorder = 0;
    iframe.allow = "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture";
    iframe.allowFullscreen = true;
    iframe.style.width = "100%";
    iframe.style.height = "100%";
    
    wrapper.innerHTML = '';
    wrapper.appendChild(iframe);
  });
});

  document.addEventListener("DOMContentLoaded", () => {
    const previews = document.querySelectorAll(".video-preview");

    previews.forEach(preview => {
      const videoId = preview.getAttribute("data-video-id");
      const playBtn = preview.querySelector(".play-btn");

      playBtn.addEventListener("click", () => {
        preview.innerHTML = `
          <iframe
            width="100%"
            height="100%"
            src="https://www.youtube.com/embed/${videoId}?autoplay=1"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        `;
      });
    });
  });

