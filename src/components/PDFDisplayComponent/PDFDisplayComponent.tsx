// components/PDFDisplayComponent.tsx
import React, { useState } from "react";
import { Document, Page } from "react-pdf";
import {pdfjs} from "react-pdf"

pdfjs.GlobalWorkerOptions.workerSrc="/pdf.worker.min.js"
pdfjs

type Props = {
  url: string;
};

const PDFDisplayComponent: React.FC<Props> = ({ url }) => {
  
  return (
    <div className="flex items-center justify-center h-full">
    <div className="shadow-md rounded-lg overflow-x-scroll scrollbar-hide">
        <Document file={url}>
          <Page pageNumber={1} className="w-full" renderTextLayer={false} renderAnnotationLayer={false}/>
        </Document>
      </div>
    </div>
  );
};

export default PDFDisplayComponent;
