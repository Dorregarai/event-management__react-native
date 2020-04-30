import React, { useState } from 'react';
import { View, Picker } from 'react-native';
import { DatePicker, Button, InputItem } from 'antd-mobile-rn';
import moment from 'moment';

export default function AddEvent(props) {
    const [ selectValue, setSelectValue ] = useState(
    props.currentEvent.eventType ? props.currentEvent.eventType : 'MEETING'
);
    const [ nameValue, setNameValue ] = useState(
        props.currentEvent.eventName ? props.currentEvent.eventName : undefined
    );
    const [ dateValue, setDateValue ] = useState(
        props.currentEvent.date ? props.currentEvent.date : moment(new Date()).format('YYYY-MM-DD')
    );
    const [ placeValue, setPlaceValue ] = useState(
        props.currentEvent.place ? props.currentEvent.place : undefined
    );
    const [ addInfValue, setAddInfValue ] = useState(
        props.currentEvent.additionalInfo ? props.currentEvent.additionalInfo : undefined
    );

    const handelOnCancelClick = () => {
        props.setToggleAddEvent(false);
        props.setPointerEvents('auto');
    };

    return (
        <View style={props.style}>
            <InputItem placeholder='Name' value={nameValue} onChange={value => setNameValue(value)} />
            <Picker title='Type' value={selectValue} onChange={value => setSelectValue(value)} >
                <Picker.Item label='MEETING' value='MEETING' />
                <Picker.Item label='TEA PARTY' value='TEA PARTY' />
            </Picker>
            <DatePicker />
            <InputItem placeholder='Place' value={placeValue} onChange={value => setPlaceValue(value)} />
            <InputItem placeholder='Additional' value={addInfValue} onChange={value => setAddInfValue(value)} />
            <Button type='primary' style={{margin: 5}}>Submit</Button>
            <Button type='primary' style={{margin: 5}} onClick={handelOnCancelClick}>Cancel</Button>
        </View>
    )
}
