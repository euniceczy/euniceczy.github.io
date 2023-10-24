/*~~ Set up game logic ~~*/
const LOADING = 0;
const TITLE = 1;
const DIALOGUE = 2;
const EPILOGUE = 3;


state = {
  gameStage: LOADING,
  isLoading: true,
  epilogue: null,
  talkingAudio: new Audio(),
  backgroundAudio: new Audio()
};

function donePreloading() {
  if (state.isLoading) {
    state.isLoading = false;
    state.backgroundAudio.loop=true;
    state.backgroundAudio.src="sounds/background_music.mp3";

    state.talkingAudio.loop = true;
    state.talkingAudio.src = "sounds/typing.mp3";
    $(".loading-dots").addClass("hidden");
    state.gameStage = TITLE;
    showGameStage();
  }
}

function handleUserInput() {
  const userInput = document.getElementById("userInput").value;

  for (var i = 1; i <= 10; i++) {
    var messageKey = "message" + i;
    var dateKey = "datePlaceholder" + i
    var messageValue = localStorage.getItem(messageKey);
    if (!messageValue || messageValue === "") {
      localStorage.setItem(messageKey, userInput);
      var messageText = "User: " + userInput;
      $("#stickyNote li:nth-child(" + i + ") #message" + i).text(messageText);
      var currentDate = new Date();
      var options = { year: 'numeric', month: 'long', day: 'numeric' };
      var formattedDate = currentDate.toLocaleDateString(undefined, options);
      localStorage.setItem(dateKey, formattedDate);
      $("#stickyNote li:nth-child(" + i + ") #datePlaceholder" + i).text(formattedDate);
      document.getElementById("userInput").value = "";
      break;
    }

  }
}

async function initMap() {
  const { Map, InfoWindow } = await google.maps.importLibrary("maps");
  const { AdvancedMarkerElement, PinElement } = await google.maps.importLibrary(
    "marker",
  );
  // Define the coordinates for the map center
  var mapCenter = { lat: 1.3521, lng: 103.8198 }; // Change to your desired coordinates
  var map = new google.maps.Map(document.getElementById('custom-map'), {
    center: mapCenter,
    zoom: 11, // Adjust the zoom level as needed
    mapId: "AIzaSyBfL_UXRU9S4tRhwTbuYIMgCRS",
  });

  var markers = [
    {
      position: { lat: 1.3008619546890259, lng: 103.83917236328125 }, // Change to the coordinates of your first location
      title: 'first date - tanuki raw', // Customize the title
    },
    {
      position: { lat: 1.2806917428970337, lng: 103.87089538574219 }, // Change to the coordinates of your first location
      title: 'favourite date place - marina barrage ', // Customize the title
    },
    {
      position: { lat: 1.1963555812835693, lng: 104.10098266601562 }, // Change to the coordinates of your first location
      title: 'first overseas trip - turi beach resort batam ', // Customize the title
    },
    {
      position: { lat: 1.2814502716064453, lng: 103.86360168457031 }, // Change to the coordinates of your first location
      title: 'doggie dates - gbtb ', // Customize the title
    },
    {
      position: { lat: 1.4071645736694336, lng: 103.78126525878906 }, // Change to the coordinates of your first location
      title: 'one of eunices fav dates! - bird paradise ', // Customize the title
    },
    {
      position: { lat: 1.3326259851455688, lng: 103.67892456054688 }, // Change to the coordinates of your first location
      title: 'singapore discovery center', // Customize the title
    },
    {
      position: { lat: 1.2952570915222168, lng: 103.78013610839844 }, // Change to the coordinates of your first location
      title: 'study dates - NUS science library', // Customize the title
    },
    {
      position: { lat: 1.271182894706726, lng: 103.81967163085938 }, // Change to the coordinates of your first location
      title: 'birthday dinner - DUSK mount faber', // Customize the title
    },
    {
      position: { lat: 1.282447338104248, lng: 103.8304214477539 }, // Change to the coordinates of your first location
      title: 'our first omakase and bday lunch - kyoten', // Customize the title
    },
    {
      position: { lat: 1.2803034782409668, lng: 103.85633087158203 }, // Change to the coordinates of your first location
      title: 'late night walks - shoppes', // Customize the title
    },
    {
      position: { lat: 1.4301055669784546, lng: 103.83445739746094 }, // Change to the coordinates of your first location
      title: 'pasar malam dates - yishun', // Customize the title
    },
    {
      position: { lat: 1.4092413187026978, lng: 103.86808776855469 }, // Change to the coordinates of your first location
      title: 'chill walks and cafe dates - wheelers estate', // Customize the title
    },
    {
      position: { lat: 1.3095064163208008, lng: 103.85775756835938 }, // Change to the coordinates of your first location
      title: 'eunices fav food :D - curry rice ', // Customize the title
    },
  ];
    
    const infoWindow = new InfoWindow();
    markers.forEach(({ position, title }, i) => {
      const pin = new PinElement({
        glyph: `${i + 1}`,
      });
      const image = "./images/pin_image.png";
      const marker = new google.maps.Marker({
        position,
        map,
        title: `${title}`,
        icon: image,
      });

      marker.addListener("click", ({ domEvent, latLng }) => {
        const { target } = domEvent;
        infoWindow.close();
        infoWindow.setContent(marker.title);
        infoWindow.open(marker.map, marker);
      });
    });
}

google.maps.event.addDomListener(window, 'load', initMap);

function startGame() {
  state.gameStage = DIALOGUE;
  showGameStage();
  showDialogue(1);
  state.backgroundAudio.play();
}

