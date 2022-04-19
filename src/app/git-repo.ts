export class GitRepo {
  constructor(
    public name: string,
    public full_name: string,
    public description: string,
    public updated_at: Date,
    public created_at: Date
  ) {}
}
