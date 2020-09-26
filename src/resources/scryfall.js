// Use await sleep(ms); to use
function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

function createCard(data, cardname) {
  if (data.object === 'card') {
    return {
      object: data.object,
      name: data.name,
      url: data.image_uris.normal,
      mana_cost: data.mana_cost,
      cmc: data.cmc,
      type_line: data.type_line,
      set: data.set,
      number: data.collector_number,
    };
  }
  return {
    object: data.object,
    name: cardname,
    details: data.details,
  };
}

export default async function getCard(cardname) {
  const url = 'https://api.scryfall.com/cards/named?fuzzy=';
  const response = await fetch(`${url}${cardname}`)
    .then((stream) => stream.json())
    .then((data) => createCard(data, cardname))
    .catch((error) => {
      console.error(error);
    });
  sleep(50);
  return response;
}
