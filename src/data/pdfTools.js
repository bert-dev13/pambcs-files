import { FiFileMinus, FiMinimize2, FiLayers, FiRotateCw } from 'react-icons/fi';

export const pdfTools = [
  {
    name: 'Remove PDF Pages',
    description: 'Delete selected pages from a PDF document.',
    url: 'https://tools.pdf24.org/en/remove-pdf-pages',
    icon: FiFileMinus,
  },
  {
    name: 'Compress PDF',
    description: 'Reduce the file size of a PDF document.',
    url: 'https://tools.pdf24.org/en/compress-pdf',
    icon: FiMinimize2,
  },
  {
    name: 'Merge PDF',
    description: 'Combine multiple PDF files into one document.',
    url: 'https://tools.pdf24.org/en/merge-pdf',
    icon: FiLayers,
  },
  {
    name: 'Rotate PDF Pages',
    description: 'Correct the orientation of selected PDF pages.',
    url: 'https://tools.pdf24.org/en/rotate-pdf-pages',
    icon: FiRotateCw,
  },
];
