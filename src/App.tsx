import { Route, Redirect, Switch } from 'react-router-dom';
import { Configuration } from './config';
import { DetailPage } from './pages/detail/DetailPage';
import { Header } from './pages/Header';
import { HomePage } from './pages/home/HomePage';
import { RegisterPage } from './pages/register/RegisterPage';
import { SignInPage } from './pages/signin/SignInPage';

type AppProps = {
    config: Configuration;
};

export function App(props: AppProps) {
    return (
        <>
            <Header />
            <main>
                <Switch>
                    <Route path="/" exact component={HomePage} />
                    <Route path="/detail/:name" component={DetailPage} />
                    <Route path="/signin" component={SignInPage} />
                    <Route path="/register" component={RegisterPage} />
                    <Redirect to="/" />
                </Switch>
            </main>
        </>
    );
}
