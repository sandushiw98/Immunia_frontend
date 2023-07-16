// import React from "react";
// import { saveAs } from 'file-saver';
// import pdfMake from 'pdfmake/build/pdfmake';
// import pdfFonts from 'pdfmake/build/vfs_fonts';
// import { Button } from "@mui/material";
// import DownloadIcon from '@mui/icons-material/Download';
// import { color } from "@mui/system";
// import { imageUrl } from "./PDFContent/Image";

// pdfMake.vfs = pdfFonts.pdfMake.vfs;

// const generatePDF = (values) => {
//   const docDefinition = {
//     pageMargins: [30, 0, 30, 20],
//     content: [
      
//       {
//         image: imageUrl,
//         width: 650,
//         alignment: 'center',
//         margin: [0, 0, 0, 20],
//       },
//       { text: 'Personal Details', style: 'header' },
//       {
//         style: 'table',
//         table: {
//           widths: ['', ''],
//           body: [
//             ['Title', values.salutation],
//             ['NIC', values.nic2],
//             ['Name', values.fullname],
//             ['Gender', values.gender] ,
//             ['Date of Birth', values.dob],
//             ['Civil Status', values.civilstatus] ,
//             ['Sri Lanka Citizenship',values.citizenship ],
//           ].filter(Boolean),
//         },
//       },
//       { text: 'Contact Information', style: 'header' },
//       {
//         style: 'table',
//         table: {
//           widths: ['', ''],
//           body: [
//             ['Mobile Number', values.contactnumber],
//             values.contactnumber2 ? ['Resident Number', values.contactnumber2] : null,
//             ['Email', values.email],
//           ].filter(Boolean),
//         },
//       },
//       { text: 'Address', style: 'header' },
//       {
//         style: 'table',
//         table: {
//           widths: ['*'],
//           body: [
//             [values.addressline1],
//             [values.addressline2],
//             values.addressline3 ? [values.addressline3]: null,
//             values.province && values.districtsecretariat ? [`${values.province}, ${values.districtsecretariat}`] : null,
//             [values.gramaniladaridivision],
//           ].filter(Boolean),
//         },
//       },
//       { text: 'Education Qualifications', style: 'header' },
 
   


//     ],
//     styles: {
//       header: {
//         fontSize: 18,
//         bold: true,
     
//       },
//       table: {
//         margin: [0, 0, 0, 20],
//       },
     
//     },
//     defaultStyle: {
//       font: 'Roboto',

//     },
//   };

//   const pdfDocGenerator = pdfMake.createPdf(docDefinition);
//   pdfDocGenerator.getBuffer((buffer) => {
//     const blob = new Blob([buffer], { type: 'application/pdf' });
//     saveAs(blob, 'form.pdf');
//   });
// };

// const DownloadPDFButton = ({ values }) => {
//   const handleClick = () => {
//     generatePDF(values);
//   };

//   return (
//     <div style={{ marginTop: "10px" }}>
//       <Button variant="contained" startIcon={<DownloadIcon />} color="success" onClick={handleClick}>
//         Download PDF
//       </Button>
//     </div>
//   );
// };

// export default DownloadPDFButton;