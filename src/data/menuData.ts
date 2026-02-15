export type MenuItem = {
  name: string;
  price: number;
};

export type MenuSection = {
  title: string;
  items: MenuItem[];
};

export const menuData: MenuSection[] = [
  /* ---------------- Tandoor Vadapav ---------------- */

  {
    title: "🔥 Tandoor Vadapav",
    items: [
      { name: "Tandoor Vadapav", price: 35 },
      { name: "Cheese Burst Vadapav", price: 60 },
      { name: "Peri Peri Vadapav", price: 65 },
    ],
  },

  /* ---------------- Frankie ---------------- */

  {
    title: "🌯 Paneer & Soya Chaap Frankie",
    items: [
      { name: "Paneer Frankie", price: 90 },
      { name: "Paneer Mayo Frankie", price: 100 },
      { name: "Paneer Tandoor Frankie", price: 100 },
      {
        name: "Paneer Tandoor Cheese Frankie",
        price: 115,
      },
      { name: "Paneer Peri Peri Frankie", price: 100 },
      {
        name: "Peri Peri Cheese Paneer Frankie",
        price: 120,
      },
      { name: "Soya Chaap Frankie", price: 90 },
      { name: "Soya Chaap Mayo Frankie", price: 100 },
      { name: "Soya Chaap Tandoor Frankie", price: 100 },
      {
        name: "Soya Chaap Peri Peri Frankie",
        price: 100,
      },
      {
        name: "Peri Peri Cheese Soya Chaap Frankie",
        price: 120,
      },
      {
        name: "Combination Soya Chaap Frankie",
        price: 130,
      },
    ],
  },

  /* ---------------- Shawarma ---------------- */

  {
    title: "🥙 Paneer & Soya Chaap Shawarma",
    items: [
      { name: "Paneer Shawarma", price: 95 },
      { name: "Paneer Mayo Shawarma", price: 100 },
      {
        name: "Paneer Tandoor Cheese Shawarma",
        price: 115,
      },
      { name: "Paneer Peri Peri Shawarma", price: 110 },
      {
        name: "Peri Peri Cheese Paneer Shawarma",
        price: 120,
      },
      {
        name: "Soya Chaap Crispy Shawarma",
        price: 100,
      },
      { name: "Soya Chaap Mayo Shawarma", price: 110 },
      {
        name: "Soya Chaap Tandoor Shawarma",
        price: 110,
      },
      {
        name: "Soya Chaap Peri Peri Shawarma",
        price: 110,
      },
      {
        name:
          "Peri Peri Cheese Soya Chaap Shawarma",
        price: 120,
      },
      { name: "Combination Shawarma", price: 130 },
      {
        name: "Combination Soya Chaap Shawarma",
        price: 130,
      },
    ],
  },

  /* ---------------- Fries ---------------- */

  {
    title: "🍟 French Fries",
    items: [
      { name: "Salted Fries", price: 75 },
      { name: "Peri Peri Fries", price: 90 },
      { name: "Cheese Fries", price: 110 },
    ],
  },

  /* ---------------- Starters ---------------- */

  {
    title: "🍞 Starters / Crispy",
    items: [
      { name: "Crispy Bread Rolls", price: 30 },
      { name: "Paneer Tandoor Crispy", price: 100 },
      {
        name: "Paneer Tandoor Cheese Crispy",
        price: 120,
      },
      { name: "Paneer Peri Peri Crispy", price: 110 },
      {
        name: "Paneer Peri Peri Cheese Crispy",
        price: 130,
      },
      {
        name: "Tandoor Crispy Bread Roll",
        price: 100,
      },
      {
        name: "Tandoor Cheese Bread Roll",
        price: 120,
      },
      {
        name: "Peri Peri Crispy Bread Roll",
        price: 110,
      },
      {
        name:
          "Peri Peri Cheese Crispy Bread Roll",
        price: 130,
      },
      {
        name: "Combination Crunchy Bread Roll",
        price: 140,
      },
    ],
  },
];
