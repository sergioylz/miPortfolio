'use client';

import {Novatrix} from "uvcanvas";

export default function UVCanvasBackground() {
    return (
        <div className='fixed inset-0 w-full h-screen z-[-1]'>
            <Novatrix />
        </div>
    );
}   