// components/PDFDisplayComponent.tsx
import React, { useState } from "react";
import { Document, Page } from "react-pdf";
import {pdfjs} from "react-pdf"

pdfjs.GlobalWorkerOptions.workerSrc="/pdf.worker.min.js"

type Props = {
  url?: string;
};

const PDFDisplayComponent: React.FC<Props> = ({ url }) => {
  return (
    <Document file={url}>
      <Page pageNumber={1} />
    </Document>
  );
};

export default PDFDisplayComponent;
