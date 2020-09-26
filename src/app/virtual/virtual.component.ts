import { Component, OnInit, ViewChild } from '@angular/core';
import {CdkVirtualScrollViewport } from '@angular/cdk/scrolling';

@Component({
  selector: 'app-virtual',
  templateUrl: './virtual.component.html',
  styleUrls: ['./virtual.component.css']
})
export class VirtualComponent implements OnInit {

  @ViewChild( CdkVirtualScrollViewport, {read: null, static: true} ) viewport: CdkVirtualScrollViewport;

  personas = Array(500).fill(0);

  constructor() { }
  irFinal() {
    this.viewport.scrollToIndex(this.personas.length );
  }
  irInicio() {
    this.viewport.scrollToIndex(0);
  }
  irMitad() {
    this.viewport.scrollToIndex(this.personas.length / 2);
  }
  ngOnInit() {
    console.log(this.personas);
  }

}
