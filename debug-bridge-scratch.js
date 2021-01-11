// https://github.com/retorquere/zotero-better-bibtex/tree/master/test/fixtures/debug-bridge
// Invoke code: Ctrl+Alt+K
//
var items = Zotero.getActiveZoteroPane().getSelectedItems();
if (items) {
    // return items[0].getRelations()["dc:relation"]
    // return items[0].getNote();
    return Zotero.ItemTypes.getName(items[0].itemTypeID) !== "note";
    // return items[0].getField("key");
    // return items[0].getField("title").split(/_(.+)/);
    return JSON.stringify(items[0]) + "\nitem.isNote() : " + items[0].isNote();
}