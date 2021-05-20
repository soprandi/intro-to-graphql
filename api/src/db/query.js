export const listOfPrices=`SELECT * FROM example.price`;
export const listOfBooks=`SELECT * FROM example.book  where id=$1`;
export const priceFromBookId= `SELECT * FROM example.price where book_id=$1`;
export const addNewBook= `INSERT INTO example.book(title, author) VALUES ($1,$2); select * from example.book order by id DESC limit 1`;