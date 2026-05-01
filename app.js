const STORAGE_KEY = "harvest-table-planner-v1";
const MEAL_SLOTS = ["Breakfast", "Lunch", "Dinner", "Snack"];
const CUP_CONVERSIONS = {
  "All-purpose flour": 120,
  "Whole wheat flour": 128,
  "Granulated sugar": 200,
  "Brown sugar": 220,
  "Powdered sugar": 120,
  "Butter": 227,
  "Olive oil": 216,
  "Milk": 245,
  "Yogurt": 245,
  "Oats": 90,
  "Rice (uncooked)": 185,
  "Chickpeas (cooked)": 165,
  "Lentils (cooked)": 200,
  "Peanut butter": 258,
  "Cocoa powder": 100,
  "Almonds": 143
};
const VOLUME_RATIOS = {
  cup: 1,
  tbsp: 1 / 16,
  tsp: 1 / 48
};
const MONTH_NAMES_FR = [
  "Janvier",
  "Fevrier",
  "Mars",
  "Avril",
  "Mai",
  "Juin",
  "Juillet",
  "Aout",
  "Septembre",
  "Octobre",
  "Novembre",
  "Decembre"
];
const SEASONALITY_ITEMS = [
  { name: "Abricot", category: "fruit", months: [6, 7], note: "production belge limitee" },
  { name: "Cassis", category: "fruit", months: [6, 7], note: "" },
  { name: "Cerise", category: "fruit", months: [6, 7], note: "" },
  { name: "Coing", category: "fruit", months: [9, 10], note: "" },
  { name: "Fraise", category: "fruit", months: [5, 6, 7, 8, 9], note: "pleine saison surtout mai-juin" },
  { name: "Framboise", category: "fruit", months: [6, 7, 8, 9], note: "" },
  { name: "Groseille", category: "fruit", months: [6, 7], note: "" },
  { name: "Melon", category: "fruit", months: [7, 8, 9], note: "production belge limitee" },
  { name: "Mirabelle", category: "fruit", months: [8, 9], note: "" },
  { name: "Mure", category: "fruit", months: [8, 9], note: "" },
  { name: "Myrtille", category: "fruit", months: [7, 8], note: "" },
  { name: "Noisette", category: "fruit", months: [8, 9, 10], note: "puis stockage possible" },
  { name: "Noix", category: "fruit", months: [9, 10], note: "puis stockage possible" },
  { name: "Poire", category: "fruit", months: [8, 9, 10], note: "puis stockage en automne-hiver" },
  { name: "Pomme", category: "fruit", months: [8, 9, 10], note: "puis stockage en automne-hiver-printemps" },
  { name: "Prune", category: "fruit", months: [8, 9], note: "" },
  { name: "Raisin", category: "fruit", months: [9, 10], note: "production belge limitee" },
  { name: "Rhubarbe", category: "fruit", months: [4, 5, 6, 7, 8], note: "souvent meilleure au printemps" },
  { name: "Ail", category: "vegetable", months: [7, 8, 9, 10], note: "puis stockage" },
  { name: "Artichaut", category: "vegetable", months: [6, 7, 8, 9], note: "" },
  { name: "Asperge", category: "vegetable", months: [4, 5, 6], note: "" },
  { name: "Aubergine", category: "vegetable", months: [7, 8, 9, 10], note: "" },
  { name: "Bette", category: "vegetable", months: [4, 5, 6, 7, 8, 9, 10], note: "" },
  { name: "Betterave rouge", category: "vegetable", months: [7, 8, 9, 10], note: "puis stockage" },
  { name: "Brocoli", category: "vegetable", months: [6, 7, 8, 9, 10], note: "" },
  { name: "Butternut", category: "vegetable", months: [9, 10], note: "puis stockage" },
  { name: "Carotte", category: "vegetable", months: [6, 7, 8, 9, 10], note: "puis stockage" },
  { name: "Celeri branche", category: "vegetable", months: [6, 7, 8, 9, 10], note: "" },
  { name: "Celeri-rave", category: "vegetable", months: [9, 10, 11], note: "puis stockage" },
  { name: "Cerfeuil", category: "vegetable", months: [3, 4, 5, 6, 7, 8, 9, 10], note: "" },
  { name: "Chicon", category: "vegetable", months: [10, 11, 12, 1, 2, 3], note: "culture specifique belge" },
  { name: "Chicoree frisee / scarole", category: "vegetable", months: [7, 8, 9, 10], note: "" },
  { name: "Chicoree pain de sucre", category: "vegetable", months: [9, 10, 11], note: "" },
  { name: "Chou blanc", category: "vegetable", months: [6, 7, 8, 9, 10, 11], note: "puis stockage" },
  { name: "Chou de Bruxelles", category: "vegetable", months: [9, 10, 11, 12, 1, 2], note: "" },
  { name: "Chou chinois", category: "vegetable", months: [5, 6, 7, 8, 9, 10], note: "" },
  { name: "Chou-fleur", category: "vegetable", months: [5, 6, 7, 8, 9, 10], note: "" },
  { name: "Chou frise / kale", category: "vegetable", months: [9, 10, 11, 12, 1, 2, 3], note: "" },
  { name: "Chou-rave", category: "vegetable", months: [6, 7, 8, 9, 10], note: "" },
  { name: "Chou rouge", category: "vegetable", months: [6, 7, 8, 9, 10, 11], note: "puis stockage" },
  { name: "Chou vert / Milan", category: "vegetable", months: [9, 10, 11, 12, 1, 2, 3], note: "" },
  { name: "Concombre", category: "vegetable", months: [6, 7, 8, 9], note: "" },
  { name: "Courgette", category: "vegetable", months: [6, 7, 8, 9, 10], note: "" },
  { name: "Cresson", category: "vegetable", months: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12], note: "depend du site de culture" },
  { name: "Echalote", category: "vegetable", months: [7, 8, 9, 10], note: "puis stockage" },
  { name: "Epinard", category: "vegetable", months: [3, 4, 5, 9, 10, 11], note: "" },
  { name: "Fenouil", category: "vegetable", months: [7, 8, 9, 10], note: "" },
  { name: "Haricot vert", category: "vegetable", months: [7, 8, 9], note: "" },
  { name: "Laitue", category: "vegetable", months: [4, 5, 6, 7, 8, 9, 10], note: "" },
  { name: "Mache", category: "vegetable", months: [9, 10, 11, 12, 1, 2, 3], note: "" },
  { name: "Mais doux", category: "vegetable", months: [8, 9], note: "" },
  { name: "Navet", category: "vegetable", months: [3, 4, 5, 9, 10, 11, 12, 1, 2, 3], note: "automne-hiver surtout" },
  { name: "Oignon", category: "vegetable", months: [7, 8, 9, 10], note: "puis stockage" },
  { name: "Panais", category: "vegetable", months: [9, 10, 11, 12, 1, 2, 3], note: "" },
  { name: "Patisson", category: "vegetable", months: [8, 9, 10], note: "" },
  { name: "Petit pois", category: "vegetable", months: [5, 6, 7], note: "" },
  { name: "Poireau", category: "vegetable", months: [9, 10, 11, 12, 1, 2, 3, 4], note: "" },
  { name: "Poivron", category: "vegetable", months: [7, 8, 9, 10], note: "" },
  { name: "Pomme de terre", category: "vegetable", months: [7, 8, 9, 10], note: "puis stockage jusqu'au printemps" },
  { name: "Potimarron", category: "vegetable", months: [9, 10, 11], note: "puis stockage" },
  { name: "Potiron", category: "vegetable", months: [9, 10, 11], note: "puis stockage" },
  { name: "Radicchio", category: "vegetable", months: [9, 10, 11, 12, 1, 2], note: "" },
  { name: "Radis rose", category: "vegetable", months: [3, 4, 5, 6, 7, 8, 9, 10], note: "" },
  { name: "Radis noir", category: "vegetable", months: [9, 10, 11, 12, 1, 2, 3], note: "" },
  { name: "Roquette", category: "vegetable", months: [4, 5, 6, 7, 8, 9, 10], note: "" },
  { name: "Rutabaga", category: "vegetable", months: [10, 11, 12, 1, 2, 3], note: "" },
  { name: "Tomate", category: "vegetable", months: [7, 8, 9, 10], note: "" },
  { name: "Topinambour", category: "vegetable", months: [10, 11, 12, 1, 2, 3], note: "" },
  { name: "Agrumes", category: "exotic", months: [11, 12, 1, 2, 3, 4], note: "sans serre surtout bassin mediterraneen, pas chez nous" },
  { name: "Avocat", category: "exotic", months: [10, 11, 12, 1, 2, 3, 4, 5], note: "selon pays, pas chez nous" },
  { name: "Banane", category: "exotic", months: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12], note: "tropical, pas chez nous" },
  { name: "Citron", category: "exotic", months: [11, 12, 1, 2, 3, 4], note: "selon variete, pas chez nous" },
  { name: "Figue", category: "exotic", months: [5, 6, 8, 9, 10], note: "surtout climat doux, tres marginal chez nous" },
  { name: "Grenade", category: "exotic", months: [9, 10, 11], note: "climat mediterraneen, pas chez nous" },
  { name: "Kaki", category: "exotic", months: [10, 11, 12], note: "climat plus doux, pas chez nous" },
  { name: "Mangue", category: "exotic", months: [6, 7, 8, 9], note: "selon pays et hemisphere, pas chez nous" },
  { name: "Papaye", category: "exotic", months: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12], note: "tropical, pas chez nous" },
  { name: "Pineapple / Ananas", category: "exotic", months: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12], note: "tropical, pas chez nous" }
];

