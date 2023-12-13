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
        text: "Start",
        nextText: 2,
      },
      {
        text: "Skip to end - features by eunice",
        nextText: 9
      }
    ],
  },
  
  {
    id: 2,
    text: "Hi there! This is a narration dialogue project that Eunice chanced upon from ifthencreate. I hope you like JJ Lin as the background music.",
    speakerName: "Mocha Bear",
    characterImg: MOCHA_HI,
    next: 3,
  },
  {
    id: 3,
    text: "It was a fun project for Eunice which she tried to customize as much as possible, using her favourite characters of Milk and Mocha Bear. There are so many different emotions that can be chosen.",
    speakerName: "Mocha Bear",
    characterImg: MOCHA_HI,
    next: 4,
  },
  {
    id: 4,
    text: "I am so happy",
    speakerName: "Mocha Bear",
    characterImg: MOCHA_HAPPY,
    next: 5,
  },
  {
    id: 5,
    text: "I'm sad",
    speakerName: "Mocha Bear",
    characterImg: MOCHA_SAD,
    next: 6,
  },
  {
    id: 6,
    text: "I'm with my girlfriend!",
    speakerName: "Milk Bear",
    characterImg: MILK_MOCHA_HUG2,
    next: 7,
  },
  {
    id: 7,
    text: "I'm the girlfriend!",
    speakerName: "Mocha Bear",
    characterImg: MILK_WORK,
    next: 8,
  },
  {
    id: 8,
    text: "There are so many things you can customise with this website.",
    speakerName: "Mocha Bear",
    characterImg: MOCHA_HI,
    next: 9,
  },
  {
    id: 9,
    text: "This is a fun feature Eunice made! Enter your wish and make sure to click submit when you are done. Your input will be displayed in the next slide in a fancy way.",
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
    text: "Here's a compilation of wishes you've made since you started using this website! Don't worry, it'll stay here until you clear your history.",
    speakerName: "Milk and Mocha",
    characterImg: "./heart.ico",
    next: 16,
  },
  {
    id: 16,
    text: "This is another cool feature. It uses a Spotify API embedded into this website. Try it out!",
    speakerName: "Milk and Mocha",
    characterImg: MILK_MOCHA_HUG,
    next: 17,
  },
  {
    id: 17,
    text: "This is a custom map of my favourite places in Singapore. Feel free to zoom in and click on the icons.",
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
        text: "I think this is really cool",
        nextText: 101,
        setState: { epilogue: 1 },
      },
      {
        text: "I can do better",
        nextText: 104,
        setState: { epilogue: 2 },
      },
    ],
  },
  {
    id: 101,
    text: "Yay! I'm happy you liked it. It's a happy ending for me.",
    speakerName: "Milk and Mocha",
    characterImg: MILK_MOCHA_HUG,
    next: FINISH
  },
  {
    id: 104,
    text: "I'm still learning, boohoo.",
    speakerName: "Milk and Mocha",
    characterImg: MOCHA_SAD,
    next: FINISH
  }
];

const EPILOGUES = [
  {
    id: 1,
    text: "Thank you for taking interest in my personal project. I wanted to improve my frontend skills so this was a fun project for me. Feel free to reach out to me whenever regarding whatever. Have a nice day! ",
  },
  {
    id: 2,
    text: "Thank you for taking interest in my personal project. I wanted to improve my frontend skills, and I definitely have more to work on. There is so much to learn and so many other features I would like to work on. Feel free to reach out to me whenever regarding whatever, constructive feedback included! Have a great day. ",
  },
];