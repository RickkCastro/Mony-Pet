import React from 'react'
import { View, Text, ScrollView } from 'react-native'

import { Grid, LineChart } from 'react-native-svg-charts'
import { Defs, LinearGradient, Stop, Circle } from 'react-native-svg'
import { MaterialCommunityIcons } from '@expo/vector-icons'

import { styles } from './styles'
import { THEME } from '../../../../theme'

export function Chart(props) {
    const data = props.data ? props.data : [
        { value: 1, date: '01 / 05' },
        { value: 1, date: '02 / 05' },
        { value: 1, date: '03 / 05' },
        { value: 1, date: '04 / 05' },
        { value: 1, date: '05 / 05' },
        { value: 5, date: '05 / 05' },
        { value: 5, date: '05 / 05' },
    ]
    const emojiList = props.emojiList ? props.emojiList : [
        {name: 'emoticon-excited', color: THEME.COLORS.EMOTE_EXCITED},
        {name: 'emoticon-happy', color: THEME.COLORS.EMOTE_HAPPY},
        {name: 'emoticon-neutral', color: THEME.COLORS.EMOTE_NEUTRAL},
        {name: 'emoticon-sad', color: THEME.COLORS.EMOTE_SAD},
        {name: 'emoticon-angry', color: THEME.COLORS.EMOTE_ANGRY},
        {name: 'null', color: '#000'}
    ]

    const contentInset = { top: 10, bottom: 10, right: 10, left: 10 }
    const iconSize = 22

    const Gradient = () => (
        <Defs key={'gradient'}>
            <LinearGradient id={'gradient'} x1={'0'} y={'0%'} x2={'0%'} y2={'100%'}>
                <Stop offset={'0%'} stopColor={THEME.COLORS.PRIMARY} />
                <Stop offset={'100%'} stopColor={THEME.COLORS.BUTTON} />
            </LinearGradient>
        </Defs>
    )

    const Decorator = ({ x, y, data }) => {
        return data.map((value, index) => (
            <Circle
                key={ index }
                cx={ x(index) }
                cy={ y(value) }
                r={ 4 }
                stroke={ THEME.COLORS.PRIMARY }
                fill={ 'white' }
            />
        ))
    }

    return (
        <ScrollView horizontal showsHorizontalScrollIndicator={false} 
        contentContainerStyle={styles.scrollGraphic}>
            {/* Emojis - eixo y*/}
            <View style={styles.graphicY}>
                {emojiList.map((emoji, index) => {
                    return(
                        <MaterialCommunityIcons key={index} 
                            name={emoji.name} size={iconSize} color={emoji.color} />
                    )
                })}
            </View>
            <View style={{ flex: 1 }}>
                {/* Grafico */}
                <LineChart
                    style={{ flex: 1, minWidth: 300}}
                    data={data.map((d) => d.value)}
                    contentInset={contentInset}
                    svg={{
                        strokeWidth: 5,
                        stroke: 'url(#gradient)',
                    }}
                    yMin={0}
                    yMax={5}
                >
                    <Grid />
                    <Gradient />
                    <Decorator/>
                </LineChart>
                {/* Datas - eixo x */}
                <View style={styles.graphicX}>
                    {data.map((d, index) => {
                        return (
                            <Text key={index} style={styles.textGraphicX}>{d.date}</Text>
                        )
                    })}
                </View>
            </View>
        </ScrollView>
    )
}