const defaultState = {
  seasonalityItems: [],
  stores: [
    { id: "store-main", name: "Big supermarket" },
    { id: "store-organic", name: "Organic supermarket" }
  ],
  filterGroups: [
    {
      id: "group-type",
      name: "Recipe Type",
      options: [
        { id: "type-breakfast", label: "Breakfast" },
        { id: "type-lunch", label: "Lunch" },
        { id: "type-dinner", label: "Dinner" },
        { id: "type-snack", label: "Snack" },
        { id: "type-side", label: "Side" }
      ]
    },
    {
      id: "group-season",
      name: "Season",
      options: [
        { id: "season-spring", label: "Spring" },
        { id: "season-summer", label: "Summer" },
        { id: "season-autumn", label: "Autumn" },
        { id: "season-winter", label: "Winter" }
      ]
    },
    {
      id: "group-effort",
      name: "Effort",
      options: [
        { id: "effort-easy", label: "Very easy" },
        { id: "effort-normal", label: "Normal" },
        { id: "effort-weekend", label: "Weekend project" }
      ]
    }
  ],
  aisles: [
    { id: "aisle-produce", name: "Produce", storeId: "store-main" },
    { id: "aisle-bakery", name: "Bakery", storeId: "store-main" },
    { id: "aisle-dairy", name: "Dairy", storeId: "store-main" },
    { id: "aisle-canned", name: "Canned & Jarred", storeId: "store-main" },
    { id: "aisle-grains", name: "Pasta, Rice & Grains", storeId: "store-main" },
    { id: "aisle-condiments", name: "Oils, Vinegars & Condiments", storeId: "store-main" },
    { id: "aisle-freezer", name: "Frozen", storeId: "store-main" },
    { id: "aisle-other", name: "Other", storeId: "store-main" }
  ],
  recipes: [
    {
      id: "recipe-houmous-toast",
      title: "Houmous Toast Plate",
      notes: "A simple no-cook lunch with toppings and crunch.",
      prepMinutes: 10,
      cookMinutes: 0,
      baseServings: 2,
      taxonomy: {
        "group-type": ["type-lunch", "type-snack"],
        "group-season": ["season-summer"],
        "group-effort": ["effort-easy"]
      },
      ingredients: [
        { id: "ing-1", name: "Bread", quantity: 4, unit: "slices", aisleId: "aisle-bakery" },
        { id: "ing-2", name: "Houmous", quantity: 200, unit: "g", aisleId: "aisle-canned" },
        { id: "ing-3", name: "Cucumber", quantity: 1, unit: "", aisleId: "aisle-produce" },
        { id: "ing-4", name: "Cherry tomatoes", quantity: 200, unit: "g", aisleId: "aisle-produce" }
      ]
    },
    {
      id: "recipe-tomato-pasta",
      title: "Roasted Tomato Pasta",
      notes: "Comforting dinner that scales very easily for leftovers.",
      prepMinutes: 15,
      cookMinutes: 30,
      baseServings: 4,
      taxonomy: {
        "group-type": ["type-dinner"],
        "group-season": ["season-summer", "season-autumn"],
        "group-effort": ["effort-normal"]
      },
      ingredients: [
        { id: "ing-5", name: "Pasta", quantity: 400, unit: "g", aisleId: "aisle-grains" },
        { id: "ing-6", name: "Tomatoes", quantity: 700, unit: "g", aisleId: "aisle-produce" },
        { id: "ing-7", name: "Feta", quantity: 180, unit: "g", aisleId: "aisle-dairy" },
        { id: "ing-8", name: "Olive oil", quantity: 3, unit: "tbsp", aisleId: "aisle-condiments" }
      ]
    }
  ],
  planItems: [],
  manualItems: [],
  groceryChecks: {}
};

const ui = {
  activeTab: "dashboard",
  editingRecipeId: null,
  recipeFilters: {
    query: "",
    maxMinutes: "",
    taxonomy: {}
  },
  plannerStart: getStartOfWeek(new Date()),
  editingPlanItemId: null,
  groceryStoreFilter: "all",
  seasonalityMonth: "all",
  seasonalityQuery: ""
};

let state = loadState();

const elements = {
  tabs: Array.from(document.querySelectorAll(".tab-link")),
  panels: Array.from(document.querySelectorAll(".tab-panel")),
  summaryCards: document.getElementById("summaryCards"),
  upcomingMeals: document.getElementById("upcomingMeals"),
  recipeFilterForm: document.getElementById("recipeFilterForm"),
  recipeFilterGroups: document.getElementById("recipeFilterGroups"),
  clearRecipeFiltersBtn: document.getElementById("clearRecipeFiltersBtn"),
  recipeList: document.getElementById("recipeList"),
  recipeCount: document.getElementById("recipeCount"),
  recipeForm: document.getElementById("recipeForm"),
  recipeTaxonomyFields: document.getElementById("recipeTaxonomyFields"),
  ingredientRows: document.getElementById("ingredientRows"),
  addIngredientBtn: document.getElementById("addIngredientBtn"),
  newRecipeBtn: document.getElementById("newRecipeBtn"),
  duplicateRecipeBtn: document.getElementById("duplicateRecipeBtn"),
  deleteRecipeBtn: document.getElementById("deleteRecipeBtn"),
  plannerRange: document.getElementById("plannerRange"),
  plannerGrid: document.getElementById("plannerGrid"),
  prevFortnightBtn: document.getElementById("prevFortnightBtn"),
  nextFortnightBtn: document.getElementById("nextFortnightBtn"),
  newPlanItemBtn: document.getElementById("newPlanItemBtn"),
  planItemForm: document.getElementById("planItemForm"),
  planRecipeFields: document.getElementById("planRecipeFields"),
  planManualFields: document.getElementById("planManualFields"),
  manualMealIngredientRows: document.getElementById("manualMealIngredientRows"),
  addManualMealIngredientBtn: document.getElementById("addManualMealIngredientBtn"),
  deletePlanItemBtn: document.getElementById("deletePlanItemBtn"),
  groceryBoard: document.getElementById("groceryBoard"),
  manualItemForm: document.getElementById("manualItemForm"),
  manualItemList: document.getElementById("manualItemList"),
  groceryStoreFilter: document.getElementById("groceryStoreFilter"),
  seasonalityMonth: document.getElementById("seasonalityMonth"),
  seasonalitySearch: document.getElementById("seasonalitySearch"),
  seasonalityForm: document.getElementById("seasonalityForm"),
  seasonalityMonthCheckboxes: document.getElementById("seasonalityMonthCheckboxes"),
  seasonalityFruitCount: document.getElementById("seasonalityFruitCount"),
  seasonalityVegetableCount: document.getElementById("seasonalityVegetableCount"),
  seasonalityExoticCount: document.getElementById("seasonalityExoticCount"),
  seasonalityFruitList: document.getElementById("seasonalityFruitList"),
  seasonalityVegetableList: document.getElementById("seasonalityVegetableList"),
  seasonalityExoticList: document.getElementById("seasonalityExoticList"),
  seasonalityCustomCount: document.getElementById("seasonalityCustomCount"),
  seasonalityCustomList: document.getElementById("seasonalityCustomList"),
  storeForm: document.getElementById("storeForm"),
  storeManager: document.getElementById("storeManager"),
  groupForm: document.getElementById("groupForm"),
  filterGroupManager: document.getElementById("filterGroupManager"),
  aisleForm: document.getElementById("aisleForm"),
  aisleManager: document.getElementById("aisleManager"),
  exportDataBtn: document.getElementById("exportDataBtn"),
  importDataInput: document.getElementById("importDataInput"),
  ingredientRowTemplate: document.getElementById("ingredientRowTemplate"),
  ingredientSuggestions: document.getElementById("ingredientSuggestions"),
  converterForm: document.getElementById("converterForm"),
  converterResult: document.getElementById("converterResult")
};

