import React from 'react'
import { Layout } from '../components/Layout'
import { Text, TouchableOpacity, View } from 'react-native'
import { LandingScreenProps } from '../utils/types'
import { TaskStyles } from '../styles'

export default function LandingScreen ({navigation}: LandingScreenProps) {
    return (
        <Layout>
            <View>
                <Text style={TaskStyles.text}>Welcome</Text>
                <TouchableOpacity
                    onPress={() => navigation.navigate('Task')}
                    style={TaskStyles.buttonPrimary}
                >
                    <Text style={TaskStyles.buttonText}>Start Task</Text>
                </TouchableOpacity>
            </View>
        </Layout>
    )
}
