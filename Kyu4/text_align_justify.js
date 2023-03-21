export function justify(text, width) {
  let texts = [];
  for (let i = 0; i < Math.floor(text.length / width); i++) {
    texts.push(text.slice(i * width, width));
  }
  texts.push(text.slice(Math.floor(text.length / width) * width, text.length));
  console.log({ texts });

  return texts.join("\n");
}
