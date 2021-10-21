import { PropsWithChildren } from 'react';

type SpotlightCategoryProps = PropsWithChildren<{
    name: string;
}>;

export function SpotlightCategory(props: SpotlightCategoryProps) {
    return (
        <>
            <h2>{props.name}</h2>
            {props.children}
        </>
    );
}
