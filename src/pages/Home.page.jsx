import React, { useEffect, useState } from 'react';
import axios from 'axios';

//component
import EntertrainmentCardSlider from '../components/Entertainment/EntertrainmentCard.Componemt';
import HeroCarousel from '../components/HeroCarousel/HeroCarousel.Component';
import PosterSlider from '../components/PosterSlider/PosterSlider.Componment';
//layout hoc
import DefaultLayoutHoc from '../Layout/Default.layout';

const HomePage = () => {
    const [recommendedMovies, setRecommendedMovies] = useState([]);
    const[premierMovies, setPremierMovies] = useState([]);
    const[onlineStreamEvents, setOnlineStreamEvents ] = useState([]);

    useEffect(() => {
        const requestTopRatedMovies = async() => {
            const getTopRatedMovies = await axios.get('https://api.themoviedb.org/3/movie/popular?api_key=5a078e6a5354d0d5c4a1aa11961e95be');
            setRecommendedMovies(getTopRatedMovies.data.results);
        };

        requestTopRatedMovies();
    }, []);

    return (
        <>
            <HeroCarousel />

            <div className='container mx-auto px-4 md:px-12 my-8'>
                <h1 className='text-2xl font-bold text-gray-800 sm:ml-3 ml-0 my-3'>
                    The Best of Entertainment</h1>
                <EntertrainmentCardSlider/>
            </div>
            <div className='container mx-auto px-4 md:px-12 my-8'>
                <PosterSlider 
                    title="Recommeded Movies" 
                    subtitle='List of recommeded Movies' 
                    posters={recommendedMovies}
                    isDark={false}
                />
            </div>

            <div className='bg-premier-800 py-12'>
                <div className='container mx-auto px-4 md:px-12 my-8 flex flex-col gap-3'>
                    <div className='hidden md:flex'>
                        <img src='https://in.bmscdn.com/discovery-catalog/collections/tr:w-1440,h-120/premiere-rupay-banner-web-collection-202104230555.png' alt='Rupay' className='w-full h-full'
                        />
                    </div>
                    <PosterSlider 
                        title="Premiers" 
                        subtitle='Brand New Releases Every Friday' 
                        posters={premierMovies}
                        isDark={true}
                    />
                </div>
            </div>

            <div className='container mx-auto px-4 md:px-12 my-8'>
            <PosterSlider 
                title="Online Streaming Event" 
                subtitle='' 
                posters={onlineStreamEvents}
                isDark={false}
            />
            </div>
        </>
    );
};

export default DefaultLayoutHoc(HomePage);