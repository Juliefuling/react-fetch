import React, {memo, forwardRef} from 'react';
import objectHash from 'object-hash';
import useFetch from './useFetch';
import {globalParams} from './preset';
import useFetchRender from './useFetchRender';

export default memo(forwardRef(({url, auto = true, data, loading = globalParams.loading, empty = globalParams.empty, error = globalParams.error, component, render, options, ...props}, ref) => {
    const fetcher = useFetch({url, auto, data, options}, ref);
    return useFetchRender({loading, error, empty, component, render, props, ...fetcher});
}, (prevProps, nextProps) => {
    return objectHash(prevProps) !== objectHash(nextProps);
}));
