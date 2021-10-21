import { useState } from 'react';
import { useForm } from 'react-hook-form';
import api from '../../api';
import { getAxiosResponse } from '../../api/axios-badrequest-helpers';
import './SignInPage.css';

type FormData = {
    email: string;
    password: string;
};

export function SignInPage() {
    const [hasError, setHasError] = useState(false);
    const { register, handleSubmit } = useForm<FormData>();

    const onSubmit = handleSubmit(async ({ email, password }) => {
        setHasError(false);
        try {
            await api.account.signIn({ email, password });
            window.location.href = '/';
        } catch (error: unknown) {
            if (getAxiosResponse(error)) setHasError(true);
        }
    });

    return (
        <div className="container SignInPage">
            <div className="row SignInPage_Row">
                <div className="col-6 SignInPage_Col SignInPage_Splash"></div>
                <div className="col-6 SignInPage_Col SignInPage_Content">
                    <h2>SIGN IN</h2>
                    <div className="SignInPage_Col-Content">
                        {hasError && (
                            <div className="alert alert-danger" role="alert">
                                Invalid sign in credentials
                            </div>
                        )}
                        <form onSubmit={onSubmit}>
                            <div className="mb-3">
                                <label htmlFor="email" className="form-label">
                                    Email address
                                </label>
                                <input type="email" id="email" className="form-control" {...register('email')} />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="password" className="form-label">
                                    Password
                                </label>
                                <input
                                    type="password"
                                    id="password"
                                    className="form-control"
                                    {...register('password')}
                                />
                            </div>
                            <button type="submit" className="btn btn-primary">
                                Sign in
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}
