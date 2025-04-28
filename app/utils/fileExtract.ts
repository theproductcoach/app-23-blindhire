import mammoth from 'mammoth';
import { TextItem, TextMarkedContent } from 'pdfjs-dist/types/src/display/api';

export async function extractTextFromFile(file: File): Promise<string> {
  if (file.type === 'application/pdf') {
    if (typeof window === 'undefined') {
      throw new Error('PDF extraction is only supported in the browser.');
    }
    const pdfjsLib = await import('pdfjs-dist');
    pdfjsLib.GlobalWorkerOptions.workerSrc = '/pdf.worker.min.js';

    const arrayBuffer = await file.arrayBuffer();
    const pdf = await pdfjsLib.getDocument({ data: arrayBuffer }).promise;
    let text = '';
    for (let i = 1; i <= pdf.numPages; i++) {
      const page = await pdf.getPage(i);
      const content = await page.getTextContent();
      text += content.items.map((item: TextItem | TextMarkedContent) => 'str' in item ? item.str : '').join(' ') + '\n';
    }
    return text;
  } else if (
    file.type === 'application/vnd.openxmlformats-officedocument.wordprocessingml.document' ||
    file.name.endsWith('.docx')
  ) {
    // DOCX extraction
    const arrayBuffer = await file.arrayBuffer();
    const { value } = await mammoth.extractRawText({ arrayBuffer });
    return value;
  } else {
    // Fallback for plain text
    return await file.text();
  }
} 