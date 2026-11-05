// Product projects, in the order they appear on the page (both languages).
// To add one: copy a block, fill it in, save. No build step.
//
//   title    – project name
//   summary  – { en, de } one or two sentences on what it does
//   tags     – short labels (stack, platform, focus)
//   status   – optional badge, { en, de }
//   page     – the project's own showcase URL (leave "" until Pages is on)
//   repo     – GitHub repository URL
//   image    – optional screenshot URL; hidden automatically if it fails to load

window.PROJECTS = [
  {
    title: "Wardrobe Assistant",
    summary: {
      en: "Pick an outfit for your day from the clothes you already own. It combines your wardrobe, your plans and the weather for the hours you're out, and suggests up to three outfits, each with the reasoning behind it.",
      de: "Ein Outfit für den Tag aus der eigenen Kleidung wählen. Die App kombiniert Garderobe, Tagesplan und das Wetter für die Stunden unterwegs und schlägt bis zu drei Outfits vor, jeweils mit Begründung.",
    },
    tags: ["Product discovery", "JavaScript", "Open-Meteo"],
    status: { en: "MVP", de: "MVP" },
    page: "https://nazli-akmali.github.io/outfit-recommender/",
    repo: "https://github.com/nazli-akmali/outfit-recommender",
    image: "https://nazli-akmali.github.io/outfit-recommender/images/explained-outfit.png",
  },
  {
    title: "Meal Planner",
    summary: {
      en: "Suggests lunch or dinner from your own recipes, based on the ingredients you have, the time you have, your nutrition targets and what you've eaten this week. Keeps an inventory and a shopping list, all in the browser.",
      de: "Schlägt Mittag- oder Abendessen aus den eigenen Rezepten vor, passend zu den vorhandenen Zutaten, der verfügbaren Zeit, den Ernährungszielen und dem, was diese Woche schon gegessen wurde. Mit Vorrats- und Einkaufsliste, alles im Browser.",
    },
    tags: ["Local-first", "JavaScript", "No backend"],
    status: { en: "MVP", de: "MVP" },
    page: "",
    repo: "https://github.com/nazli-akmali/meal-recommender",
    image: "",
  },
  {
    title: "GymT",
    summary: {
      en: "A gym tracker for iOS and Android: equipment mapped to muscles, workout plans, guided sessions with timers you can control from the lock screen, and progress reports.",
      de: "Ein Gym-Tracker für iOS und Android: Geräte nach Muskelgruppen, Trainingspläne, geführte Einheiten mit Timern, die sich vom Sperrbildschirm aus steuern lassen, und Fortschrittsberichte.",
    },
    tags: ["Flutter", "iOS", "Android"],
    status: { en: "In progress", de: "In Arbeit" },
    page: "",
    repo: "https://github.com/nazli-akmali/gymt",
    image: "",
  },
];
