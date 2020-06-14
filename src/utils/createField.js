import React from 'react';
import {ErrorMessage, Field} from 'formik';
import Error from '../component/common/Error/Error';

export const createField = (type, name, fieldClass, errorClass, placeholder) => {
    return <>
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
            <div className={errorClass}>
            <ErrorMessage name={name} component={Error}/>
            </div>
        </>
};
