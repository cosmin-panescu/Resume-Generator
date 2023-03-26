// React
import React from 'react'
// CSS
import './Testimonials.scss'
// data
import { testimonials } from '../../utils/testimonialsData'

const Testimonials = () => {
    return (
        <div className="testimonials">
            {testimonials.map((testimonial, i) => (
                <div class="card" key={i}>
                    <p class="description">
                        {testimonial.description}
                    </p>
                    <div class="author">
                        — {testimonial.author}
                    </div>
                </div>
            ))}
        </div>
    )
}

export default Testimonials