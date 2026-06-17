import { FiFileMinus, FiMinimize2, FiLayers, FiRotateCw } from 'react-icons/fi';

export const pdfTools = [
  {
    name: 'Remove PDF Pages',
    description: 'Delete unwanted pages from PDF files.',
    url: 'https://tools.pdf24.org/en/remove-pdf-pages',
    icon: FiFileMinus,
    variant: 'blue',
  },
  {
    name: 'Compress PDF',
    description: 'Reduce PDF file size quickly and easily.',
    url: 'https://tools.pdf24.org/en/compress-pdf',
    icon: FiMinimize2,
    variant: 'blue-dark',
  },
  {
    name: 'Merge PDF',
    description: 'Combine multiple PDF files into one.',
    url: 'https://tools.pdf24.org/en/merge-pdf',
    icon: FiLayers,
    variant: 'blue',
  },
  {
    name: 'Rotate PDF Pages',
    description: 'Rotate pages to the correct orientation.',
    url: 'https://tools.pdf24.org/en/rotate-pdf-pages',
    icon: FiRotateCw,
    variant: 'blue-dark',
  },
];
