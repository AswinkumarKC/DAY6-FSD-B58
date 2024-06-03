
class Movie{
  constructor(title,studio,rating="PG"){
    this.title=title;
    this.studio=studio;
    this.rating=rating;
  }
  getPG(arr){
    let outputarr=arr.filter(function(ele){
        return ele.rating == "PG";
    }
    );
    console.log(outputarr);    
  }
}
let film = new Movie("Casino Royale", "Eon Productions","PG13");
let inputarr=[{title:"avatar",studio:"sun pictures",rating:"PG"},
              {title:"brOken arrow",studio:"red giant",rating:"PG13"},
              {title:"captain america",studio:"thenandal",rating:"PG"},
              {title:"james bond",studio:"visual",rating:"R"},
              {title:"titanic",studio:"under water",rating:"PG13"}]
film.getPG(inputarr); 




