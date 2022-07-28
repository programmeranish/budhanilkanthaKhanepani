let news = [
  { id: 1, title: "water level decrease in main tank" },
  { id: 2, title: "water level decrease in another tank" },
];
let notices = [
  { id: 1, title: "Pay bill in time" },
  { id: 2, title: "Discount till 27 july" },
];

function getFakeNews() {
  return news;
}
function getFakeNotices() {
  return notices;
}

export { getFakeNews, getFakeNotices };
