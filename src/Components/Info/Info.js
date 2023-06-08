import React from 'react';
import './Info.css'

export default class Card extends React.Component {
    render() {
        return (
            <div className="info">
                <p>This is a demo project with the main goal to integrate with OpenAI API.</p>
                <address className="info-address">
                    <span>If you have questions, do not hesitate to email me</span>
                    <a href="mailto:batalshikov.d@gmail.com">Dima Batalshikov</a>
                </address>
            </div>
        )
    }
}