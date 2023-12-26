import { NavigationProp } from "@react-navigation/native";

type RouteList = {
    Landing: undefined;
    Task: undefined;
}

export type LandingScreenProps = {
    navigation: NavigationProp<RouteList, 'Landing'>;
};

export type TaskScreenProps = {
    navigation: NavigationProp<RouteList, 'Task'>;
};