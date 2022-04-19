export class GitClass {
  show: boolean;
  constructor(
    public login: string,
    public name: string,
    public avatar_url: string,
    public id: number,
    public public_repos: number,
    public followers: number,
    public following: number,
    public date: Date,
    public created_at: any,
    public updated_at: any,
  ) {
    this.show = true;
  }
}
