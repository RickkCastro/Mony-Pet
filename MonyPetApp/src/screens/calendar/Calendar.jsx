import React, { useState, useMemo, useCallback, useEffect } from 'react';
import { ScrollView, View, Text, TouchableOpacity, FlatList } from 'react-native';
import { styles } from './styles';

import { Calendar } from 'react-native-calendars';

import { PetImageBT } from '../../components/PetImageBt';
import { SafeAreaView } from 'react-native-safe-area-context';
import { MenuButtons } from '../../components/MenuButtons';

import { AntDesign } from '@expo/vector-icons'

import { LocaleConfig } from 'react-native-calendars';
import { TaskBox } from './components/taskBox/TaskBox';

import { useFocusEffect } from '@react-navigation/native'
import AsyncStorage, { useAsyncStorage } from '@react-native-async-storage/async-storage'
import Toast from 'react-native-toast-message'
import { THEME } from '../../theme';
import { Loading } from '../../components/Loading';

import OneSignal from 'react-native-onesignal';
import { appId, restAPIKey } from '../../Backend/OneSignal/passwords';

LocaleConfig.locales['br'] = {
    monthNames: [
        'Janeiro',
        'Fevereiro',
        'Março',
        'Abril',
        'Maio',
        'Junho',
        'Julho',
        'Agosto',
        'Setembro',
        'Outubro',
        'Novembro',
        'Dezembro'
    ],
    monthNamesShort: ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez'],
    dayNames: ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado'],
    dayNamesShort: ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sab'],
    today: "Hoje"
};
LocaleConfig.defaultLocale = 'br';

