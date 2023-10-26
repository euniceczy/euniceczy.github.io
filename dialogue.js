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
    text: "Hi there! You must be Ivan. I've heard so much about you from Eunice.",
    speakerName: "Mocha Bear",
    characterImg: MOCHA_HI,
    next: 3,
  },
  {
    id: 3,
    text: "First of all, HAPPY ANNIVERSARY!!! I'm so happy you're here!",
    speakerName: "Mocha Bear",
    characterImg: MOCHA_HAPPY,
    next: 4,
  },
  {
    id: 4,
    text: "My name is Mocha Bear, from you and Eunice's Telegram stickers! Eunice tells me you love me!!!",
    speakerName: "Mocha Bear",
    characterImg: MOCHA_HI,
    next: 5,
  },
  {
    id: 5,
    text: "I'm always with Milk, I love Milk!",
    speakerName: "Mocha Bear",
    characterImg: MILK_MOCHA_HUG2,
    next: 6,
  },
  {
    id: 6,
    text: "But when Milk is busy, I get sad.",
    speakerName: "Mocha Bear",
    characterImg: MOCHA_SAD,
    next: 7,
  },
  {
    id: 7,
    text: "That is why Eunice has been coding me! She knows that she gets tired easily and doesn't spend as much time with you as you would like to, so she wants to give you a big surprise by creating me!",
    speakerName: "Mocha Bear",
    characterImg: MOCHA_LOVE,
    next: 8,
  },
  {
    id: 8,
    text: "Eunice tells me a lot about you. She always tells me how sweet you are and how well you treat her. She feels very fortunate to have you as her boyfriend and sees an amazing future with you. She really loves you and knows that you're the one she wants to spend her future with.",
    speakerName: "Mocha Bear",
    characterImg: MOCHA_LOVE,
    next: 9,
  },
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
    text: "Hi Ivan! I'm Milk. I heard from Eunice that you both like me and Mocha a lot!  You are a really caring and amazing person, Eunice tells me that despite how tired you are, you'll always insist on driving her home. Thank you for always taking care of Eunice.",
    speakerName: "Milk",
    characterImg: MILK_RUN,
    next: 11,
  },
  {
    id: 11,
    text: "Mocha is always so busy studying... just like you Ivan. Eunice tells me you are such a hard worker and you're always pushing yourself to juggle so many things! Remember to take more breaks Ivan.",
    speakerName: "Milk",
    characterImg: MILK_ANGRY,
    next: 12,
  },
  {
    id: 12,
    text: "But even though me and Mocha might be busy with our own work... we always make time for each other. Eunice really appreciates you when you make time for her despite your busy schedule or how tired you are. You're really amazing!!",
    speakerName: "Milk",
    characterImg: MILK_ANGRY,
    next: 13,
  },
  {
    id: 13,
    text: "Whenever I'm tired, Mocha will always cheer me up and take care of me. Eunice says you do the same for her. She tells me that you are very understanding and very sweet to her.",
    speakerName: "Milk",
    characterImg: MILK_TIRED,
    next: 14,
  },
  {
    id: 14,
    text: "But one thing Mocha doesn't know is that whenever I'm doing work, I think of the fun times I have with Mocha. It makes me motivated to get through my day so I can look forward to meet Mocha! Eunice told me she feels the same way about you and loves you so much for giving her something to look forward to at the end of the day.",
    speakerName: "Milk",
    characterImg: MILK_WORK,
    next: 15,
  },
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
    text: "These are locations of some of the most memorable dates you and Eunice had. Feel free to zoom in and click on the icons.",
    speakerName: "Milk and Mocha",
    characterImg: "./heart.ico",
    next: 100,
  },
  
  // {
  //   id: 7,
  //   characterImg: CLAMPY_NORMAL,
  //   options: [
  //     {
  //       text: "I think coding is fun!",
  //       nextText: 71,
  //     },
  //     {
  //       text: "I want to learn more about web development.",
  //       nextText: 72,
  //     },
  //     {
  //       text: "I want to make games like this.",
  //       nextText: 73,
  //     },
  //   ],
  // },
  // {
  //   id: 71,
  //   text: "...fun? You think coding is fun??",
  //   speakerName: "Clampy",
  //   characterImg: CLAMPY_DOUBT,
  //   next: 711,
  // },
  // {
  //   id: 711,
  //   text: "What a nerd!",
  //   speakerName: "Clampy",
  //   characterImg: CLAMPY_HAPPY,
  //   next: 712,
  // },
  // {
  //   id: 712,
  //   text: "Just kidding, just kidding! This is a great template for people who enjoy writing their own code.",
  //   speakerName: "Clampy",
  //   characterImg: CLAMPY_NORMAL,
  //   next: 8,
  // },
  // {
  //   id: 72,
  //   text: "Oh that's great! This project uses the basic building blocks of web development; HTML, CSS, and JS.",
  //   speakerName: "Clampy",
  //   characterImg: CLAMPY_HAPPY,
  //   next: 721,
  // },
  // {
  //   id: 721,
  //   text: "So even though it's a game template, you can still learn a lot about web apps. Let me tell you a bit about how this works.",
  //   speakerName: "Clampy",
  //   characterImg: CLAMPY_NORMAL,
  //   next: 8,
  // },
  // {
  //   id: 73,
  //   text: "That's awesome! itch.io is a great place to find game jams and teammates if you're looking for inspiration.",
  //   speakerName: "Clampy",
  //   characterImg: CLAMPY_NORMAL,
  //   next: 731,
  // },
  // {
  //   id: 731,
  //   text: "Though I should probably warn you, there are engines out there like Twine and Ren'Py that would make this a lot easier...",
  //   speakerName: "Clampy",
  //   characterImg: CLAMPY_SWEAT,
  //   next: 732,
  // },
  // {
  //   id: 732,
  //   text: "But you have a lot more control when you do it youself. Let me tell you about how this works.",
  //   speakerName: "Clampy",
  //   characterImg: CLAMPY_NORMAL,
  //   next: 8,
  // },
  // {
  //   id: 8,
  //   text: "You can advance the text by using space, enter, or clicking on the little arrow.",
  //   speakerName: "Clampy",
  //   characterImg: CLAMPY_NORMAL,
  //   next: 9,
  // },
  // {
  //   id: 9,
  //   text: "If I'm talking, clicking space, enter, or just clicking on the text will speed me up. I'll talk for a bit, just so you can try it.",
  //   speakerName: "Clampy",
  //   characterImg: CLAMPY_NORMAL,
  //   next: 10,
  // },
  // {
  //   id: 10,
  //   text: "Blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah",
  //   speakerName: "Clampy",
  //   characterImg: CLAMPY_HAPPY,
  //   next: 11,
  // },
  // {
  //   id: 11,
  //   text: "Sorry, was that too much?",
  //   speakerName: "Clampy",
  //   characterImg: CLAMPY_SWEAT,
  //   next: 12,
  // },
  // {
  //   id: 12,
  //   text: "Anyway, the github repository is linked in the description, so you can clone it and make your own version!",
  //   speakerName: "Clampy",
  //   characterImg: CLAMPY_NORMAL,
  //   next: 13,
  // },
  // {
  //   id: 13,
  //   text: "You can swap out the spritesheet to add your own characters and edit the dialogue file to add your own text.",
  //   speakerName: "Clampy",
  //   characterImg: CLAMPY_NORMAL,
  //   next: 14,
  // },
  // {
  //   id: 14,
  //   text: "In a regular game, a player may make choices that ultimately lead to different endings. Since I'm not really telling a story, I'll just let you select an ending here.",
  //   speakerName: "Clampy",
  //   characterImg: CLAMPY_SWEAT,
  //   next: 15,
  // },
  {
    id: 100,
    characterImg: MILK_MOCHA_HUG2,
    text: "You've reached the end of the game. How are you feeling?",
    options: [
      {
        text: "i'm really happy with this present",
        nextText: 101,
        setState: { epilogue: 1 },
      },
      {
        text: "i'm really touched and crying",
        nextText: 102,
        setState: { epilogue: 2 },
      },
    ],
  },
  {
    id: 102,
    text: "I'm sad too. Will you come back and utilise this website whenever you miss Eunice?",
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
    text: "I'm happy that you like this present. When Eunice coded us, the goal was to make you cry. Thank you for loving Eunice so much.",
    speakerName: "Milk and Mocha",
    characterImg: MILK_MOCHA_HUG,
    next: FINISH
  }
];

const EPILOGUES = [
  {
    id: 1,
    text: "hi dear i hope you liked this present :D i've been extremely grateful for you and everything you've done for me. all your efforts to make me happy, take care of me, and pamper me like a princess made me realise how thankful i am for you, and how i want to make you happy too. i started this project a month ago because i wanted to create something meaningful and memorable we can look back on. spending an average 2h/day on this, i neglect your texts and am sometimes more tired than usual. i hope you understand why now. hehe. can't wait to spend forever with you. i love you. ",
  },
  {
    id: 2,
    text: "hi dear, thank you for being so touched that you're crying. i hope you know that that's how i feel everytime you do something sweet for me too. i'm always grateful for you and how much you shower me with love. this present is a small gesture to show you how much i love you too, i hope you know it. even though i spent a long long time to get this page up and running, i just know that you'll appreciate the customised site that you can always look back on. i love you, forever and always.",
  },
];