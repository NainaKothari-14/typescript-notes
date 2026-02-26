import fs from "fs";
import path from "path";

const getDataPath = (fileName: string) =>
  path.resolve(__dirname, `../../data/${fileName}`);//direcly data ko data folder ke andar store karne ke liye

export const readData = <T>(fileName: string): T[] => {

  const dataPath = getDataPath(fileName);

  if (!fs.existsSync(dataPath)) {
    fs.mkdirSync(path.dirname(dataPath), { recursive: true });
    fs.writeFileSync(dataPath, "[]", "utf-8");
    return [];
  }

  const raw = fs.readFileSync(dataPath, "utf-8");

  if (!raw.trim()) return [];

  try {
    return JSON.parse(raw) as T[];
  } catch {
    return [];
  }
};

export const writeData = <T>(fileName: string, data: T[]) => {

  const dataPath = getDataPath(fileName);

  if (!fs.existsSync(path.dirname(dataPath))) {
    fs.mkdirSync(path.dirname(dataPath), { recursive: true });
  }

  fs.writeFileSync(dataPath, JSON.stringify(data, null, 2), "utf-8");
};