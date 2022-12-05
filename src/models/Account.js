export class Account {
  constructor(data) {
    this.id = data.id || this.id;
    this.email = data.email;
    this.name = data.name;
    this.picture = data.picture;
    this.bio = data.bio;
    this.class = data.class;
    this.coverImg = data.coverImg;
    this.github = data.github;
    this.graduated = data.graduated;
    this.linkedin = data.linkedin;
    this.resume = data.resume;
    // TODO add additional properties if needed
  }
}
