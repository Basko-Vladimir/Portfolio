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
        props.setIsLoading(false);
    };
    return (
        <div className={styles.contacts} id={'contacts'}>
            <div className={styles.container}>
                <MyContacts/>
                <FormikForm isLoading={props.isLoading} sendMessage={props.sendMessage}/>
                {props.requestStatus && <div className={styles.messageBlock}>
                    <ResponseMessage requestStatus={props.requestStatus}/>
                    <Button onClickFunction={closeMessageResponse} btnName={'Close'}> </Button>
                </div>
                }
            </div>
        </div>
    )
};

const mapStateToProps = (state) => {
    return {
        requestStatus: state.portfolio.requestStatus,
        isLoading: state.portfolio.isLoading
    }
};

export default connect(mapStateToProps, {sendMessage, setStatus, setIsLoading})(Contacts);