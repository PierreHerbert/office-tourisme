import React from 'react';
import { Splide, SplideSlide } from '@splidejs/react-splide';

const LieuHome = ({lieux, mapRef}) => {

    const fly = (coordinates) => {
        console.log('fly to')
        mapRef.current?.flyTo({ center: coordinates, zoom: 17,
            speed: 3 })
    }

    return (
        <section className='mt-6'>       
            <div>
                <h2 className='text-center font-mono uppercase font-bold text-4xl'>Les Lieux de notre ville</h2>
            </div>
            <div className='w-full mt-4 mb-4'>
                <Splide aria-label="My Favorite Images" options={ {
                                                            perPage: 3,
                                                            gap   : '1rem',
                                                        } }>
                    {lieux.map((lieu) => (
                        <SplideSlide>
                        <div key={lieu.id} className="shadow mb-4 rounded-lg cursor-pointer p-2 bg-slate-200"
                            onClick={() => fly([lieu.longitude, lieu.latitude])}>
                            <div className="h-48 block">
                                <p className='font-mono font-bold mb-2'>{lieu.nomLieu}</p>
                                <p>{lieu.adresseLieu}</p>
                            </div>
                        </div>
                        </SplideSlide>
                    ))}
                </Splide>    
        </div>
    </section>
    )
};

export default LieuHome;