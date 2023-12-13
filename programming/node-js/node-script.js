import { promises as fs } from "fs";

const filePath = "../node-js/file.txt";
const lineToAppend = "Hello world!";

async function appendLineToFile() {

  // Read current content of file
  let currentContent = "";
  try {
    currentContent = await fs.readFile(filePath, "utf-8");
  } catch (err) {
    console.log("No file found, creating one");
  }

  try {
    // Append the new line
    currentContent += `${lineToAppend}\n`;

    // Write the updated content back to the file
    await fs.writeFile(filePath, currentContent, { encoding: "utf-8", flag: "a" });

    console.log("Line appended successfully.");
  } catch (err) {
    console.error("Error appending line to file:", err);
  }
}

// Call the async function
appendLineToFile();
