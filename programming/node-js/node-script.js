import { promises as fs } from "fs";

const filePath = "../node-js/file.txt";

async function appendLineToFile(string) {
  // Read current content of file
  // let currentContent = "";
  // try {
  //   currentContent = await fs.readFile(filePath, "utf-8");
  // } catch (err) {
  //   console.log("No file found, creating one");
  // }

  try {
    // Append the new line
    // currentContent += `${string}\n`;

    // Write the updated content back to the file
    await fs.writeFile(filePath, `${string}\n`, { encoding: "utf-8", flag: "a" });

    console.log("Line appended successfully.");
  } catch (err) {
    console.error("Error appending line to file:", err);
  }
}

process.stdin.setEncoding("utf8");

process.stdin.on("data", (data) => {
  const [value1, value2] = data.split(" ").map(Number);

  // Multiply values by random factors
  const result1 = value1 * Math.random();
  const result2 = value2 * Math.random();

  // Call the async function
  appendLineToFile(result1 + ", " + result2);

  // Send the results back to Python
  process.stdout.write(`${result1 * result2}\n`);
});
