export class Image {
    id?: number | null;
    url: string;
    description: string;

    constructor() {
        this.id = null;
        this.url = '';
        this.description = '';
    }
}
