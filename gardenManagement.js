// Provided variables
const temperature = 90;
const timeOfDay = "morning";
let soilMoisture = 30;

// 1️⃣ Temperature check
if (temperature > 80) {
  console.log("Watering on");
} else {
  console.log("Watering off");
}

// 2️⃣ Time of day check
if (timeOfDay === "evening" || timeOfDay === "night") {
  console.log("Lights on");
} else {
  console.log("Lights off");
}

// 3️⃣ Soil moisture loop
while (soilMoisture < 40) {
  soilMoisture += 5;
  if (soilMoisture > 40) soilMoisture = 40; // ensure we don't go above 40
  console.log(soilMoisture);
}
