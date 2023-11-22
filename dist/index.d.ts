import React, { RefObject } from 'react';

interface ButtonProps {
    label: string;
}
declare const Button: ({ label }: ButtonProps) => React.JSX.Element;

type Event = MouseEvent | TouchEvent;
declare const useOnClickOutside: <T extends HTMLElement = HTMLElement>(ref: RefObject<T>, handler: (event: Event) => void) => void;

declare function doSomethingCool(): void;

export { Button, doSomethingCool, useOnClickOutside };
