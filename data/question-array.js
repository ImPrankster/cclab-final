const questionArray = [
  {
    question: "What do you do?",
    description:
      "It's 7 am in the morning of a monday, you went to bed very late last night, and you hava a class starting at 8.",
    choices: [
      {
        name: "Get up and go to the class",
        emoji: "🏫",
        num: { learning: 3, health: -2 },
      },
      {
        name: "Skip the class and stay in bed.",
        emoji: "🛌",
        num: { learning: -3, health: 2 },
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
        num: { relationship: 4, learning: -3, money: -70 },
      },
      {
        name: "Stay home",
        emoji: "📝",
        num: { relationship: -3, learning: 4 },
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
        num: { health: 4, money: -25 },
      },
      {
        name: "Hamburger",
        emoji: "🍔",
        num: { health: -4, money: -20 },
      },
      {
        name: "Dumplings",
        emoji: "🥟",
        num: { health: 3, money: -10 },
      },
    ],
  },
  {
    question: "What do you want to have?",
    description: "You want to treat yourself some snacks.",
    choices: [
      {
        name: "Have some Lays",
        emoji: "🥔",
        num: { health: -3, money: -3 },
      },
      {
        name: "Have some cupcakes",
        emoji: "🧁",
        num: { health: -2, money: -5 },
      },
      {
        name: "Have some melon bar",
        emoji: "🍈",
        num: { health: 2, money: -6 },
      },
    ],
  },
  {
    question: "What do you want to have?",
    description: "You want to have some drinks.",
    choices: [
      {
        name: "Alcohol",
        emoji: "🍺",
        num: { health: -3, money: -10 },
      },
      {
        name: "Coke",
        emoji: "🥤",
        num: { health: -1, money: -2 },
      },
      {
        name: "Tea",
        emoji: "🍵",
        num: { health: 4, money: -8 },
      },
    ],
  },
  {
    question: "Do you follow them?",
    description: "Your friends are going to the bar.",
    choices: [
      {
        name: "Yes",
        emoji: "🍸",
        num: { health: -3, relationship: 3, money: -50 },
      },
      {
        name: "No",
        emoji: "🙅",
        num: { relationship: -3 },
      },
    ],
  },
  {
    question: "Which one are you going to participate in?",
    description:
      "The school is holding some workshops for students to participate in, and they are all quite unique.",
    choices: [
      {
        name: "Speed friending",
        emoji: "🧑‍🤝‍🧑",
        num: { relationship: 5 },
      },
      {
        name: "How to sleep well",
        emoji: "🛌",
        num: { health: 5 },
      },
      {
        name: "Excel in note taking",
        emoji: "📔",
        num: { learning: 5 },
      },
    ],
  },
];
