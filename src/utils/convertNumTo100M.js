export default function convertNumTo100M(num) {
  const newNum = Math.round((num / 100000000) * 10) / 10;
  return newNum;
}