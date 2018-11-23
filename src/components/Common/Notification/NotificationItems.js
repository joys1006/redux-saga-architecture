import React from 'react';
import _ from 'lodash';
import { Badge } from 'antd';

const items = (items) => {
    let messages = [];
    if (items.length >= 0) {
        _.reduce(items, (prev, item, i) => {
            messages.push(
                <li key={i}>
                    <div className="item-box">
                        <p className="box-title">{item.name}</p>
                        <div className="box-desc">
                            {item.desc}
                        </div>
                    </div>
                </li>
            )
        }, 0);
    }
    return messages;
}

const NotificationItems = ({ messages }) => {
    return (
        <div className="item-widget">
            <div className="item-inner">
                <Badge count={messages.main.length}>
                    <p className="item-title">중요알림</p>
                </Badge>
                <ul className="main-message">
                    {items(messages.main)}
                </ul>
            </div>
            <div className="item-inner">
                <Badge count={messages.normal.length}>
                    <p className="item-title">알림</p>
                </Badge>
                <ul className="normal-message">
                    {items(messages.normal)}
                </ul>
            </div>
        </div>
    )
}

export default NotificationItems;