import { Component, OnInit } from '@angular/core';
import { AcaraService } from '../providers/acara.service';

@Component({
  selector: 'app-tab3',
  templateUrl: './tab3.page.html',
  styleUrls: ['./tab3.page.scss'],
  standalone: false
})
export class Tab3Page implements OnInit {

  daftarAcara: any[] = [];

  constructor(private acaraService: AcaraService) { }

  ngOnInit() {
    this.loadData();
  }

  loadData() {
    this.acaraService.getAcara().subscribe(res => {
      this.daftarAcara = res;
    });
  }
}
