const qPerk = {
  question: "Who do you wanna be?",
  description:
    "Everyone is different in a lot of ways. Instead of making you do a full personality test, please choose from these completely **accurate** stereotypes.",
  choices: [
    {
      name: "Social Butterfly",
      exec: () => {
        playerPerk = {
          relationship: 2,
          description: "🦋 Social Butterfly Perk: 2 times relationship gain.",
        };
      },
      emoji: "🦋",
    },
    {
      name: "Book Worm",
      exec: () => {
        playerPerk = {
          learning: 2,
          description: "📚 Book Worm Perk: 2 times learning gain.",
        };
      },
      emoji: "📚",
    },
    {
      name: "Gym Lover",
      exec: () => {
        playerPerk = {
          health: 2,
          description: "🏋️ Gym Lover Perk: 2 times health gain.",
        };
      },
      emoji: "🏋️",
    },
    {
      name: "Side Hustler",
      exec: () => {
        playerStat.money += 50;
        playerPerk = {
          description: "👔 Side Hustler Perk: Start with 50 more money.",
        };
      },
      emoji: "👔",
    },
  ],
};
