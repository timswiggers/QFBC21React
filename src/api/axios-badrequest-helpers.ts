import axios from 'axios';
import { FieldValues, Path, UseFormSetError } from 'react-hook-form';
import { BadRequestData } from './types';

export function getAxiosResponse(error: unknown) {
    if (!axios.isAxiosError(error) || error.response?.status !== 400) {
        return null;
    }

    return error.response;
}

export function mapAxiosError<TFieldValues extends FieldValues = FieldValues>(
    error: unknown,
    setError: UseFormSetError<TFieldValues>,
    mapping: { [key: string]: Path<TFieldValues> }
) {
    const response = getAxiosResponse(error);
    if (!response) {
        return;
    }

    const { errors } = response.data as BadRequestData;
    const mappingKeys = Object.keys(mapping);

    for (const errorKey in errors) {
        const mappingKey = mappingKeys.find((mk) => errorKey.startsWith(mk));
        if (mappingKey) {
            setError(mapping[mappingKey], { message: errors[errorKey][0] });
        }
    }

    return response;
}
