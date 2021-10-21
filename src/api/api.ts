import axios from 'axios';
import { Account, Spotlights } from './types';

const api = {
    account: {
        register: (data: Account.Register.Request) => axios.post('/account/register', data).then((r) => r.data),
        signIn: (data: Account.SignIn.Request) => axios.post('/account/signin', data).then((r) => r.data),
        getUser: () => axios.get<Account.GetCurrentUser.Response>('/account/users/current').then((r) => r.data),
        signoutUrl: () => axios.get(`/account/signout?redirect=${encodeURIComponent('/')}`),
    },
    spotlights: {
        getSpotlights: () => axios.get<Spotlights.GetSpotlights.Response>('/spotlights').then((r) => r.data),
        getSpotlight: (data: Spotlights.GetSpotlight.Request) =>
            axios
                .get<Spotlights.GetSpotlight.Response>(`/spotlights/${encodeURIComponent(data.shortName)}`)
                .then((r) => r.data),
    },
};

export default api;
