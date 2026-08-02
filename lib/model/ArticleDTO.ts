export interface ArticleDTO {
    title: string;
    formattedDate: string;
    publishedDate: string;
    modifiedDate?: string;
    content: string;
    excerpt: string;
    slug: string;
    image?: string;
    readingTimeText: string;
}
