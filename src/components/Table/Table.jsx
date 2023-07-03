import React from "react";
import { useMemo } from "react";
import { useTable, useSortBy, useGlobalFilter } from "react-table";
import { GlobalFilter } from "./GlobalFilter";
import Ajouter from "./Ajouter";

const Table = ({

    mockData,
    header,
    className,
    search,
    action,
    afficherSupprimer,
    supprimer,
    afficherEditer,
    editer,
    addLink

}) => {

    const [showModal, setShowModal] = React.useState(false);
    const columns = header;
    const data = useMemo(() => [...mockData], [mockData]);

    const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow, setGlobalFilter,
        state: { globalFilter }, } = useTable({
            columns,
            data,
        },
            useGlobalFilter,
            useSortBy

        );

    return (
        <>
        <div className='w-full flex justify-between items-center'>
            {search ? <GlobalFilter globalFilter={globalFilter} setGlobalFilter={setGlobalFilter} /> : ''}
            <Ajouter link={addLink}/>
        </div>
            

            {/* apply the table props */}
            <table {...getTableProps()} className={`w-11/12 m-auto text-md bg-white shadow-md mb-4 mt-2 relative font-mono ${className}`}>
                <thead className="text-base text-white uppercase bg-sky-800 font-bold select-none">
                    {
                        // Loop over the header rows
                        headerGroups.map((headerGroup) => (
                            // Apply the header row props
                            <tr className="border-b" {...headerGroup.getHeaderGroupProps()}>
                                {
                                    // Loop over the headers in each row
                                    headerGroup.headers.map((column) => (
                                        // Apply the header cell props
                                        <th scope="col" className="text-left p-3 px-5 relative" {...column.getHeaderProps(column.getSortByToggleProps())} title="">
                                            {column.render("Header")}
                                            <span className="absolute top-4 ml-1">{column.isSorted ? (column.isSortedDesc ?
                                                <svg className="w-2.5 fill-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path d="M137.4 374.6c12.5 12.5 32.8 12.5 45.3 0l128-128c9.2-9.2 11.9-22.9 6.9-34.9s-16.6-19.8-29.6-19.8L32 192c-12.9 0-24.6 7.8-29.6 19.8s-2.2 25.7 6.9 34.9l128 128z" /></svg> :
                                                <svg className="w-2.5 fill-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path d="M182.6 137.4c-12.5-12.5-32.8-12.5-45.3 0l-128 128c-9.2 9.2-11.9 22.9-6.9 34.9s16.6 19.8 29.6 19.8H288c12.9 0 24.6-7.8 29.6-19.8s2.2-25.7-6.9-34.9l-128-128z" /></svg>) : ""}
                                            </span>
                                        </th>
                                    ))
                                }
                                {action ? <th scope="col" className="text-left p-3 px-5"></th> : ''}
                            </tr>
                        ))
                    }
                </thead>
                {/* Apply the table body props */}
                <tbody className="font-light text-sm" {...getTableBodyProps()}>
                    {
                        // On verifie si il ya des lignes dans le tableau 'rows'
                        rows.length > 0 ? 

                        // Si il y des lignes :

                        rows.map((row, i) => {
                            prepareRow(row);
                            return (
                                <tr className='bg-white border-b hover:bg-gray-100' {...row.getRowProps()} key={i}>
                                    {
                                        // Loop over the rows cells
                                        row.cells.map((cell) => {
                                            if(cell.column.Header == 'Marker'){
                                                return <td className="p-3 px-5" {...cell.getCellProps()}><img src={`http://localhost:8000/api/storage/uploads/${cell.render("Cell").props.cell.value}`} /></td>;
                                            }else{
                                                return <td className="p-3 px-5" {...cell.getCellProps()}>{cell.render("Cell")}</td>;
                                            }
                                            
                                        })
                                    }
                                    {action ? <td className="p-3 px-6 flex">
                                        {afficherEditer ?
                                            <a onClick={() => { 
                                                editer(row.original.id);
                                            }} className="cursor-pointer mx-2">
                                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                                    <path strokeLinecap="round" strokeLinejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10" />
                                                </svg>

                                            </a> : ''}
                                        {afficherSupprimer ?
                                            <div>

                                                {/* Bouton qui ouvre le modal pour supprimer */}
                                                <button
                                                    className="mx-3 outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150 supprimer"
                                                    type="button"
                                                    onClick={() => setShowModal(true)}
                                                >
                                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                                        <path strokeLinecap="round" strokeLinejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
                                                    </svg>
                                                </button>

                                                {/* Modal */}
                                                {showModal ? (
                                                    <>
                                                        <div
                                                            className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
                                                        >
                                                            <div className="relative w-auto my-6 mx-auto max-w-xl">
                                                                <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                                                                    <div className="flex items-start justify-between p-1 rounded-t">
                                                                        <button
                                                                            className="p-1 ml-auto bg-transparent border-0 text-black float-right text-3xl leading-none font-semibold outline-none focus:outline-none hover:scale-105 ease-linear transition-all duration-150"
                                                                            onClick={() => setShowModal(false)}
                                                                        >
                                                                            <span className="bg-transparent text-black h-6 w-6 text-2xl block outline-none focus:outline-none">
                                                                                ×
                                                                            </span>
                                                                        </button>
                                                                    </div>
                                                                    <div className="relative py-2 px-6 flex-auto">
                                                                        <p className="my-4 text-black text-lg leading-relaxed">
                                                                            Êtes-vous sûr de vouloir supprimer cet élément ?
                                                                        </p>
                                                                    </div>
                                                                    <div className="flex items-center justify-end px-4 pb-1 rounded-b">
                                                                        {/* Bouton qui valide la suppression */}
                                                                        <button
                                                                            className="text-rouge hover:shadow-lg background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                                                            type="button"
                                                                            onClick={() => {
                                                                                supprimer(row.original.id);
                                                                                setShowModal(false);
                                                                            }}
                                                                        >
                                                                            Oui
                                                                        </button>

                                                                        {/* Fermer le modal */}
                                                                        <button
                                                                            className="text-black font-bold uppercase text-sm px-6 py-3 rounded hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                                                            type="button"
                                                                            onClick={() => setShowModal(false)}
                                                                        >
                                                                            Non
                                                                        </button>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>

                                                        {/* Background du modal */}
                                                        <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
                                                    </>
                                                ) : null}
                                            </div>
                                            : ''}
                                    </td> : ''}
                                </tr>
                            );
                        }) : <tr className="text-black text-lg text-center w-full absolute top-20"><span>Aucun résultat ne correspond à votre recherche</span></tr> 
                    }
                </tbody>
            </table>
        </>
    );
};

export default Table;