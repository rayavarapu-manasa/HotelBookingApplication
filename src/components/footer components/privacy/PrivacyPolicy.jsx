import React from 'react';
import { Container, Row, Col, ListGroup } from 'react-bootstrap';
import './PrivacyPolicy.css'; 
import HeaderComponent from '../headercomponent/HeaderComponent';

const PrivacyPolicy = () => {
  return (
    <div>
    <HeaderComponent/>
    <Container className="my-5">
      <Row className="justify-content-start">
        <Col md={8}>
          <div className="p-4">
            <h1 className="text-center mb-4 fw-bold">Privacy Policy</h1>
            <h2>Introduction</h2>
            <p>
              Welcome to our Privacy Policy page. Your privacy is of paramount importance to us. This privacy policy document outlines the types of personal information that is received and collected by our website and how it is used.
            </p>

            <h2>Information We Collect</h2>
            <p>We collect the following types of personal information when you use our website:</p>
            <ListGroup as="ul">
              <ListGroup.Item as="li"><strong>Personal Identification Information:</strong> Name, email address, phone number, etc.</ListGroup.Item>
              <ListGroup.Item as="li"><strong>Usage Data:</strong> Information about how you use our website, including pages visited, time spent, and interactions with our website features.</ListGroup.Item>
              <ListGroup.Item as="li"><strong>Cookies:</strong> We use cookies to enhance your experience and analyze website traffic.</ListGroup.Item>
            </ListGroup>

            <h2>How We Use Your Information</h2>
            <p>The personal information we collect is used for the following purposes:</p>
            <ListGroup as="ul">
              <ListGroup.Item as="li">To provide and improve our services.</ListGroup.Item>
              <ListGroup.Item as="li">To communicate with you regarding your account or transactions.</ListGroup.Item>
              <ListGroup.Item as="li">To analyze website usage and improve user experience.</ListGroup.Item>
            </ListGroup>

            <h2>Your Privacy Rights</h2>
            <p>
              You have the right to access, correct, or delete your personal data. If you have any concerns about your personal data or want to exercise your rights, feel free to contact us.
            </p>

            <h2>Data Security</h2>
            <p>
              We implement various security measures to protect your personal information from unauthorized access, alteration, or disclosure.
            </p>

            <h2>Third-Party Links</h2>
            <p>
              Our website may contain links to third-party websites. We are not responsible for the privacy practices or content of these external sites. We encourage you to review their privacy policies before sharing any personal data.
            </p>

            <h2>Changes to This Privacy Policy</h2>
            <p>
              We may update this Privacy Policy from time to time. Any changes will be posted on this page, and the "Last updated" date at the top of the page will be revised. Please check this page periodically for updates.
            </p>

            <h2>Contact Us</h2>
            <p>
              If you have any questions about this Privacy Policy, please contact us at <a href="mailto:privacy@example.com">privacy@example.com</a>.
            </p>
          </div>
        </Col>
      </Row>
    </Container>
    </div>
  );
};

export default PrivacyPolicy;
