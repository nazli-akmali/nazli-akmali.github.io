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
      en: "Helps choose the next meal from your own recipes, using the ingredients at home, the time you have, recent meals and optional nutrition targets. A product case study, from an exploratory competitor trial to a working prototype with planning and a linked shopping list.",
      de: "Hilft bei der Wahl der nächsten Mahlzeit aus den eigenen Rezepten, passend zu den vorhandenen Zutaten, der verfügbaren Zeit, den letzten Mahlzeiten und optionalen Ernährungszielen. Eine Produkt-Fallstudie, von einem explorativen Wettbewerbstest bis zum funktionierenden Prototyp mit Planung und verknüpfter Einkaufsliste.",
    },
    tags: ["Product discovery", "JavaScript", "Local-first"],
    status: { en: "Prototype", de: "Prototyp" },
    page: "https://nazli-akmali.github.io/meal-recommender/",
    repo: "https://github.com/nazli-akmali/meal-recommender",
    image: "https://nazli-akmali.github.io/meal-recommender/images/ranked-suggestions.png",
  },
];
