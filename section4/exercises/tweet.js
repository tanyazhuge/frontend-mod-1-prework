/*
In the space below, add to the existing skeleton of a Tweet class.

- A tweet should have a (dynamic) author, content, timeStamp, numberOfLikes, and comments.
- A tweet should be able to increment the numberOfLikes and add to the list of comments.

Create several instances of your Tweet and log them to the console. Make sure the
tweet object instances _behave_ as expected.
*/

class Tweet {
  constructor(author,content,time,numberOfLikes,listOfComment){


this.author = author;
this.content = content;
this.timeStamp = time;
this.numberOfLikes = numberOfLikes;
this.listOfComment = listOfComment;
}

increaseLikes(addLikes) {
  this.numberOfLikes = this.numberOfLikes + addLikes;
}
addComments(newComment) {
  this.listOfComment = this.listOfComment.push(newComment);
}
};

var olympicComment = new Tweet("tanya","The men-women mixed medley in swimming has been fun to watch!",
"7:32PM July 30, 2021",5,["Yes!","It was confusing to figure out who's leading"])

console.log(olympicComment);
olympicComment.increaseLikes(3);
console.log(olympicComment);
olympicComment.addComments("Britain won first medley gold!")
console.log(olympicComment);
