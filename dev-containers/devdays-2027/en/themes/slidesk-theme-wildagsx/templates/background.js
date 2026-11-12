// Templates photo et cover : l'image du bloc [[img]] / [[bg]] devient le fond plein écran de la slide.
[...document.querySelectorAll(".sd-slide .photo-bg, .sd-slide .cover-bg")].forEach((bg) => {
  const img = bg.querySelector("img");
  if (img) bg.style.backgroundImage = `url(${img.getAttribute("data-src") || img.getAttribute("src")})`;
});
