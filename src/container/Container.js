import React, { useEffect, useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { Button } from 'antd-mobile-rn';
import Table from '../components/table';
import AddEvent from '../components/addEvent';

export default function Container(props) {
    const [ toggleAddEvent, setToggleAddEvent ] = useState(false);
    const [ pointerEvents, setPointerEvents ] = useState();
    const [ currentEvent, setCurrentEvent ] = useState({});

    useEffect(() => {
        props.getEventList();
    }, []);

    const handleButtonClick = () => {
        setToggleAddEvent(true);
        setPointerEvents('none');
    };

    let addWindow;
    if(toggleAddEvent) {
        addWindow = <AddEvent
            style={styles.addWindow}
            setToggleAddEvent={setToggleAddEvent}
            setPointerEvents={setPointerEvents}
            currentEvent={currentEvent}
        />
    }

    return (
        <View>
            <View pointerEvents={pointerEvents} style={toggleAddEvent ? styles.toggleAddEvent : {}}>
                <Button type='primary' onClick={handleButtonClick}>Add</Button>
                <Table props={props} />
            </View>
            { addWindow }
        </View>
    )
}
 const styles = StyleSheet.create({
     toggleAddEvent: {
         opacity: 0,
     },
     addWindow: {
         marginTop: 0
     }
 });
