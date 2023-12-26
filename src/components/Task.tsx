import { View, Text } from 'react-native';
import { TaskStyles } from '../styles';
import { Checkbox } from 'native-base';

const Task = (props: any) => {

    return (
        <View style={TaskStyles.item}>
            <View style={TaskStyles.itemLeft}>
                {/* <View style={TaskStyles.square}></View> */}
                
                <Text style={TaskStyles.itemText}>{props.text}</Text>
            </View>
            <Checkbox style={{
                alignSelf: 'center',
                alignItems: 'center',
                marginVertical: 18
            }} value="checkbox" aria-label='checkbox' />
        </View>
    )
}

export default Task;