wireEvents();
bootstrap();

function bootstrap() {
  if (!ui.editingRecipeId && state.recipes[0]) {
    ui.editingRecipeId = state.recipes[0].id;
  }

  renderPlanRecipeOptions();
  syncRecipeForm();
  syncPlanItemForm();
  render();
}

function wireEvents() {
  elements.tabs.forEach((button) => {
    button.addEventListener("click", () => {
      ui.activeTab = button.dataset.tab;
      renderTabs();
    });
  });

  elements.recipeFilterForm.addEventListener("input", handleRecipeFilterInput);
  elements.clearRecipeFiltersBtn.addEventListener("click", () => {
    ui.recipeFilters = { query: "", maxMinutes: "", taxonomy: {} };
    elements.recipeFilterForm.reset();
    renderRecipes();
  });

  elements.newRecipeBtn.addEventListener("click", () => {
    ui.editingRecipeId = null;
    syncRecipeForm();
  });

  elements.addIngredientBtn.addEventListener("click", () => {
    appendIngredientRow(elements.ingredientRows);
  });

  elements.recipeForm.addEventListener("submit", handleRecipeSave);
  elements.duplicateRecipeBtn.addEventListener("click", duplicateRecipe);
  elements.deleteRecipeBtn.addEventListener("click", deleteRecipe);

  elements.prevFortnightBtn.addEventListener("click", () => {
    ui.plannerStart = addDays(ui.plannerStart, -14);
    renderPlanner();
  });

  elements.nextFortnightBtn.addEventListener("click", () => {
    ui.plannerStart = addDays(ui.plannerStart, 14);
    renderPlanner();
  });

  elements.newPlanItemBtn.addEventListener("click", () => {
    ui.editingPlanItemId = null;
    syncPlanItemForm();
    ui.activeTab = "planner";
    renderTabs();
  });

  getField(elements.planItemForm, "kind").addEventListener("change", syncPlanKindVisibility);
  elements.addManualMealIngredientBtn.addEventListener("click", () => {
    appendIngredientRow(elements.manualMealIngredientRows);
  });
  elements.planItemForm.addEventListener("submit", handlePlanItemSave);
  elements.deletePlanItemBtn.addEventListener("click", deletePlanItem);

  elements.manualItemForm.addEventListener("submit", handleManualItemSave);
  elements.groceryStoreFilter.addEventListener("change", handleGroceryStoreFilterChange);
  elements.seasonalityMonth.addEventListener("change", handleSeasonalityControls);
  elements.seasonalitySearch.addEventListener("input", handleSeasonalityControls);
  elements.seasonalityForm.addEventListener("submit", handleSeasonalityItemSave);
  elements.storeForm.addEventListener("submit", handleAddStore);
  elements.groupForm.addEventListener("submit", handleAddGroup);
  elements.aisleForm.addEventListener("submit", handleAddAisle);
  elements.exportDataBtn.addEventListener("click", exportData);
  elements.importDataInput.addEventListener("change", importData);
  elements.converterForm.addEventListener("input", renderConverterResult);

  elements.storeManager.addEventListener("click", handleStoreManagerClick);
  elements.filterGroupManager.addEventListener("click", handleGroupManagerClick);
  elements.aisleManager.addEventListener("click", handleAisleManagerClick);
  elements.seasonalityCustomList.addEventListener("click", handleSeasonalityCustomListClick);
  elements.recipeList.addEventListener("click", handleRecipeListClick);
  elements.plannerGrid.addEventListener("click", handlePlannerGridClick);
  elements.groceryBoard.addEventListener("change", handleGroceryCheckToggle);
  elements.manualItemList.addEventListener("click", handleManualItemListClick);
  elements.ingredientRows.addEventListener("click", handleIngredientRowRemoval);
  elements.manualMealIngredientRows.addEventListener("click", handleIngredientRowRemoval);
  elements.ingredientRows.addEventListener("input", handleIngredientMemoryInput);
  elements.manualMealIngredientRows.addEventListener("input", handleIngredientMemoryInput);
  elements.manualItemForm.addEventListener("input", handleManualItemMemoryInput);
}

function loadState() {
  const saved = localStorage.getItem(STORAGE_KEY);
  if (!saved) {
    return structuredClone(defaultState);
  }

  try {
    const parsed = JSON.parse(saved);
    return mergeWithDefaults(parsed);
  } catch (error) {
    console.error("Could not read saved state:", error);
    return structuredClone(defaultState);
  }
}

function mergeWithDefaults(parsed) {
  const stores = Array.isArray(parsed.stores) && parsed.stores.length ? parsed.stores : structuredClone(defaultState.stores);
  const fallbackStoreId = stores[0]?.id || defaultState.stores[0].id;
  const aisles = Array.isArray(parsed.aisles) && parsed.aisles.length
    ? parsed.aisles.map((aisle) => ({ ...aisle, storeId: aisle.storeId || fallbackStoreId }))
    : structuredClone(defaultState.aisles);

  return {
    seasonalityItems: Array.isArray(parsed.seasonalityItems) ? parsed.seasonalityItems : [],
    stores,
    filterGroups: Array.isArray(parsed.filterGroups) && parsed.filterGroups.length ? parsed.filterGroups : structuredClone(defaultState.filterGroups),
    aisles,
    recipes: Array.isArray(parsed.recipes) ? parsed.recipes : [],
    planItems: Array.isArray(parsed.planItems) ? parsed.planItems : [],
    manualItems: Array.isArray(parsed.manualItems) ? parsed.manualItems : [],
    groceryChecks: parsed.groceryChecks && typeof parsed.groceryChecks === "object" ? parsed.groceryChecks : {}
  };
}

function saveState() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
}

function render() {
  renderTabs();
  renderDashboard();
  renderRecipes();
  renderPlanner();
  renderGrocery();
  renderSeasonality();
  renderSettings();
  renderIngredientSuggestions();
}

function renderTabs() {
  elements.tabs.forEach((button) => {
    button.classList.toggle("is-active", button.dataset.tab === ui.activeTab);
  });

  elements.panels.forEach((panel) => {
    panel.classList.toggle("is-active", panel.id === ui.activeTab);
  });
}

function renderDashboard() {
  const summary = [
    { label: "Recipes", value: state.recipes.length },
    { label: "Filter groups", value: state.filterGroups.length },
    { label: "Planned meals", value: state.planItems.length },
    { label: "Grocery aisles", value: state.aisles.length }
  ];

  elements.summaryCards.innerHTML = summary.map((item) => `
    <article class="card stat-card">
      <strong>${item.value}</strong>
      <p>${item.label}</p>
    </article>
  `).join("");

  const upcoming = [...state.planItems]
    .sort((left, right) => `${left.date}-${left.slot}`.localeCompare(`${right.date}-${right.slot}`))
    .slice(0, 6);

  if (!upcoming.length) {
    elements.upcomingMeals.innerHTML = `<div class="empty-state">No meals planned yet. Add one in the planner to start building your shopping list.</div>`;
    return;
  }

  elements.upcomingMeals.innerHTML = upcoming.map((item) => {
    const recipe = item.kind === "recipe" ? getRecipeById(item.recipeId) : null;
    const title = item.kind === "recipe" ? recipe?.title || "Missing recipe" : item.title;
    return `
      <article class="planner-item">
        <strong>${escapeHtml(title || "Untitled meal")}</strong>
        <small>${formatDateLabel(item.date)} - ${item.slot} - ${item.servings} servings</small>
      </article>
    `;
  }).join("");
}

function renderRecipes() {
  renderRecipeFilterGroups();
  renderRecipeList();
  renderRecipeTaxonomyFields();
}

