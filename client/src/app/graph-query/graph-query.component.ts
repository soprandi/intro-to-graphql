import { Component, OnInit } from '@angular/core';
import { Apollo, gql } from 'apollo-angular';


@Component({
  selector: 'app-graph-query',
  templateUrl: './graph-query.component.html',
  styleUrls: ['./graph-query.component.scss']
})
export class GraphQueryComponent implements OnInit {

  items: any[] | undefined;
  loading = true;
  error: any;

  constructor(private apollo: Apollo) { }

  ngOnInit() {
    this.apollo
      .watchQuery({
        query: gql`
        query {
          booksList2(bookId:10){
            id
            title
            author
            price {
              value
            }
          }
        }
        `,
      })
      .valueChanges.subscribe((result: any) => {
        console.log(result);
        this.items = result?.data?.booksList2;
        this.loading = result.loading;
        this.error = result.error;
      })
  }

}
