import * as React from 'react';
import { useSearchParams } from 'react-router-dom';

// we need to pass component to this function and it will a function.
export default function withSearchParams(Component){
    // we are passing the props of the component 
    return function ComponentWithSearchParams(props){ 
        const [searchParams] = useSearchParams();
        return <Component {...props} router = {{searchParams}} /> 
    }
}