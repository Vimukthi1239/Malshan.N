import React, { useState, useEffect } from 'react';
import Lightbox from '../components/Lightbox';

const INITIAL_PHOTOS = [];

export default function Photography() {
    const [activeFilter, setActiveFilter] = useState('all');
    const [selectedPhoto, setSelectedPhoto] = useState(null);
    const [selectedPhotoIndex, setSelectedPhotoIndex] = useState(0);

    // Load photos from localStorage only — no default items
    const [photos, setPhotos] = useState(() => {
        const saved = localStorage.getItem('portfolio_photography');
        return saved ? JSON.parse(saved) : [];
    });

    // Form inputs state
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [albumTitle, setAlbumTitle] = useState('');
    const [albumDesc, setAlbumDesc] = useState('');
    const [albumLink, setAlbumLink] = useState('');
    const [category, setCategory] = useState('landscape');
    const [uploadMethod, setUploadMethod] = useState('file'); // 'file' or 'url'
    const [fileError, setFileError] = useState('');
    const [externalLink, setExternalLink] = useState('');

    // Save to LocalStorage
    useEffect(() => {
        try {
            localStorage.setItem('portfolio_photography', JSON.stringify(photos));
        } catch (error) {
            console.error("Failed to save to local storage:", error);
        }
    }, [photos]);

    // Filter images based on active selection
    const filteredPhotos = photos.filter(photo => {
        return activeFilter === 'all' || photo.category === activeFilter;
    });

    const handlePhotoClick = (photo) => {
        const idx = filteredPhotos.indexOf(photo);
        setSelectedPhotoIndex(idx);
        // Include full details in selected photo mapping so Lightbox displays title/desc correctly
        setSelectedPhoto({
            src: photo.src,
            alt: photo.alt || photo.title,
            title: photo.title,
            category: photo.category.charAt(0).toUpperCase() + photo.category.slice(1) + (photo.description ? ` - ${photo.description}` : '')
        });
        document.body.style.overflow = 'hidden'; // Lock background scroll
    };

    const handleCloseLightbox = () => {
        setSelectedPhoto(null);
        document.body.style.overflow = ''; // Release scroll
    };

    const handleNextPhoto = () => {
        if (filteredPhotos.length === 0) return;
        const nextIdx = (selectedPhotoIndex + 1) % filteredPhotos.length;
        setSelectedPhotoIndex(nextIdx);
        const photo = filteredPhotos[nextIdx];
        setSelectedPhoto({
            src: photo.src,
            alt: photo.alt || photo.title,
            title: photo.title,
            category: photo.category.charAt(0).toUpperCase() + photo.category.slice(1) + (photo.description ? ` - ${photo.description}` : '')
        });
    };

    const handlePrevPhoto = () => {
        if (filteredPhotos.length === 0) return;
        const prevIdx = (selectedPhotoIndex - 1 + filteredPhotos.length) % filteredPhotos.length;
        setSelectedPhotoIndex(prevIdx);
        const photo = filteredPhotos[prevIdx];
        setSelectedPhoto({
            src: photo.src,
            alt: photo.alt || photo.title,
            title: photo.title,
            category: photo.category.charAt(0).toUpperCase() + photo.category.slice(1) + (photo.description ? ` - ${photo.description}` : '')
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!albumLink) {
            setFileError(uploadMethod === 'file' ? "Please select a photo file." : "Please enter a web image URL.");
            return;
        }

        const newPhoto = {
            src: albumLink,
            alt: albumDesc || albumTitle,
            title: albumTitle,
            description: albumDesc,
            category: category,
            externalLink: externalLink || null
        };

        setPhotos(prev => [newPhoto, ...prev]);
        setActiveFilter('all'); // Ensure new photo displays at the front of the album
        closeModal();
    };

    const closeModal = () => {
        setIsModalOpen(false);
        setAlbumTitle('');
        setAlbumDesc('');
        setAlbumLink('');
        setExternalLink('');
        setCategory('landscape');
        setUploadMethod('file');
        setFileError('');
    };

    const handleDelete = (e, photoToDelete) => {
        e.stopPropagation(); // Prevent opening lightbox modal when clicking trash can
        if (window.confirm("Are you sure you want to delete this photo from the album?")) {
            setPhotos(prev => prev.filter(photo => photo !== photoToDelete));
        }
    };

    const handleReset = () => {
        if (window.confirm("Reset all photography items to original list? This will remove custom additions.")) {
            setPhotos(INITIAL_PHOTOS);
        }
    };

    const categories = [
        { key: 'all', label: 'All Photos' },
        { key: 'landscape', label: 'Landscape' },
        { key: 'nature', label: 'Nature & Macro' },
        { key: 'street', label: 'Street & Architecture' },
        { key: 'wildlife', label: 'Wildlife & Portrait' }
    ];

    return (
        <section id="photography" className="photography-section section-padding page-fade-in">
            <div className="container">
                <div className="section-header text-center">
                    <h2 className="section-title">Photography <span className="highlight">Album</span></h2>
                    <p className="section-subtitle">Captured moments through my camera lens</p>
                </div>

                {/* Admin Actions Bar */}
                <div className="admin-actions-bar">
                    <button
                        className="admin-btn admin-btn-add"
                        onClick={() => setIsModalOpen(true)}
                    >
                        <i className="fa-solid fa-camera"></i> Add Album
                    </button>
                    <button
                        className="admin-btn admin-btn-reset"
                        onClick={handleReset}
                        title="Reset to default photos"
                    >
                        <i className="fa-solid fa-arrow-rotate-left"></i> Reset Defaults
                    </button>
                </div>

                {/* Filter Buttons */}
                <div className="gallery-filters">
                    {categories.map(cat => (
                        <button
                            key={cat.key}
                            className={`filter-btn ${activeFilter === cat.key ? 'active' : ''}`}
                            onClick={() => setActiveFilter(cat.key)}
                        >
                            {cat.label}
                        </button>
                    ))}
                </div>

                {/* Gallery Grid */}
                {filteredPhotos.length === 0 ? (
                    <div className="gallery-empty-state">
                        <i className="fa-solid fa-camera-retro gallery-empty-icon"></i>
                        <h3>No Photos Yet</h3>
                        <p>Click <strong>Add Album</strong> above to upload your first photo.</p>
                    </div>
                ) : (
                <div className="gallery-grid">
                    {filteredPhotos.map((photo, idx) => (
                        <div
                            className="gallery-item"
                            key={idx}
                            onClick={() => handlePhotoClick(photo)}
                            style={{ position: 'relative' }}
                        >
                            {/* Card Admin Controls */}
                            <div className="card-admin-controls">
                                <button
                                    className="delete-card-btn"
                                    onClick={(e) => handleDelete(e, photo)}
                                    title="Delete Photo"
                                    aria-label="Delete photo"
                                >
                                    <i className="fa-solid fa-trash"></i>
                                </button>
                            </div>

                            <img 
                                src={photo.src} 
                                alt={photo.alt} 
                                loading="lazy" 
                                onError={(e) => {
                                    e.target.onerror = null;
                                    e.target.src = "https://images.unsplash.com/photo-1542038784456-1ea8e935640e?auto=format&fit=crop&w=800&q=80"; // High-quality photography fallback placeholder
                                }}
                            />
                            <div className="gallery-overlay">
                                <h4>{photo.title}</h4>
                                <p style={{ textTransform: 'capitalize' }}>{photo.category}</p>
                                
                                {photo.externalLink && (
                                    <a
                                        href={photo.externalLink}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="card-external-link-btn"
                                        onClick={(e) => e.stopPropagation()}
                                    >
                                        <i className="fa-solid fa-arrow-up-right-from-square"></i> Visit Link
                                    </a>
                                )}

                                <button className="view-photo-btn" aria-label="View photo">
                                    <i className="fa-solid fa-expand"></i>
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
                )}
            </div>

            {/* Admin Add Photo Modal Window */}
            {isModalOpen && (
                <div
                    className="form-modal-overlay"
                    onClick={(e) => {
                        if (e.target.className === 'form-modal-overlay') closeModal();
                    }}
                >
                    <div className="form-modal-container">
                        <div className="form-modal-header">
                            <h3><i className="fa-solid fa-images"></i> Add New Album / Photo</h3>
                            <button className="form-modal-close" onClick={closeModal}>&times;</button>
                        </div>
                        <form onSubmit={handleSubmit}>
                            <div className="form-modal-body">
                                <div className="form-group">
                                    <label htmlFor="album-title">Photo Title *</label>
                                    <input
                                        type="text"
                                        id="album-title"
                                        placeholder="e.g. Ella Greenery"
                                        value={albumTitle}
                                        onChange={(e) => setAlbumTitle(e.target.value)}
                                        required
                                    />
                                </div>

                                <div className="form-group">
                                    <label htmlFor="album-desc">Photo Description *</label>
                                    <textarea
                                        id="album-desc"
                                        rows="2"
                                        placeholder="Captured moments, settings, or photography style notes..."
                                        value={albumDesc}
                                        onChange={(e) => setAlbumDesc(e.target.value)}
                                        required
                                    ></textarea>
                                </div>

                                <div className="form-group">
                                    <label htmlFor="album-external-link">Project / Web Link (Optional)</label>
                                    <input
                                        type="url"
                                        id="album-external-link"
                                        placeholder="e.g. https://github.com/... or any website"
                                        value={externalLink}
                                        onChange={(e) => setExternalLink(e.target.value)}
                                    />
                                </div>

                                <div className="form-group">
                                    <label>Upload Option *</label>
                                    <div className="upload-method-tabs">
                                        <button
                                            type="button"
                                            className={`upload-tab-btn ${uploadMethod === 'file' ? 'active' : ''}`}
                                            onClick={() => { setUploadMethod('file'); setAlbumLink(''); setFileError(''); }}
                                        >
                                            <i className="fa-solid fa-upload"></i> Upload Local Photo
                                        </button>
                                        <button
                                            type="button"
                                            className={`upload-tab-btn ${uploadMethod === 'url' ? 'active' : ''}`}
                                            onClick={() => { setUploadMethod('url'); setAlbumLink(''); setFileError(''); }}
                                        >
                                            <i className="fa-solid fa-link"></i> Web Image URL
                                        </button>
                                    </div>
                                </div>

                                {uploadMethod === 'file' ? (
                                    <div className="form-group">
                                        <label>Select Photo *</label>
                                        <div className={`drag-drop-zone ${albumLink ? 'has-image' : ''}`}>
                                            {albumLink ? (
                                                <div className="image-preview-container">
                                                    <img src={albumLink} alt="Preview" className="upload-preview" />
                                                    <button
                                                        type="button"
                                                        className="remove-preview-btn"
                                                        onClick={() => setAlbumLink('')}
                                                    >
                                                        <i className="fa-solid fa-trash"></i> Remove Photo
                                                    </button>
                                                </div>
                                            ) : (
                                                <label className="drag-drop-label">
                                                    <i className="fa-solid fa-cloud-arrow-up drag-drop-icon"></i>
                                                    <span className="drag-drop-text">Click to choose a photo or drag it here</span>
                                                    <span className="drag-drop-subtext">Supports PNG, JPG, JPEG (Max 1.5MB)</span>
                                                    <input
                                                        type="file"
                                                        accept="image/*"
                                                        onChange={(e) => {
                                                            const file = e.target.files[0];
                                                            if (!file) return;
                                                            if (file.size > 1.5 * 1024 * 1024) {
                                                                setFileError("File is too large. Max allowed size is 1.5MB.");
                                                                return;
                                                            }
                                                            setFileError('');
                                                            const reader = new FileReader();
                                                            reader.onloadend = () => {
                                                                setAlbumLink(reader.result);
                                                            };
                                                            reader.readAsDataURL(file);
                                                        }}
                                                        style={{ display: 'none' }}
                                                    />
                                                </label>
                                            )}
                                        </div>
                                        {fileError && <span className="error-message">{fileError}</span>}
                                    </div>
                                ) : (
                                    <div className="form-group">
                                        <label htmlFor="album-link">Image URL Link *</label>
                                        <input
                                            type="url"
                                            id="album-link"
                                            placeholder="https://images.unsplash.com/... or web address"
                                            value={albumLink}
                                            onChange={(e) => setAlbumLink(e.target.value)}
                                            required
                                        />
                                    </div>
                                )}

                                <div className="form-group">
                                    <label htmlFor="album-category">Category *</label>
                                    <select
                                        id="album-category"
                                        value={category}
                                        onChange={(e) => setCategory(e.target.value)}
                                        required
                                    >
                                        <option value="landscape">Landscape</option>
                                        <option value="nature">Nature & Macro</option>
                                        <option value="street">Street & Architecture</option>
                                        <option value="wildlife">Wildlife & Portrait</option>
                                    </select>
                                </div>
                            </div>
                            <div className="form-modal-footer">
                                <button type="button" className="btn btn-outline" onClick={closeModal}>Cancel</button>
                                <button type="submit" className="btn btn-primary">Add to Album</button>
                            </div>
                        </form>
                    </div>
                </div>
            )}

            {/* Lightbox Modal */}
            <Lightbox
                photo={selectedPhoto}
                onClose={handleCloseLightbox}
                onNext={handleNextPhoto}
                onPrev={handlePrevPhoto}
            />
        </section>
    );
}

