// Brand.jsx
// Renders the brand section with a personal statement and PassionCards.

import PassionCards from './PassionCards';

function Brand(){
    return(
        <section id="brand-section" >
                <h2>Human-first tech. Purpose-built design.</h2>

                <p>
                    I thrive on helping people get the very best out of technology,
                    whether that means engineering <strong>user-centered software</strong> with <strong>empathy 
                    and clarity</strong>, or supporting users of all abilities to make the most 
                    of the tools they already have. With a background that blends  
                <strong> software development, project delivery, and customer success</strong>, 
                    I bring both technical know-how and a deep commitment to 
                    accessibility and impact. My goal is always the same: 
                to <strong>make technology work better for people</strong>.
                </p>
                <PassionCards/>
                
        </section>
        
    )
}

export default Brand;