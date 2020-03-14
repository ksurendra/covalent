import { Component } from '@angular/core';
import {
  TdMarkdownNavigatorWindowService,
  IMarkdownNavigatorWindowConfig,
  IMarkdownNavigatorItem,
} from '@covalent/markdown-navigator';

import { mdOptions } from './../markdown-navigator.model';

function prettyJson(items: IMarkdownNavigatorItem[]): string {
  return JSON.stringify(items, undefined, 4);
}

@Component({
  selector: 'markdown-navigator-demo-editor',
  styleUrls: ['./markdown-navigator-demo-editor.component.scss'],
  templateUrl: './markdown-navigator-demo-editor.component.html',
})
export class MarkdownNavigatorDemoEditorComponent {
  public currentTree: IMarkdownNavigatorItem[] = mdOptions[0].value;
  public startAt: IMarkdownNavigatorItem;
  public input: string = prettyJson(this.currentTree);

  constructor(private _markdownNavigatorWindowService: TdMarkdownNavigatorWindowService) {}

  public compareByTitle: (o1: IMarkdownNavigatorItem, o2: IMarkdownNavigatorItem) => boolean = (
    o1: IMarkdownNavigatorItem,
    o2: IMarkdownNavigatorItem,
  ): boolean => o1.title === o2.title;

  public get windowConfig(): IMarkdownNavigatorWindowConfig {
    return { items: this.currentTree, startAt: this.startAt, compareWith: this.compareByTitle };
  }

  public use(items: IMarkdownNavigatorItem[]): void {
    this.currentTree = items;
    this.input = prettyJson(this.currentTree);
    if (this._markdownNavigatorWindowService.isOpen) {
      this.openWindow();
    }
  }

  public openMultiLevel(): void {
    this.startAt = undefined;
    this.use(JSON.parse(this.input));
    this.openWindow();
  }

  public goToTdLoading(): void {
    this.startAt = { title: 'tdLoading' };
    this.use(JSON.parse(JSON.stringify(mdOptions[0].value)));
    this.openWindow();
  }

  public openWindow(): void {
    this._markdownNavigatorWindowService.open(this.windowConfig);
  }
}