export function ScCalendar({ route, navigation }) {
    const { petId, petType, petImage } = route.params
    const [loading, setLoading] = React.useState(true)

    const [tasksData, setTasksData] = useState([])
    const [nextTasksData, setNextTasksData] = useState([])
    const [dailyTasksData, setDailyTasksData] = useState([])
    const [doneTasksData, setDoneTasksData] = useState([])

    const [userId, setUserId] = useState()
    const [pushId, setPushId] = useState()
    const [fakePushId, setFakePushId] = useState()
    const [isSave, setIsSave] = useState(false)

    const [id, setId] = useState()
    const [doneT, setDoneT] = useState()

    useEffect(() => {
        setUserIdF()
    }, [])

    async function setUserIdF() {
        const { userId } = await OneSignal.getDeviceState();
        setUserId(userId)
    }

    const [date, setDate] = useState(() => {
        const date = new Date()
        date.setHours(0, 0, 0, 0)
        return date
    })

    const [selected, setSelected] = useState(() => {
        const date = new Date()

        let d = date.getDate()
        let mo = date.getMonth() + 1
        let y = date.getFullYear()

        let date1 = y + '-' + ('0' + mo).slice(-2) + '-' + ('0' + d).slice(-2)

        return date1
    })

    const onDayPress = useCallback((day) => {
        setSelected(day.dateString)

        let date = new Date(day.dateString)
        date.setDate(date.getDate() + 1)
        date.setHours(0, 0, 0, 0)

        setDate(date)
    }, [])

    function formatStringDate(date = new Date()) {
        let d = date.getDate()
        let mo = date.getMonth() + 1
        let y = date.getFullYear()

        let date1 = y + '-' + ('0' + mo).slice(-2) + '-' + ('0' + d).slice(-2)

        return date1
    }

    const marked = () => {
        let days = nextTasksData.map((item) => formatStringDate(item.date))
        days = [... new Set(days)]

        let points = {}

        for (let index = 0; index < days.length; index++) {
            points[days[index]] = {
                dotColor: THEME.COLORS.BUTTON,
                marked: true
            }
        }

        points[selected] = {
            selected: true,
            disableTouchEvent: true,
            selectedColor: THEME.COLORS.BUTTON,
            selectedTextColor: THEME.COLORS.TEXT_BUTTON
        }

        return (points)
    }

    const { getItem, setItem } = useAsyncStorage('@monypet:tasks')

    async function handleFetchData() {
        setLoading(true)
        const response = await getItem()
        const TotalData = response ? JSON.parse(response) : []

        const data = TotalData.filter((item) => item.petId === petId)

        data.forEach((item) => {
            item.date = new Date(item.date)
        })

        data.sort(function (a, b) {
            return a.date.getTime() - b.date.getTime()
        })

        const nextTasks = data.filter((item) => item.doneT == false)

        setTasksData(data)
        setNextTasksData(nextTasks)
        setLoading(false)
    }

    function handleSetDailyTasksData(tasksData = []) {
        let maxDate = new Date(date)
        maxDate.setDate(date.getDate() + 1)
        maxDate.setHours(0, 0, 0, 0)

        const dailyData = tasksData.filter((item) => item.date >= date && item.date < maxDate && item.doneT == false)

        setDailyTasksData(dailyData)
    }

    function handleSetDoneTasksData(tasksData = []) {
        const doneData = tasksData.filter((item) => item.doneT == true)

        doneData.sort(function (a, b) {
            return b.date.getTime() - a.date.getTime()
        })

        const doneDataF = doneData.slice(0, 15)
        setDoneTasksData(doneDataF)
    }

    useFocusEffect(
        React.useCallback(() => {
            handleFetchData()
        }, [])
    )

    useEffect(() => {
        handleSetDailyTasksData(tasksData)
        handleSetDoneTasksData(tasksData)
    }, [date, tasksData])

    const formatDate = (date = new Date()) => {
        let d = date.getDate()
        let mo = date.getMonth() + 1
        let y = date.getFullYear()

        let date1 = ('0' + d).slice(-2) + '/' + ('0' + mo).slice(-2) + '/' + y

        let h = date.getHours()
        let m = date.getMinutes()

        let time = ('0' + h).slice(-2) + ':' + ('0' + m).slice(-2)

        return (`${date1} - ${time}`)
    }

    function cancelNotification(pushId) {
        const options = {
            method: 'DELETE',
            headers: { accept: 'application/json', Authorization: 'Basic NWZmODk1ZTktYTc3Zi00Y2I4LTgxYmQtNDU4NDU2MTdiMjFi' }
        };

        fetch(`https://onesignal.com/api/v1/notifications/${pushId}?app_id=43517dad-1dea-4573-bbb4-a0135ac4e7f5`, options)
            .then(response => response.json())
            .then(response => console.log(response))
            .catch(err => console.error(err));
    }

    function createNotification(headings = "Titulo", contents = "Teste de notificação", send_after = null) {
        const options = {
            method: "POST",
            headers: {
                accept: "application/json",
                Authorization: restAPIKey,
                "content-type": "application/json",
            },
            body: JSON.stringify({
                headings: { en: headings },
                contents: { en: contents },
                include_player_ids: [userId],
                send_after: send_after,
                app_id: appId,
            }),
        };

        fetch("https://onesignal.com/api/v1/notifications", options)
            .then((response) => response.json())
            .then((response) => { setPushId(response.id), console.log(response) })
            .catch((err) => console.log(err))
    }

    useEffect(() => {
		if (isSave) {
			handleDoneTask(id, doneT)
		}
	}, [pushId])

    async function handleDoneTask(id, doneT = false) {
        const response = await getItem()
        const TotalData = response ? JSON.parse(response) : []

        let currentTask = TotalData.find((task) => task.id == id)
        currentTask.doneT = !doneT

        currentTask.pushId = pushId
        console.log(pushId)

        const index = TotalData.indexOf(TotalData.find((task) => task.id === id))
        TotalData[index] = currentTask
        await setItem(JSON.stringify(TotalData))

        Toast.show({
            type: 'success',
            text1: 'Compromissos Atulizados',
        })

        setPushId(undefined)

        handleFetchData()
    }

    async function setNotification(id, doneT = false) {
        const response = await getItem()
        const TotalData = response ? JSON.parse(response) : []

        setIsSave(true)
        setId(id)
        setDoneT(doneT)

        let currentTask = TotalData.find((task) => task.id == id)
        currentTask.doneT = !doneT

        if (!doneT) { //concluido
            if (currentTask.pushId) {
                cancelNotification(currentTask.pushId)
            }
            setPushId(null)
        } else {
            if (currentTask.isNotify && new Date(currentTask.date) > new Date()) {
                createNotification("MonyPet - Compromisso", `Você possui um compromisso marcado: ${currentTask.titleT}`,
                    new Date(currentTask.date).toUTCString())
            } else {
                setPushId(null)
            }
        }
    }

    return (
        <SafeAreaView style={styles.container}>
            <ScrollView contentContainerStyle={styles.scrollStyle} scrollEnabled>

                {/* Cabeçalho */}
                <View style={styles.headerStyle}>
                    <Text style={styles.Title}>Calendário</Text>
                    <PetImageBT onPress={() => navigation.navigate('ScVizuPet', { petId: petId })}
                        source={petImage ? { uri: petImage } : petType == 'dog' ? require('../../assets/images/dogIcon.png') : require('../../assets/images/catIcon.png')} />
                </View>

                <Calendar
                    theme={styles.calendarTheme}
                    style={styles.calendarStyles}
                    markedDates={marked()}
                    onDayPress={onDayPress}
                />

                {loading ?
                    <View style={{ alignSelf: 'center', justifyContent: 'center', marginTop: 20 }}>
                        <Loading size={10} />
                    </View> :
                    nextTasksData.length > 0 ?
                        <View>
                            <Text style={styles.titlte2}>Compromissos do dia:</Text>
                            {dailyTasksData.length > 0 ?
                                <View style={styles.dayTasksList}>
                                    <ScrollView nestedScrollEnabled>
                                        {dailyTasksData.map((item) => {
                                            return (
                                                <TaskBox key={item.id}
                                                    done={item.doneT}
                                                    icon={item.typeT}
                                                    date={formatDate(item.date)}
                                                    title={item.titleT}
                                                    desc={item.descT ? item.descT : 'Sem descrição'}
                                                    handleCheck={() => setNotification(item.id, item.doneT)}
                                                    handleTaskPress={() => navigation.navigate('ScAddTask',
                                                        { petId: petId, taskId: item.id, screenTitle: 'Editar compromisso' })}
                                                />
                                            )
                                        })}
                                    </ScrollView>
                                </View> :
                                <View>
                                    <Text style={styles.txt1}>Seu pet não possui nenhum compromisso para esse dia</Text>
                                </View>
                            }

                            <Text style={styles.titlte2}>Todos os compromissos:</Text>
                            <View style={styles.dayTasksList}>
                                <ScrollView nestedScrollEnabled>
                                    {nextTasksData.map((item) => {
                                        return (
                                            <TaskBox key={item.id}
                                                done={item.doneT}
                                                icon={item.typeT}
                                                date={formatDate(item.date)}
                                                title={item.titleT}
                                                desc={item.descT ? item.descT : 'Sem descrição'}
                                                handleCheck={() => setNotification(item.id, item.doneT)}
                                                handleTaskPress={() => navigation.navigate('ScAddTask',
                                                    { petId: petId, taskId: item.id, screenTitle: 'Editar compromisso' })}
                                            />
                                        )
                                    })}
                                </ScrollView>
                            </View>
                        </View> :
                        <View>
                            <Text style={styles.titlte2}>Seu pet não possui nenhum compromisso</Text>
                        </View>
                }

                <TouchableOpacity style={styles.addButton} onPress={() => navigation.navigate('ScAddTask', { petId: petId, screenTitle: 'Adicionar compromisso', clickDate: date.toDateString() })}>
                    <AntDesign name="plus" size={35} color={THEME.COLORS.TEXT_BUTTON} style={{ margin: 8 }} />
                </TouchableOpacity>

                {loading ?
                    <View style={{ alignSelf: 'center', justifyContent: 'center', marginTop: 20 }}>
                        <Loading size={10} />
                    </View> :
                    doneTasksData.length > 0 &&
                    <View>
                        <Text style={styles.titlte2}>Compromissos concluídos:</Text>
                        <View style={styles.dayTasksList}>
                            <ScrollView nestedScrollEnabled>
                                {doneTasksData.map((item) => {
                                    return (
                                        <TaskBox key={item.id}
                                            done={item.doneT}
                                            icon={item.typeT}
                                            date={formatDate(item.date)}
                                            title={item.titleT}
                                            desc={item.descT ? item.descT : 'Sem descrição'}
                                            handleCheck={() => setNotification(item.id, item.doneT)}
                                            handleTaskPress={() => navigation.navigate('ScAddTask',
                                                { petId: petId, taskId: item.id, screenTitle: 'Editar compromisso' })}
                                        />
                                    )
                                })}
                            </ScrollView>
                        </View>
                    </View>
                }

            </ScrollView>

            {/* Menu de botoes */}
            <MenuButtons petType={petType} petId={petId} petImage={petImage}
                handlePlusBt={() => navigation.navigate('ScAddTask', { petId: petId, screenTitle: 'Adicionar compromisso', clickDate: date.toDateString() })} />
        </SafeAreaView>
    );
}