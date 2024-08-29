export function splitRecipeName({ text }: { text: string }) {
  const splitLine = text.split("\n").find((line) => line.startsWith("title:"));
  const title = splitLine
    ? splitLine.replace("title: ", "").split(" ").join("_").toLowerCase()
    : null;
  return title;
}
