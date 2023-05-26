import React from 'react';
import { GoogleMap, Marker, MarkerF, useJsApiLoader } from '@react-google-maps/api';
import { Modal, useModal, Button, Text } from "@nextui-org/react";


const containerStyle = {
    width: '100%' ,
    height: '700px',
};

const center = {
    lat: -17.365500, 
    lng: -66.153083
};

const center2 = {
    lat: -18.393802887443847,
    lng: -66.15695989215659
};

function MyComponent() {

    

    const { setVisible, bindings } = useModal();


    const { isLoaded } = useJsApiLoader({
        id: 'google-map-script',
        googleMapsApiKey: "AIzaSyBM22sT9p3ffZPTeSEa9g89IprkG16Yjcg"
    })

    const [map, setMap] = React.useState(null)

    const onLoad = React.useCallback(function callback(map: any) {
        const bounds = new window.google.maps.LatLngBounds();
        map.fitBounds(bounds);
        setMap(map)
    }, [])

    const onUnmount = React.useCallback(function callback(map: any) {
        setMap(null)
    }, [])

    
    return isLoaded ? (
        <div className='containerGrande'>

            <div className='mapFormTitle'>Nuestras Ubicaciones</div>


            <div className="mapContainer">
            
                <GoogleMap
                mapContainerStyle={containerStyle}
                center={center}
                zoom={12}
                onLoad={onLoad}
                onUnmount={onUnmount}
                >
                    <MarkerF position={center} onClick={() => setVisible(true)}/>
                    <MarkerF position={center2} onClick={() => setVisible(true)}/>
                </GoogleMap>

            </div>
            <Modal
                className="mainModalArea"
                scroll
                blur
                width='700px'
                
                closeButton
                aria-labelledby="modal-title"
                aria-describedby="modal-description"
                {...bindings}
                >
                <Modal.Header className="modalTitle">
                <Text id="modal-title" size={18}>
                    Nombre Del Centro
                </Text>
                </Modal.Header>
                <Modal.Body className="modalContainer">
                    
                    <div id="indicators-carousel" className="relative w-full" data-carousel="static">
                    
                        <div className="relative h-56 overflow-hidden rounded-lg md:h-96">
                            
                            <div className="hidden duration-700 ease-in-out" data-carousel-item="active">
                                <img src="/images/mainPic.png" className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..."></img>
                            </div>
                            
                            <div className="hidden duration-700 ease-in-out" data-carousel-item>
                                <img src="/docs/images/carousel/carousel-2.svg" className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..."></img>
                            </div>
                            
                            <div className="hidden duration-700 ease-in-out" data-carousel-item>
                                <img src="/docs/images/carousel/carousel-3.svg" className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..."></img>
                            </div>
                            
                            <div className="hidden duration-700 ease-in-out" data-carousel-item>
                                <img src="/docs/images/carousel/carousel-4.svg" className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..."></img>
                            </div>
                            
                            <div className="hidden duration-700 ease-in-out" data-carousel-item>
                                <img src="/docs/images/carousel/carousel-5.svg" className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..."></img>
                            </div>
                        </div>
                        
                        <div className="absolute z-30 flex space-x-3 -translate-x-1/2 bottom-5 left-1/2">
                            <button type="button" className="w-3 h-3 rounded-full" aria-current="true" aria-label="Slide 1" data-carousel-slide-to="0"></button>
                            <button type="button" className="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 2" data-carousel-slide-to="1"></button>
                            <button type="button" className="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 3" data-carousel-slide-to="2"></button>
                            <button type="button" className="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 4" data-carousel-slide-to="3"></button>
                            <button type="button" className="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 5" data-carousel-slide-to="4"></button>
                        </div>
                        
                        <button type="button" className="absolute top-0 left-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-prev>
                            <span className="inline-flex items-center justify-center w-8 h-8 rounded-full sm:w-10 sm:h-10 bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                                <svg aria-hidden="true" className="w-5 h-5 text-white sm:w-6 sm:h-6 dark:text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"></path></svg>
                                <span className="sr-only">Previous</span>
                            </span>
                        </button>
                        <button type="button" className="absolute top-0 right-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-next>
                            <span className="inline-flex items-center justify-center w-8 h-8 rounded-full sm:w-10 sm:h-10 bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                                <svg aria-hidden="true" className="w-5 h-5 text-white sm:w-6 sm:h-6 dark:text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path></svg>
                                <span className="sr-only">Next</span>
                            </span>
                        </button>
                    </div>

                </Modal.Body>
                <Modal.Footer>
                <Button flat auto color="error" onPress={() => setVisible(false)}>
                    Cerrar
                </Button>
                </Modal.Footer>
            </Modal>
        </div>
        
    ) : <></>

}

export default React.memo(MyComponent)