const questionArray = [
  {
    question: "What do you do?",
    description:
      "It's 7 am in the morning of a monday, you went to bed very late last night, and you hava a class starting at 8.",
    choices: [
      {
        name: "Get up and go to the class",
        emoji: "🏫",
        num: { learning: 9, health: -7 },
      },
      {
        name: "Skip the class and stay in bed.",
        emoji: "🛌",
        num: { learning: -7, health: 9 },
      },
    ],
  },
  {
    question:
      "Do you go out with your friends or stay home and do the homework?",
    description:
      "You have a lot of homework to do, but your friend asked you out.",
    choices: [
      {
        name: "Go out",
        emoji: "🧑‍🤝‍🧑",
        num: { relationship: 9, learning: -5, money: -100 },
      },
      {
        name: "Stay home",
        emoji: "📝",
        num: { relationship: -5, learning: 8 },
      },
    ],
  },
  {
    question: "What do you want to have?",
    description:
      "It's lunch time. Having a healthy meal is always important, but you need to think about your pocket too.",
    choices: [
      {
        name: "A bowl of ramen",
        emoji: "🍜",
        num: { health: 0, money: -10 },
      },
      {
        name: "Healthy salad",
        emoji: "🥗",
        num: { health: 9, money: -30 },
      },
      {
        name: "Hamburger",
        emoji: "🍔",
        num: { health: -9, money: -30 },
      },
      {
        name: "Dumplings",
        emoji: "🥟",
        num: { health: 5, money: -20 },
      },
    ],
  },
];