function renderRecipeFilterGroups() {
  elements.recipeFilterGroups.innerHTML = state.filterGroups.map((group) => `
    <div class="stack">
      <strong>${escapeHtml(group.name)}</strong>
      <div class="option-grid">
        ${group.options.map((option) => `
          <label class="checkbox-chip">
            <input type="checkbox" name="${group.id}" value="${option.id}" ${isFilterSelected(group.id, option.id) ? "checked" : ""}>
            <span>${escapeHtml(option.label)}</span>
          </label>
        `).join("")}
      </div>
    </div>
  `).join("");
}

function renderRecipeList() {
  const recipes = getFilteredRecipes();
  elements.recipeCount.textContent = `${recipes.length} shown`;

  if (!recipes.length) {
    elements.recipeList.innerHTML = `<div class="empty-state">No recipes match these filters yet.</div>`;
    return;
  }

  elements.recipeList.innerHTML = recipes.map((recipe) => `
    <article class="recipe-card ${recipe.id === ui.editingRecipeId ? "is-active" : ""}" data-recipe-id="${recipe.id}">
      <strong class="recipe-card-title">${escapeHtml(recipe.title)}</strong>
      <div class="list-item-meta">${totalRecipeMinutes(recipe)} minutes - ${recipe.baseServings} servings</div>
      <div class="chip-row">${buildRecipeChips(recipe)}</div>
    </article>
  `).join("");
}

function renderRecipeTaxonomyFields() {
  const recipe = getRecipeById(ui.editingRecipeId);
  elements.recipeTaxonomyFields.innerHTML = state.filterGroups.map((group) => `
    <div class="stack">
      <strong>${escapeHtml(group.name)}</strong>
      <div class="option-grid">
        ${group.options.map((option) => `
          <label class="checkbox-chip">
            <input
              type="checkbox"
              name="taxonomy-${group.id}"
              value="${option.id}"
              ${recipe?.taxonomy?.[group.id]?.includes(option.id) ? "checked" : ""}
            >
            <span>${escapeHtml(option.label)}</span>
          </label>
        `).join("")}
      </div>
    </div>
  `).join("");
}

function renderPlanner() {
  renderPlannerRange();
  renderPlannerGrid();
  renderPlanRecipeOptions();
}

function renderPlannerRange() {
  const end = addDays(ui.plannerStart, 13);
  elements.plannerRange.textContent = `${formatDateLabel(toDateInputValue(ui.plannerStart))} to ${formatDateLabel(toDateInputValue(end))}`;
}

function renderPlannerGrid() {
  const days = Array.from({ length: 14 }, (_, index) => addDays(ui.plannerStart, index));
  elements.plannerGrid.innerHTML = days.map((day) => {
    const dateValue = toDateInputValue(day);
    const itemsForDay = state.planItems.filter((item) => item.date === dateValue);

    return `
      <section class="day-column">
        <div class="day-header">
          <strong>${day.toLocaleDateString(undefined, { weekday: "long" })}</strong>
          <span>${formatDateLabel(dateValue)}</span>
        </div>
        ${MEAL_SLOTS.map((slot) => {
          const items = itemsForDay.filter((item) => item.slot === slot);
          return `
            <div class="slot-column">
              <div class="slot-label">
                <span>${slot}</span>
                <button class="add-inline-btn" type="button" data-add-date="${dateValue}" data-add-slot="${slot}">Add</button>
              </div>
              ${items.length ? items.map((item) => {
                const recipe = item.kind === "recipe" ? getRecipeById(item.recipeId) : null;
                const title = item.kind === "recipe" ? recipe?.title || "Missing recipe" : item.title;
                return `
                  <button class="planner-item" type="button" data-plan-id="${item.id}">
                    <strong>${escapeHtml(title || "Untitled meal")}</strong>
                    <small>${item.kind === "recipe" ? "Recipe" : "Manual"} - ${item.servings} servings</small>
                  </button>
                `;
              }).join("") : `<div class="empty-state">Nothing planned.</div>`}
            </div>
          `;
        }).join("")}
      </section>
    `;
  }).join("");
}

function renderPlanRecipeOptions() {
  const recipeField = getField(elements.planItemForm, "recipeId");
  const currentValue = recipeField.value;
  recipeField.innerHTML = state.recipes.map((recipe) => `
    <option value="${recipe.id}">${escapeHtml(recipe.title)}</option>
  `).join("");

  if (state.recipes.some((recipe) => recipe.id === currentValue)) {
    recipeField.value = currentValue;
  }
}

function renderGrocery() {
  renderManualItemFormOptions();
  renderManualItemList();
  renderGroceryBoard();
}

function renderSeasonality() {
  renderSeasonalityMonthOptions();
  renderSeasonalityMonthCheckboxes();

  const selectedMonth = ui.seasonalityMonth;
  const query = ui.seasonalityQuery.trim().toLowerCase();
  const allItems = [...SEASONALITY_ITEMS, ...state.seasonalityItems];
  const matches = (item) =>
    (selectedMonth === "all" || item.months.includes(Number(selectedMonth))) &&
    (!query || item.name.toLowerCase().includes(query) || item.note.toLowerCase().includes(query));

  const fruits = allItems.filter((item) => item.category === "fruit" && matches(item));
  const vegetables = allItems.filter((item) => item.category === "vegetable" && matches(item));
  const exotics = allItems.filter((item) => item.category === "exotic" && matches(item));

  elements.seasonalityFruitCount.textContent = `${fruits.length} items`;
  elements.seasonalityVegetableCount.textContent = `${vegetables.length} items`;
  elements.seasonalityExoticCount.textContent = `${exotics.length} items`;
  elements.seasonalityFruitList.innerHTML = buildSeasonalityListMarkup(fruits, "No local fruits found for this month.");
  elements.seasonalityVegetableList.innerHTML = buildSeasonalityListMarkup(vegetables, "No local vegetables found for this month.");
  elements.seasonalityExoticList.innerHTML = buildSeasonalityListMarkup(exotics, "No matching exotic items for this month.");
  renderSeasonalityCustomList();
}

function renderSeasonalityMonthOptions() {
  elements.seasonalityMonth.innerHTML = `
    <option value="all" ${ui.seasonalityMonth === "all" ? "selected" : ""}>All year / all items</option>
    ${MONTH_NAMES_FR.map((month, index) => `
      <option value="${index + 1}" ${String(index + 1) === String(ui.seasonalityMonth) ? "selected" : ""}>${month}</option>
    `).join("")}
  `;
  elements.seasonalitySearch.value = ui.seasonalityQuery;
}

function renderSeasonalityMonthCheckboxes() {
  elements.seasonalityMonthCheckboxes.innerHTML = MONTH_NAMES_FR.map((month, index) => `
    <label class="checkbox-chip">
      <input type="checkbox" name="seasonalityMonths" value="${index + 1}">
      <span>${month}</span>
    </label>
  `).join("");
}

function buildSeasonalityListMarkup(items, emptyText) {
  if (!items.length) {
    return `<div class="empty-state">${escapeHtml(emptyText)}</div>`;
  }

  return items
    .sort((left, right) => left.name.localeCompare(right.name))
    .map((item) => `
      <article class="seasonality-item">
        <strong>${escapeHtml(item.name)}</strong>
        <div class="seasonality-meta">${escapeHtml(formatMonthsLabel(item.months))}</div>
        ${item.note ? `<div class="seasonality-meta">${escapeHtml(item.note)}</div>` : ""}
      </article>
    `)
    .join("");
}

function renderSeasonalityCustomList() {
  elements.seasonalityCustomCount.textContent = `${state.seasonalityItems.length} items`;

  if (!state.seasonalityItems.length) {
    elements.seasonalityCustomList.innerHTML = `<div class="empty-state">No custom produce items yet.</div>`;
    return;
  }

  elements.seasonalityCustomList.innerHTML = state.seasonalityItems
    .sort((left, right) => left.name.localeCompare(right.name))
    .map((item) => `
      <article class="seasonality-item">
        <div class="manager-header">
          <div>
            <strong>${escapeHtml(item.name)}</strong>
            <div class="seasonality-meta">${escapeHtml(item.category === "fruit" ? "Local fruit" : item.category === "vegetable" ? "Local vegetable" : "Exotic / not local here")}</div>
            <div class="seasonality-meta">${escapeHtml(formatMonthsLabel(item.months))}</div>
            ${item.note ? `<div class="seasonality-meta">${escapeHtml(item.note)}</div>` : ""}
          </div>
          <button class="mini-btn" type="button" data-remove-seasonality="${item.id}">Remove</button>
        </div>
      </article>
    `)
    .join("");
}

