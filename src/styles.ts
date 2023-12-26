import { StyleSheet } from "react-native";

export const TaskStyles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#E8EAED',
        // alignItems: 'center',
        // justifyContent: 'center',
        padding: 20,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
    },
    text: {
        fontSize: 16,
        color: '#333', // Customize text color
        textAlign: 'center', // Align text to center
    },
    buttonPrimary: {
        color: '#fff',
        backgroundColor: '#000',
        padding: 10,
        borderRadius: 8,
        height: 'auto',
        maxHeight: 40,
        marginVertical: 10
    },
    buttonText: {
        color: '#fff',
    },
    tasksWrapper: {
        paddingTop: 80,
        paddingHorizontal: 20,
    },
    sectionTitle: {
        fontSize: 24,
        fontWeight: 'bold',
        textAlign: 'center'
    },
    items: {
        marginTop: 30,
    },
    writeTaskWrapper: {
        flexDirection: 'row',
        position: 'absolute',
        bottom: 60,
        width: '95%',
        justifyContent: 'space-around',
        alignItems: 'center',
        margin: 'auto',
        marginLeft: 20
    },
    input: {
        paddingVertical: 10,
        paddingHorizontal: 15,
        backgroundColor: '#FFF',
        borderRadius: 10,
        // borderColor: '#C0C0C0',
        // borderWidth: 1,
        width: 250,
    },
    addWrapper: {
        width: 40,
        height: 40,
        backgroundColor: '#FFF',
        borderRadius: 60,
        justifyContent: 'center',
        alignItems: 'center',
        // borderColor: '#C0C0C0',
        // borderWidth: 1,
    },
    addText: {
        fontSize: 20,
    },
    item: {
        backgroundColor: '#FFF',
        paddingHorizontal: 15,
        borderRadius: 10,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: 20,
        shadowColor: '#000',
        shadowOpacity: 0.1,
        shadowRadius: 10,
        shadowOffset: { width: 0, height: 2 },
        elevation: 3, // for Android
    },
    itemLeft: {
        // flexDirection: 'row',
        // alignItems: 'center',
        // flexWrap: 'wrap',
    },
    square: {
        width: 24,
        height: 24,
        backgroundColor: '#55BCF6',
        opacity: 0.4,
        borderRadius: 5,
        marginRight: 15,
    },
    itemText: {
        // maxWidth: '80%',
        margin: 5, // Adjust as needed
    },
    circular: {
        width: 15,
        height: 15,
        borderColor: '#55BCF6',
        borderWidth: 2,
        borderRadius: 5,
        backgroundColor: 'transparent', // Consider adding a background color
    },
});

export const LayoutStyles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 20,
    },
});
