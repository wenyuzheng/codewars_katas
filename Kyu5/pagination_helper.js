class PaginationHelper {
  constructor(collection, itemsPerPage) {
    // The constructor takes in an array of items and a integer indicating how many
    // items fit within a single page
    this.collection = collection;
    this.itemsPerPage = itemsPerPage;
  }
  itemCount() {
    // returns the number of items within the entire collection
    return this.collection.length;
  }
  pageCount() {
    // returns the number of pages
    return Math.ceil(this.itemCount() / this.itemsPerPage);
  }
  pageItemCount(pageIndex) {
    // returns the number of items on the current page. page_index is zero based.
    // this method should return -1 for pageIndex values that are out of range

    const totalPages = this.pageCount() - 1; //start from 0

    if (pageIndex > totalPages) return -1;
    if (pageIndex === totalPages) return this.itemCount() % this.itemsPerPage;
    return this.itemsPerPage;
  }
  pageIndex(itemIndex) {
    // determines what page an item is on. Zero based indexes
    // this method should return -1 for itemIndex values that are out of range
    if (0 > itemIndex || itemIndex > this.itemCount() || this.itemCount() === 0)
      return -1;
    if (itemIndex === 0) return 0;
    else return this.itemCount() % itemIndex;
  }
}

// var helper = new PaginationHelper(["a", "b", "c", "d", "e", "f"], 4);
// console.log(helper.pageCount()); //should == 2
// console.log(helper.itemCount()); //should == 6
// console.log(helper.pageItemCount(0)); //should == 4
// console.log(helper.pageItemCount(1)); // last page - should == 2
// console.log(helper.pageItemCount(2)); // should == -1 since the page is invalid

// // pageIndex takes an item index and returns the page that it belongs on
// console.log(helper.pageIndex(5)); //should == 1 (zero based index)
// console.log(helper.pageIndex(2)); //should == 0
// console.log(helper.pageIndex(20)); //should == -1
// console.log(helper.pageIndex(-10)); //should == -1

const collection = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22,
  23, 24,
];
const helper = new PaginationHelper(collection, 10);
// console.log(helper.pageCount()); //should == 3
console.log(helper.itemCount()); //should == 24
// console.log(helper.pageItemCount(1)); //should == 10
// console.log(helper.pageItemCount(2)); // 4
// console.log(helper.pageItemCount(3)); // -1

// pageIndex takes an item index and returns the page that it belongs on
// console.log(helper.pageIndex(22)); //should == 22 (zero based index)
console.log(helper.pageIndex(0)); //should == 0
// console.log(helper.pageIndex(20)); //should == -1
// console.log(helper.pageIndex(-10)); //should == -1
