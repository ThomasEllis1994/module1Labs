let myBook = {
    title: "The Way of Kings",
    author: "Brandon Sanderson",
    pageCount: 1005,
    description: "A story about a sad man, confused girl, and troubled general",
};

console.log(myBook.title);
console.log("by " + myBook.author);
console.log(myBook.pageCount);
console.log(myBook.description);
console.log(myBook);

myBook.description =
    "The epic stories of a broken slave becoming a leader, a lesser noblewoman charged with impossible tasks, and a warlord trying to become a better man.";
console.log(myBook);
