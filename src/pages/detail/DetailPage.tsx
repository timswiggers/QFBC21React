import './DetailPage.css';
import { useQuery } from 'react-query';
import { RouteComponentProps } from 'react-router';

type RouteParams = { name?: string };
type DetailPageProps = RouteComponentProps<RouteParams>;

function getBio() {
    return Promise.resolve('PLACEHOLDER');
}

export function DetailPage(props: DetailPageProps) {
    const shortName = props.match.params.name!;
    const bioQuery = useQuery(['spotlight', shortName, 'bio'], getBio, {
        enabled: false, // only when spotlight query succeeded
        refetchOnWindowFocus: false,
    });

    const isLoading = true;
    const data = {};

    return (
        <div className="container-fluid DetailPage">
            {isLoading && (
                <div className="row">
                    <div className="col-6 offset-6">
                        <h1>{shortName}</h1>
                        <div className="d-flex justify-content-center">
                            <i className="fa fa-spinner fa-spin fa-3x"></i>
                        </div>
                    </div>
                </div>
            )}
            {data && (
                <div className="row DetailPage_Row">
                    <div
                        className="col-6 DetailPage_Col DetailPage_Splash"
                        style={{
                            backgroundImage: `url(https://www.unfe.org/wp-content/uploads/2019/04/SM-placeholder-1024x512.png)`,
                        }}
                    ></div>
                    <div className="col-6 DetailPage_Col DetailPage_Content">
                        <h1>{'PLACEHOLDER'}</h1>
                        <dl className="row">
                            <dt className="col-sm-3">Short name</dt>
                            <dd className="col-sm-9">{'PLACEHOLDER'}</dd>
                        </dl>
                        <dl className="row">
                            <dt className="col-sm-3">Category</dt>
                            <dd className="col-sm-9">{'PLACEHOLDER'}</dd>
                        </dl>
                        <dl className="row">
                            <dt className="col-sm-3">Biography</dt>
                            <dd className="col-sm-9">
                                {bioQuery.data ?? <i className="fa fa-spinner fa-spin fa-3x"></i>}
                            </dd>
                        </dl>
                    </div>
                </div>
            )}
        </div>
    );
}
