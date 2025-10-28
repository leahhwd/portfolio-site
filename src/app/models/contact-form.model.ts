export class ContactFormModel {
    constructor(
        public name: string = '',
        public email: string = '',
        public interest: string = '',
        public budget?: string,
        public message: string = ''
    ) {}
}