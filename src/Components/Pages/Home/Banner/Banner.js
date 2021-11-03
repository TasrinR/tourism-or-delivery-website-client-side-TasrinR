import React from 'react';
import { Carousel } from 'react-bootstrap';

const Banner = () => {
    return (
        <div>
            <Carousel className="w-75 mx-auto m-5">
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src="https://i.ytimg.com/vi/l97EqBieI3o/maxresdefault.jpg"
                    alt="Sylhet"
                    />
                    <Carousel.Caption>
                    <h5>Book for your favourite trip</h5>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src="https://c4.wallpaperflare.com/wallpaper/770/262/422/himchori-coxs-bazar-bangladesh-wallpaper-preview.jpg"
                    alt="Himchari"
                    />
                    <Carousel.Caption>
                    <h5>Enjoy the beauty of Bangladesh</h5>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src="https://upload.wikimedia.org/wikipedia/commons/9/95/Kaptai_Lake_%2819833365911%29.jpg"
                    alt="Kaptai"
                    />
                    <Carousel.Caption>
                    <h5>Travel at your best price</h5>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    );
};

export default Banner;