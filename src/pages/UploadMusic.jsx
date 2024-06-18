import React, { useState } from 'react';
import axios from 'axios';
const URL = import.meta.env.VITE_PUBLIC_URL;
const UploadMusic = () => {
    const [song, setSong] = useState(null);
    const [title, setTitle] = useState('');
    const [artist, setArtist] = useState('');
    const [imageurl, setimageurl] = useState('');
    const [caterory, setcaterory] = useState('');

    const handleFileChange = (e) => {
        setSong(e.target.files[0]);
    };

    const handleUpload = async () => {
        const formData = new FormData();
        formData.append('song', song);
        formData.append('title', title);
        formData.append('artist', artist);
        formData.append('icon', imageurl);
        formData.append('category', caterory);

        try {
            const res = await axios.post(`${URL}/upload`, formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            });
            console.log(res.data);
        } catch (err) {
            console.error(err);
        }
    };

    return (
        <div className='min-h-screen flex flex-col justify-center  space-y-4 px-6'>
            <input type="text" className='w-full p-4'   value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Title" />
            <input type="text" className='w-full p-4' value={artist} onChange={(e) => setArtist(e.target.value)} placeholder="Artist" />
            <input type="text" className='w-full p-4' value={imageurl} onChange={(e) => setimageurl(e.target.value)} placeholder="imageurl" />
            <input type="text" className='w-full p-4' value={caterory} onChange={(e) => setcaterory(e.target.value)} placeholder="category" />

            <input type="file" className='w-full p-4 bg-zinc-200' onChange={handleFileChange} />
            <button className='text-zinc-100 bg-black p-4 text-lg font-bold border' onClick={handleUpload}>Upload</button>
        </div>
    );
};

export default UploadMusic;
