import { Component, OnInit, Renderer2, ElementRef } from '@angular/core';
import { pipeBindV } from '@angular/core/src/render3';

@Component({
  selector: 'app-dynamic-controls',
  templateUrl: './dynamic-controls.component.html',
  styleUrls: ['./dynamic-controls.component.scss']
})
export class DynamicControlsComponent implements OnInit {
  orders = [];
  constructor(private rendrer: Renderer2, private refelm: ElementRef) {
    this.orders = this.getOrders();
  }

  ngOnInit() {
  }
  AddNewControls() {
    console.log("click");
    const divMain = this.rendrer.createElement('div');
    const div = this.rendrer.createElement('div');
    const div1 = this.rendrer.createElement('div');
    const div2 = this.rendrer.createElement('div');
    const div3 = this.rendrer.createElement('div');
    const input = this.rendrer.createElement('input');
    const select = this.rendrer.createElement('select');
    const input1 = this.rendrer.createElement('input');
    const input2 = this.rendrer.createElement('input');

    this.rendrer.addClass(divMain, 'row');
    this.rendrer.appendChild(div, input);
    this.rendrer.addClass(div, 'col-lg-3');
    this.rendrer.addClass(input, 'form-control');
    this.rendrer.setAttribute(input, 'id', 'txt');
    this.rendrer.appendChild(divMain, div);

    this.rendrer.appendChild(div1, select);
    this.rendrer.addClass(div1, 'col-lg-3');
    this.rendrer.addClass(select, 'form-control');
    this.rendrer.setAttribute(select, 'id', 'drpSelect');
    for (let entry of this.orders) {
      const option = this.rendrer.createElement('option');
      const divOption = this.rendrer.createElement('div');
      const br = this.rendrer.createElement('br');
      this.rendrer.setProperty(option, 'value', entry.id);
      this.rendrer.setProperty(option, 'text', entry.name);
      this.rendrer.appendChild(select, option);
    }
    this.rendrer.appendChild(divMain, div1);
    this.rendrer.appendChild(div2, input1);
    this.rendrer.addClass(div2, 'col-lg-3');
    this.rendrer.addClass(input1, 'form-control');
    this.rendrer.setAttribute(input1, 'id', 'txt1');
    this.rendrer.appendChild(divMain, div2);

    this.rendrer.appendChild(div3, input2);
    this.rendrer.addClass(div3, 'col-lg-3');
    this.rendrer.addClass(input2, 'form-control');
    this.rendrer.setAttribute(input2, 'id', 'txt1');
    this.rendrer.appendChild(divMain, div3);

    const textboxes = document.getElementById('NewRow');
    this.rendrer.appendChild(textboxes, divMain);
  }
  getOrders() {
    return [
      { id: '1', name: 'order 1' },
      { id: '2', name: 'order 2' },
      { id: '3', name: 'order 3' },
      { id: '4', name: 'order 4' }
    ];
  }
}