function createCard(data) {
  return data;
}

export default async function getAllCard() {
  const url = 'http://localhost:3000/card';
  const response = await fetch(url)
    .then((stream) => stream.json())
    .then((data) => createCard(data))
    .catch((error) => {
      console.error(error);
    });
  return response;
}
