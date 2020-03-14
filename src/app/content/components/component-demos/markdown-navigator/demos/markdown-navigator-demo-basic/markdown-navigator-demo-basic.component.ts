import { Component } from '@angular/core';
import { IMarkdownNavigatorWindowConfig, IMarkdownNavigatorItem } from '@covalent/markdown-navigator';

import { mdOptions } from './../markdown-navigator.model';

function prettyJson(items: IMarkdownNavigatorItem[]): string {
  return JSON.stringify(items, undefined, 4);
}

@Component({
  selector: 'markdown-navigator-demo-basic',
  styleUrls: ['./markdown-navigator-demo-basic.component.scss'],
  templateUrl: './markdown-navigator-demo-basic.component.html',
})
export class MarkdownNavigatorDemoBasicComponent {
  public options: { name: string; value: IMarkdownNavigatorItem[] }[] = mdOptions;
  public selected: { name: string; value: IMarkdownNavigatorItem[] } = this.options[0];
  public currentTree: IMarkdownNavigatorItem[] = this.selected.value;
  public input: string = prettyJson(this.currentTree);

  public compareByTitle: (o1: IMarkdownNavigatorItem, o2: IMarkdownNavigatorItem) => boolean = (
    o1: IMarkdownNavigatorItem,
    o2: IMarkdownNavigatorItem,
  ): boolean => o1.title === o2.title;

  public get windowConfig(): IMarkdownNavigatorWindowConfig {
    return { items: this.currentTree, compareWith: this.compareByTitle };
  }

  public selectOption(): void {
    this.use(this.selected.value);
  }

  public use(items: IMarkdownNavigatorItem[]): void {
    this.currentTree = items;
    this.input = prettyJson(this.currentTree);
  }
}