function renderManualItemFormOptions() {
  const aisleOptions = buildAisleOptions();
  getField(elements.manualItemForm, "aisleId").innerHTML = aisleOptions;
}

function renderIngredientSuggestions() {
  const ingredients = buildKnownIngredientIndex();
  elements.ingredientSuggestions.innerHTML = ingredients.map((item) => `
    <option
      value="${escapeHtml(item.name)}"
      data-unit="${escapeHtml(item.unit || "") }"
      data-aisle-id="${escapeHtml(item.aisleId || "") }"
    ></option>
  `).join("");
}

function renderManualItemList() {
  if (!state.manualItems.length) {
    elements.manualItemList.innerHTML = `<div class="empty-state">No extra grocery items yet.</div>`;
    return;
  }

  elements.manualItemList.innerHTML = state.manualItems.map((item) => `
    <article class="manual-item-card">
      <div class="manual-item-header">
        <div>
          <strong>${escapeHtml(item.name)}</strong>
          <div class="list-item-meta">${formatQuantity(item.quantity, item.unit)} - ${escapeHtml(getAisleDisplayName(item.aisleId))}</div>
        </div>
        <button class="mini-btn" type="button" data-remove-manual="${item.id}">Remove</button>
      </div>
    </article>
  `).join("");
}

function renderGroceryBoard() {
  const groups = buildGroceryGroups();

  if (!groups.length) {
    elements.groceryBoard.innerHTML = `<div class="empty-state">Plan some meals or add manual grocery items to build your shopping list.</div>`;
    return;
  }

  elements.groceryBoard.innerHTML = groups.map((storeGroup) => `
    <section class="store-group">
      <div class="grocery-header">
        <h3>${escapeHtml(storeGroup.name)}</h3>
        <span>${storeGroup.count} items</span>
      </div>
      <div class="stack">
        ${storeGroup.aisles.map((aisleGroup) => `
          <section class="grocery-group">
            <div class="grocery-header">
              <h3>${escapeHtml(aisleGroup.name)}</h3>
              <span>${aisleGroup.items.length} items</span>
            </div>
            <div class="grocery-lines">
              ${aisleGroup.items.map((item) => `
                <label class="grocery-check ${item.checked ? "is-checked" : ""}">
                  <input type="checkbox" data-grocery-key="${item.key}" ${item.checked ? "checked" : ""}>
                  <div>
                    <div class="grocery-name">${escapeHtml(item.name)}</div>
                    <div class="list-item-meta">${escapeHtml(item.sources.join(", "))}</div>
                  </div>
                  <div class="grocery-meta">${formatQuantity(item.quantity, item.unit)}</div>
                </label>
              `).join("")}
            </div>
          </section>
        `).join("")}
      </div>
    </section>
  `).join("");
}

function renderSettings() {
  renderStoreManager();
  renderStoreOptions();
  renderFilterGroupManager();
  renderAisleManager();
  renderConverterOptions();
  renderConverterResult();
}

function renderStoreManager() {
  elements.storeManager.innerHTML = state.stores.map((store) => `
    <article class="manager-row">
      <div class="manager-header">
        <div>
          <strong>${escapeHtml(store.name)}</strong>
        </div>
        <div class="manager-actions">
          <button class="mini-btn" type="button" data-store-action="rename" data-store-id="${store.id}">Rename</button>
          <button class="mini-btn" type="button" data-store-action="delete" data-store-id="${store.id}">Delete</button>
        </div>
      </div>
    </article>
  `).join("");
}

function renderStoreOptions() {
  const options = buildStoreOptions();
  getField(elements.aisleForm, "storeId").innerHTML = options;
  elements.groceryStoreFilter.innerHTML = `
    <option value="all">All stores</option>
    ${state.stores.map((store) => `<option value="${store.id}" ${ui.groceryStoreFilter === store.id ? "selected" : ""}>${escapeHtml(store.name)}</option>`).join("")}
  `;
}

function renderFilterGroupManager() {
  elements.filterGroupManager.innerHTML = state.filterGroups.map((group) => `
    <article class="manager-row">
      <div class="manager-header">
        <div>
          <strong>${escapeHtml(group.name)}</strong>
          <div class="chip-row">
            ${group.options.map((option) => `<span class="chip">${escapeHtml(option.label)}</span>`).join("")}
          </div>
        </div>
        <div class="manager-actions">
          <button class="mini-btn" type="button" data-group-action="rename" data-group-id="${group.id}">Rename</button>
          <button class="mini-btn" type="button" data-group-action="add-option" data-group-id="${group.id}">Add option</button>
          <button class="mini-btn" type="button" data-group-action="rename-option" data-group-id="${group.id}">Rename option</button>
          <button class="mini-btn" type="button" data-group-action="delete-option" data-group-id="${group.id}">Delete option</button>
          <button class="mini-btn" type="button" data-group-action="delete" data-group-id="${group.id}">Delete group</button>
        </div>
      </div>
    </article>
  `).join("");
}

function renderAisleManager() {
  elements.aisleManager.innerHTML = state.aisles.map((aisle) => `
    <article class="manager-row">
      <div class="manager-header">
        <div>
          <strong>${escapeHtml(aisle.name)}</strong>
          <div class="list-item-meta">${escapeHtml(getStoreName(aisle.storeId))}</div>
        </div>
        <div class="manager-actions">
          <button class="mini-btn" type="button" data-aisle-action="rename" data-aisle-id="${aisle.id}">Rename</button>
          <button class="mini-btn" type="button" data-aisle-action="delete" data-aisle-id="${aisle.id}">Delete</button>
        </div>
      </div>
    </article>
  `).join("");
}

function renderConverterOptions() {
  const ingredientField = getField(elements.converterForm, "ingredient");
  const currentValue = ingredientField.value;
  ingredientField.innerHTML = Object.keys(CUP_CONVERSIONS)
    .sort((left, right) => left.localeCompare(right))
    .map((name) => `<option value="${escapeHtml(name)}">${escapeHtml(name)}</option>`)
    .join("");
  if (currentValue && CUP_CONVERSIONS[currentValue]) {
    ingredientField.value = currentValue;
  }
}

function renderConverterResult() {
  const ingredient = getField(elements.converterForm, "ingredient").value;
  const amount = Number(getField(elements.converterForm, "amount").value || 0);
  const unit = getField(elements.converterForm, "unit").value;
  const gramsPerCup = CUP_CONVERSIONS[ingredient];
  const ratio = VOLUME_RATIOS[unit];

  if (!ingredient || !gramsPerCup || !ratio || !amount) {
    elements.converterResult.textContent = "Choose an ingredient, amount, and unit to see an approximate conversion.";
    return;
  }

  const grams = amount * gramsPerCup * ratio;
  const rounded = Number.isInteger(grams) ? grams : Number(grams.toFixed(1));
  elements.converterResult.textContent = `${amount} ${unit}${amount > 1 ? "s" : ""} of ${ingredient} is about ${rounded} g.`;
}

function syncRecipeForm() {
  const recipe = getRecipeById(ui.editingRecipeId);
  elements.recipeForm.reset();
  elements.ingredientRows.innerHTML = "";

  if (!recipe) {
    getField(elements.recipeForm, "id").value = "";
    getField(elements.recipeForm, "baseServings").value = 2;
    appendIngredientRow(elements.ingredientRows);
    renderRecipeTaxonomyFields();
    return;
  }

  getField(elements.recipeForm, "id").value = recipe.id;
  getField(elements.recipeForm, "title").value = recipe.title;
  getField(elements.recipeForm, "notes").value = recipe.notes || "";
  getField(elements.recipeForm, "prepMinutes").value = recipe.prepMinutes ?? "";
  getField(elements.recipeForm, "cookMinutes").value = recipe.cookMinutes ?? "";
  getField(elements.recipeForm, "baseServings").value = recipe.baseServings ?? 2;

  recipe.ingredients.forEach((ingredient) => {
    appendIngredientRow(elements.ingredientRows, ingredient);
  });

  renderRecipeTaxonomyFields();
}

