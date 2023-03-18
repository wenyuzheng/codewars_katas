import { VigenèreCipher } from "../vigenère_cipher_helper.js";
import { expect } from "chai";

describe("VigenèreCipher", () => {
  var abc, key;
  abc = "abcdefghijklmnopqrstuvwxyz";
  key = "password";
  const c = new VigenèreCipher(key, abc);

  it("encode", () => {
    expect(c.encode("codewars")).equal("rovwsoiv");
    expect(c.encode("waffles")).equal("laxxhsj");
  });

  it("decode", () => {
    expect(c.decode("rovwsoiv")).equal("codewars");
    expect(c.decode("laxxhsj")).equal("waffles");
  });

  it("unchange", () => {
    expect(c.encode("CODEWARS")).equal("CODEWARS");
    expect(c.decode("CODEWARS")).equal("CODEWARS");
  });
});
