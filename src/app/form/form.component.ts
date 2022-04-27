import { Component, OnInit } from '@angular/core';
import { GithubService } from '../github.service';
import { GitClass } from '../git-class';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
})
export class FormComponent implements OnInit {
  username: string;
  user: any;

  constructor(private githubService: GithubService) {}

  gitSearch(username: string) {
    this.githubService.getUser(username).then((result) => {
      this.user = result;
    });
  }

  ngOnInit(): void {}
}
