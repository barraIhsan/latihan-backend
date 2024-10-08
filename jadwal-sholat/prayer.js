const http = require("http");
const BASE_URL = "http://api.aladhan.com/v1/timingsByCity";
const city = process.argv[2];
// if country doesnt exists, defaults to "id"
const country = process.argv[3] || "id";

function zeroFill(num) {
  return num < 10 ? "0" + num : num;
}

const date = new Date();
const today =
  zeroFill(date.getDate()) +
  "-" +
  zeroFill(date.getMonth() + 1) +
  "-" +
  zeroFill(date.getFullYear());

if (!city) {
  // show help messages if no argument was passed in
  console.log("A CLI tool to get prayer times on the current day\n");
  console.log("Usage: node prayer.js <city> [country]\n");
  console.log("<city>\t\tA city name (required)");
  console.log("[country]\tA country name or 2 character code (ISO 3166),");
  console.log("\t\tdefaults to 'id' (optional)");
  process.exit(1);
}

http
  .get(`${BASE_URL}/${today}?city=${city}&country=${country}`, (res) => {
    // if the status code is not 200
    if (res.statusCode !== 200) {
      throw new Error(`Request Failed.\nStatus Code: ${res.statusCode}`);
    }
    // set encoding to utf8
    res.setEncoding("utf8");

    let data = "";

    res.on("data", (chunk) => {
      data += chunk;
    });

    res.on("error", (err) => {
      console.error("An error occured: " + err);
      process.exit(1);
    });

    res.on("end", () => {
      let parsed;
      try {
        parsed = JSON.parse(data);
      } catch (error) {
        // if, somehow, the json failed to parse
        console.error("Failed to parse JSON: ", error);
        process.exit(1);
      }

      let prayerName = parsed.data.timings;
      console.log(
        // capitalized the first letter of the city
        `Prayer Times in ${city.charAt(0).toUpperCase() + city.slice(1)} (${country}), on ${parsed.data.date.readable}`,
      );

      console.log(`Using method: ${parsed.data.meta.method.name}\n`);

      // for some reason it's capitalized
      console.log(`Fajr:\t ${prayerName.Fajr}`);
      console.log(`Dhuhr:\t ${prayerName.Dhuhr}`);
      console.log(`Asr:\t ${prayerName.Asr}`);
      console.log(`Maghrib: ${prayerName.Maghrib}`);
      console.log(`Isha:\t ${prayerName.Isha}`);
    });
  })
  .on("error", (err) => {
    console.error("An error occured: " + err);
    process.exit(1);
  });
