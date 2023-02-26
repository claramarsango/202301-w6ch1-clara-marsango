const getUuid = async (amount: number = 0) => {
  const response = await fetch(
    `https://www.randomnumberapi.com/api/v1.0/uuid?count=${amount}`
  );
  const randomNumber: number[] = await response.json();

  return randomNumber;
};

export default getUuid;
