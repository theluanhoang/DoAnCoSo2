import React from "react";
import { Page, Text, Image, Document, StyleSheet, View } from "@react-pdf/renderer";
import { Font } from "@react-pdf/renderer"


Font.register({
    family: "Roboto",
    fonts: [
        { src: "https://fonts.gstatic.com/s/roboto/v29/KFOlCnqEu92Fr1MmSU5vAw.ttf", fontWeight: 300 },
    ],
})

const styles = StyleSheet.create({
    body: {
        paddingTop: 35,
        paddingBottom: 65,
        paddingHorizontal: 35,
    },
    title: {
        fontSize: 24,
        textAlign: "center",
    },
    text: {
        margin: 12,
        fontSize: 14,
        textAlign: "justify",
        fontFamily: "Roboto",
    },
    image: {
        marginVertical: 15,
        marginHorizontal: 100,
        width: '50px'
    },
    header: {
        fontSize: 12,
        marginBottom: 20,
        textAlign: "center",
        color: "grey",
    },
    pageNumber: {
        position: "absolute",
        fontSize: 12,
        bottom: 30,
        left: 0,
        right: 0,
        textAlign: "center",
        color: "grey",
    },
    view: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
    }
});

function PDF({ data }) {

    return (
        <Document>
            <Page style={styles.body}>
                {
                    data.map((item, index) => (
                        <View style={styles.view} key={index}>
                            <Text>Product ID: {item.id}</Text>
                            <Text>Product name: {item.title}</Text>
                            <View style={styles.view}>
                                <Text>Product image: </Text>
                                <Image style={styles.image} src={item.image} />
                            </View>
                            <Text>Product quantity: {item.qty}</Text>
                            <Text>Product price: {item.priceCost}</Text>
                            <Text>Product status: {item.status}</Text>
                            <Text>Product category: {item.category}</Text>
                            <Text>/----------------------------------------------------------/</Text>
                        </View>

                    ))
                }

                <Text
                    style={styles.pageNumber}
                    render={({ pageNumber, totalPages }) =>
                        `${pageNumber} / ${totalPages}`
                    }
                />
            </Page>
        </Document>
    );
}
export default PDF;