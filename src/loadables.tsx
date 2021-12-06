import * as React from 'react';
import loadable, { LoadableComponent } from '@loadable/component';

const fallback = <div className="c-loader" />;


// prettier-ignore
export const Home: LoadableComponent<any> = loadable(() => import('@src/pages/home'), { fallback });

// prettier-ignore
export const NotFound: LoadableComponent<any> = loadable(() => import('@src/pages/not-found'), { fallback });
