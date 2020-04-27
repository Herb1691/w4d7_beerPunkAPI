import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { DataService } from '../services/data.service';
import { IBeer } from '../interfaces/ibeer';


@Component({
  selector: 'app-beer',
  templateUrl: './beer.component.html',
  styleUrls: ['./beer.component.css']
})
export class BeerComponent implements OnInit {

  beer: Array<string>;
  message: string;

  displayedColumns: string[] = ['id', 'name', 'tagline', 'firstBrewed', 'description', 'imageUrl'];
  dataSource: MatTableDataSource<IBeer>;

  // dataSource = new MatTableDataSource(this.beer);

  constructor(private dataService: DataService) { }

  async ngOnInit() {
    this.dataSource = new MatTableDataSource( await this.dataService.getBeers());
    // this.message = JSON.stringify(await this.dataService.getBeers());
    // this.beer = JSON.parse(this.message);
  }


  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }


}
