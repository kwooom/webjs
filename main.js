var entireText = document.getElementsByTagName('body')[0].innerText;
var splitedText = entireText.split(' ');
var countedWord = {};
for(var i=0; i<splitedText.length; i++){
    var word = splitedText[i];
    if(countedWord[word] == undefined){
    	countedWord[word] = 1;
    } else {
    	countedWord[word]+=1;  
    }    
}
var countedWordArr = new Array();
for(var name in countedWord){
	countedWordArr.push([name, countedWord[name]])
}

countedWordArr.sort(function(a,b){
	return (a[1] > b[1]) ? -1 : (a[1] == b[1]) ? 0 : 1;
})

for(var i = 0; i < countedWordArr.length; i++){
    console.log(countedWordArr[i][0], countedWordArr[i][1])
}