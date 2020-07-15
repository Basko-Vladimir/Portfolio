import React from 'react';
import styles from '../component/Contacts/FormikForm/FormikForm.module.scss';
import {ErrorMessage, Field} from 'formik';
import Error from '../component/common/Error/Error';

export const createField = (type, name, fieldClass, placeholder) => {
    return (
        <div className={styles.field}>
            {type === 'text'
                ? <Field type={type}
                         name={name}
                         className={fieldClass}
                         placeholder={placeholder}/>
                : <Field as={type}
                         name={name}
                         className={fieldClass}
                         placeholder={placeholder}/>
            }
            <div className={styles.error}>
                <ErrorMessage name={name} component={Error}/>
            </div>
        </div>)
};
