window.addEventListener("load", function () {
  var loader = document.getElementById("preloader");
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      console.log(entry);
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
      } else {
        entry.target.classList.remove("show");
      }
    });
  });
  const hiddenElements = document.querySelectorAll(".hidden");
  hiddenElements.forEach((el) => observer.observe(el));

  loader.style.display = "none";
 

  var icon = document.getElementById("switch");
  var source = document.getElementById("fitayn");
  var video1 = document.getElementById("video21");
  var video2 = document.getElementById("video22");
  
  var moon= document.getElementById("moon");
  var sun= document.getElementById("sun");
  console.log(icon);
  icon.onclick = function () {
    document.body.classList.toggle("dark-theme");

    if (document.body.classList.contains("dark-theme")) {
        console.log(video1);
        video1.parentElement.style.opacity=1;
        video2.parentElement.style.opacity=0;
        sun.style.opacity=0;
        moon.style.opacity=1;
   /* video.pause();
      source.src="img/Abstract Multicolored Geometric lines Background video  Footage  Screensaver.mp4";
      video.load();
      video.play();*/

    } else {
        video2.parentElement.style.opacity=1;
        video1.parentElement.style.opacity=0;
        sun.style.opacity=1;
        moon.style.opacity=0;
    /*video.pause();
      source.src="img/bgyellow.mp4";
      video.load();*/
    }
  };
  
});