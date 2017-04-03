console.log("Regex Golf");

verify(/ca(r|t)/,
      ["my car", "bad cats"],
      ["camper", "high art"]);

verify(/pr?op/,
      ["pop culture", "mad props"],
      ["plop"]);

verify(/ferr(et|y|ari)/,
      ["ferret", "ferry", "ferrari"],
      ["ferrum", "transfer A"]);

verify(/ious\b/,
      ["how delicious", "spacious room"],
      ["ruinous", "consciousness"])

verify(/\s(\.|,|;|:)/,
      ["bad punctuation ."],
      ["escape the dot"]);

verify(/\S{7,}/,
      ["hottentottententen"],
      ["no", "hotten totten tenten"]);

console.log("e");
verify(/(\b[^e\s]+\b)/,
      ["red platypus", "wobbling nest"],
      ["earth bed", "learning ape"]);

function verify(regexp, yes, no) {
  //Ignore unfinished exercises
  if (regexp.source == "...") return;
  yes.forEach(function(s) {
    if (!regexp.test(s))
      console.log("Failure to match '" + s + "'");
    else
      console.log("Match successful!");
  });
  no.forEach(function(s) {
    if (regexp.test(s))
      console.log("Unexpected match for '" + s + "'");
  });
}
