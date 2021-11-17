
// Add the text using the slice method

var text = "Lorem ipsum dolor, sit amet consectetur adipisicing elit.World War II In optio illo, excepturi quidem commodi cupiditate nemo quaerat laboriosam ipsa nihil eos necessitatibus  numquam rerum accusamus, magnam incidunt sapiente aspernatur at? ";
var indxNum = text.indexOf('World War II');
var firstText = text.slice(0,indxNum);
var replaceingText = "The second world war";
var thirdText = text.slice(indxNum+12);
console.log(firstText + replaceingText + thirdText);