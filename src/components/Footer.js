import React from 'react';

function Footer(props) {
        const description = "According to wikipedia, The New York Times Best Seller list is widely considered the preeminent list of best-selling books in the United States. How the Times compiles the list is a trade secret — the Times has stated that the list is not mathematically objective but rather editorial content.";

    return <div className='ma4 pa1 bg-white bt'>
        <p>
            {description}
        </p>
       <p className="light-silver">birthday bestsellers was created by Penny Lam.</p>
    </div>
}

export default Footer;