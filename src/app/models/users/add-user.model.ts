export class AddUser {
    public constructor(
        public externalId: string,
        public name: string,
        public email: string,
        public phoneNumber?: string
    ) { };
}