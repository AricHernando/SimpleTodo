export enum Category {
    all = 'all',
    work = 'work',
    home = 'home',
    personal = 'personal',
    shop = 'shop',
}

export interface Entry {
    id: number;
    description: string;
    category: Category;
}