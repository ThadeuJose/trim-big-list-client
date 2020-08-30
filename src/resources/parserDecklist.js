// formatLine - format a line to start with a number

function getTitle(item) {
  return item.substring(2, item.lastIndexOf(':')).trim();
}

function getMaxQuantity(item) {
  return item.substring(item.lastIndexOf(':') + 1).trim();
}

function parseSections(section) {
  const lines = section.split('\n');
  let categoryName = '';
  let maxQuantity = '';
  const cards = [];

  lines.forEach((item) => {
    if (item.startsWith('//')) {
      if (item.toLowerCase().includes('main')) {
        categoryName = 'Mainboard';
        maxQuantity = -1;
      } else {
        categoryName = getTitle(item);
        maxQuantity = getMaxQuantity(item);
      }
    } else {
      cards.push(item.trim());
    }
  });
  return { categoryName, object: { maxQuantity, cards } };
}

export default function parserDeckList(input) {
  const sections = input.split('\n\n');
  const merged = new Map();

  sections.forEach((item) => {
    const response = parseSections(item);
    merged.set(response.categoryName, response.object);
  });

  return merged;
}
