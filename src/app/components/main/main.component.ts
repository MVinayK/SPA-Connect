import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NetworksService } from 'src/app/services/networks.service';
import { PostsService } from 'src/app/services/posts.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  
  panelOpenState = false;

  networks: Network[] = [
    {id: '', name: 'Team Alpha', type: 'group', text:'', avatar:"https://i.pravatar.cc/300?img=3"},
    {id: '', name: 'John Doe', type: 'group', text:'', avatar:"https://i.pravatar.cc/300?img=1"},
    {id: '', name: 'Family Party', type: 'group', text:'', avatar:"https://i.pravatar.cc/300?img=33"},
    {id: '', name: 'Cristmas', type: 'group', text:'', avatar:"https://i.pravatar.cc/300?img=42"}
  ];

  posts: Post[] = [
    {id:'', name:'Vinay', image:'https://www.fillmurray.com/640/360', avatar:'https://i.pravatar.cc/300?img=42', content: 'Hello', likes: 5, dislikes: 20, coments:[]},
    {id:'', name:'John', image:'https://loremflickr.com/640/360', avatar:"https://i.pravatar.cc/300?img=33", content: 'Hello', likes: 5, dislikes: 20, coments:[]}
  ];

  selectedNetwork: Network = this.networks[0];

  constructor(private router: Router, private postService: PostsService, private networkService: NetworksService) { }

  ngOnInit(): void {
    this.callNetworks();
  }

  callNetworks() {
    //call the networks here...
    this.networkService.getNetworks();
  }

  selectNetwork(network : Network) {
    this.selectedNetwork = network;
    this.callPostsService(network);
  }


  
 callPostsService(network: Network) {
   //call the angular service to fetch the posts from this network group
    this.postService.getPosts(network);
 }

  ngOnDestroy() {
    console.log("AppComponent:ngOnDestroy");
  }

}


export interface Network {
  id: string;
  name: string;
  type: string;
  text: string;
  avatar: string;
}

export interface Post {
  id: string;
  avatar: string;
  name: string;
  image: string;
  content: string;
  likes: number;
  dislikes: number;
  coments: [];
}

