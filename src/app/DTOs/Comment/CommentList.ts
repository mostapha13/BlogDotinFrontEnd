export class CommentList{
    constructor(
        public Id:number,
        public postId:number,
        public postTitle:string,
        public text:string,
        public createDate:Date,
        public updateDate:Date
    ){}
}