/** Soft full-screen tints for the sketch canvas — light enough for dark UI text. */
const COLOURS = [
  // Original set
  "#FFF0F5",
  "#F0FFF0",
  "#F0F8FF",
  "#FFFACD",
  "#E0FFFF",
  "#F5FFFA",
  "#FFF5EE",
  "#FFE4C4",
  "#FFFFE0",
  "#FFDAB9",
  "#FAFAD2",
  // Extra pastels (lavender, mint, sky, peach, etc.)
  "#F5F3FF",
  "#EEF2FF",
  "#EDE9FE",
  "#ECFDF5",
  "#F0FDFA",
  "#D1FAE5",
  "#E0F2FE",
  "#F0F9FF",
  "#FEF3C7",
  "#FFFBEB",
  "#FCE7F3",
  "#FDF2F8",
  "#FEE2E2",
  "#F3E8FF",
  "#ECFEFF",
  "#F7FEE7",
  "#FFF7ED",
  "#F8FAFC",
  "#EFF6FF",
  "#F0FDF4",
  "#FEFCE8",
  "#FAE8FF",
];

const getRandomColor = (excludeColor?: string) => {
  const coloursArray = COLOURS.filter((color) => color !== excludeColor);
  const randomColor =
    coloursArray[Math.floor(Math.random() * coloursArray.length)];
  return randomColor;
};

export default getRandomColor;
