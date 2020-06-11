import React from 'react';
import styles from './FormBlock.module.css';
import {Bounce} from 'react-reveal';
import Button from '../../common/Button/Button';
import {ErrorMessage, Field, Form, Formik} from 'formik';
import Error from '../../common/Error/Error';
import * as Yup from 'yup';

const FormBlock = () => {

    const sendMessage = (a) => {
        console.log(a);
    };

    const initialValues = {
        name: '',
        email: '',
        message: ''
    };

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
                        onSubmit={sendMessage} >
                    <Form className={styles.form}>
                        <Field type='text'
                               name={'name'}
                               className={styles.inputs}
                               placeholder={'Name'}/>
                        <div className={styles.error}>
                            <ErrorMessage name="name" component={Error} />
                        </div>
                        <Field type='text'
                               name={'email'}
                               className={styles.inputs}
                               placeholder={'E-mail'}/>
                        <div className={styles.error}>
                            <ErrorMessage name="email" component={Error} />
                        </div>
                        <Field as='textarea'
                               name={'message'}
                               className={styles.textArea}
                               placeholder={'Enter your message...'}/>
                        <div className={styles.error}>
                            <ErrorMessage name="message" component={Error} />
                        </div>
                        <div className={styles.btnWrap}>
                            <Button btnName={'Submit'}/>
                        </div>
                    </Form>
                </Formik>
            </div>
        </Bounce>
    )
};

export default FormBlock;