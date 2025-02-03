import React from "react";
import HeaderComponent from "../headercomponent/HeaderComponent";

const TermsOfService = () => {
  return (
    <div>
    <HeaderComponent/>
    <div className="container my-5">
     
      <div className="text-center mb-4">
        <h1 className="display-5 fw-bold">Legal Terms</h1>
      </div>

      <section className="mb-5">
        <h2 className="h4">Terms of Service</h2>
        <p>
          If your country of residence or establishment is within the European
          Economic Area (“EEA”), Switzerland or the United Kingdom, the Terms
          of Service for European Users apply to you.
        </p>
        <p>
          If your country of residence or establishment is outside of the EEA,
          Switzerland, Australia, and the United Kingdom, the Terms of Service
          for Users outside of the EEA, UK, and Australia apply to you.
        </p>
        <p>
          If your country of residence or establishment is in Australia, the
          Terms of Service for Australian Users apply to you.
        </p>
      </section>

      {/* Terms for European Users */}
      <section className="mb-5">
        <h2 className="h4">Terms of Service for European Users</h2>
        <p>
          As a consumer who resides in the EEA you can access the European
          Commission’s online dispute resolution platform here:{" "}
          <a
            href="https://ec.europa.eu/consumers/odr"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary"
          >
            https://ec.europa.eu/consumers/odr
          </a>
          . Please note that Airbnb is not committed nor obliged to use an
          alternative dispute resolution entity within the meaning of Directive
          2013/11 EU to resolve disputes with consumers. The European
          Commission’s online dispute resolution platform is not available for
          residents of Switzerland or the United Kingdom.
        </p>
        <p>
          Section 25 of these Terms contains an arbitration agreement and class
          action waiver that applies to all claims brought against Airbnb in
          the United States. Please read them carefully.
        </p>
        <p>
          <strong>Last Updated:</strong> 25 January 2024
        </p>
      </section>

      {/* General Terms */}
      <section className="mb-5">
        <h2 className="h4">Thank you for using Airbnb!</h2>
        <p>
          These Terms of Service for European Users (“Terms”) are a binding
          legal agreement between you and Airbnb that govern your right to use
          the websites, applications, and other offerings from Airbnb
          (collectively, the “Airbnb Platform”). When used in these Terms,
          “Airbnb,” “we,” “us,” or “our” refers to the Airbnb entity set out on
          Schedule 1 with whom you are contracting.
        </p>
        <p>
          The Airbnb Platform offers an online venue that enables users
          (“Members”) to publish, offer, search for, and book services. Members
          who publish and offer services are “Hosts” and Members who search
          for, book, or use services are “Guests.” Hosts offer accommodations
          (“Accommodations”), activities, excursions and events
          (“Experiences”), and a variety of travel and other services
          (collectively, “Host Services,” and each Host Service offering, a
          “Listing”).
        </p>
        <p>
          As the provider of the Airbnb Platform, Airbnb does not own, control,
          offer or manage any Listings, Host Services, or tourism services.
          Airbnb is not a party to the contracts entered into directly between
          Hosts and Guests, nor is Airbnb a real estate broker, travel agency,
          insurer or an organiser or retailer of travel packages under
          Directive (EU) 2015/2302.
        </p>
        <p>
          Airbnb is not acting as an agent in any capacity for any Member,
          except as specified in the Payments Terms of Service (“Payment
          Terms”). To learn more about Airbnb’s role see Section 17.
        </p>
        <p>
          We maintain other terms and policies that supplement these Terms like
          our Privacy Policy, which describes our collection and use of
          personal data, and our Payments Terms, which govern any payment
          services provided to Members by the Airbnb payment entities
          (collectively "Airbnb Payments").
        </p>
      </section>

      {/* Table of Contents */}
      <section>
        <h2 className="h4">Table of Contents for European Users</h2>
        <ul className="list-group">
          <li className="list-group-item">Guest Terms</li>
          <ul className="list-unstyled ps-4">
            <li>1. Searching and Booking on Airbnb.</li>
            <li>2. Cancellations, Reservation Issues, Refunds and Booking Modifications.</li>
            <li>3. Your Responsibilities.</li>
          </ul>
          <li className="list-group-item">Host Terms</li>
          <ul className="list-unstyled ps-4">
            <li>4. Hosting on Airbnb.</li>
            <li>5. Managing Your Listing.</li>
            <li>6. Cancellations, Reservation Issues, and Booking Modifications.</li>
            <li>7. Taxes.</li>
          </ul>
        </ul>
      </section>
       {/* Guest Terms */}
       <section className="mb-5">
       <h2 className="h4">Guest Terms</h2>
       <h3 className="h5">1. Searching and Booking on Airbnb</h3>

       <h4 className="h6">1.1 Searching</h4>
       <p>
         You can search for Host Services by using criteria like the type of
         Host Service, type of listing, travel destination, travel dates, and
         number of guests. You can also use filters to refine your search
         results. Search results are based on their relevance to your search
         and other criteria. Relevance considers factors like price,
         availability, reviews, customer service and cancellation history,
         popularity, previous trips and saved Listings, Host requirements
         (e.g. minimum or maximum nights), and more. Learn more about search
         results in Section 5.3 and in our Help Center.
       </p>

       <h4 className="h6">1.2 Booking</h4>
       <p>
         When you book a Listing, you are agreeing to pay all charges for your
         booking including the Listing price, applicable fees like Airbnb’s
         service fee, offline fees, taxes and any other items identified
         during checkout (collectively, “Total Price”). If you choose to pay
         using a currency that differs from the currency set by the Host for
         their Listing, the price displayed to you is based on a currency
         conversion rate determined by us. When you receive the booking
         confirmation, a contract for Host Services (a "Reservation") is
         formed directly between you and the Host. In addition to these Terms,
         you will be subject to, and responsible for complying with, all terms
         of the Reservation, including without limitation, the cancellation
         policy and any other rules, standards, policies, or requirements
         identified in the Listing or during checkout that apply to the
         Reservation. It is your responsibility to read and understand these
         rules, standards, policies, and requirements prior to booking a
         Listing. Be aware that some Hosts work with a co-host or as part of a
         team to provide their Host Services.
       </p>

       <h4 className="h6">1.3 Accommodation Reservations</h4>
       <p>
         An Accommodation Reservation is a limited license to enter, occupy
         and use the Accommodation. The Host retains the right to re-enter the
         Accommodation during your stay, to the extent: (i) it is reasonably
         necessary, (ii) permitted by your contract with the Host, and (iii)
         permitted by applicable law. If you stay past checkout, the Host has
         the right to make you leave in a manner permitted by applicable law,
         including by imposing reasonable overstay penalties. You may not
         exceed the maximum number of allowed Guests.
       </p>

       <h4 className="h6">1.4 Reservations for Experiences and Other Host Services</h4>
       <p>
         An Experience or other Host Service Reservation entitles you to
         participate in, attend, or use that Experience or Host Service. You
         are responsible for confirming that you, and anyone you invite, meet
         minimum age, proficiency, fitness or other requirements. You are
         responsible for informing the Host of any medical or physical
         conditions, or other circumstances that may impact your ability to
         participate, attend or use the Experience or Host Service. Except
         where expressly authorized, you may not allow any person to join an
         Experience or other Host Service unless they are included as an
         additional guest during the booking process.
       </p>

       <h3 className="h5">2. Cancellations, Reservation Issues, Refunds and Booking Modifications</h3>

       <h4 className="h6">2.1 Cancellations, Reservation Issues, and Refunds</h4>
       <p>
         In general, if you cancel a Reservation, the amount refunded to you
         is determined by the cancellation policy that applies to that
         Reservation. But, in certain situations, other policies may take
         precedence and determine what amount is refunded to you. If something
         outside your control requires you to cancel a Reservation, you may be
         entitled to a partial or full refund under our Major Disruptive
         Events Policy. If the Host cancels, or you experience a Reservation
         Issue (as defined in our Rebooking and Refund Policy), you may be
         entitled to rebooking assistance or a partial or full refund under
         our Rebooking and Refund Policy. Different policies apply to certain
         categories of Listings; for example, Experiences Reservations are
         governed by the Experiences Guest Refund Policy. See each Additional
         Legal Term or Policy for details about what is covered, and what
         refund applies in each situation. You may appeal a decision by Airbnb
         by contacting our customer service.
       </p>

       <h4 className="h6">2.2 Booking Modifications</h4>
       <p>
         Hosts and Guests are responsible for any booking modifications they
         agree to make via the Airbnb Platform or direct Airbnb customer
         service to make on their behalf ("Booking Modifications"), and agree
         to pay any additional amounts, fees or taxes associated with any
         Booking Modification.
       </p>

       <h3 className="h5">3. Your Responsibilities</h3>
       <p>
         You are responsible for your own acts and omissions and are also
         responsible for the acts and omissions of anyone you invite to join
         or provide access to any Accommodation, all areas and facilities
         where the Accommodation is located that the Host and Guest are
         legally entitled to use in connection with the Accommodation
         (“Common Areas”), or any Experience or other Host Service. For
         example, this means: (i) you are responsible for leaving an
         Accommodation (and related personal property) or Common Areas in the
         condition it was in when you arrived, (ii) you are responsible for
         paying all reasonable Damage Claim amounts, and (iii) you must act
         with integrity, treat others with respect and comply with applicable
         laws at all times. If you are booking for an additional guest who is
         a minor or if you bring a minor to a Host Service, you must be
         legally authorized to act on behalf of the minor and you are solely
         responsible for the supervision of that minor.
       </p>
     </section>
    </div>
    </div>
  );
};

export default TermsOfService;

