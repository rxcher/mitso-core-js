/**
 * You will complete the PaginationHelper class,
 * which is a utility class helpful for querying paging information related to an array.
 */
class PaginationHelper {
  // The constructor takes in an array of items and a integer indicating how many
  // items fit within a single page
  constructor(collection, itemsPerPage) {
    this.collection = collection;
    this.itemsPerPage = itemsPerPage;
  }

  // returns the number of items within the entire collection
  itemCount() {
    return this.collection.length;
  }

  // returns the number of pages
  pageCount() {
    return Math.ceil(this.collection.length / this.itemsPerPage);
  }

  // returns the number of items on the current page. page_index is zero based.
  // this method should return -1 for pageIndex values that are out of range
  pageItemCount(pageIndex) {
    if (pageIndex < 0 || pageIndex >= this.pageCount()) return -1;

    // Если это последняя страница, возвращаем остаток, иначе полное количество
    if (pageIndex === this.pageCount() - 1) {
      return this.collection.length % this.itemsPerPage || this.itemsPerPage;
    }
    return this.itemsPerPage;
  }

  // determines what page an item is on. Zero based indexes
  // this method should return -1 for itemIndex values that are out of range
  pageIndex(itemIndex) {
    if (itemIndex < 0 || itemIndex >= this.collection.length) return -1;
    return Math.floor(itemIndex / this.itemsPerPage);
  }
}

module.exports = {
  PaginationHelper,
};
