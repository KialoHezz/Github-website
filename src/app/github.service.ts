import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { GitClass } from './git-class';
import { GitRepo } from './git-repo';
import { lastValueFrom } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class GithubService {
  user: GitClass; // We'll need the User blueprint class for Creating a new User Instance
  repository: GitRepo; // // We'll need the Repository blueprint class for Creating a new Repository Instance
  newUserData: any = [];
  repoData = []; // Created an Empty Multi-Dimensional Array that we'll User for Every Repository Instance we get from a given Username

  constructor(private http: HttpClient) {
    this.user = new GitClass('', '', '', 0, 0, 0, 0, new Date(), '', '');
    this.repository = new GitRepo('', '', '', new Date(), new Date());
  }

  async getUserData() {
    this.repoData.length = 0; // Empties the Array From Previous Request After a New Request
  }

  //function to get repository

  async getRepository(repository: any) {
    const fetchRepo = this.http.get<GitRepo>(
      'https://api.github.com/repository' + repository
    );
   return await lastValueFrom(fetchRepo).then(
      (Response) => {
        this.repository.name = Response.name;
        this.repository.full_name = Response.full_name;
        this.repository.description = Response.description;
        this.repository.updated_at = Response.updated_at;
        this.repository.created_at = Response.created_at;
        return this.repository
      },
      (error) => error
    );
  }

  //function to get user
  async getUser(username: string) {
    const fetchUser = this.http.get<GitClass>(
      `${environment.apiUrl}users/${username}`


    );

   return  await lastValueFrom(fetchUser).then(
      (response) => {
        // Mapping The Response we get to Every Property that we'll Eventually Use to Display in our git-search-results.component.html
        this.user.avatar_url = response.avatar_url;
        this.user.login = response.login;
        this.user.public_repos = response.public_repos;
        this.user.name = response.name;
        this.user.updated_at = response.updated_at;
        return this.user
      },

      (error) => error
    );
  }
}
