var DataStore = {
    uuid: function () {
        return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function (c) {
            var r = (Math.random() * 16) | 0,
                v = c == "x" ? r : (r & 0x3) | 0x8;
            return v.toString(16);
        });
    },
    remove: function (namespace) {
        localStorage.removeItem(namespace);
    },
    set: function (namespace, collection) {
        localStorage.setItem(namespace, JSON.stringify(collection));
    },
    get: function (namespace) {
        let collection = localStorage.getItem(namespace);
        if (
            collection != undefined &&
            collection != "" &&
            collection != " "
        ) {
            collection = JSON.parse(collection);
        } else {
            collection = [];
        }
        return collection;
    }
};

// var namespace = "store_items";
// var newItems = DataStore.get(namespace);
// newItems.push({ id: DataStore.uuid() });
// console.log(newItems);
// DataStore.set(namespace, newItems);
// console.log(DataStore.get(namespace));
// DataStore.remove(namespace);