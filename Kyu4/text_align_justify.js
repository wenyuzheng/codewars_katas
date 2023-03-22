export function justify(text, width) {
  const words = text.split(" ");

  //   let textArr = [];
  let texts = "";

  let tempWidth = width;
  for (let i = 0; i < words.length; i++) {
    if (tempWidth - words[i].length >= 0) {
      tempWidth -= words[i].length;
      //   textArr.push(words[i]);
      texts += words[i];
    } else {
      //   textArr.push("\n");
      texts += "\n";

      tempWidth = width;
    }
    // while (tempWidth - words[i].length >= 0) {
    //   tempWidth -= words[i].length;
    //   textArr.push(words[i]);
    //   words.shift();
    //   i++;
    // }
    // textArr.push("\n");
  }

  console.log({ texts });

  //   let texts = [];
  //   for (let i = 0; i < Math.floor(text.length / width); i++) {
  //     texts.push(text.slice(i * width, width));
  //   }
  //   texts.push(text.slice(Math.floor(text.length / width) * width, text.length));
  //   console.log({ texts });

  //   return texts.join("\n");
}
