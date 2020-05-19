export class editAuthorDTO{
    constructor(
        public id:number,
        public  firstName: string,
        public  lastName: string,
        public  userName: string,
        public  email: string,
        public isDelete:boolean,
        public createDate:Date,
        public updateDate:Date

    ){}
}