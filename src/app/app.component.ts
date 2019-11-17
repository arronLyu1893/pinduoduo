import { Component } from '@angular/core';

interface TopMenu {
  title: string;
  link: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'pinduoduo';
  menus: TopMenu[] = [
    {
      title: '热门',
      link: ''
    },{
      title: '男装',
      link: ''
    },{
      title: '百货',
      link: ''
    },{
      title: '运动',
      link: ''
    },{
      title: '手机',
      link: ''
    },{
      title: '家纺',
      link: ''
    },{
      title: '食品',
      link: ''
    },{
      title: '内衣',
      link: ''
    },{
      title: '家装',
      link: ''
    },{
      title: '母婴',
      link: ''
    },{
      title: '美妆',
      link: ''
    },{
      title: '家居',
      link: ''
    },{
      title: '酒水',
      link: ''
    },{
      title: '零食',
      link: ''
    },{
      title: '厨具',
      link: ''
    },{
      title: '家居',
      link: ''
    },{
      title: '家居',
      link: ''
    },{
      title: '家居',
      link: ''
    },{
      title: '家居',
      link: ''
    }
  ]
}