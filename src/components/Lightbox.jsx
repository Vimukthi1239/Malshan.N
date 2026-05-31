import React, { useEffect } from 'react';

export default function Lightbox({ photo, onClose, onNext, onPrev }) {
    
    // Keyboard controls
    useEffect(() => {
        if (!photo) return;

        const handleKeyDown = (e) => {
            if (e.key === 'Escape') {
                onClose();
            } else if (e.key === 'ArrowRight') {
                onNext();
            } else if (e.key === 'ArrowLeft') {
                onPrev();
            }
        };

        window.addEventListener('keydown', handleKeyDown);
        return () => {
            window.removeEventListener('keydown', handleKeyDown);
        };
    }, [photo, onClose, onNext, onPrev]);

    if (!photo) return null;

    return (
        <div 
            className="lightbox active" 
            id="lightbox" 
            role="dialog" 
            aria-modal="true"
            onClick={(e) => {
                if (e.target.id === 'lightbox') onClose();
            }}
        >
            <button className="lightbox-close" onClick={onClose} aria-label="Close Lightbox">&times;</button>
            
            <button className="lightbox-nav lightbox-prev" onClick={onPrev} aria-label="Previous Photo">
                <i className="fa-solid fa-chevron-left"></i>
            </button>
            
            <div className="lightbox-content">
                <img src={photo.src} alt={photo.alt} id="lightbox-img" />
                <div className="lightbox-caption">
                    <h3 id="lightbox-title">{photo.title}</h3>
                    <p id="lightbox-desc">{photo.category}</p>
                </div>
            </div>
            
            <button className="lightbox-nav lightbox-next" onClick={onNext} aria-label="Next Photo">
                <i className="fa-solid fa-chevron-right"></i>
            </button>
        </div>
    );
}
