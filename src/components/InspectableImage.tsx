'use client';

import { Fragment, useEffect, useState } from "react"
import Image, { ImageProps } from "next/image";
import { createPortal } from "react-dom";

export interface InspectableImageProps extends ImageProps {

}

export default function InspectableImage({ ...rest }: InspectableImageProps) {

    const [isOpen, setOpen] = useState<boolean>(false);
    const [parent, setParent] = useState<HTMLElement>();

    useEffect(() => {
        setParent(document.querySelector('body') as HTMLBodyElement);
    }, [])

    const portal = (
        <div className='fixed flex top-0 left-0 bg-gray-950 bg-opacity-10 w-full p-10 items-center justify-center'>
            <button onClick={() => setOpen(false)}> close </button>
            <div className='w-full h-full'>
                <Image {...rest}/>
            </div>
        </div>
    );

    if (!parent) return null;

    return (
        <Fragment>
            <Image {...rest} onClick={() => setOpen(true)}/>
            { isOpen && createPortal(portal, parent) }
        </Fragment>
    )
}