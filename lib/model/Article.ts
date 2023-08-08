import {format} from "date-fns";
import readingTime, {ReadTimeResults} from "reading-time";
import {ArticleDTO} from "@lib/model/ArticleDTO";

export class Article {
    title: String;
    date: Date;
    content: String;
    excerpt: String;
    slug: String;
    readingTimeResults: ReadTimeResults;

    constructor(title: String, date: Date, content: String, excerpt: String, slug: String) {
        this.title = title;
        this.date = date;
        this.content = content;
        this.excerpt = excerpt;
        this.slug = slug;
        this.readingTimeResults = readingTime(content.toString())
    }

    getDateString(): String {
        return format(this.date, "LLLL do, yyyy")
    }

    getReadTimeString(): String {
        return this.readingTimeResults.text
    }

    getArticleDTO(): ArticleDTO {
        return {
            title: this.title.toString(),
            date: this.getDateString().toString(),
            content: this.content.toString(),
            excerpt: this.excerpt.toString(),
            slug: this.slug.toString(),
            readingTimeText: this.getReadTimeString().toString()
        }
    }
}
