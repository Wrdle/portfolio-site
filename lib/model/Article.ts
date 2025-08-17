import {format} from "date-fns";
import readingTime, {ReadTimeResults} from "reading-time";
import {ArticleDTO} from "@lib/model/ArticleDTO";

export class Article {
    readonly title: string;
    readonly date: Date;
    readonly content: string;
    readonly excerpt: string;
    readonly slug: string;
    readonly readingTimeResults: ReadTimeResults;

    constructor(title: string, date: Date, content: string, excerpt: string, slug: string) {
        this.title = title;
        this.date = date;
        this.content = content;
        this.excerpt = excerpt;
        this.slug = slug;
        this.readingTimeResults = readingTime(content.toString())
    }

    getDateString(): string {
        return format(this.date, "LLLL do, yyyy")
    }

    getReadTimeString(): string {
        return this.readingTimeResults.text
    }

    getArticleDTO(): ArticleDTO {
        return {
            title: this.title,
            formattedDate: this.getDateString().toString(),
            content: this.content,
            excerpt: this.excerpt,
            slug: this.slug,
            readingTimeText: this.getReadTimeString()
        }
    }
}
