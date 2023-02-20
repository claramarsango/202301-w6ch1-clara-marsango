const getRandomNumber = async () => {
  const response = await fetch(
    "http://www.randomnumberapi.com/api/v1.0/random?min=10&max=50"
  );
  const number = await response.json();

  return number;
};

export default getRandomNumber;
