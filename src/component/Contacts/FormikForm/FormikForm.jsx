import React from 'react';
import styles from './FormikForm.module.css';
import {Bounce} from 'react-reveal';
import Button from '../../common/Button/Button';
import {Form, Formik} from 'formik';
import * as Yup from 'yup';
import {createField} from '../../../utils/createField';

const FormikForm = (props) => {
    const sendMessage = (messageData, {resetForm}) => {
        props.sendMessage(messageData);
        resetForm()
    };

    const initialValues = {name: '', email: '', message: ''};

    const validationSchema = Yup.object({
        name: Yup.string().required('This field is required'),
        email: Yup.string()
            .email('Invalid E-mail format')
            .required('This field is required'),
        message: Yup.string().required('This field is required')
    });
    return (
        <Bounce right duration={2000}>
            <div className={styles.formBlock}>
                <Formik initialValues={initialValues}
                        validationSchema={validationSchema}
                        onSubmit={sendMessage}>
                    <Form className={styles.form}>
                        {createField('text', 'name', styles.inputs, styles.error, 'Name')}
                        {createField('text', 'email', styles.inputs, styles.error, 'E-mail')}
                        {createField('textarea', 'message', styles.textArea, styles.error, 'Enter your message...')}
                        <div className={styles.btnWrap}>
                            <Button btnName={'Submit'} isDisabled={props.isLoading}/>
                        </div>
                    </Form>
                </Formik>
            </div>
        </Bounce>
    )
};

export default FormikForm;