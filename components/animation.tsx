import { useRef, useEffect, use } from 'react'
import { CanvasImgSequence } from 'canvas-img-sequence'

const animation = {
    width: 1080,
    height: 1920,
    observer: true,
    images: Array(39).fill(0).map((_, i) => `/images/bands-sequence/april-fools${i.toString().padStart(2, '0')}.jpg`),
}

export default function Animation() {

    const canvas = useRef<HTMLDivElement>(null)
    const animationRef = useRef();

    useEffect(() => {
        if(typeof window !== 'undefined' && canvas.current){
            if(!animationRef.current){
                animationRef.current = new CanvasImgSequence(canvas.current, animation);
            }

            const height = canvas.current?.getBoundingClientRect().height;
            const top = window.scrollY + canvas.current?.getBoundingClientRect().top + window.innerHeight * 0.5;
            const pixelsPerFrame = animation.images.length / height;
            let interval = window.setInterval(() => {
                const currentScroll = window.scrollY;
                const frame = Math.floor((top - currentScroll) * pixelsPerFrame);
                if(frame < 0 || frame >= animation.images.length) return;
                canvas.current?.setAttribute("frame", frame.toString());
            }, 50);

            return () => {
                window.clearInterval(interval);
            }
        }
    }, [canvas])

    return (
        <div style={{paddingBottom: "177.78%"}}>
            <div ref={canvas} id="animated-canvas" className="absolute top-0 left-0 w-full h-full" frame={1} ></div>
        </div>
    )
}