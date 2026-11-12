// Product projects, in the order they appear on the page (both languages).
// To add one: copy a block, fill it in, save. No build step.
//
//   title    – project name
//   summary  – { en, de } one or two sentences on what it does
//   tags     – short labels (stack, platform, focus)
//   status   – optional badge, { en, de }
//   page     – the project page, hosted here at /<slug>/ (leave "" until it's published)
//   caseStudy – optional case study page URL
//   repo     – optional GitHub repository URL, only for public repos
//   image    – optional screenshot URL; hidden automatically if it fails to load
//
// Project pages are built in each (private) project repo with
// `python3 site/build.py --publish`, which copies them into the /<slug>/ folder here.

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
    caseStudy: "https://nazli-akmali.github.io/outfit-recommender/case-study/",
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
    caseStudy: "https://nazli-akmali.github.io/meal-recommender/case-study/",
    image: "https://nazli-akmali.github.io/meal-recommender/images/ranked-suggestions.png",
  },
  {
    title: "E-commerce Delivery Performance",
    summary: {
      en: "An end-to-end analysis of late deliveries across 96,203 orders from the Olist Brazilian e-commerce dataset, from SQL data validation and KPI design to an interactive Tableau dashboard. It shows when deliveries ran late, how late carrier handovers relate to them and which sellers to review first.",
      de: "Eine durchgängige Analyse verspäteter Lieferungen in 96.203 Bestellungen aus dem brasilianischen Olist-E-Commerce-Datensatz, von SQL-Datenprüfung und KPI-Definition bis zum interaktiven Tableau-Dashboard. Sie zeigt, wann Lieferungen verspätet waren, wie verspätete Übergaben an den Versanddienst damit zusammenhängen und welche Verkäufer zuerst geprüft werden sollten.",
    },
    tags: ["Data analysis", "SQL", "Tableau"],
    status: { en: "SQL + Dashboard", de: "SQL + Dashboard" },
    page: "https://nazli-akmali.github.io/ecommerce-delivery/",
    caseStudy: "https://github.com/nazli-akmali/ecommerce-delivery-analytics/blob/main/CASE_STUDY.md",
    repo: "https://github.com/nazli-akmali/ecommerce-delivery-analytics",
    image: "https://nazli-akmali.github.io/ecommerce-delivery/images/dashboard.png",
  },
];
