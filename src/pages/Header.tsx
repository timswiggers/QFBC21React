import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import api from '../api';
import './Header.css';

export function Header() {
    const history = useHistory();

    function handleBrandClick() {
        history.push('/');
    }

    return (
        <header className="Header">
            <div className="Header-Background"></div>
            <div className="Header-LeftPlaceholder" />
            <Brand className="Header-Brand" onClick={handleBrandClick} />
            <AccountControls className="Header-AccountControls" />
        </header>
    );
}

type BrandProps = {
    onClick: () => void;
    className?: string;
};

function Brand({ onClick, className }: BrandProps) {
    return (
        <h1 onClick={onClick} className={className}>
            EsQort Fan Page
        </h1>
    );
}

type AccountControlsProps = {
    className?: string;
};

function AccountControls(props: AccountControlsProps) {
    async function handleSignout(e: React.MouseEvent) {
        e.preventDefault();
        await api.account.signoutUrl();
        window.location.href = '/';
    }
    return (
        <nav className={props.className}>
            <a href="/" onClick={handleSignout}>
                Sign out
            </a>
            <div className="divider"></div>
            <Link to="/register">Register</Link>
            <div className="divider"></div>
            <Link to="/signin">Sign in</Link>
        </nav>
    );
}
