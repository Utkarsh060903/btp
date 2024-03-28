import React from 'react';
import './calender.css';
import { Badge, Calendar } from 'antd';

// Change data source by using JSON from database API call
const getListData = (value) => {
    const data = {
        3: {
            12: [
                { type: 'warning', content: 'This is warning event.' },
                { type: 'success', content: 'This is usual event.' },
            ]
        }, 4: {
            10: [
                { type: 'warning', content: 'This is warning event.' },
                { type: 'success', content: 'This is usual event.' },
                { type: 'error', content: 'This is error event.' },
            ]
        },
        5: {
            8: [
                { type: 'warning', content: 'This is warning event' },
                { type: 'success', content: 'This is very long usual event......' },
                { type: 'error', content: 'This is error event 1.' },
                { type: 'error', content: 'This is error event 2.' },
                { type: 'error', content: 'This is error event 3.' },
                { type: 'error', content: 'This is error event 4.' },
            ]
        }
    }

    return data?.[value.month()]?.[value.date()] || [];
};

const RulesAndRegulations = () => {

    const dateCellRender = (value) => {
        const listData = getListData(value);
        return (
            <ul className="events">
                {listData.map((item) => (
                    <li key={item.content}>
                        <Badge status={item.type} text={item.content} />
                    </li>
                ))}
            </ul>
        );
    };

    const cellRender = (current, info) => {
        if (info.type === 'date') return dateCellRender(current);

        return info.originNode;
    };

    return <Calendar cellRender={cellRender} />;
};

export default RulesAndRegulations;

// Calender reference https://ant.design/components/calendar