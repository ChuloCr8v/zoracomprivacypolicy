import React from "react";

interface TitleProps {
  title: string;
  titleClassName: string;
}

export const PolicyTitle = (props: TitleProps) => {
  return <h2 className={`${props.titleClassName}`}>{props.title}</h2>;
};

const PrivacyPolicy = () => {
  return (
    <div className=" text-justify p-10 max-w-7xl">
      <div className="">
        <PolicyTitle
          title={"Zoracom Privacy Policy"}
          titleClassName={"text-2xl font-semibold text-center"}
        />
        <p className="mt-4 text-gray-800 font-normal">
          Last updated: January 20, 2023
        </p>
        <p className="mt-4 text-gray-800 font-normal">
          This privacy policy describes our policies and procedures on the
          collection, use and disclosure of your information when you use the
          service and tells you about your privacy rights and how the law
          protects you. We use your personal data to provide and improve the
          service. By using the service, you agree to the collection and use of
          information in accordance with this privacy policy.{" "}
        </p>
        <PolicyTitle
          title={"Interpretation"}
          titleClassName={"mt-4 text-lg font-semibold text-left"}
        />
        <p className="mt-4 text-gray-800 font-normalmt-2 font-normal">
          The words of which the initial letter is capitalized have meanings
          defined under the following conditions. The following definitions
          shall have the same meaning regardless of whether they appear in
          singular or in plural.
        </p>
        <PolicyTitle
          title={"Definitions"}
          titleClassName={"text-lg font-semibold text-left mt-4"}
        />
        <p className="mt-4 text-gray-800 font-normal">
          For the purposes of this privacy policy:
        </p>
        <ol className="list-disc list-inside">
          <li className="text-gray-800 font-normal">
            Account: means a unique account created for you to access our
            service or parts of our service.
          </li>
          <li className="text-gray-800 font-normal">
            Company: (referred to as either &quot;the company&quot;,
            &quot;we&quot;, &quot;us&quot; or &quot;our&quot; in this agreement)
            refers to ZORA COMMUNICATIONS LIMITED, enterprise hubs, Trinity
            avenue off Ligali Ayorinde Street Victoria island, Lagos.
          </li>
          <li className="text-gray-800 font-normal">
            Cookies: are small files that are placed on your computer, mobile
            device or any other device by a website, containing the details of
            your browsing history on that website among its many uses.
          </li>
          <li className="text-gray-800 font-normal">
            Country: refers to: Nigeria Device: means any device that can access
            the service such as a computer, a cellphone or a digital tablet.
            Personal data: is any information that relates to an identified or
            identifiable individual. Service: refers to the website. Service
            provider: means any natural or legal person who processes the data
            on behalf of the company. It refers to third-party companies or
            individuals employed by the company to facilitate the service, to
            provide the service on behalf of the company, to perform services
            related to the service or to assist the company in analysing how the
            service is used. Usage data: refers to data collected automatically,
            either generated by the use of the service or from the service
            infrastructure itself (for example, the duration of a page visit).
            Website: refers to Zoracom, accessible from https://www.zoracom.com/
            You: means the individual accessing or using the service, or the
            company, or other legal entity on behalf of which such individual is
            accessing or using the service, as applicable.
          </li>
          <li className="text-gray-800 font-normal">
            Country: refers to: Nigeria
          </li>
          <li className="text-gray-800 font-normal">
            Device: means any device that can access the service such as a
            computer, a cellphone or a digital tablet.
          </li>
          <li className="text-gray-800 font-normal">
            Personal data: is any information that relates to an identified or
            identifiable individual.
          </li>
          <li className="text-gray-800 font-normal">
            Service: refers to the website.
          </li>
          <li className="text-gray-800 font-normal">
            Service provider: means any natural or legal person who processes
            the data on behalf of the company. It refers to third-party
            companies or individuals employed by the company to facilitate the
            service, to provide the service on behalf of the company, to perform
            services related to the service or to assist the company in
            analysing how the service is used.
          </li>
          <li className="text-gray-800 font-normal">
            Usage data: refers to data collected automatically, either generated
            by the use of the service or from the service infrastructure itself
            (for example, the duration of a page visit).
          </li>
          <li className="text-gray-800 font-normal">
            Website: refers to Zoracom, accessible from https://www.zoracom.com/
          </li>
          <li className="text-gray-800 font-normal">
            You: means the individual accessing or using the service, or the
            company, or other legal entity on behalf of which such individual is
            accessing or using the service, as applicable.
          </li>
        </ol>
        <PolicyTitle
          title={"Types of Data Collected"}
          titleClassName={"text-lg font-semibold text-left mt-4"}
        />
        <PolicyTitle
          title={"Personal Data"}
          titleClassName={"text-base font-semibold text-left mt-4"}
        />
        <p className="mt-4 text-gray-800 font-normal">
          While using our service, we may ask you to provide us with certain
          personally identifiable information that can be used to contact or
          identify you. Personally identifiable information may include, but is
          not limited to:
        </p>
        <ul className="">
          <li className="text-gray-800 font-normal">Email address</li>
          <li className="text-gray-800 font-normal">
            First name and last name{" "}
          </li>
          <li className="text-gray-800 font-normal">Phone number </li>
          <li className="text-gray-800 font-normal">Company name</li>
          <li className="text-gray-800 font-normal"> Usage data</li>
        </ul>
        <PolicyTitle
          title={"Usage Data"}
          titleClassName={"text-lg font-semibold text-left mt-4"}
        />
        <p className="mt-4 text-gray-800 font-normal">
          Usage Data Usage data is collected automatically when using the
          service.
        </p>
        <p className="mt-4 text-gray-800 font-normal">
          Usage data may include information such as your device&apos;s internet
          protocol address (e.g., IP address, browser type, browser version, the
          pages of our service that you visit, the time and date of your visit,
          the time spent on those pages, unique device identifiers and other
          diagnostic data). When you access the service by or through a mobile
          device, we may collect certain information automatically, including,
          but not limited to, the type of mobile device you use, your mobile
          device unique id, the IP address of your mobile device, your mobile
          operating system, the type of mobile internet browser you use, unique
          device identifiers and other diagnostic data. We may also collect
          information that your browser sends whenever you visit our service or
          when you access the service by or through a mobile device.{" "}
        </p>
        <PolicyTitle
          title={"Tracking Technologies and Cookies"}
          titleClassName={"text-lg font-semibold text-left mt-4"}
        />
        <p className="mt-4 text-gray-800 font-normal">
          We use cookies and similar tracking technologies to track the activity
          on our service and store certain information. Tracking technologies
          used are beacons, tags, and scripts to collect and track information
          and to improve and analyse our service. The technologies we use may
          include:
        </p>
        <ol className="list-disc list-inside">
          <li className="text-gray-800 font-normal">
            Cookies or browser cookies. A cookie is a small file placed on your
            device. You can instruct your browser to refuse all cookies or to
            indicate when a cookie is being sent. However, if you do not accept
            cookies, you may not be able to use some parts of our service.
            Unless you have adjusted your browser setting so that it will refuse
            cookies, our service may use cookies.
          </li>
          <li className="text-gray-800 font-normal">
            Web beacons. Certain sections of our service and our emails may
            contain small electronic files known as web beacons (also referred
            to as clear gifs, pixel tags, and single-pixel gifs) that permit the
            company, for example, to count users who have visited those pages or
            opened an email and for other related website statistics (for
            example, recording the popularity of a certain section and verifying
            system and server integrity).
          </li>
        </ol>
        <p className="mt-4 text-gray-800 font-normal">
          Cookies can be &quot;persistent&quot; or &quot;session&quot; cookies.
          Persistent cookies remain on your personal computer or mobile device
          when you go offline, while session cookies are deleted as soon as you
          close your web browser. We use both session and persistent cookies for
          the purposes set out below:
        </p>
        <ol className="list-disc list-inside">
          <li className="text-gray-800 font-normal">
            Necessary / essential cookies
          </li>
        </ol>
        <p className="mt-4 text-gray-800 font-normal">Type: session cookies</p>
        <p className="mt-4 text-gray-800 font-normal">Administered by: Us</p>
        <p className="mt-4 text-gray-800 font-normal">
          Purpose: these cookies are essential to provide you with services
          available through the website and to enable you to use some of its
          features. They help to authenticate users and prevent fraudulent use
          of user accounts. Without these cookies, the services that you have
          asked for cannot be provided, and we only use these cookies to provide
          you with those services.
        </p>
        <ol className="list-disc list-inside">
          <li className="text-gray-800 font-normal">
            Cookies policy / notice acceptance cookies
          </li>
        </ol>
        <p className="mt-4 text-gray-800 font-normal">
          Type: persistent cookies
        </p>
        <p className="mt-4 text-gray-800 font-normal">Administered by: Us</p>
        <p className="mt-4 text-gray-800 font-normal">
          Purpose: these cookies identify if users have accepted the use of
          cookies on the website.
        </p>
        <ol className="list-disc list-inside">
          <li className="text-gray-800 font-normal">
            {" "}
            Functionality cookies Type: persistent cookies
          </li>
        </ol>
        <p className="mt-4 text-gray-800 font-normal">Administered by: Us</p>
        <p className="mt-4 text-gray-800 font-normal">
          {" "}
          Purpose: these cookies allow us to remember choices you make when you
          use the website, such as remembering your login details or language
          preference. The purpose of these cookies is to provide you with a more
          personal experience and to avoid you having to re-enter your
          preferences every time you use the website.
        </p>
        <PolicyTitle
          title={"Use of Your Personal Data"}
          titleClassName={"text-lg font-semibold text-left mt-4"}
        />
        <p className="mt-4 text-gray-800 font-normal">
          The company may use personal data for the following purposes:
        </p>
        <ol className="list-disc list-inside">
          <li className="text-gray-800 font-normal">
            To provide and maintain our service, including to monitor the usage
            of our service.
          </li>
          <li className="text-gray-800 font-normal">
            To manage your account: to manage your registration as a user of the
            service. The personal data you provide can give you access to
            different functionalities of the service that are available to you
            as a registered user.
          </li>
          <li className="text-gray-800 font-normal">
            For the performance of a contract: the development, compliance and
            undertaking of the purchase contract for the products, items or
            services You have purchased or of any other contract with Us through
            the Service.
          </li>
          <li className="text-gray-800 font-normal">
            To contact you: To contact you by email, telephone calls, sms, or
            other equivalent forms of electronic communication, such as a mobile
            application&apos;s push notifications regarding updates or
            informative communications related to the functionalities, products
            or contracted services, including the security updates, when
            necessary or reasonable for their implementation.
          </li>
          <li className="text-gray-800 font-normal">
            To provide you with news, special offers and general information
            about other goods, services and events which we offer that are
            similar to those that you have already purchased or enquired about
            unless you have opted not to receive such information.
          </li>
          <li className="text-gray-800 font-normal">
            To manage your requests: To attend and manage your requests to us.
          </li>
          <li className="text-gray-800 font-normal">
            For business transfers: We may use your information to evaluate or
            conduct a merger, divestiture, restructuring, reorganization,
            dissolution, or other sale or transfer of some or all of our assets,
            whether as a going concern or as part of bankruptcy, liquidation, or
            similar proceeding, in which personal data held by us about our
            service users is among the assets transferred.
          </li>
          <li className="text-gray-800 font-normal">
            For other purposes: We may use your information for other purposes,
            such as data analysis, identifying usage trends, determining the
            effectiveness of our promotional campaigns and to evaluate and
            improve our service, products, services, marketing and your
            experience.
          </li>
        </ol>
        <p className="mt-4 text-gray-800 font-normal">
          {" "}
          We may share your personal information in the following situations:
        </p>
        <ol className="list-disc list-inside">
          <li className="text-gray-800 font-normal">
            {" "}
            With service providers: We may share your personal information with
            service providers to monitor and analyse the use of our service, to
            contact you.
          </li>
          <li className="text-gray-800 font-normal">
            {" "}
            For business transfers: We may share or transfer your personal
            information in connection with, or during negotiations of, any
            merger, sale of company assets, financing, or acquisition of all or
            a portion of our business to another company.
          </li>
          <li className="text-gray-800 font-normal">
            With affiliates: We may share your information with our affiliates,
            in which case we will require those affiliates to honour this
            privacy policy. Affiliates include our parent company and any other
            subsidiaries, joint venture partners or other companies that we
            control or that are under common control with us.
          </li>
          <li className="text-gray-800 font-normal">
            With business partners: We may share your information with our
            business partners to offer you certain products, services or
            promotions.
          </li>
          <li className="text-gray-800 font-normal">
            With other users: When you share personal information or otherwise
            interact in the public areas with other users, such information may
            be viewed by all users and may be publicly distributed outside.
          </li>
          <li className="text-gray-800 font-normal">
            With your consent: We may disclose your personal information for any
            other purpose with your consent.{" "}
          </li>
        </ol>

        <PolicyTitle
          title={"Retention of Your Personal Data"}
          titleClassName={"text-lg font-semibold text-left mt-4"}
        />
        <p className="mt-4 text-gray-800 font-normal">
          The company will retain your personal data only for as long as is
          necessary for the purposes set out in this privacy policy. We will
          retain and use your personal data to the extent necessary to comply
          with our legal obligations (for example, if we are required to retain
          your data to comply with applicable laws), resolve disputes, and
          enforce our legal agreements and policies. The company will also
          retain usage data for internal analysis purposes. Usage data is
          generally retained for a shorter period of time, except when this data
          is used to strengthen the security or to improve the functionality of
          our service, or we are legally obligated to retain this data for
          longer time periods.
        </p>

        <PolicyTitle
          title={"Transfer of Your Personal Data"}
          titleClassName={"text-lg font-semibold text-left mt-4"}
        />
        <p className="mt-4 text-gray-800 font-normal">
          Your information, including personal data, is processed at the
          company&apos;s operating offices and in any other places where the
          parties involved in the processing are located. It means that this
          information may be transferred to — and maintained on — computers
          located outside of your state, province, country or other governmental
          jurisdiction where the data protection laws may differ than those from
          your jurisdiction. Your consent to this privacy policy followed by
          your submission of such information represents your agreement to that
          transfer. The company will take all steps reasonably necessary to
          ensure that your data is treated securely and in accordance with this
          privacy policy and no transfer of your personal data will take place
          to an organization or a country unless there are adequate controls in
          place including the security of your data and other personal
          information.
        </p>

        <PolicyTitle
          title={"Disclosure of Your Personal Data"}
          titleClassName={"text-lg font-semibold text-left mt-4"}
        />
        <PolicyTitle
          title={"Business Transactions"}
          titleClassName={"text-lg font-semibold text-left mt-4"}
        />
        <p className="mt-4 text-gray-800 font-normal">
          Business Transactions If the company is involved in a merger,
          acquisition or asset sale, your personal data may be transferred. We
          will provide notice before your personal data is transferred and
          becomes subject to a different privacy policy.
        </p>

        <PolicyTitle
          title={"Law enforcement"}
          titleClassName={"text-lg font-semibold text-left mt-4"}
        />
        <p className="mt-4 text-gray-800 font-normal">
          Under certain circumstances, the company may be required to disclose
          your personal data if required to do so by law or in response to valid
          requests by public authorities (e.g., a court or a government agency).
        </p>

        <PolicyTitle
          title={"Other legal requirements"}
          titleClassName={"text-lg font-semibold text-left mt-4"}
        />
        <p className="mt-4 text-gray-800 font-normal">
          The Company may disclose Your Personal Data in the good faith belief
          that such action is necessary to:
        </p>
        <ol className="list-disc list-inside">
          <li className="text-gray-800 font-normal">
            {" "}
            Comply with a legal obligation
          </li>
          <li className="text-gray-800 font-normal">
            {" "}
            Protect and defend the rights or property of the Company
          </li>
          <li className="text-gray-800 font-normal">
            {" "}
            Prevent or investigate possible wrongdoing in connection with the
            Service
          </li>
          <li className="text-gray-800 font-normal">
            {" "}
            Protect the personal safety of Users of the Service or the public
            Protect against legal liability{" "}
          </li>
        </ol>
        <PolicyTitle
          title={"Security of Your Personal Data"}
          titleClassName={"text-lg font-semibold text-left mt-4"}
        />
        <p className="mt-4 text-gray-800 font-normal">
          The security of your personal data is important to us, but remember
          that no method of transmission over the internet, or method of
          electronic storage is 100% secure. While we strive to use commercially
          acceptable means to protect your personal data, we cannot guarantee
          its absolute security.
        </p>

        <PolicyTitle
          title={"Children policy"}
          titleClassName={"text-lg font-semibold text-center mt-4"}
        />
        <p className="mt-4 text-gray-800 font-normal">
          Our service does not address anyone under the age of 13. We do not
          knowingly collect personally identifiable information from anyone
          under the age of 13. If you are a parent or guardian and you are aware
          that your child has provided us with personal data, please contact us.
          If we become aware that we have collected personal data from anyone
          under the age of 13 without verification of parental consent, we take
          steps to remove that information from our servers. If we need to rely
          on consent as a legal basis for processing your information and your
          country requires consent from a parent, we may require your
          parent&apos;s consent before we collect and use that information.
        </p>

        <PolicyTitle
          title={"Links to Other Websites"}
          titleClassName={"text-lg font-semibold text-left mt-4"}
        />
        <p className="mt-4 text-gray-800 font-normal">
          Our service may contain links to other websites that are not operated
          by us. If you click on a third-party link, you will be directed to
          that third party&apos;s site. We strongly advise you to review the
          privacy policy of every site you visit. We have no control over and
          assume no responsibility for the content, privacy policies or
          practices of any third-party sites or services.
        </p>

        <PolicyTitle
          title={"Changes to this Privacy Policy"}
          titleClassName={"text-lg font-semibold text-left mt-4"}
        />
        <p className="mt-4 text-gray-800 font-normal">
          We may update our privacy policy from time to time. We will notify you
          of any changes by posting the new privacy policy on this page. We may
          let you know via email and/or a prominent notice on our service, prior
          to the change becoming effective and update the &quot;last
          updated&quot; date at the top of this privacy policy. You are advised
          to review this privacy policy periodically for any changes. Changes to
          this privacy policy are effective when they are posted on this page.
        </p>

        <PolicyTitle
          title={"Contact Us"}
          titleClassName={"text-lg font-semibold text-left mt-4"}
        />
        <p className="mt-4 text-gray-800 font-normal">
          If you have any questions about this privacy policy, you can contact
          us:
        </p>
        <ol className="list-disc list-inside">
          <li className="text-gray-800 font-normal">
            By email: info@zoracom.com
          </li>
          <li className="text-gray-800 font-normal">
            By visiting this page on our website: https://www.zoracom.com/
          </li>
          <li className="text-gray-800 font-normal">
            By phone number: +234 (0)802 661 5660{" "}
          </li>
        </ol>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
