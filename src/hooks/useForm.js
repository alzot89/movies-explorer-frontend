import { useState } from 'react';

export function useFormWithValidation() {
    const [credential, setCredential] = useState({});
    const [errors, setErrors] = useState({});
    const [isValid, setIsValid] = useState(false);
    const [validity, setValidity] = useState({});

    const handleChange = (event) => {
        const target = event.target;
        const name = target.name;
        const value = target.value;
        setCredential({ ...credential, [name]: value });
        setErrors({ ...errors, [name]: target.validationMessage });
        setValidity({ ...validity, [name]: target.validity.valid })
        setIsValid(target.closest("form").checkValidity());
    };

    return { credential, setCredential, setValidity, setIsValid, setErrors, validity, handleChange, errors, isValid };
}