function showDialogue(textNodeIndex) {
  const dialogue = DIALOGUE_CONTENT;
  const textNode = dialogue.find((textNode) => textNode.id === textNodeIndex);

  if (textNodeIndex===18){
    $("#custom-map").removeClass("hidden");
    $("#character-portrait").addClass("hidden");
  }
  else {
    $("#custom-map").addClass("hidden");
    $("#character-portrait").removeClass("hidden");
  }

  if (textNodeIndex===17){
    $("#stickyNote").removeClass("hidden");
    $("#character-portrait").addClass("hidden");

    for (var i = 1; i <= 10; i++) {
      var messageKey = "message" + i;
      var savedMessage = localStorage.getItem(messageKey);
      var dateKey = "datePlaceholder" + i
      var savedDate = localStorage.getItem(dateKey);
      $("#stickyNote li:nth-child(" + i + ") #message" + i).text(savedMessage);
      $("#stickyNote li:nth-child(" + i + ") #datePlaceholder" + i).text(savedDate);
    }
  }
  else{
    $("#stickyNote").addClass("hidden");
    $("#character-portrait").removeClass("hidden");
  }

  if (textNodeIndex===16){
    $("#myCarousel").removeClass("hidden");
    $("#character-portrait").addClass("hidden");
  }
  else{
    $("#myCarousel").addClass("hidden");
    $("#character-portrait").removeClass("hidden");
  }

  $("#character-portrait").css(
    "background-image",
    "url(" + textNode.characterImg[0] + ")"
  );
  $("#character-portrait").css(
    "background-position-x",
    textNode.characterImg[1] + "px"
  );
  $("#character-portrait").css(
    "background-position-y",
    textNode.characterImg[2] + "px"
  );

  $("#responses").empty(); // reset
  $("#progress-dialogue").addClass("hidden");

  // If displaying a dialogue object with options to show on the screen
  if (textNode.options) {
    textNode.options.forEach((option) => {
      const button = document.createElement("button");
      button.innerText = option.text;
      button.addEventListener("click", () => selectOption(option));
      $("#responses").append(button);
    });
  }

  //eunice testing
  if (textNode.input) {
    const inputField = document.createElement("input");
    inputField.setAttribute("type", "text");
    inputField.setAttribute("id", "userInput");
    inputField.setAttribute("placeholder", textNode.input.placeholder || "make a wish!");
    inputField.style.width = "50%";
    inputField.style.height = "20%";
    const submitButton = document.createElement("button");
    submitButton.innerText = "submit";
    submitButton.addEventListener("click", handleUserInput);
    const responseContainer = document.getElementById("responses");
    responseContainer.appendChild(inputField);
    responseContainer.appendChild(submitButton);
  }
  //eunice testing


  // If displaying a dialogue object with text and speaker content
  if (textNode.speakerName && textNode.text) {
    $("#speaker-name").text(textNode.speakerName);
    $("#character-dialogue").empty();

    loadingText = true;
    state.talkingAudio.play();
    textArray = textNode.text.split("");
    timeouts = [];

    textArray.forEach((letter, index) => {
      timeouts.push(
        setTimeout(() => {
          $("#character-dialogue").append(letter);
        }, 20 * index)
      );
    });

    timeouts.push(
      setTimeout(
        () => finishLoadingDialogue(textNode),
        20 * (textArray.length - 1)
      )
    );

    document.body.onkeyup = function (e) {
      if (e.code == "Enter") {
        clearTimeouts(timeouts, textNode);
      }
    };

    $(".dialogue-wrapper").click(function () {
      clearTimeouts(timeouts, textNode);
    });
  }

}



function clearTimeouts(timeouts, textNode) {
  if (loadingText) {
    timeouts.forEach((timeout) => {
      clearTimeout(timeout);
    });
    $("#character-dialogue").html(textNode.text);
    finishLoadingDialogue(textNode);
  }
}

function finishLoadingDialogue(textNode) {
  loadingText = false;
  state.talkingAudio.pause();
  $("#progress-dialogue").removeClass("hidden");

  document.body.onkeyup = function (e) {
    if (e.code == "Enter") {
      advance(textNode);
    }
  };
  $("#progress-dialogue").click(function (event) {
    event.stopPropagation();
    advance(textNode);
  });
  $(".dialogue-wrapper").click(function () {
    advance(textNode);
  });
}

function clearListeners() {
  document.body.onkeyup = {};
  $("#progress-dialogue").off("click");
  $(".dialogue-wrapper").off("click");
}

function advance(textNode) {
  clearListeners();
  if (textNode.next == FINISH) {
    showEpilogue();
  } else {
    showDialogue(textNode.next);
  }
}

function selectOption(option) {
  if (option.setState) {
    state = Object.assign(state, option.setState);
  }
  option.chatMoods?.forEach((chatMood) => {
    showChat(chatMood);
  });
  showDialogue(option.nextText);
}

function showGameStage() {
  $("#loading").addClass("hidden");
  $("#titlescreen").addClass("hidden");
  $("#dialogue-container").addClass("hidden");
  $("#epilogue").addClass("hidden");
  switch (state.gameStage) {
    case LOADING:
      $("#loading").removeClass("hidden");
      break;
    case TITLE:
      $("#titlescreen").removeClass("hidden");
      break;
    case DIALOGUE:
      $("#dialogue-container").removeClass("hidden");
      break;
    case EPILOGUE:
      $("#epilogue").removeClass("hidden");
      break;
  }
}

function showEpilogue() {
  state.gameStage = EPILOGUE;
  showGameStage();
  const epilogueObject = EPILOGUES.find(
    (epilogue) => epilogue.id === state.epilogue
  );
  $("#epilogue-result").text(epilogueObject.text);
  state.backgroundAudio.pause();
}

function restart() {
  state.gameStage = DIALOGUE;
  showGameStage();
  showDialogue(1);
}

