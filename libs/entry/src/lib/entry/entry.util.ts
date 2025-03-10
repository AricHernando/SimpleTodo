export enum Category {
    all = 'all',
    work = 'work',
    home = 'home',
    personal = 'personal',
    shop = 'shop',
}

export interface ShoppingListItems {
    item: string
    quantity: number;
}

export interface Entry {
    id: number;
    title: string;
    description: string;
    category: Category;
    shoppingList?: ShoppingListItems[];
}
