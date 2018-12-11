import React from 'react';
import NoLog from '../../../Image/bitmap.svg';

const Processeditem= (props) => (
    <div className="items">
        <div className="item">
            <label>{props.type}</label>
            <div className="Obox">
                <img src={NoLog} alt="logo"></img>
                <div className="content">
                    <p>{props.Company}</p>
                    <span className="Description">
                        {props.Description}
                    </span>
                </div>
            </div>
        </div>
    </div>
);

export default Processeditem;