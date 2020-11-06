var items = Zotero.getActiveZoteroPane().getSelectedItems();
if (items) {
    // return items[0].getRelations()["dc:relation"]
    return items[0].getNote();
    // return items[0].getField("title").split(/_(.+)/);
    // return JSON.stringify(items[0]) + "\nitem.isNote() : " + items[0].isNote();
}

// Non-greedy match for closing bracket across anything *except* further opening brackets
const squareBracketsRegExp = /(\[)([^\[]*?)(\])/gi;
var testStr = '[Hello [alt] [inner [deep] inner] world]';
var squareBracketsInner = testStr;
do {
  testStr = squareBracketsInner;
  squareBracketsInner = testStr.replace(squareBracketsRegExp,
    function (match, p1, p2, p3) {
      return '\\[' + p2 + '\\]';
    });
    Zotero.debug(squareBracketsInner+'\n');
  }
  while (testStr !== squareBracketsInner);
return testStr;


// Non-greedy match for closing bracket across anything *except* further opening brackets
const angleBracketsRegExp = /(<)([^<]*?)(>)/gi;
var testStr = '<unscheduled <inner> >';
const angleBracketsInner = testStr.replace(angleBracketsRegExp,
  function (match, p1, p2, p3) {
    return '\\<' + p2 + '\\>';
  });
return angleBracketsInner;

/*
[Hello [alt] [inner [deep] inner] world]
[Hello \[alt\] [inner \[deep\] inner] world]
*/

const squareBracketsOpenRegExp = /([^\\])\[|^\[/gi;
const squareBracketsCloseRegExp = /([^\\])\]/gi;
// const testStr = '[Hello [\\[pre-escaped\\] [inner [deep] inner] world]]';
const testStr = '[Hello [world] unclosed';
var squareBracketsInner = testStr.replace(squareBracketsOpenRegExp,
  function (match, p1, p2, p3) {
    return p1 ? p1 + '\\[' : '\\[';
  });
squareBracketsInner = squareBracketsInner.replace(squareBracketsCloseRegExp,
  function (match, p1, p2, p3) {
    return p1 + '\\]';
  });
return squareBracketsInner;



return Zotero.ItemTypes;

Zotero.debug("Hello world!")

for (let id of []) {
    Zotero.debug(id);
}