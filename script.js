//your code here
let mp={};
let touristSports = ['The Virupaksha Temple', 'Victoria Memorial', 'Tajmahal'];

let articleLessArray=[];
let articleLessIteam=[];
for(let i=0; i<touristSports[i].length; i++)
	{
   articleLessItem=touristSports[i].replace(/\bthe\b|\ban\b|\ba\b/gi, " ").trim();
	{
		articleLessArraay.push(articleLessIteam);
     mp[articleLessIteam]=touristSpots[i];
	}

    articleLessArray.sort();
   let ans = [];
   for(let i of articleLessArray){
	   ans.push(mp[i]);
   }
console.log(ans);
