import React from 'react';

const Ajouter = ( {link} ) => {
    return (
        <div>
            <a onClick={ () => link() } className="cursor-pointer mx-2 mt-3 bg-sky-500 rounded-full text-white font-bold fill-white flex p-3">
                <svg className='w-4' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32V224H48c-17.7 0-32 14.3-32 32s14.3 32 32 32H192V432c0 17.7 14.3 32 32 32s32-14.3 32-32V288H400c17.7 0 32-14.3 32-32s-14.3-32-32-32H256V80z"/></svg>
            </a>
        </div>
    );
};

export default Ajouter;