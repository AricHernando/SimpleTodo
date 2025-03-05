export enum Category {
    all = 'all',
    work = 'work',
    home = 'home',
    personal = 'personal',
    shop = 'shop',
}

export interface ShopItem {
    items: string;
    quantity: number;
}

export interface Entry {
    id: number;
    description: string;
    category: Category;
    shoppingList?: ShopItem[];
}
