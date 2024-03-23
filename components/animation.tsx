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
                console.log(animation);
                animationRef.current = new CanvasImgSequence(canvas.current, animation);
            }
            // intersection obserever to see how far from top canvas is
            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if(entry.isIntersecting){
                        console.log('intersecting', entry);
                    } else {
                        console.log('not intersecting');
                    }
                })
            }, {threshold: 0.5})
            observer.observe(canvas.current)
        }
    }, [canvas])

    return (
        <div style={{paddingBottom: "177.78%"}}>
            <div ref={canvas} id="animated-canvas" className="absolute top-0 left-0 w-full h-full" frame={1} ></div>
        </div>
    )
}