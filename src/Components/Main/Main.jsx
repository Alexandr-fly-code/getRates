import React from 'react';
import './Main.css';
import {connect} from 'react-redux';
import MainItems from './MainItems/MainItems';
import Modal from './Modal/Modal';
import {activeModal} from '../redux/actions/activeModalActions';

const Main = (props) => {
const {activeModalReducers} = props;
    const closeModal = (e) =>{
        e.target.id === 'closeModal' ? props.activeModal() : null;
    };
    return (
        <div>
        <div className='main'>
            <div className='container'>
                <span className='rates'>Exchange rates</span>
                <input type="button" value='Login' onClick={props.activeModal} className='login-btn'/>
            </div>


            <tbody className='item-table'>

            {props.getExchangerateReducers.map(el =>
                <MainItems key={el.ccy} ccy={el.ccy} baseCcy={el.base_ccy} buy={el.buy} sale={el.sale}/>)}

            </tbody>
        </div>

            {activeModalReducers && <div className='overlay' id='closeModal' onClick={closeModal}><Modal/></div>}
        </div>

    );
};

function MSTP(store) {
    return {
        getExchangerateReducers: store.getExchangerateReducers,
        activeModalReducers: store.activeModalReducers,
    }
}

function MDTP(dispatch) {
    return {
        activeModal: function () {
            dispatch(activeModal())
        }
    }
}

export default connect(MSTP, MDTP)(Main);
