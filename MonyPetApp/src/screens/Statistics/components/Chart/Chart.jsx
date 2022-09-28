import React from 'react'
import { View, Text } from 'react-native'

import { Grid, LineChart } from 'react-native-svg-charts'
import { Defs, LinearGradient, Stop, Circle } from 'react-native-svg'
import { MaterialCommunityIcons } from '@expo/vector-icons'
import { THEME } from '../../../../theme'

export function Chart() {
    const data = [
        { value: 1, date: '01 / 02' },
        { value: 1, date: '02 / 02' },
        { value: 2, date: '03 / 02' },
        { value: 3, date: '04 / 02' },
        { value: 4, date: '05 / 02' },
        { value: 5, date: '05 / 02' }
    ]

    const contentInset = { top: 10, bottom: 10, right: 10, left: 10 }
    const iconSize = 22

    const Gradient = () => (
        <Defs key={'gradient'}>
            <LinearGradient id={'gradient'} x1={'0'} y={'0%'} x2={'0%'} y2={'100%'}>
                <Stop offset={'0%'} stopColor={'#B589D6'} />
                <Stop offset={'100%'} stopColor={'#804FB3'} />
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
                stroke={ 'rgb(134, 65, 244)' }
                fill={ 'white' }
            />
        ))
    }

    return (
        <View style={{ height: 220, padding: 20, flexDirection: 'row' }}>
            <View style={{ justifyContent: 'space-between', marginRight: 10, marginBottom: 15}}>
                <MaterialCommunityIcons name={'emoticon-excited'} size={iconSize} color={'#107d07'} />
                <MaterialCommunityIcons name={'emoticon-happy'} size={iconSize} color={'#68b166'} />
                <MaterialCommunityIcons name={'emoticon-neutral'} size={iconSize} color={'#7a7777'} />
                <MaterialCommunityIcons name={'emoticon-sad'} size={iconSize} color={'#e1cc0f'} />
                <MaterialCommunityIcons name={'emoticon-angry'} size={iconSize} color={'#a54c1b'} />
                <MaterialCommunityIcons name={'null'} size={iconSize} color={'black'} />
            </View>
            <View style={{ flex: 1 }}>
                <LineChart
                    style={{ flex: 1 }}
                    data={data.map((d) => d.value)}
                    contentInset={contentInset}
                    svg={{
                        strokeWidth: 3,
                        stroke: 'url(#gradient)',
                    }}
                    yMin={0}
                >
                    <Grid />
                    <Gradient />
                    <Decorator/>
                </LineChart>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                    {data.map((d) => {
                        return (
                            <Text style={{ textAlign: 'center', fontSize: THEME.FONT_SIZE.SM }}>{d.date}</Text>
                        )
                    })}
                </View>
            </View>
        </View>
    )
}