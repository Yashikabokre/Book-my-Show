import React from 'react'
import DefaultLayoutHoc from '../Layout/Default.layout';

//Components
import Poster from "../components/Poster/Poster.Component";
import PlayFilter from "../components/PlayFilters/PlayFilters.Component";


const PlayPage = () => {
    return (
        <>
            <div className="container mx-auto px-4 my-10">
                <div className="w-full  flex flex-col-reverse lg:flex-row-reverse gap-4">
                    <div className="lg:w-3/4 p-4 bg-white rounded">
                        <h2 className="text-2xl font-bold mb-4"> Plays in Indore</h2>
                        <div className='flex flex-wrap'>
                            <div className="w-1/2 md:w-1/3 lg:w-3/12 my-3 flex items-center">
                                <Poster
                                    isPlay={true}
                                    src= "https://assets-in.bmscdn.com/nmcms/events/banner/desktop/media-desktop-prateek-kuhad-the-way-that-lovers-do-indore-0-2022-9-28-t-11-18-50.jpg"
                                    title="Prateek Kuhad ``The Way that Lovers Do`` - Indore"
                                    subtitle="Indie, Pop | Hindi, English | 12yrs + | 2hrs"
                                />
                            </div>
                            <div className="w-1/2 md:w-1/3 lg:w-3/12 my-3 flex items-center">
                                <Poster
                                    isPlay={true}
                                    src="https://assets-in.bmscdn.com/nmcms/events/banner/desktop/media-desktop-digital-marketing-communication-0-2021-5-12-t-19-20-20.jpg"
                                    title="Digital marketing & communication"
                                    subtitle="Education"
                                />
                            </div>
                            <div className="w-1/2 md:w-1/3 lg:w-3/12 my-3 flex items-center">
                                <Poster
                                    isPlay={true}
                                    src= "https://assets-in.bmscdn.com/nmcms/events/banner/desktop/media-desktop-photo-video-editing-for-social-media-0-2022-5-25-t-9-48-29.jpg"
                                    title="Prateek Kuhad ``The Way that Lovers Do`` - Indore"
                                    subtitle="Indie, Pop | Hindi, English | 12yrs + | 2hrs"
                                />
                            </div>
                            <div className="w-1/2 md:w-1/3 lg:w-3/12 my-3 flex items-center">
                                <Poster
                                    isPlay={true}
                                    src= "https://assets-in.bmscdn.com/nmcms/events/banner/desktop/media-desktop-prateek-kuhad-the-way-that-lovers-do-indore-0-2022-9-28-t-11-18-50.jpg"
                                    title="Photo-Video Editing For Social Media"
                                    subtitle="Business, Education, Fashion and Beauty, Photography, Upskill, Technology | English, Hindi | 5yrs + | 2hrs"
                                />
                            </div>
                            <div className="w-1/2 md:w-1/3 lg:w-3/12 my-3 flex items-center">
                                <Poster
                                    isPlay={true}
                                    src= "https://assets-in.bmscdn.com/nmcms/events/banner/desktop/media-desktop-prateek-kuhad-the-way-that-lovers-do-indore-0-2022-9-28-t-11-18-50.jpg"
                                    title="Prateek Kuhad ``The Way that Lovers Do`` - Indore"
                                    subtitle="Indie, Pop | Hindi, English | 12yrs + | 2hrs"
                                />
                            </div>
                            <div className="w-1/2 md:w-1/3 lg:w-3/12 my-3 flex items-center">
                                <Poster
                                    isPlay={true}
                                    src= "https://assets-in.bmscdn.com/nmcms/events/banner/desktop/media-desktop-prateek-kuhad-the-way-that-lovers-do-indore-0-2022-9-28-t-11-18-50.jpg"
                                    title="Prateek Kuhad ``The Way that Lovers Do`` - Indore"
                                    subtitle="Indie, Pop | Hindi, English | 12yrs + | 2hrs"
                                />
                            </div>
                        </div>
                    </div>

                    <div className='lg:w-1/4 p-4 bg-white rounded'>
                        <h2 className='text-2xl font-bold mb-4'>Filters</h2>
                        <div>
                            <PlayFilter
                                title= "Date"
                                tags={["Today", "Tomorrow", "This Weekend"]}
                            />
                        </div>
                        <div>
                        <PlayFilter
                            title="Language"
                            tags={["English", "Hindi", "Tamil"]}
                        />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );

};

export default DefaultLayoutHoc(PlayPage);