/* Return the number (count) of vowels in the given string.
We will consider a, e, i, o, u as vowels for this Kata (but not y).
The input string will only consist of lower case letters and/or spaces. */

const equal = document.getElementById("equal");
const tekst = document.getElementById("textInput");

document.getElementById("textInput").addEventListener("keydown", (e) => {
  if (e.key !== "Enter") return;
  function getVowelsCount(sentence) {
    return sentence.match(/[aeuioæøå]/gi)
      ? sentence.match(/[aeuioæøå]/gi).length
      : 0;
  }
  tekst.value.toString;
  equal.innerHTML = "= " + getVowelsCount(tekst.value);
});
