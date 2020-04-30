import React, {useState} from 'react';
import { View } from 'react-native';
import {Accordion, Button, List} from 'antd-mobile-rn';

export default function Table(props) {
    const renderItem = event => {
        return(
            <Accordion.Panel header={event.eventName}>
                <List>
                    <List.Item>{event.eventType}</List.Item>
                    <List.Item>{event.eventName}</List.Item>
                    <List.Item>{event.date}</List.Item>
                    <List.Item>{event.createdOn}</List.Item>
                    <List.Item>{event.place}</List.Item>
                    <List.Item>{event.additionalInfo}</List.Item>
                    <Button type='ghost' style={{margin: 5}}>Edit</Button>
                    <Button type='ghost' style={{margin: 5}}>Remove</Button>
                </List>
            </Accordion.Panel>
        )
    };

    return (
        <View>
            <Accordion>
                {
                    props.props.data.map(event => renderItem(event))
                }
            </Accordion>
        </View>
    )
}
