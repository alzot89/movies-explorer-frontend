import { useState, useCallback } from 'react';

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

    const resetForm = useCallback(
        (newValues = {}, newErrors = {}, newIsValid = false) => {
            setCredential(newValues);
            setErrors(newErrors);
            setIsValid(newIsValid);
        },
        [setCredential, setErrors, setIsValid]
    );
    return { credential, setValidity, validity, handleChange, errors, isValid, resetForm };
}