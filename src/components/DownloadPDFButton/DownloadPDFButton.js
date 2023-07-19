// import React from "react";
// import { Button } from "antd";
// import { DownloadOutlined } from "@ant-design/icons";
// import jsPDF from "jspdf";
// import "jspdf-autotable"; // Import the jspdf-autotable plugin
// import * as html2pdf from "html2pdf.js";

// const DownloadPDFButton = () => {
//   const handleDownload = () => {
//     const element = document.querySelector(".cover");

//     const pdfOptions = {
//       filename: "view.pdf",
//       jsPDF: {
//         unit: "px",
//         format: "a2",
//         orientation: "portrait",
//         compress: true,
//       },
//     };
    
   
//     html2pdf().set( pdfOptions ).from(element).save();
//   };

//   return (
//     <Button type="primary" icon={<DownloadOutlined />} onClick={handleDownload}>
//       Download PDF
//     </Button>
//   );
// };

// export default DownloadPDFButton;

import React from "react";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";

const DownloadPDFButton = ({ cardRef }) => {
  const handleDownloadPDF = async () => {
    const cardElement = cardRef.current;
    const cardHeight = cardElement.clientHeight;

    // Calculate the number of pages required based on A3 page height (420mm)
    const a3PageHeight = 1190; // Set a fixed A3 page height in pixels
    const totalPages = Math.ceil(cardHeight / a3PageHeight);

    const pdf = new jsPDF("p", "px", "a3"); // Set the page size to A3

    // Loop through each page and capture the content as an image
    for (let i = 0; i < totalPages; i++) {
      const yOffset = -a3PageHeight * i; // Adjust the yOffset for each page
      const canvas = await html2canvas(cardElement, {
        y: yOffset,
        scale: 1,
      });
      const imgData = canvas.toDataURL("image/jpeg", 1.0);
      if (i > 0) {
        pdf.addPage();
      }
      pdf.addImage(imgData, "JPEG", 0, 0, pdf.internal.pageSize.getWidth(), a3PageHeight);
    }

    pdf.save("child_record_card.pdf");
  };

  return <button onClick={handleDownloadPDF}>Download PDF</button>;
};

export default DownloadPDFButton;
