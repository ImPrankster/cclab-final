const qPerk = {
  question: "Who do you wanna be?",
  description:
    "Everyone is different in a lot of ways. Instead of making you do a full personality test, please choose from these completely **accurate** stereotypes.",
  choices: [
    {
      name: "Social Butterfly",
      exec: () => {
        playerPerk = { relationship: 2 };
      },
      emoji: "🦋",
    },
    {
      name: "Book Worm",
      exec: () => {
        playerPerk = { learning: 2 };
      },
      emoji: "📚",
    },
    {
      name: "Gym Lover",
      exec: () => {
        playerPerk = { health: 2 };
      },
      emoji: "🏋️",
    },
    {
      name: "Side Hustler",
      exec: () => {
        playerStat.money += 500;
      },
      emoji: "👔",
    },
  ],
};
