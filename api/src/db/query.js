export const listOfPrices=`SELECT * FROM example.price`;
export const listOfBooks=`SELECT * FROM example.book`;
export const priceFromBookId= `SELECT * FROM example.price where book_id=$1`;