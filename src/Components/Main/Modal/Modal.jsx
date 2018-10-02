import React from 'react';
import './Modal.css';
import {connect} from 'react-redux';
import {loginHandler} from '../../redux/actions/inputLoginActions';
import {passHandler} from '../../redux/actions/inputPassActions';
import axios from  'axios';
import {activeModal} from "../../redux/actions/activeModalActions";

const Modal = (props) => {
    const {loginReducers, passReducers} = props;

    const submitFunc = (e) => {
        e.preventDefault();

        const dataUser = {
          email: loginReducers,
            password: passReducers,
        };

        axios.post('http://localhost:3001/user/create', dataUser)
            .then(({data, status}) => status === 201 ? console.log(data) : console.log('error'))
            .catch(error => error);
        props.activeModal();
    };


    return (

        <div className='modal'>

            <form onSubmit={submitFunc} className='form'>
                <input type="text" value={loginReducers}
                       placeholder='login' onChange={props.loginHandler} className='form-input'/>
                {/*value={login}*/}
                <input type="text" value={passReducers}
                       placeholder='pass' onChange={props.passHandler} className='form-input'/>
                <input type="submit" value='Submit' className='btn'/>
                {/*value={pass}*/}
            </form>
        </div>

    );
};


function MSTP(store) {
    return {
        loginReducers: store.loginReducers,
        passReducers: store.passReducers,
    }
}

function MDTP(dispatch) {
    return {
        loginHandler: function (e) {
            dispatch(loginHandler(e.target.value))
        },
        passHandler: function (e) {
            dispatch(passHandler(e.target.value))
        },
        activeModal: function () {
            dispatch(activeModal())
        },
    }
}

export default connect(MSTP, MDTP)(Modal);
