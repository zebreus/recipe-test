import type { ComponentComposition } from "./types";

export interface CommonIngredient {
  name: string;
  category: string;
  density_g_ml: number;
  composition: ComponentComposition;
  costPerKg: number;
}

export const COMMON_INGREDIENTS: CommonIngredient[] = [
  {
    name: "Water",
    category: "Water",
    density_g_ml: 1.0,
    composition: { water_pct: 100, fat_pct: 0, protein_pct: 0, sugar_pct: 0, starch_pct: 0, salt_pct: 0, hydrocolloid_pct: 0, other_pct: 0 },
    costPerKg: 0,
  },
  {
    name: "Flour (All-Purpose)",
    category: "Grain",
    density_g_ml: 0.59,
    composition: { water_pct: 11.9, fat_pct: 1.2, protein_pct: 10.3, sugar_pct: 0.3, starch_pct: 71.4, salt_pct: 0, hydrocolloid_pct: 0, other_pct: 4.9 },
    costPerKg: 1.5,
  },
  {
    name: "Butter",
    category: "Fat & Oil",
    density_g_ml: 0.91,
    composition: { water_pct: 17.9, fat_pct: 81.1, protein_pct: 0.9, sugar_pct: 0.1, starch_pct: 0, salt_pct: 0, hydrocolloid_pct: 0, other_pct: 0 },
    costPerKg: 8.0,
  },
  {
    name: "Eggs (Whole)",
    category: "Protein",
    density_g_ml: 1.03,
    composition: { water_pct: 76.1, fat_pct: 9.5, protein_pct: 12.6, sugar_pct: 0.7, starch_pct: 0, salt_pct: 0.4, hydrocolloid_pct: 0, other_pct: 0.7 },
    costPerKg: 4.0,
  },
  {
    name: "Olive Oil",
    category: "Fat & Oil",
    density_g_ml: 0.92,
    composition: { water_pct: 0, fat_pct: 100, protein_pct: 0, sugar_pct: 0, starch_pct: 0, salt_pct: 0, hydrocolloid_pct: 0, other_pct: 0 },
    costPerKg: 10.0,
  },
  {
    name: "Whole Milk",
    category: "Dairy",
    density_g_ml: 1.03,
    composition: { water_pct: 87.7, fat_pct: 3.3, protein_pct: 3.2, sugar_pct: 5.1, starch_pct: 0, salt_pct: 0.1, hydrocolloid_pct: 0, other_pct: 0.6 },
    costPerKg: 1.2,
  },
  {
    name: "Granulated Sugar",
    category: "Sugar & Sweetener",
    density_g_ml: 0.85,
    composition: { water_pct: 0.1, fat_pct: 0, protein_pct: 0, sugar_pct: 99.9, starch_pct: 0, salt_pct: 0, hydrocolloid_pct: 0, other_pct: 0 },
    costPerKg: 1.0,
  },
  {
    name: "Salt",
    category: "Salt",
    density_g_ml: 1.2,
    composition: { water_pct: 0.2, fat_pct: 0, protein_pct: 0, sugar_pct: 0, starch_pct: 0, salt_pct: 99.8, hydrocolloid_pct: 0, other_pct: 0 },
    costPerKg: 0.5,
  },
  {
    name: "Cocoa Powder",
    category: "Flavor",
    density_g_ml: 0.64,
    composition: { water_pct: 3, fat_pct: 13.7, protein_pct: 19.6, sugar_pct: 1.8, starch_pct: 11, salt_pct: 0.1, hydrocolloid_pct: 0, other_pct: 50.8 },
    costPerKg: 12.0,
  },
  {
    name: "Cream Cheese",
    category: "Dairy",
    density_g_ml: 1.05,
    composition: { water_pct: 54.4, fat_pct: 34.4, protein_pct: 5.9, sugar_pct: 3.2, starch_pct: 0, salt_pct: 0.6, hydrocolloid_pct: 0, other_pct: 1.5 },
    costPerKg: 9.0,
  },
  {
    name: "Honey",
    category: "Sugar & Sweetener",
    density_g_ml: 1.42,
    composition: { water_pct: 17.1, fat_pct: 0, protein_pct: 0.3, sugar_pct: 82.1, starch_pct: 0, salt_pct: 0, hydrocolloid_pct: 0, other_pct: 0.5 },
    costPerKg: 15.0,
  },
  {
    name: "Cornstarch",
    category: "Starch",
    density_g_ml: 0.56,
    composition: { water_pct: 8.3, fat_pct: 0.1, protein_pct: 0.3, sugar_pct: 0, starch_pct: 91, salt_pct: 0, hydrocolloid_pct: 0, other_pct: 0.3 },
    costPerKg: 3.0,
  },
  {
    name: "Baking Powder",
    category: "Other",
    density_g_ml: 0.9,
    composition: { water_pct: 5, fat_pct: 0, protein_pct: 0, sugar_pct: 0, starch_pct: 28, salt_pct: 26, hydrocolloid_pct: 0, other_pct: 41 },
    costPerKg: 6.0,
  },
  {
    name: "Garlic",
    category: "Flavor",
    density_g_ml: 1.05,
    composition: { water_pct: 58.6, fat_pct: 0.5, protein_pct: 6.4, sugar_pct: 1, starch_pct: 28.2, salt_pct: 0.1, hydrocolloid_pct: 0, other_pct: 5.2 },
    costPerKg: 8.0,
  },
  {
    name: "Onion",
    category: "Flavor",
    density_g_ml: 0.96,
    composition: { water_pct: 89.1, fat_pct: 0.1, protein_pct: 1.1, sugar_pct: 4.2, starch_pct: 0, salt_pct: 0, hydrocolloid_pct: 0, other_pct: 5.5 },
    costPerKg: 2.0,
  },
];

/** Returns true if `ing` exactly matches a COMMON_INGREDIENTS entry (unmodified quick-add). */
export function isUnmodifiedCommonIngredient(ing: {
  name: string;
  category: string;
  density_g_ml: number;
  composition: ComponentComposition;
  costPerKg: number;
}): boolean {
  const match = COMMON_INGREDIENTS.find(
    (c) => c.name.toLowerCase() === ing.name.toLowerCase()
  );
  if (!match) return false;
  if (match.category !== ing.category) return false;
  if (match.density_g_ml !== ing.density_g_ml) return false;
  if (match.costPerKg !== ing.costPerKg) return false;
  const keys = Object.keys(match.composition) as (keyof ComponentComposition)[];
  for (const key of keys) {
    if (match.composition[key] !== ing.composition[key]) return false;
  }
  return true;
}
