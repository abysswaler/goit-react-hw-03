import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from 'yup';
import css from './ContactForm.module.css';

const ContactForm = ({addContact}) => {
    const validationSchema = Yup.object({
        name: Yup.string()
            .min(3, 'Name must be at least 3 characters long')
            .max(50, 'Name must be at most 50 characters long')
            .required('Name is required'),
        number: Yup.string()
            .min(3, 'Name must be at least 3 characters long')
            .max(50, 'Name must be at most 50 characters long')
            .required('Phone number is required'),
    });

    return (
        <Formik
      initialValues={{ name: '', number: '' }}
      validationSchema={validationSchema}
      onSubmit={(values, { resetForm }) => {
        addContact(values.name, values.number);
        resetForm();
      }}
    >
        <Form className={css.form}>
            <label className={css.label} htmlFor="name">Name</label>
            <Field className={css.input}
                type="text"
                id="name"
                name="name"
                placeholder="Enter contact name"
            />
            <ErrorMessage name="name" component="div" className={css.error} />

            <label className={css.label} htmlFor="number">Phone number</label>
            <Field className={css.input}
                type="text"
                id="number"
                name="number"
                placeholder="Enter phone number"
            />
            <ErrorMessage name="number" component="div" className={css.error} />

            <button className={css.add_btn} type="submit">Add contact</button>
        </Form>

    </Formik>
    );
};

export default ContactForm;