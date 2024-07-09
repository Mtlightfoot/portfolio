import "../main.css"

const styles = {
    footer: {
        fontSize: '12px',
    }
};


function Footer() {
    return (

        <p style={styles.footer} className="text-center footer">Copyright © 2024 - M Lightfoot All rights reserved</p>
    );
}

export default Footer;