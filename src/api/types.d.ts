import { EsqortUserGender } from './enums';

export declare type BadRequestData = {
    status: 400;
    errors: { [key: string]: string[] };
};

export declare namespace Account.Register {
    export type Request = { email: string; password: string; gender: EsqortUserGender };
}

export declare namespace Account.SignIn {
    export type Request = { email: string; password: string };
}

export declare namespace Account.GetCurrentUser {
    export type Response = {
        email: string;
        gender: EsqortUserGender;
    };
}

export declare namespace Spotlights.GetSpotlights {
    export type Response = Category[];

    type Category = {
        name: string;
        spotlights: Spotlight[];
    };

    type Spotlight = {
        fullName: string;
        shortName: string;
        imageUrl: string;
        categoryName: string;
    };
}

export declare namespace Spotlights.GetSpotlight {
    export type Request = { shortName: string };
    export type Response = {
        fullName: string;
        shortName: string;
        imageUrl: string;
        categoryName: string;
        nextShortName: string;
    };
}
