import React from 'react';
import './privacy-page-style.css';

const PrivacyPage: React.FC = () => {
    return (
        <div className="privacy-page-container">
            <h1 className="privacy-page-title">Privacy Policy</h1>
            <p className="privacy-page-description">This is the privacy policy page for your application.</p>

            <div className="privacy-page-content">
                <p className="privacy-page-content-paragraph">This privacy policy applies to the Recipes app, a free application that provides users with access to a variety of recipes from different cuisines and categories. The app is developed and maintained by Suthar Solutions.</p>

                <h2 className="privacy-page-content-heading">What information do we collect?</h2>
                <p className="privacy-page-content-paragraph">We do not collect any personal information from our users. The app does not require any registration, login, or account creation. The app does not use any third-party services or libraries that may collect or store user data. The app does not access or use any device features or permissions, such as camera, microphone, location, contacts, etc.</p>

                <h2 className="privacy-page-content-heading">How do we use the information?</h2>
                <p className="privacy-page-content-paragraph">Since we do not collect any information, we do not use it for any purpose. We respect your privacy and do not share, sell, or disclose any user data to anyone.</p>

                <h2 className="privacy-page-content-heading">How do we protect the information?</h2>
                <p className="privacy-page-content-paragraph">We do not store any user data on our servers or devices. The app runs entirely on your device and does not transmit any data over the internet. The app does not use any encryption or security measures, as there is no data to protect.</p>

                <h2 className="privacy-page-content-heading">How can you contact us?</h2>
                <p className="privacy-page-content-paragraph">If you have any questions or feedback about our privacy policy or our app, you can contact us at [your email address]. We will respond to your inquiries as soon as possible.</p>

                <h2 className="privacy-page-content-heading">Changes to this policy</h2>
                <p className="privacy-page-content-paragraph">We may update this policy from time to time to reflect changes in our app or legal requirements. We will notify you of any changes by posting the new policy on this page. You are advised to review this policy periodically for any changes. This policy is effective as of [the date of creation].</p>
            </div>
        </div>
    );
};

export default PrivacyPage;