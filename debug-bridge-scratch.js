var items = Zotero.getActiveZoteroPane().getSelectedItems();
if (items) {
    return items[0].getAttachments();
    // return JSON.stringify(items[0]) + "\nitem.isNote() : " + items[0].isNote();
}

return Zotero.ItemTypes;

Zotero.debug("Hello world!")

for (let id of []) {
    Zotero.debug(id);
}