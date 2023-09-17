let mp = {};
let touristSports = ['The Virupaksha Temple', 'Victoria Memorial', 'Tajmahal'];

let articleLessArray = [];

// Create a mapping of article-less names to original names
for (let i = 0; i < touristSports.length; i++) {
  let articleLessItem = touristSports[i].replace(/\b(?:the|an|a)\b/gi, "").trim();
  articleLessArray.push(articleLessItem);
  mp[articleLessItem] = touristSports[i];
}

articleLessArray.sort();

let ans = [];
for (let i of articleLessArray) {
  ans.push(mp[i]);
}

console.log(ans);

