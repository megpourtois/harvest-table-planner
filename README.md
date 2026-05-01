# Harvest Table Planner

A lightweight browser app for:

- storing recipes with custom filter groups
- planning meals across 14 days
- generating a grocery list from planned meals
- adding manual grocery items
- grouping groceries by supermarket aisle
- separating groceries by store
- converting common cup measurements into approximate grams

## How to use it

1. Open `index.html` in your browser.
2. Go to `Settings` first and customize your filter groups and grocery aisles.
3. Add recipes in `Recipes`.
4. Plan meals in `Planner`.
5. Check and complete your shopping list in `Grocery List`.

## Data storage

All data is saved in your browser using local storage.

Use `Settings > Export data` to back up your recipes and planning data, and `Import data` to restore it on another device.

## Best way to use it across devices

Because the app is fully static, the easiest next step is to host these files on a small static hosting service such as GitHub Pages, Netlify, or Cloudflare Pages. That way:

- your Windows computer can open it in a browser
- your Mac can open the same site
- your iPhone can use it in Safari and add it to the home screen

Important: hosting this version gives you the same app everywhere, but it does not automatically sync recipe data between devices because the data is stored in each browser's local storage.

For now, use Export and Import to move your data manually.

If you want automatic syncing between your devices, the next upgrade would be adding a shared backend such as Supabase, Firebase, or another hosted database.
