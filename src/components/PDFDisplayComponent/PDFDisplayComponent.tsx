// components/PDFDisplayComponent.tsx
import React, { useState } from "react";
import { Document, Page } from "react-pdf";
import { pdfjs } from "react-pdf";

pdfjs.GlobalWorkerOptions.workerSrc = "/pdf.worker.min.js";

type Props = {
  url: string;
};

const PDFDisplayComponent: React.FC<Props> = ({ url }) => {
  const [numPages, setNumPages] = useState<number | null>(null);

  function onDocumentLoadSuccess({ numPages }: { numPages: number }) {
    setNumPages(numPages);
  }

  return (
    <div className="flex items-center justify-center h-full">
      <div className="shadow-md rounded-lg overflow-y-auto max-h-[80vh] scrollbar-hide">
        <Document 
          file={url}
          onLoadSuccess={onDocumentLoadSuccess}
        >
          {Array.from(new Array(numPages), (el, index) => (
            <Page
              key={`page_${index + 1}`}
              pageNumber={index + 1}
              className="w-full mb-4"
              renderTextLayer={false}
              renderAnnotationLayer={false}
            />
          ))}
        </Document>
      </div>
    </div>
  );
};

export default PDFDisplayComponent;