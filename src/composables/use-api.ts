export default function useApi() {
  async function fetchRandom() {
    const x = await fetch('https://randomuser.me/api/');
    return x;
  }
  async function fetchMale() {
    const x = await fetch('https://randomuser.me/api/?gender=male');
    return x;
  }
  async function fetchFemale() {
    const x = await fetch('https://randomuser.me/api/?gender=female');
    return x;
  }

  const random = fetchRandom();
  const allMale = fetchMale();
  const allFemale = fetchFemale();
  return {
    allMale,
    allFemale,
    fetchRandom,
    fetchMale,
    fetchFemale,
    random,
  };
}
