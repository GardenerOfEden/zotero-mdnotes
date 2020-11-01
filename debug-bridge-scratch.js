var items = Zotero.getActiveZoteroPane().getSelectedItems();
if (items) {
    // return items[0].getRelations()["dc:relation"]
    return items[0].getNote();
    // return items[0].getField("title").split(/_(.+)/);
    // return JSON.stringify(items[0]) + "\nitem.isNote() : " + items[0].isNote();
}

const squareBracketsRegExp = /(\[)(.*)(\])/i;
const squareBracketsInner = '[Hello world]'.replace(squareBracketsRegExp,
        function (match, p1, p2, p3) {
          return '\\[' + p2 + '\\]';
        });
return squareBracketsInner;


return Zotero.ItemTypes;

Zotero.debug("Hello world!")

for (let id of []) {
    Zotero.debug(id);
}