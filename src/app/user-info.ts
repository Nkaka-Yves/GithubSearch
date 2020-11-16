export class UserInfo {
    constructor(
        public name:string,
        public login:string,
        public location:string,
        public public_repos: number,
        public followers:number,
        public following:number,
        public avatar_url:string,
        public created_at:Date,
        public html_url:string
    ) {}
}