function syncPlanItemForm(seed = {}) {
  const item = getPlanItemById(ui.editingPlanItemId);
  elements.planItemForm.reset();
  elements.manualMealIngredientRows.innerHTML = "";

  const target = item || {
    date: seed.date || toDateInputValue(ui.plannerStart),
    slot: seed.slot || "Dinner",
    kind: state.recipes.length ? "recipe" : "manual",
    recipeId: state.recipes[0]?.id || "",
    servings: 2,
    title: "",
    ingredients: []
  };

  getField(elements.planItemForm, "id").value = target.id || "";
  getField(elements.planItemForm, "date").value = target.date;
  getField(elements.planItemForm, "slot").value = target.slot;
  getField(elements.planItemForm, "kind").value = target.kind;
  renderPlanRecipeOptions();
  getField(elements.planItemForm, "recipeId").value = target.recipeId || state.recipes[0]?.id || "";
  getField(elements.planItemForm, "servings").value = target.servings || 2;
  getField(elements.planItemForm, "manualTitle").value = target.title || "";

  if (target.kind === "manual") {
    (target.ingredients || []).forEach((ingredient) => {
      appendIngredientRow(elements.manualMealIngredientRows, ingredient);
    });
    if (!target.ingredients?.length) {
      appendIngredientRow(elements.manualMealIngredientRows);
    }
  }

  syncPlanKindVisibility();
}

function syncPlanKindVisibility() {
  const isManual = getField(elements.planItemForm, "kind").value === "manual";
  elements.planRecipeFields.classList.toggle("is-hidden", isManual);
  elements.planManualFields.classList.toggle("is-hidden", !isManual);

  if (isManual && !elements.manualMealIngredientRows.children.length) {
    appendIngredientRow(elements.manualMealIngredientRows);
  }
}

function handleRecipeFilterInput() {
  const formData = new FormData(elements.recipeFilterForm);
  const taxonomy = {};

  state.filterGroups.forEach((group) => {
    taxonomy[group.id] = formData.getAll(group.id);
  });

  ui.recipeFilters = {
    query: (formData.get("query") || "").toString().trim(),
    maxMinutes: (formData.get("maxMinutes") || "").toString().trim(),
    taxonomy
  };

  renderRecipeList();
}

function isFilterSelected(groupId, optionId) {
  return ui.recipeFilters.taxonomy[groupId]?.includes(optionId);
}

function getFilteredRecipes() {
  return state.recipes.filter((recipe) => {
    const text = `${recipe.title} ${recipe.notes || ""}`.toLowerCase();
    const query = ui.recipeFilters.query.toLowerCase();

    if (query && !text.includes(query)) {
      return false;
    }

    const maxMinutes = Number(ui.recipeFilters.maxMinutes);
    if (Number.isFinite(maxMinutes) && ui.recipeFilters.maxMinutes !== "" && totalRecipeMinutes(recipe) > maxMinutes) {
      return false;
    }

    return state.filterGroups.every((group) => {
      const selected = ui.recipeFilters.taxonomy[group.id] || [];
      if (!selected.length) {
        return true;
      }

      const recipeValues = recipe.taxonomy?.[group.id] || [];
      return selected.some((optionId) => recipeValues.includes(optionId));
    });
  });
}

function handleRecipeSave(event) {
  event.preventDefault();
  const formData = new FormData(elements.recipeForm);
  const recipeId = formData.get("id") || createId("recipe");

  const recipe = {
    id: recipeId.toString(),
    title: formData.get("title").toString().trim(),
    notes: formData.get("notes").toString().trim(),
    prepMinutes: toNullableNumber(formData.get("prepMinutes")),
    cookMinutes: toNullableNumber(formData.get("cookMinutes")),
    baseServings: Number(formData.get("baseServings")) || 1,
    taxonomy: buildTaxonomyPayload(elements.recipeForm),
    ingredients: collectIngredients(elements.ingredientRows)
  };

  const existingIndex = state.recipes.findIndex((item) => item.id === recipe.id);
  if (existingIndex >= 0) {
    state.recipes[existingIndex] = recipe;
  } else {
    state.recipes.unshift(recipe);
  }

  ui.editingRecipeId = recipe.id;
  saveAndRefresh();
}

function duplicateRecipe() {
  const recipe = getRecipeById(ui.editingRecipeId);
  if (!recipe) {
    return;
  }

  const copy = structuredClone(recipe);
  copy.id = createId("recipe");
  copy.title = `${copy.title} copy`;
  copy.ingredients = copy.ingredients.map((ingredient) => ({ ...ingredient, id: createId("ingredient") }));
  state.recipes.unshift(copy);
  ui.editingRecipeId = copy.id;
  saveAndRefresh();
}

function deleteRecipe() {
  if (!ui.editingRecipeId) {
    return;
  }

  state.recipes = state.recipes.filter((recipe) => recipe.id !== ui.editingRecipeId);
  state.planItems = state.planItems.filter((item) => item.recipeId !== ui.editingRecipeId);
  ui.editingRecipeId = state.recipes[0]?.id || null;
  saveAndRefresh();
  syncRecipeForm();
}

function buildTaxonomyPayload(form) {
  const payload = {};

  state.filterGroups.forEach((group) => {
    payload[group.id] = Array.from(form.querySelectorAll(`input[name="taxonomy-${group.id}"]:checked`))
      .map((input) => input.value);
  });

  return payload;
}

function collectIngredients(container) {
  return Array.from(container.querySelectorAll(".ingredient-row"))
    .map((row) => {
      const name = row.querySelector('[data-name="name"]').value.trim();
      return {
        id: row.dataset.rowId || createId("ingredient"),
        name,
        quantity: toNullableNumber(row.querySelector('[data-name="quantity"]').value),
        unit: row.querySelector('[data-name="unit"]').value.trim(),
        aisleId: row.querySelector('[data-name="aisleId"]').value || state.aisles[0]?.id || ""
      };
    })
    .filter((ingredient) => ingredient.name);
}

function appendIngredientRow(container, ingredient = {}) {
  const fragment = elements.ingredientRowTemplate.content.cloneNode(true);
  const row = fragment.querySelector(".ingredient-row");
  row.dataset.rowId = ingredient.id || createId("ingredient");
  row.querySelector('[data-name="name"]').value = ingredient.name || "";
  row.querySelector('[data-name="quantity"]').value = ingredient.quantity ?? "";
  row.querySelector('[data-name="unit"]').value = ingredient.unit || "";
  row.querySelector('[data-name="aisleId"]').innerHTML = buildAisleOptions(ingredient.aisleId);
  container.appendChild(fragment);
}

function handleIngredientMemoryInput(event) {
  const input = event.target;
  if (!(input instanceof HTMLInputElement) || input.dataset.name !== "name") {
    return;
  }

  const row = input.closest(".ingredient-row");
  if (!row) {
    return;
  }

  const match = findKnownIngredient(input.value);
  if (!match) {
    return;
  }

  const unitField = row.querySelector('[data-name="unit"]');
  const aisleField = row.querySelector('[data-name="aisleId"]');
  if (unitField) {
    unitField.value = match.unit || unitField.value;
  }
  if (aisleField && match.aisleId) {
    aisleField.value = match.aisleId;
  }
}

function handleManualItemMemoryInput(event) {
  const input = event.target;
  if (!(input instanceof HTMLInputElement) || input.name !== "name") {
    return;
  }

  const match = findKnownIngredient(input.value);
  if (!match) {
    return;
  }

  const unitField = getField(elements.manualItemForm, "unit");
  const aisleField = getField(elements.manualItemForm, "aisleId");
  unitField.value = match.unit || unitField.value;
  if (match.aisleId) {
    aisleField.value = match.aisleId;
  }
}

function handleIngredientRowRemoval(event) {
  const button = event.target.closest('[data-action="remove-row"]');
  if (!button) {
    return;
  }

  const row = button.closest(".ingredient-row");
  row?.remove();
}

function buildAisleOptions(selectedId = "") {
  return state.aisles.map((aisle) => `
    <option value="${aisle.id}" ${selectedId === aisle.id ? "selected" : ""}>${escapeHtml(`${getStoreName(aisle.storeId)} - ${aisle.name}`)}</option>
  `).join("");
}

function handleRecipeListClick(event) {
  const card = event.target.closest("[data-recipe-id]");
  if (!card) {
    return;
  }

  ui.editingRecipeId = card.dataset.recipeId;
  syncRecipeForm();
  renderRecipeList();
}

function handlePlannerGridClick(event) {
  const addButton = event.target.closest("[data-add-date]");
  if (addButton) {
    ui.editingPlanItemId = null;
    syncPlanItemForm({ date: addButton.dataset.addDate, slot: addButton.dataset.addSlot });
    return;
  }

  const itemButton = event.target.closest("[data-plan-id]");
  if (itemButton) {
    ui.editingPlanItemId = itemButton.dataset.planId;
    syncPlanItemForm();
  }
}

