const greetingWithWeather = (name, weather) => {
  let greeting = `Chào ${name}!`;
  switch (weather) {
    case "sunny":
      greeting += " Hôm nay trời nắng tuyệt vời!";
      break;
    case "rainy":
      greeting += " Hôm nay trời mưa, hãy mang theo ô!";
      break;
    default:
      greeting += " Hôm nay thời tiết không xác định.";
  }
  return greeting;
};
console.log(greetingWithWeather("Nguyễn An", "sunny"));
console.log(greetingWithWeather("Lê Nam", "rainy"));
console.log(greetingWithWeather("Trần Tâm", "cloudy"));
