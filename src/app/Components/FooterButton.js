import React, { useState, useEffect } from 'react';

const FooterButton = ({ Icon }) => {
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const toggleVisible = () => {
            const scrolled = document.documentElement.scrollTop;
            if (scrolled > 300) {
                setVisible(true);
            } else {
                setVisible(false);
            }
        };

        window.addEventListener('scroll', toggleVisible);

        return () => {
            window.removeEventListener('scroll', toggleVisible);
        };
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };

    return (
        <div
            style={{
                display: 'flex',
                justifyContent: 'flex-end', // Align to the right
                position: 'fixed', // Fix position to keep it in place while scrolling
                bottom: '20px', // Adjust this value to position the button vertically
                right: '20px',  // Adjust this value to position the button horizontally
                width: '100%',
                color: 'black' // Ensure the button container spans the entire width
            }}
        >
            {visible && (
                <Icon
                    onClick={scrollToTop}
                    style={{
                        fontSize: '4rem',
                        cursor: 'pointer',
                    }}
                />
            )}
        </div>
    );
};

export default FooterButton;
