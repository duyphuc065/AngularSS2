import { Component, OnInit } from '@angular/core';
import { TouchSequence } from 'selenium-webdriver';

@Component({
  selector: 'app-structural-directive',
  templateUrl: './structural-directive.component.html',
  styleUrls: ['./structural-directive.component.scss']
})
export class StructuralDirectiveComponent implements OnInit {
  p: number = 1;
  public mangSP: any[] = [
    { MaSP: 1, TenSP: "Sony XZ", Gia: 1000 },
    { MaSP: 2, TenSP: "Sony X22", Gia: 1000 },
    { MaSP: 3, TenSP: "HTC U Ultra", Gia: 1000 },
    { MaSP: 4, TenSP: "HTC U12 Plus", Gia: 1000 },
    { MaSP: 5, TenSP: "Iphone XS MAX", Gia: 1000 },
    { MaSP: 6, TenSP: "Iphone XR", Gia: 1000 },
    { MaSP: 7, TenSP: "Xiaomi Mi Note 3", Gia: 9900 },
    { MaSP: 8, TenSP: "Xiaomi Mi 8", Gia: 1000 },
    { MaSP: 9, TenSP: "Galaxy Note 9", Gia: 1000 },
    { MaSP: 10, TenSP: "Galaxy S9 Plus", Gia: 1000 },
    { MaSP: 11, TenSP: "Nokia X9", Gia: 1000 },
  ];

  constructor() { }

  ngOnInit() {
  }
  themSP(MaSP, TenSP, Gia) {
    let DSSP = {
      MaSP: MaSP,
      TenSP: TenSP,
      Gia: Gia,
    };
    this.mangSP.push(DSSP);
  }
  xoaSP(stt) {
    this.mangSP.splice(stt,1);
  }
}