function handlePlanItemSave(event) {
  event.preventDefault();
  const formData = new FormData(elements.planItemForm);
  const kind = formData.get("kind").toString();
  const id = formData.get("id") || createId("plan");

  const item = {
    id: id.toString(),
    date: formData.get("date").toString(),
    slot: formData.get("slot").toString(),
    kind,
    recipeId: kind === "recipe" ? formData.get("recipeId").toString() : "",
    title: kind === "manual" ? formData.get("manualTitle").toString().trim() : "",
    servings: Number(formData.get("servings")) || 1,
    ingredients: kind === "manual" ? collectIngredients(elements.manualMealIngredientRows) : []
  };

  const index = state.planItems.findIndex((planItem) => planItem.id === item.id);
  if (index >= 0) {
    state.planItems[index] = item;
  } else {
    state.planItems.push(item);
  }

  ui.editingPlanItemId = item.id;
  saveAndRefresh();
}

function deletePlanItem() {
  if (!ui.editingPlanItemId) {
    return;
  }

  state.planItems = state.planItems.filter((item) => item.id !== ui.editingPlanItemId);
  ui.editingPlanItemId = null;
  saveAndRefresh();
  syncPlanItemForm();
}

function handleManualItemSave(event) {
  event.preventDefault();
  const formData = new FormData(elements.manualItemForm);
  state.manualItems.push({
    id: createId("manual"),
    name: formData.get("name").toString().trim(),
    quantity: toNullableNumber(formData.get("quantity")),
    unit: formData.get("unit").toString().trim(),
    aisleId: formData.get("aisleId").toString()
  });
  elements.manualItemForm.reset();
  renderGrocery();
  saveState();
}

function handleManualItemListClick(event) {
  const button = event.target.closest("[data-remove-manual]");
  if (!button) {
    return;
  }

  state.manualItems = state.manualItems.filter((item) => item.id !== button.dataset.removeManual);
  renderGrocery();
  saveState();
}

function buildGroceryGroups() {
  const groceryMap = new Map();

  state.planItems.forEach((item) => {
    if (item.kind === "recipe") {
      const recipe = getRecipeById(item.recipeId);
      if (!recipe) {
        return;
      }

      const multiplier = item.servings / Math.max(recipe.baseServings || 1, 1);
      recipe.ingredients.forEach((ingredient) => {
        addToGroceryMap(groceryMap, {
          ingredient,
          multiplier,
          source: recipe.title
        });
      });
      return;
    }

    item.ingredients.forEach((ingredient) => {
      addToGroceryMap(groceryMap, {
        ingredient,
        multiplier: 1,
        source: item.title || "Manual meal"
      });
    });
  });

  state.manualItems.forEach((item) => {
    addToGroceryMap(groceryMap, {
      ingredient: item,
      multiplier: 1,
      source: "Manual item"
    });
  });

  return state.stores
    .filter((store) => ui.groceryStoreFilter === "all" || ui.groceryStoreFilter === store.id)
    .map((store) => {
      const aisles = state.aisles
        .filter((aisle) => aisle.storeId === store.id)
        .map((aisle) => {
          const items = Array.from(groceryMap.values())
            .filter((item) => item.aisleId === aisle.id)
            .sort((left, right) => left.name.localeCompare(right.name));
          return {
            id: aisle.id,
            name: aisle.name,
            items
          };
        })
        .filter((group) => group.items.length);

      return {
        id: store.id,
        name: store.name,
        aisles,
        count: aisles.reduce((sum, aisle) => sum + aisle.items.length, 0)
      };
    })
    .filter((store) => store.aisles.length);
}

function buildKnownIngredientIndex() {
  const remembered = new Map();

  const remember = (ingredient) => {
    const name = ingredient?.name?.trim();
    if (!name) {
      return;
    }

    const key = name.toLowerCase();
    const existing = remembered.get(key);
    remembered.set(key, {
      name,
      unit: ingredient.unit || existing?.unit || "",
      aisleId: ingredient.aisleId || existing?.aisleId || state.aisles[0]?.id || ""
    });
  };

  state.recipes.forEach((recipe) => recipe.ingredients.forEach(remember));
  state.planItems.forEach((item) => item.ingredients?.forEach(remember));
  state.manualItems.forEach(remember);

  return Array.from(remembered.values()).sort((left, right) => left.name.localeCompare(right.name));
}

function findKnownIngredient(name) {
  const target = name.trim().toLowerCase();
  if (!target) {
    return null;
  }

  return buildKnownIngredientIndex().find((item) => item.name.toLowerCase() === target) || null;
}

function addToGroceryMap(map, { ingredient, multiplier, source }) {
  if (!ingredient?.name) {
    return;
  }

  const quantity = ingredient.quantity == null ? null : Number(ingredient.quantity) * multiplier;
  const key = [
    ingredient.aisleId || "",
    ingredient.name.trim().toLowerCase(),
    (ingredient.unit || "").trim().toLowerCase()
  ].join("|");

  const existing = map.get(key);
  if (existing) {
    existing.quantity = mergeQuantities(existing.quantity, quantity);
    if (!existing.sources.includes(source)) {
      existing.sources.push(source);
    }
    return;
  }

  map.set(key, {
    key,
    aisleId: ingredient.aisleId || state.aisles[0]?.id || "",
    name: ingredient.name.trim(),
    unit: ingredient.unit || "",
    quantity,
    sources: [source],
    checked: Boolean(state.groceryChecks[key])
  });
}

function mergeQuantities(left, right) {
  if (left == null) {
    return right;
  }
  if (right == null) {
    return left;
  }
  return Number(left) + Number(right);
}

function handleGroceryCheckToggle(event) {
  const checkbox = event.target.closest("[data-grocery-key]");
  if (!checkbox) {
    return;
  }

  state.groceryChecks[checkbox.dataset.groceryKey] = checkbox.checked;
  saveState();
  renderGroceryBoard();
}

function handleGroceryStoreFilterChange() {
  ui.groceryStoreFilter = elements.groceryStoreFilter.value;
  renderGroceryBoard();
}

function handleSeasonalityControls() {
  ui.seasonalityMonth = elements.seasonalityMonth.value;
  ui.seasonalityQuery = elements.seasonalitySearch.value;
  renderSeasonality();
}

function handleSeasonalityItemSave(event) {
  event.preventDefault();
  const formData = new FormData(elements.seasonalityForm);
  const name = formData.get("name").toString().trim();
  const category = formData.get("category").toString();
  const note = formData.get("note").toString().trim();
  const months = formData
    .getAll("seasonalityMonths")
    .map((value) => Number(value))
    .filter((value) => Number.isInteger(value) && value >= 1 && value <= 12);

  if (!name || !months.length) {
    window.alert("Please add a name and choose at least one month.");
    return;
  }

  state.seasonalityItems.push({
    id: createId("seasonality"),
    name,
    category,
    months,
    note
  });

  elements.seasonalityForm.reset();
  saveAndRefresh();
}

function handleSeasonalityCustomListClick(event) {
  const button = event.target.closest("[data-remove-seasonality]");
  if (!button) {
    return;
  }

  state.seasonalityItems = state.seasonalityItems.filter((item) => item.id !== button.dataset.removeSeasonality);
  saveAndRefresh();
}

function handleAddStore(event) {
  event.preventDefault();
  const formData = new FormData(elements.storeForm);
  const name = formData.get("name").toString().trim();

  if (!name) {
    return;
  }

  state.stores.push({
    id: createId("store"),
    name
  });

  elements.storeForm.reset();
  saveAndRefresh();
}

function handleAddGroup(event) {
  event.preventDefault();
  const formData = new FormData(elements.groupForm);
  const name = formData.get("name").toString().trim();
  const optionText = formData.get("options").toString().trim();

  if (!name) {
    return;
  }

  state.filterGroups.push({
    id: createId("group"),
    name,
    options: splitCommaList(optionText).map((label) => ({ id: createId("option"), label }))
  });

  elements.groupForm.reset();
  saveAndRefresh();
}

function handleStoreManagerClick(event) {
  const button = event.target.closest("[data-store-action]");
  if (!button) {
    return;
  }

  const store = state.stores.find((item) => item.id === button.dataset.storeId);
  if (!store) {
    return;
  }

  if (button.dataset.storeAction === "rename") {
    const next = window.prompt("Rename store:", store.name);
    if (next) {
      store.name = next.trim();
    }
  }

  if (button.dataset.storeAction === "delete" && state.stores.length > 1) {
    const fallbackId = state.stores.find((item) => item.id !== store.id)?.id;
    state.stores = state.stores.filter((item) => item.id !== store.id);
    state.aisles.forEach((aisle) => {
      if (aisle.storeId === store.id) {
        aisle.storeId = fallbackId;
      }
    });

    if (ui.groceryStoreFilter === store.id) {
      ui.groceryStoreFilter = "all";
    }
  }

  saveAndRefresh();
}

