imgChar1 = "./images/pin_image.png";
imgChar2 = "./characters/mocha_bear_spritesheet.png";
imgChar3 = "./characters/milk_mocha_spritesheet.png";
imgChar4 = "./characters/milk_spritesheet.png";

const imageSrcs = [
  imgChar1,
  imgChar2,
  imgChar3,
  imgChar4
];
imagesLoaded = false;

// sound assets
snd1 = "./sounds/typing.mp3";
snd2 = "./sounds/background_music.mp3";
const soundSrcs = [snd1,snd2];
soundsLoaded = false;
allAssetsLoaded = false;

$(window).load(function () {
  window.preloadedImages = [];
  imagesLoaded = 0;
  totalImages = imageSrcs.length;
  imageSrcs.forEach((imgUrl) => {
    var img = new Image();
    img.src = imgUrl;

    img.onload = (e) => {
      imagesLoaded++;
      window.preloadedImages.push(img);
      if (imagesLoaded === totalImages) {
        this.imagesLoaded = true;
        if (this.imagesLoaded && this.soundsLoaded) {
          donePreloading();
        }
      }
    };
  });

  soundsLoaded = 0;
  totalSounds = soundSrcs.length;
  soundSrcs.forEach((filename) => {
    var audio = new Audio(filename);

    audio.addEventListener("canplaythrough", () => {
      soundsLoaded++;
      if (soundsLoaded === totalSounds) {
        this.soundsLoaded = true;
        if (this.imagesLoaded && this.soundsLoaded) {
          donePreloading();
        }
      }
    });
  });
});