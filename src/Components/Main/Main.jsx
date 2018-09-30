import React from 'react';
import './Main.css';
import {connect} from 'react-redux';
import MainItems from './MainItems/MainItems';

const Main = (props) => {

    return (
        <div>
            <div className='container'>
                <span className='rates'>Exchange rates</span>
            </div>
            {props.getExchangerateReducers.map(el => <MainItems key={el.ccy} ccy={el.ccy} baseCcy={el.base_ccy} buy={el.buy} sale={el.sale}/>)}
        </div>
    );
};

function MSTP(store) {
    return {
        getExchangerateReducers: store.getExchangerateReducers,
    }
}

export default connect(MSTP)(Main);