function handleAddAisle(event) {
  event.preventDefault();
  const formData = new FormData(elements.aisleForm);
  const name = formData.get("name").toString().trim();
  const storeId = formData.get("storeId").toString() || state.stores[0]?.id || "";

  if (!name) {
    return;
  }

  state.aisles.push({
    id: createId("aisle"),
    name,
    storeId
  });

  elements.aisleForm.reset();
  saveAndRefresh();
}

function handleGroupManagerClick(event) {
  const button = event.target.closest("[data-group-action]");
  if (!button) {
    return;
  }

  const group = state.filterGroups.find((item) => item.id === button.dataset.groupId);
  if (!group) {
    return;
  }

  const action = button.dataset.groupAction;

  if (action === "rename") {
    const next = window.prompt("Rename this filter group:", group.name);
    if (next) {
      group.name = next.trim();
    }
  }

  if (action === "add-option") {
    const next = window.prompt(`Add an option to "${group.name}":`);
    if (next) {
      group.options.push({ id: createId("option"), label: next.trim() });
    }
  }

  if (action === "rename-option" && group.options.length) {
    const currentLabels = group.options.map((option) => option.label).join(", ");
    const target = window.prompt(`Which option do you want to rename?\n${currentLabels}`);
    const option = group.options.find((item) => item.label.toLowerCase() === (target || "").trim().toLowerCase());
    if (option) {
      const next = window.prompt("New label:", option.label);
      if (next) {
        option.label = next.trim();
      }
    }
  }

  if (action === "delete-option" && group.options.length) {
    const currentLabels = group.options.map((option) => option.label).join(", ");
    const target = window.prompt(`Which option do you want to delete?\n${currentLabels}`);
    const option = group.options.find((item) => item.label.toLowerCase() === (target || "").trim().toLowerCase());
    if (option) {
      group.options = group.options.filter((item) => item.id !== option.id);
      state.recipes.forEach((recipe) => {
        recipe.taxonomy[group.id] = (recipe.taxonomy[group.id] || []).filter((optionId) => optionId !== option.id);
      });
    }
  }

  if (action === "delete") {
    state.filterGroups = state.filterGroups.filter((item) => item.id !== group.id);
    state.recipes.forEach((recipe) => {
      delete recipe.taxonomy[group.id];
    });
  }

  saveAndRefresh();
}

function handleAisleManagerClick(event) {
  const button = event.target.closest("[data-aisle-action]");
  if (!button) {
    return;
  }

  const aisle = state.aisles.find((item) => item.id === button.dataset.aisleId);
  if (!aisle) {
    return;
  }

  if (button.dataset.aisleAction === "rename") {
    const next = window.prompt("Rename aisle:", aisle.name);
    if (next) {
      aisle.name = next.trim();
    }
  }

  if (button.dataset.aisleAction === "delete" && state.aisles.length > 1) {
    const fallbackId = state.aisles.find((item) => item.id !== aisle.id)?.id;
    state.aisles = state.aisles.filter((item) => item.id !== aisle.id);
    migrateAisleUsage(aisle.id, fallbackId);
  }

  saveAndRefresh();
}

function migrateAisleUsage(oldId, newId) {
  state.recipes.forEach((recipe) => {
    recipe.ingredients.forEach((ingredient) => {
      if (ingredient.aisleId === oldId) {
        ingredient.aisleId = newId;
      }
    });
  });

  state.planItems.forEach((item) => {
    item.ingredients?.forEach((ingredient) => {
      if (ingredient.aisleId === oldId) {
        ingredient.aisleId = newId;
      }
    });
  });

  state.manualItems.forEach((item) => {
    if (item.aisleId === oldId) {
      item.aisleId = newId;
    }
  });
}

function exportData() {
  const blob = new Blob([JSON.stringify(state, null, 2)], { type: "application/json" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = `harvest-table-backup-${toDateInputValue(new Date())}.json`;
  link.click();
  URL.revokeObjectURL(url);
}

function importData(event) {
  const file = event.target.files?.[0];
  if (!file) {
    return;
  }

  const reader = new FileReader();
  reader.onload = () => {
    try {
      const imported = JSON.parse(String(reader.result));
      state = mergeWithDefaults(imported);
      ui.editingRecipeId = state.recipes[0]?.id || null;
      ui.editingPlanItemId = null;
      saveState();
      syncRecipeForm();
      syncPlanItemForm();
      render();
    } catch (error) {
      window.alert("The file could not be imported. Please choose a valid JSON backup.");
    }
  };
  reader.readAsText(file);
}

function saveAndRefresh() {
  saveState();
  syncRecipeForm();
  syncPlanItemForm();
  render();
}

function buildRecipeChips(recipe) {
  return state.filterGroups.flatMap((group) => {
    const values = recipe.taxonomy?.[group.id] || [];
    return values.map((optionId) => {
      const option = group.options.find((item) => item.id === optionId);
      return option ? `<span class="chip">${escapeHtml(option.label)}</span>` : "";
    });
  }).join("");
}

function splitCommaList(value) {
  return value.split(",").map((item) => item.trim()).filter(Boolean);
}

function getRecipeById(id) {
  return state.recipes.find((recipe) => recipe.id === id);
}

function getPlanItemById(id) {
  return state.planItems.find((item) => item.id === id);
}

function getStoreName(id) {
  return state.stores.find((store) => store.id === id)?.name || "Unassigned store";
}

function getAisleName(id) {
  return state.aisles.find((aisle) => aisle.id === id)?.name || "Other";
}

function getAisleDisplayName(id) {
  const aisle = state.aisles.find((item) => item.id === id);
  if (!aisle) {
    return "Other";
  }
  return `${getStoreName(aisle.storeId)} - ${aisle.name}`;
}

function buildStoreOptions(selectedId = "") {
  const fallbackId = selectedId || state.stores[0]?.id || "";
  return state.stores.map((store) => `
    <option value="${store.id}" ${store.id === fallbackId ? "selected" : ""}>${escapeHtml(store.name)}</option>
  `).join("");
}

function getField(form, name) {
  return form.elements.namedItem(name);
}

function totalRecipeMinutes(recipe) {
  return Number(recipe.prepMinutes || 0) + Number(recipe.cookMinutes || 0);
}

function formatQuantity(quantity, unit) {
  if (quantity == null || Number.isNaN(Number(quantity))) {
    return unit || "As needed";
  }

  const rounded = Number.isInteger(Number(quantity)) ? Number(quantity) : Number(quantity).toFixed(2).replace(/\.?0+$/, "");
  return `${rounded}${unit ? ` ${unit}` : ""}`;
}

function toNullableNumber(value) {
  if (value === "" || value == null) {
    return null;
  }
  const number = Number(value);
  return Number.isNaN(number) ? null : number;
}

function createId(prefix) {
  if (window.crypto?.randomUUID) {
    return `${prefix}-${window.crypto.randomUUID()}`;
  }

  return `${prefix}-${Date.now()}-${Math.random().toString(16).slice(2)}`;
}

function getStartOfWeek(date) {
  const copy = new Date(date.getFullYear(), date.getMonth(), date.getDate());
  const day = copy.getDay();
  const offset = day === 0 ? -6 : 1 - day;
  copy.setDate(copy.getDate() + offset);
  return copy;
}

function addDays(date, amount) {
  const copy = new Date(date.getFullYear(), date.getMonth(), date.getDate());
  copy.setDate(copy.getDate() + amount);
  return copy;
}

function toDateInputValue(date) {
  const year = date.getFullYear();
  const month = `${date.getMonth() + 1}`.padStart(2, "0");
  const day = `${date.getDate()}`.padStart(2, "0");
  return `${year}-${month}-${day}`;
}

function formatDateLabel(dateString) {
  const date = new Date(`${dateString}T00:00:00`);
  return date.toLocaleDateString(undefined, { month: "short", day: "numeric" });
}

function formatMonthsLabel(months) {
  const labels = months.map((monthNumber) => MONTH_NAMES_FR[monthNumber - 1]);
  return labels.join(", ");
}

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}
