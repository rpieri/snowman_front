export class CommandResult<T> {
    constructor(
        public sucess: boolean,
        public hasAProblem: boolean,
        public message: string,
        public data?: T
    ) { }
}