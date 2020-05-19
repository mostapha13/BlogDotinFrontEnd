export class Posts{
    constructor(
        public id:number,
        public title:string,
        public authorId:number,
        public authorName:string,
        public subjectId:number,
        public subjectName:string,
        public text:string,
        public createDate:Date,
        public updateDate:Date




    ){}
}