export type MenuItem = {
  name: string;
  price: number;
};

export type MenuSection = {
  title: string;
  items: MenuItem[];
};

export const grillFactoryMenu: MenuSection[] =
  [
    /* ---------------- Fries ---------------- */

    {
      title: "🍟 Fries",
      items: [
        { name: "Veg Fries", price: 50 },
        { name: "Peri Peri Fries", price: 80 },
        { name: "Cheesy Fries", price: 70 },
        { name: "Schezwan Fries", price: 120 },
        { name: "Tandoor Fries", price: 120 },
        {
          name: "Honey Chilly Fries",
          price: 130,
        },
        {
          name: "GF Special Fries",
          price: 130,
        },
      ],
    },

    /* ---------------- Burger ---------------- */

    {
      title: "🍔 Burger",
      items: [
        { name: "Veg Burger", price: 60 },
        {
          name: "Veg Cheese Burger",
          price: 70,
        },
        {
          name: "Paneer Cheese Burger",
          price: 70,
        },
        {
          name: "Paneer Kurkure Burger",
          price: 80,
        },
        {
          name: "Cheese Chilly Burger",
          price: 90,
        },
        {
          name: "GF Special Burger",
          price: 100,
        },
      ],
    },

    /* ---------------- Grilled Burger ---------------- */

    {
      title: "🔥 Grilled Burger",
      items: [
        {
          name: "Veg Grill Burger",
          price: 70,
        },
        {
          name: "Veg Cheese Grill Burger",
          price: 80,
        },
        {
          name:
            "Paneer Cheese Grill Burger",
          price: 90,
        },
        {
          name:
            "GF Special Grill Burger",
          price: 100,
        },
      ],
    },

    /* ---------------- Sandwich ---------------- */

    {
      title: "🥪 Sandwich",
      items: [
        { name: "Veg Sandwich", price: 40 },
        {
          name: "Veg Cheese Sandwich",
          price: 50,
        },
        { name: "Bombay Toast", price: 60 },
        {
          name: "Bombay Cheese Toast",
          price: 70,
        },
        {
          name: "Russian Sandwich",
          price: 80,
        },
      ],
    },

    /* ---------------- Grill Sandwich ---------------- */

    {
      title: "🥪 Grill Sandwich",
      items: [
        {
          name: "Only Cheese Grill",
          price: 70,
        },
        {
          name: "Bombay Club Grill",
          price: 90,
        },
        {
          name: "Bombay Cheese Grill",
          price: 110,
        },
        {
          name: "Veg Masala Grill",
          price: 110,
        },
        {
          name: "Paneer Cheese Grill",
          price: 120,
        },
        {
          name: "Mushroom Cheese Grill",
          price: 120,
        },
        {
          name:
            "Paneer Mushroom Cheese Grill",
          price: 140,
        },
      ],
    },

    /* ---------------- Pizza ---------------- */

    {
      title: "🍕 Pizza",
      items: [
        {
          name: "Only Cheese Pizza",
          price: 80,
        },
        {
          name: "Veg Cheese Pizza",
          price: 90,
        },
        {
          name: "Corn Cheese Pizza",
          price: 90,
        },
        { name: "Maggi Pizza", price: 90 },
        { name: "Fries Pizza", price: 100 },
        {
          name: "Paneer Chaska Pizza",
          price: 120,
        },
        {
          name: "Paneer Chilly Pizza",
          price: 130,
        },
        {
          name: "Mushroom Pizza",
          price: 130,
        },
        {
          name: "Mushroom Chaska Pizza",
          price: 130,
        },
        {
          name: "Paneer Mushroom Pizza",
          price: 150,
        },
        {
          name: "GF Special Pizza",
          price: 160,
        },
      ],
    },
  ];
