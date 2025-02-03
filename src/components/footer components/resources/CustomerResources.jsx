import React from 'react';
import './CustomerResources.css';
import HeaderComponent from '../headercomponent/HeaderComponent';

function CustomerResources() {
  return (
    <>
    <HeaderComponent/>
    <div className="customer-container mt-5">
      <img
        src="https://simplycontact.com/wp-content/uploads/2023/03/Customer-Support-Outsourcing-Department.png.webp"
        alt="Customer Support"
        className="customer-image"
      />
      <p className="customer-paragraph">
        Customer support for hotel booking is essential for ensuring a seamless
        and satisfying experience for guests.
      </p>
      <p className="customer-paragraph">
        It involves assisting customers with various needs, such as booking
        accommodations, modifying reservations, addressing payment issues, and
        handling cancellations or special requests.
      </p>
      <p className="customer-paragraph">
        Effective support requires clear communication, empathy, and
        problem-solving skills to address inquiries promptly and professionally.
        Utilizing multiple channels like phone, email, live chat, and
        self-service portals allows hotels to cater to diverse customer
        preferences. By leveraging technology such as CRM systems and chatbots,
        hotels can streamline support processes and enhance efficiency.
      </p>
      <p className="customer-paragraph">
        Prioritizing excellent customer service not only resolves immediate
        concerns but also builds trust and loyalty, ensuring guests return for
        future stays.
      </p>
      <div className="customer-contact">
        <p>
          <strong className="customer-strong">Email:</strong> customersupport@airbnb.com
        </p>
        <p>
          <strong className="customer-strong">Contact No:</strong> 9658379124
        </p>
      </div>
    </div>
     </>
  );
}

export default CustomerResources;
