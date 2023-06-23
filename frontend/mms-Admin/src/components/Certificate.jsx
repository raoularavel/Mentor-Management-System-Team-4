import { Box } from '@mui/material';
import { Document, Font, Image, PDFViewer, Page, StyleSheet, Text, View } from '@react-pdf/renderer';
import PropTypes from "prop-types";
import { useEffect, useRef } from 'react';
import moment from 'moment';
import InriaBoldItalic from "src/assets/fonts/InriaSerif-BoldItalic.ttf";
import InriaRegular from "src/assets/fonts/InriaSerif-Regular.ttf";
import MC from "src/assets/images/MC.png";
import MMC from "src/assets/images/MMC.png";

function Certificate({ certificate_id, issue_date, fullName, role }) {

    const ref = useRef()

    useEffect(() => {
        if (ref.current)
        ref.current.style.height = `${(ref.current.clientWidth + 2) / 1.409395973}px`
    })
    return (
        <Box ref={ref}>
            <PDFViewer showToolbar={false} style={styles.viewer}>
                <Document>
                    <Page style={styles.page} orientation="landscape">
                        <Image src={role === "mentor" ? MC : MMC} style={styles.image} />
                        <View style={styles.title}>
                            <Text style={styles.name}>{fullName}</Text>
                            <Text> </Text>
                            <Text> </Text>
                        </View>
                        <View style={styles.issue_date}>
                            <Text>{moment(issue_date).format('LL')}</Text>
                            <Text style={{ marginTop: 6 }}>{certificate_id}</Text>
                        </View>
                    </Page>
                </Document>
            </PDFViewer>
        </Box>
    )
}

Font.register({
    family: 'InriaSerif',
    fonts: [
        { src: InriaRegular },
        { src: InriaBoldItalic, fontStyle: "italic", fontWeight: 700 }
    ]
});

const styles = StyleSheet.create({
    page: {
        flexDirection: 'row',
        position: "relative",
    },
    title: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        textAlign: 'center',
    },
    name: {
        fontSize: 25,
        fontFamily: 'InriaSerif',
        color: "#023c40",
        fontStyle: "italic",
        fontWeight: "bold"
    },
    image: {
        position: "absolute",
        bottom: 0,
        top: 0,
        left: 0,
        right: 0,
    },
    viewer: {
        display: "flex",
        justifyContent: 'center',
        alignItems: "center",
        width: "100%",
        height: "100%",
        position: 'relative',
        minHeight: "100% !important"
    },
    issue_date: {
        display: "flex",
        justifyContent: "flex-start",
        position: "absolute",
        bottom: 76,
        left: 125,
        width: "100%",
        fontSize: 7,
        color: "#3d3d3d",
        fontFamily: "InriaSerif"
    }
});

Certificate.propTypes = {
    issue_date: PropTypes.string,
    certificate_id: PropTypes.string,
    role: PropTypes.string,
    fullName: PropTypes.string,
}

export default Certificate