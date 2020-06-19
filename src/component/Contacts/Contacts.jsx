import React from 'react';
import styles from './Contacts.module.scss';
import MyContacts from './MyContacts/MyContacts';
import FormikForm from './FormikForm/FormikForm';
import {connect} from 'react-redux';
import {sendMessage, setIsLoading, setStatus} from '../../redux/portfolio-reducer';
import ResponseMessage from './ReaponseMessage/ResponseMessage';
import Button from '../common/Button/Button';

const Contacts = (props) => {
    const closeMessageResponse = () => {
        props.setStatus(null);
    };

    return (
        <div className={styles.contacts} id={'contacts'}>
            <div className={styles.container}>
                <MyContacts/>
                <FormikForm sendMessage={props.sendMessage}/>
                {props.requestStatus && <div className={styles.messageBlock}>
                    <ResponseMessage requestStatus={props.requestStatus}/>
                    <Button onClickFunction={closeMessageResponse} btnName={'Close'}/>
                </div>
                }
            </div>
        </div>
    )
};

const mapStateToProps = (state) => {
    return {
        requestStatus: state.portfolio.requestStatus,
    }
};

export default connect(mapStateToProps, {sendMessage, setStatus, setIsLoading})(Contacts);