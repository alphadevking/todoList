import { useEffect } from "react";
import { Animated, View } from "react-native";
import { LayoutStyles, TaskStyles } from "../styles";

export const AnimatedLayout = ({ children }: any) => {

    const fadeAnim = new Animated.Value(0.75);

    useEffect(() => {
        Animated.timing(fadeAnim, {
            toValue: 1,
            // delay: 500,
            duration: 800,
            useNativeDriver: true,
        }).start();
    }, []);

    return (
        <Animated.View style={[TaskStyles.container, { opacity: fadeAnim, gap: 5 }]}>
            {
                children
            }
        </Animated.View>
    )
}

export const Layout = ({ children }: any) => {

    return (
        <View style={[TaskStyles.container, LayoutStyles.container, { gap: 5 }]}>
            {
                children
            }
        </View>
    )
}
