// Footer.jsx
// Simple site footer with copyright notice.

const Footer = () => {
    return (
        <footer className="site-footer">
            <p>&copy; {new Date().getFullYear()} AdamsWebWorks. All rights reserved.</p>
        </footer>
    );
};

export default Footer;