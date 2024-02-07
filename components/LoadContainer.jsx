'use client'
import React, { useState } from "react";
export default function LoadComponent() {
    const [dataLoaded, setDataLoaded] = useState(false);
    const loadData = async () => {
        try {
            // Hacer la llamada a la API
            const response = await fetch("http://107.22.100.114:8000/load_data");

            // Verificar si la llamada fue exitosa (puedes ajustar esto según la API)
            if (response.ok) {
                // Actualizar el estado para indicar que los datos han sido cargados
                setDataLoaded(true);
            } else {
                // Manejar errores si la llamada no fue exitosa
                console.error("Error al cargar datos desde la API");
            }
        } catch (error) {
            console.error("Error en la llamada a la API", error);
        }
    };
    return (
        <div class="mx-auto container text-zinc-800 text-2xl my-10 p-4">
            <div class="flex flex-col items-center">
                <button
                    className="load-data-button bg-orange-400 py-2 px-4 shadow-lg hover:shadow-orange-500/50 w-96 hover:bg-orange-500 rounded-full h-24 text-white transition ease-in-out duration-300 delay-100 hover:scale-110 disabled:bg-zinc-300"
                    onClick={loadData}
                    disabled={dataLoaded} // Deshabilitar el botón si los datos ya han sido cargados
                >Load
                    data</button>
                <span class="text-sm text-zinc-500 py-4">This process only needs to load one time</span>
                {dataLoaded && (
                    <div class="check-container pt-10 hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                            class="h-16 text-orange-500" stroke="currentColor" className="w-6 h-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                        </svg>

                    </div>
                )}
            </div>
        </div>
    )
}