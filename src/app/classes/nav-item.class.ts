export class NavItem {
    name: string;
    subItems: NavItem[];

    constructor(name: string, subItems: NavItem[] = undefined) {
        this.name = name;
        this.subItems = subItems;
    }
}