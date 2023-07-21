export class LocalStorageUtils {
  static writeElemInItem(
    element: { [key: string]: any },
    nameOfItem: string
  ): void {
    const item = JSON.parse(localStorage.getItem(nameOfItem));
    item.push(element);
    localStorage.setItem(nameOfItem, JSON.stringify(item));
  }

  static getItem(nameOfItem: string): any[] {
    return JSON.parse(localStorage.getItem(nameOfItem)) as any[];
  }

  static getElementById(nameOfItem: string, id: number) {
    const item: any[] = JSON.parse(localStorage.getItem(nameOfItem));
    return item.find((element) => element.id === id);
  }

  static setItem(nameOfItem: string, item: any[]): void {
    localStorage.setItem(nameOfItem, JSON.stringify(item));
  }
}
