var searchTerm = '';
var wikiInfo = [];
var queries = [];
var titles = [];
var snippets = [];
var links = [];
var totalHits = 0;

$(document).ready(function(){
  $(function() {
  
    $('<div class = "precursorClass" id = "precursor"> <i class="fa-3x fa fa-hand-o-up"></i> <p class = "precursorText"> Type in your query above.  </p> <i class="fa-3x fa fa-hand-o-up"></i> ').appendTo("#divBox");
  $('</div><div class = "gapFiller" id = "gapFiller">  </div>').appendTo('body');
  });
})



  function search() {
    
    $('#divBox').empty();
    $('#precursor').remove();
    $('#gapFiller').remove();
searchTerm = document.getElementById('search').value;
  var wikiUrl = 'https://en.wikipedia.org/w/api.php?action=query&prop=info&list=search&format=json&inprop=url&srsearch=' + searchTerm + '&srprop=snippet&srinfo=totalhits&prop=info&srlimit=25&callback=?';
 
    
    //http://en.wikipedia.org/?curid=
    console.table(wikiInfo);
 $.getJSON(wikiUrl, function(json) {
   queries = (json.query.search);
   for (var i = 0; i< queries.length;i++) {
     titles[i] = json.query.search[i].title;
     snippets[i] = json.query.search[i].snippet;
     //url[i] = json.blah blah blah...;
     totalHits = json.query.searchinfo.totalhits;
     snippets[i]=snippets[i].replace(/<\/?[^>]+(>|$)/g, "");
     snippets[i]=snippets[i].replace(/&quot;/g, "\"");
      wikiInfo['article' + i] = {
                       'titles':titles[i],
        //             'url': url[i],
                       'snippets':snippets[i]};      
   }
   //$
//$(function() {
  for (var j=0;j<10;j++) {
    
    $('<a href = "#"><div id = "divNum'+j+'" class = "entries container">\
<div class  = "row"><div class = "col-xs-6"><p class = "title">'+wikiInfo['article'+j].titles+'</p>\
</div><div class = "col-xs-6"><p class = "snippet">'+wikiInfo['article'+j].snippets+'</p></div> \
</div></div></a>').appendTo("#divBox")
  }
 // });
 
 }) //terminates the getJSON function


  }
//}) //terminates jQuery document ready function.

//okay, i think if there's like, something in an object, you need to call a function for it.

//TO DO LIST
//get URL
//figure out how you're going to arrange this stuff.
//figure out any animations etc.
//figure out roughly where divs will go.
//have a button for random linking to http://en.wikipedia.org/wiki/Special:Random
//probably have something waiting in the space where the searches will go if they havent been generated yet.