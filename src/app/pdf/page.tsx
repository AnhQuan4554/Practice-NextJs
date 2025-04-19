"use client";

import React from "react";
import {
  Page,
  Text,
  View,
  Document,
  StyleSheet,
  PDFViewer,
  usePDF,
} from "@react-pdf/renderer";

const styles = StyleSheet.create({
  page: {
    flexDirection: "column",
    backgroundColor: "#E4E4E4",
    width: "100%",
  },
  section: {
    // flexGrow: 1,
    marginTop: "20px",
    display: "flex",
    flexDirection: "column",
  },
  text: {
    fontSize: 24,
  },
});
const myArray1 = Array.from({ length: 1 }, (_, i) => i + 1);
const myArray2 = Array.from({ length: 80 }, (_, i) => i + 1);
const ReactPdf = () => {
  return (
    <Document>
      <Page size="A4" style={styles.page}>
        {/* View 1 */}
        <View style={styles.section}>
          {myArray1.map((item, index) => (
            <Text key={index} style={styles.text}>
              Section {index}
            </Text>
          ))}
        </View>
        <View style={styles.section} wrap>
          {myArray2.map((item, index) => (
            <Text key={index} style={styles.text}>
              Section XX {index}
            </Text>
          ))}
        </View>
        {/* View 2 - Chỉ nhảy trang nếu tràn */}
        {/* <View
          style={styles.section}
          render={({ pageNumber, totalPages }) => {
            console.log("pageNumber+++", pageNumber);
            console.log("totalPages+++", totalPages);
            return pageNumber < totalPages ? (
              <View>
                {myArray2.map((item, index) => (
                  <Text key={index} style={styles.text}>
                    Section XX1111
                  </Text>
                ))}
              </View>
            ) : (
              <View break>
                {myArray2.map((item, index) => (
                  <Text key={index} style={styles.text}>
                    Section XX2222
                  </Text>
                ))}
              </View>
            );
          }}
        /> */}
      </Page>
    </Document>
  );
};

export default ReactPdf;

export const PDFViewerTest = () => {
  return (
    <PDFViewer style={{ width: "90%", height: "100vh" }}>
      <ReactPdf />
    </PDFViewer>
  );
};
