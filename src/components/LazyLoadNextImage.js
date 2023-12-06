// React/Next -----------------------------------------------------------------------
import Image from 'next/image';
// Styles ---------------------------------------------------------------------------
// Images ---------------------------------------------------------------------------
import { images } from '@/data/images';
// Other ----------------------------------------------------------------------------
import { isObj } from '@/util';

//______________________________________________________________________________________
// ===== Component =====
const LazyLoadNextImage = ({imageKey, alt="Image Alt", width=null, height=null, className="", style=null, overlay=null }) => {

    //______________________________________________________________________________________
    // ===== Constants =====

    // next yells at you if the image is under 40 pixels, this also fixes the blur around images that that don't have size given to them
    const placeholder = width && width > 40 ? "blur" : undefined;



    //______________________________________________________________________________________
    // ===== Component Return =====
    if(!(imageKey && isObj(images, [imageKey]))) return <div style={{ width, height }} className={className} title="Image not statically added">{alt}</div>
    if(width && height) return <Image src={images[imageKey]} alt={alt} width={width} height={height} className={className} style={style} placeholder={placeholder} overlay={overlay} />
    return (
        <Image
            fill
            alt={alt}
            className={className}
            style={style}
            src={images[imageKey]} 
            placeholder={placeholder}
            overlay={overlay}
            // sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
    )
}
export default LazyLoadNextImage;
