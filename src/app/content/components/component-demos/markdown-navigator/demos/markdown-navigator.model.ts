import { IMarkdownNavigatorItem } from '@covalent/markdown-navigator';

export const singleLevelTree: IMarkdownNavigatorItem[] = [
  {
    url: 'https://github.com/Teradata/covalent/blob/develop/README.md',
  },
];
export const biLevelTree: IMarkdownNavigatorItem[] = [
  {
    url: 'https://github.com/Teradata/covalent/blob/develop/README.md',
    title: 'Covalent',
  },
  {
    url: 'https://raw.githubusercontent.com/angular/angular/master/README.md',
    title: 'Angular',
  },
  {
    markdownString: '\n\n# Raw markdown example\n \n> Amazing\n\n1. List\n2. of\n3. items\n\n',
    title: 'Raw markdown',
  },
];
export const multiLevelTree: IMarkdownNavigatorItem[] = [
  {
    title: 'Covalent',
    children: [
      {
        title: 'Components',
        children: [
          {
            url: 'https://raw.githubusercontent.com/Teradata/covalent/develop/src/platform/core/loading/README.md',
            title: 'tdLoading',
          },
        ],
      },
    ],
  },
  biLevelTree[1],
];

export const mdOptions: { name: string; value: IMarkdownNavigatorItem[] }[] = [
  { name: 'Multi-level', value: multiLevelTree },
  { name: 'Bi-level', value: biLevelTree },
  { name: 'Single-level', value: singleLevelTree },
];
