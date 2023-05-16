var Title = getColumn("Netflix Content","Title");
var Type = getColumn("Netflix Content", "Type");
var Genre = getColumn("Netflix Content","Genre");
var Rating = getColumn("Netflix Content", "Rating");
var Release = getColumn("Netflix Content", "Release Year");
var userChoice;

var filteredTitle=[];
var filteredType=[];
var filteredGenre=[];
var filteredRating=[];
var filteredRelease=[];

function filter(){
  filteredTitle=Title;
  filteredType=Type;
  filteredGenre=Genre;
  filteredRating=Rating;
  filteredRelease=Release;
  userChoice = getText("SMDrop");
  for(var i = 0; i == Type.length; i++){
    if (Type[i] == userChoice){
      appendItem(filteredTitle, Title[i]);
      appendItem(filteredType, Type[i]);
      appendItem(filteredGenre, Genre[i]);
      appendItem(filteredRating, Rating[i]);
      appendItem(filteredRelease, Release[i]);
    }
  }
}

function outputList(){
  var randomIndex = randomNumber(0, filteredTitle.length-1);
  setText("TitleL",filteredTitle[randomIndex]);
  setText("InfoSM","Type: "+filteredType[randomIndex]+"\nGenre: "+filteredGenre[randomIndex]+"\nRating: "+filteredRating[randomIndex]+"\nReleaseYear: "+filteredRelease[randomIndex]);
}

onEvent("SMDrop","change",function(){
  userChoice = getText("SMDrop");
  setScreen("Info");
  filter();
  outputList();
});

onEvent("StartB","click",function(){
  setScreen("Random");
});


onEvent("BackB","click",function(){
  setScreen("Random");
});

onEvent("HomeB","click",function(){
  setScreen("Main");
});
