import React, { useEffect } from 'react'
import './category.scss'
import {Link} from "react-router-dom"

import { BiCircle, BiSearch, BiUpload, BiUserCircle } from 'react-icons/bi';

interface Category<T> {

}

const Category: React.FC<Category<any>> = ({ ...props }) => {
    return (
     <div className="container-category">
      <div className="banner-category">
        <img src="https://ozedm.com/wp-content/uploads/2015/02/nielsen-poll-edm-banner.jpg" alt="" />
      </div>
      <div className="box-category">
        <div className="box-title-category">
          <h4>Tâm trạng và hoạt động</h4>
        </div>
        <div className="box-grid-category">
          <div className="product-box-category">
            <img src="https://thumbs.dreamstime.com/b/edm-club-music-party-template-dance-party-flyer-brochure-night-party-club-sound-banner-poster-72485529.jpg" alt="" />
            <p>
            EDM Club Music Party Template, Dance Party Flyer, Brochure. Night</p>
          </div>
          <div className="product-box-category">
            <img src="https://thumbs.dreamstime.com/b/edm-club-music-party-template-dance-party-flyer-brochure-night-party-club-sound-banner-poster-72485529.jpg" alt="" />
            <p>
            EDM Club Music Party Template, Dance Party Flyer, Brochure. Night</p>
          </div>
          <div className="product-box-category">
            <img src="https://thumbs.dreamstime.com/b/edm-club-music-party-template-dance-party-flyer-brochure-night-party-club-sound-banner-poster-72485529.jpg" alt="" />
            <p>
            EDM Club Music Party Template, Dance Party Flyer, Brochure. Night</p>
          </div>
          <div className="product-box-category">
            <img src="https://thumbs.dreamstime.com/b/edm-club-music-party-template-dance-party-flyer-brochure-night-party-club-sound-banner-poster-72485529.jpg" alt="" />
            <p>
            EDM Club Music Party Template, Dance Party Flyer, Brochure. Night</p>
          </div>
        </div>
      </div>
      <div className="box-category">
        <div className="box-title-category">
          <h4>Quốc gia</h4>
        </div>
        <div className="box-grid-category">
          <div className="product-box-category">
            <img src="https://thumbs.dreamstime.com/b/edm-club-music-party-template-dance-party-flyer-brochure-night-party-club-sound-banner-poster-72485529.jpg" alt="" />
            <p>
            EDM Club Music Party Template, Dance Party Flyer, Brochure. Night</p>
          </div>
          <div className="product-box-category">
            <img src="https://thumbs.dreamstime.com/b/edm-club-music-party-template-dance-party-flyer-brochure-night-party-club-sound-banner-poster-72485529.jpg" alt="" />
            <p>
            EDM Club Music Party Template, Dance Party Flyer, Brochure. Night</p>
          </div>
          <div className="product-box-category">
            <img src="https://thumbs.dreamstime.com/b/edm-club-music-party-template-dance-party-flyer-brochure-night-party-club-sound-banner-poster-72485529.jpg" alt="" />
            <p>
            EDM Club Music Party Template, Dance Party Flyer, Brochure. Night</p>
          </div>
          <div className="product-box-category">
            <img src="https://thumbs.dreamstime.com/b/edm-club-music-party-template-dance-party-flyer-brochure-night-party-club-sound-banner-poster-72485529.jpg" alt="" />
            <p>
            EDM Club Music Party Template, Dance Party Flyer, Brochure. Night</p>
          </div>
        </div>
      </div>
      <div className="box-category">
        <div className="box-title-category">
          <h4>EDM</h4>
        </div>
        <div className="box-grid-category">
          <div className="product-box-category">
            <img src="https://thumbs.dreamstime.com/b/edm-club-music-party-template-dance-party-flyer-brochure-night-party-club-sound-banner-poster-72485529.jpg" alt="" />
            <p>
            EDM Club Music Party Template, Dance Party Flyer, Brochure. Night</p>
          </div>
          <div className="product-box-category">
            <img src="https://thumbs.dreamstime.com/b/edm-club-music-party-template-dance-party-flyer-brochure-night-party-club-sound-banner-poster-72485529.jpg" alt="" />
            <p>
            EDM Club Music Party Template, Dance Party Flyer, Brochure. Night</p>
          </div>
          <div className="product-box-category">
            <img src="https://thumbs.dreamstime.com/b/edm-club-music-party-template-dance-party-flyer-brochure-night-party-club-sound-banner-poster-72485529.jpg" alt="" />
            <p>
            EDM Club Music Party Template, Dance Party Flyer, Brochure. Night</p>
          </div>
          <div className="product-box-category">
            <img src="https://thumbs.dreamstime.com/b/edm-club-music-party-template-dance-party-flyer-brochure-night-party-club-sound-banner-poster-72485529.jpg" alt="" />
            <p>
            EDM Club Music Party Template, Dance Party Flyer, Brochure. Night</p>
          </div>
        </div>
      </div>
     </div>


    )
}

export default Category