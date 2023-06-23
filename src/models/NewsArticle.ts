export class NewsArticle {
    static nextId = 0;

    newsArticleId: number;
    title: string;
    image: string;
    date: Date;
    content: string[];

    constructor(title: string, image: string, content: string[]) {
        this.newsArticleId = this.getNextId();
        this.image = image;
        this.title = title;
        this.content = content;
        this.date = new Date();
    }

    public getNextId() {
        const retval = NewsArticle.nextId;
        NewsArticle.nextId++;
        return retval;
    }
}
