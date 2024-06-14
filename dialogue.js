const MOCHA = "./characters/mocha_bear_spritesheet.png";
const MOCHA_HAPPY = [MOCHA, 0, 0];
const MOCHA_HI = [MOCHA, -300, 0];
const MOCHA_RUN = [MOCHA, 0, -300];
const MOCHA_SAD = [MOCHA, -300, -300];

const MILK_MOCHA = "./characters/milk_mocha_spritesheet.png";
const MILK_MOCHA_ANGRY= [MILK_MOCHA, 0, 0];
const MILK_MOCHA_HUG = [MILK_MOCHA, -300, 0];
const MILK_MOCHA_HUG2 = [MILK_MOCHA, 0, -300];
const MOCHA_LOVE = [MILK_MOCHA, -300, -300];

const MILK = "./characters/milk_spritesheet.png";
const MILK_WORK= [MILK, 0, 0];
const MILK_ANGRY = [MILK, -300, 0];
const MILK_RUN = [MILK, 0, -300];
const MILK_TIRED = [MILK, -300, -300];


// This is just a constant that checks if the game is over. 
const FINISH = "FINISH";

const DIALOGUE_CONTENT = [
  {
    id: 1,
    characterImg: "./heart.ico",
    options: [
      {
        text: "This is my first time. Start from the start.",
        nextText: 2,
      },
      {
        text: "Skip to the end.",
        nextText: 16
      }
    ],
  },
  
  {
    id: 2,
    text: "Hi there! I've heard so much about you from Eunice.",
    speakerName: "Mocha Bear",
    characterImg: MOCHA_HI,
    next: 3,
  },
  {
    id: 3,
    text: "First of all, I'm so happy you're here!",
    speakerName: "Mocha Bear",
    characterImg: MOCHA_HAPPY,
    next: 4,
  },
  {
    id: 4,
    text: "My name is Mocha Bear. Eunice has created this website as a template for anniversary presents. I hope you enjoy it!",
    speakerName: "Mocha Bear",
    characterImg: MOCHA_HI,
    next: 5,
  },
  {
    id: 5,
    text: "In an effort to showcase her work, this project will be used to present as a personal project for upcoming interviews.",
    speakerName: "Mocha Bear",
    characterImg: MILK_MOCHA_HUG2,
    next: 9,
  },
  // {
  //   id: 6,
  //   text: "But when Milk is busy, I get sad.",
  //   speakerName: "Mocha Bear",
  //   characterImg: MOCHA_SAD,
  //   next: 7,
  // },
  // {
  //   id: 7,
  //   text: "That is why Eunice has been coding me! She knows that she gets tired easily and doesn't spend as much time with you as you would like to, so she wants to give you a big surprise by creating me!",
  //   speakerName: "Mocha Bear",
  //   characterImg: MOCHA_LOVE,
  //   next: 8,
  // },
  // {
  //   id: 8,
  //   text: "Eunice tells me a lot about you. She always tells me how sweet you are and how well you treat her. She feels very fortunate to have you as her boyfriend and sees an amazing future with you. She really loves you and knows that you're the one she wants to spend her future with.",
  //   speakerName: "Mocha Bear",
  //   characterImg: MOCHA_LOVE,
  //   next: 9,
  // },
  {
    id: 9,
    text: "I have someone I want you to meet! But before that, make a wish and make sure to click submit when you are done.",
    speakerName: "Mocha Bear",
    characterImg: MOCHA_RUN,
    input: {
      placeholder: "make a wish!",
      type: "input",
    },
    next: 10,
  },
  {
    id: 10,
    text: "Hi there! I'm Milk! Welcome! I hope you like this website so far.",
    speakerName: "Milk",
    characterImg: MILK_RUN,
    next: 15,
  },
  // {
  //   id: 11,
  //   text: "Mocha is always so busy studying... just like you Ivan. Eunice tells me you are such a hard worker and you're always pushing yourself to juggle so many things! Remember to take more breaks Ivan.",
  //   speakerName: "Milk",
  //   characterImg: MILK_ANGRY,
  //   next: 12,
  // },
  // {
  //   id: 12,
  //   text: "But even though me and Mocha might be busy with our own work... we always make time for each other. Eunice really appreciates you when you make time for her despite your busy schedule or how tired you are. You're really amazing!!",
  //   speakerName: "Milk",
  //   characterImg: MILK_ANGRY,
  //   next: 13,
  // },
  // {
  //   id: 13,
  //   text: "Whenever I'm tired, Mocha will always cheer me up and take care of me. Eunice says you do the same for her. She tells me that you are very understanding and very sweet to her.",
  //   speakerName: "Milk",
  //   characterImg: MILK_TIRED,
  //   next: 14,
  // },
  // {
  //   id: 14,
  //   text: "But one thing Mocha doesn't know is that whenever I'm doing work, I think of the fun times I have with Mocha. It makes me motivated to get through my day so I can look forward to meet Mocha! Eunice told me she feels the same way about you and loves you so much for giving her something to look forward to at the end of the day.",
  //   speakerName: "Milk",
  //   characterImg: MILK_WORK,
  //   next: 15,
  // },
  {
    id: 15,
    text: "That's it from us. There are a few objects Eunice left behind with us that we'd like to show you. Feel free to come back to this page anytime you like.",
    speakerName: "Milk and Mocha",
    characterImg: MILK_MOCHA_HUG,
    next: 16,
  },
  {
    id: 16,
    text: "Try this playlist! You might like it.",
    speakerName: "Milk and Mocha",
    characterImg: MILK_MOCHA_HUG,
    next: 17,
  },
  {
    id: 17,
    text: "Remember I asked you to make a wish? Here's a compilation of wishes you've made since you started using this website! Don't worry, it'll stay here until you clear your history.",
    speakerName: "Milk and Mocha",
    characterImg: "./heart.ico",
    next: 18,
  },
  {
    id: 18,
    text: "These are locations of some of the most memorable dates. Feel free to zoom in and click on the icons. As my trial version has expired, it may have a popup error but just click ok!",
    speakerName: "Milk and Mocha",
    characterImg: "./heart.ico",
    next: 100,
  },
  {
    id: 100,
    characterImg: MILK_MOCHA_HUG2,
    text: "You've reached the end of the game. How are you feeling?",
    options: [
      {
        text: "I'm really happy with this present",
        nextText: 101,
        setState: { epilogue: 1 },
      },
      {
        text: "I'm really touched",
        nextText: 102,
        setState: { epilogue: 2 },
      },
    ],
  },
  {
    id: 102,
    text: "I'm sad too. Will you come back and utilise this website?",
    speakerName: "Mocha",
    characterImg: MOCHA_SAD,
    next: 103,
  },
  {
    id: 103,
    characterImg: MOCHA_SAD,
    options: [
      {
        text: "yes",
        nextText: 104,
      },
      {
        text: "no",
        nextText: 105,
      }
    ],
  },
  {
    id: 105,
    text: "I think you should appreciate Eunice more. She will be sad if you don't utilise this website anymore.",
    speakerName: "Milk",
    characterImg: MILK_ANGRY,
    next: FINISH,
  },
  {
    id: 101,
    text: "I'm happy that you're happy. You can always come back to this website whenever. Just know that Eunice loves you very much.",
    speakerName: "Milk and Mocha",
    characterImg: MILK_MOCHA_HUG,
    next: FINISH
  },
  {
    id: 104,
    text: "I'm happy that you like this present. When Eunice coded us, the goal was to make you cry. Thank you for liking this project.",
    speakerName: "Milk and Mocha",
    characterImg: MILK_MOCHA_HUG,
    next: FINISH
  }
];

const EPILOGUES = [
  {
    id: 1,
    text: "Thank you for reaching the end of this website!"  },
  {
    id: 2,
    text: "Thank you for reaching the end of this website!"  },
];