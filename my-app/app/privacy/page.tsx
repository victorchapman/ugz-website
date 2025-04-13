"use client";

import Link from "next/link";

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-gray-50 to-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto bg-white/80 backdrop-blur-md rounded-xl shadow-sm border border-gray-100 overflow-hidden">
        <div className="px-6 py-4 border-b border-gray-100 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-gray-900">Privacy Policy</h1>
          <Link
            href="/"
            className="text-blue-600 hover:text-blue-800 flex items-center gap-2 text-sm font-medium px-3 py-1.5 rounded-lg hover:bg-blue-50 transition-colors"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M19 12H5M12 19l-7-7 7-7" />
            </svg>
            Back to Home
          </Link>
        </div>

        <div className="p-6">
          <div className="mb-8 pb-6 border-b border-gray-100">
            <p className="text-sm text-gray-500 mb-4">
              <strong>Last Updated: April 12, 2025</strong>
            </p>

            <div className="bg-blue-50 rounded-lg p-4 text-blue-800 text-sm">
              <p>
                This Privacy Policy explains how UGZ, LLC collects, uses, and
                protects your information. By using our site or joining our
                waitlist, you consent to these practices.
              </p>
            </div>
          </div>

          <div className="space-y-8">
            <section>
              <h2 className="text-xl font-bold text-gray-900 mb-4 pb-2 border-b border-gray-100">
                1. Introduction
              </h2>
              <p className="text-gray-700 leading-relaxed">
                This Privacy Policy explains how UGZ, LLC ("we," "us," or "our")
                collects, uses, discloses, and safeguards your information when
                you visit our website ugz.ai (the "Site") and join our waitlist.
                Please read this Privacy Policy carefully. By using the Site,
                providing your email address, or joining our waitlist, you
                consent to the practices described in this Privacy Policy.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-gray-900 mb-4 pb-2 border-b border-gray-100">
                2. Information We Collect
              </h2>

              <div className="space-y-6 pl-4 border-l-2 border-blue-100">
                <div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">
                    2.1 Personal Information
                  </h3>
                  <p className="text-gray-700 mb-2">
                    We may collect the following personal information:
                  </p>
                  <ul className="list-disc pl-5 text-gray-700 space-y-1">
                    <li>
                      <strong className="text-gray-900">Email Address</strong>:
                      When you join our waitlist, we collect your email address
                      to communicate with you about our products, services, and
                      your waitlist status.
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">
                    2.2 Usage Data
                  </h3>
                  <p className="text-gray-700 mb-2">
                    We use Plausible Analytics, a privacy-friendly analytics
                    service, to collect anonymous usage data about how visitors
                    interact with our Site. This information helps us improve
                    our Site and services. Plausible Analytics does not use
                    cookies and does not collect personal information. The
                    anonymous usage data collected includes:
                  </p>
                  <ul className="list-disc pl-5 text-gray-700 space-y-1">
                    <li>Pages visited</li>
                    <li>Referral sources</li>
                    <li>Browser information</li>
                    <li>Device type</li>
                    <li>Geographic location (country level only)</li>
                    <li>Session duration</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">
                    2.3 Video Content Usage
                  </h3>
                  <p className="text-gray-700 mb-2">
                    Our Site may include video content delivered via Mux Video.
                    When you view video content on our Site, certain technical
                    information may be collected by Mux, including:
                  </p>
                  <ul className="list-disc pl-5 text-gray-700 space-y-1">
                    <li>IP address (temporarily)</li>
                    <li>Device information</li>
                    <li>Browser type</li>
                    <li>
                      Video engagement metrics (such as play, pause, and
                      completion events)
                    </li>
                  </ul>
                  <p className="text-gray-700 mt-2">
                    This information is used to deliver and optimize video
                    content delivery and is handled in accordance with Mux's
                    privacy policy.
                  </p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-xl font-bold text-gray-900 mb-4 pb-2 border-b border-gray-100">
                3. How We Use Your Information
              </h2>
              <p className="text-gray-700 mb-2">
                We may use the information we collect for the following
                purposes:
              </p>
              <ul className="list-disc pl-5 text-gray-700 space-y-1">
                <li>To provide and maintain our Site</li>
                <li>To notify you about changes to our services</li>
                <li>To allow you to participate in our waitlist</li>
                <li>To communicate with you about our products and services</li>
                <li>
                  To monitor and analyze Site usage to improve our Site and
                  services
                </li>
                <li>To detect, prevent, and address technical issues</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-bold text-gray-900 mb-4 pb-2 border-b border-gray-100">
                4. How We Share Your Information
              </h2>

              <div className="space-y-6 pl-4 border-l-2 border-blue-100">
                <div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">
                    4.1 Service Providers
                  </h3>
                  <p className="text-gray-700 mb-2">
                    We may share your information with third-party service
                    providers who perform services on our behalf, such as:
                  </p>
                  <ul className="list-disc pl-5 text-gray-700 space-y-1">
                    <li>Mux Video for video content delivery</li>
                    <li>Plausible Analytics for website analytics</li>
                    <li>Email service providers for waitlist communications</li>
                  </ul>
                  <p className="text-gray-700 mt-2">
                    These service providers have access to your personal
                    information only to perform these tasks on our behalf and
                    are obligated not to disclose or use it for any other
                    purpose.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">
                    4.2 Legal Requirements
                  </h3>
                  <p className="text-gray-700">
                    We may disclose your information if required to do so by law
                    or in response to valid requests by public authorities
                    (e.g., a court or a government agency).
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">
                    4.3 Business Transfers
                  </h3>
                  <p className="text-gray-700">
                    If we are involved in a merger, acquisition, or asset sale,
                    your information may be transferred as part of that
                    transaction. We will notify you via email and/or a prominent
                    notice on our Site of any change in ownership or uses of
                    your personal information.
                  </p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-xl font-bold text-gray-900 mb-4 pb-2 border-b border-gray-100">
                5. Data Security
              </h2>
              <p className="text-gray-700">
                We implement appropriate technical and organizational measures
                to protect the security of your personal information. However,
                please be aware that no method of transmission over the Internet
                or method of electronic storage is 100% secure. While we strive
                to use commercially acceptable means to protect your personal
                information, we cannot guarantee its absolute security.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-gray-900 mb-4 pb-2 border-b border-gray-100">
                6. Data Retention
              </h2>
              <p className="text-gray-700">
                We will retain your personal information only for as long as is
                necessary for the purposes set out in this Privacy Policy. We
                will retain and use your information to the extent necessary to
                comply with our legal obligations, resolve disputes, and enforce
                our policies.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-gray-900 mb-4 pb-2 border-b border-gray-100">
                7. Your Data Protection Rights
              </h2>
              <p className="text-gray-700 mb-2">
                Depending on your location, you may have certain rights
                regarding your personal information, including:
              </p>
              <ul className="divide-y divide-gray-100 text-gray-700">
                <li className="py-2 pl-5 flex">
                  <span className="font-semibold text-gray-900 w-48">
                    Right to Access:
                  </span>
                  <span>
                    You have the right to request copies of your personal
                    information.
                  </span>
                </li>
                <li className="py-2 pl-5 flex">
                  <span className="font-semibold text-gray-900 w-48">
                    Right to Rectification:
                  </span>
                  <span>
                    You have the right to request that we correct any
                    information you believe is inaccurate or complete
                    information you believe is incomplete.
                  </span>
                </li>
                <li className="py-2 pl-5 flex">
                  <span className="font-semibold text-gray-900 w-48">
                    Right to Erasure:
                  </span>
                  <span>
                    You have the right to request that we erase your personal
                    information under certain conditions.
                  </span>
                </li>
                <li className="py-2 pl-5 flex">
                  <span className="font-semibold text-gray-900 w-48">
                    Right to Restrict Processing:
                  </span>
                  <span>
                    You have the right to request that we restrict the
                    processing of your personal information under certain
                    conditions.
                  </span>
                </li>
                <li className="py-2 pl-5 flex">
                  <span className="font-semibold text-gray-900 w-48">
                    Right to Object to Processing:
                  </span>
                  <span>
                    You have the right to object to our processing of your
                    personal information under certain conditions.
                  </span>
                </li>
                <li className="py-2 pl-5 flex">
                  <span className="font-semibold text-gray-900 w-48">
                    Right to Data Portability:
                  </span>
                  <span>
                    You have the right to request that we transfer the data we
                    have collected to another organization or directly to you
                    under certain conditions.
                  </span>
                </li>
              </ul>
              <p className="text-gray-700 mt-4">
                If you wish to exercise any of these rights, please contact us
                at
                <a
                  href="mailto:contact@ugz.ai"
                  className="text-blue-600 hover:text-blue-800"
                >
                  {" "}
                  contact@ugz.ai
                </a>
                .
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-gray-900 mb-4 pb-2 border-b border-gray-100">
                8. Cookies and Tracking Technologies
              </h2>

              <div className="space-y-6 pl-4 border-l-2 border-blue-100">
                <div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">
                    8.1 Cookie Policy
                  </h3>
                  <p className="text-gray-700">
                    Our Site does not use cookies for tracking purposes. We use
                    Plausible Analytics, which is cookie-free and respects user
                    privacy.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">
                    8.2 Do Not Track Signals
                  </h3>
                  <p className="text-gray-700">
                    We honor Do Not Track signals and do not track, plant
                    cookies, or use advertising when a Do Not Track browser
                    mechanism is in place.
                  </p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-xl font-bold text-gray-900 mb-4 pb-2 border-b border-gray-100">
                9. Third-Party Links
              </h2>
              <p className="text-gray-700">
                Our Site may contain links to third-party websites that are not
                operated by us. If you click on a third-party link, you will be
                directed to that third party's site. We strongly advise you to
                review the Privacy Policy of every site you visit. We have no
                control over and assume no responsibility for the content,
                privacy policies, or practices of any third-party sites or
                services.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-gray-900 mb-4 pb-2 border-b border-gray-100">
                10. Children's Privacy
              </h2>
              <p className="text-gray-700">
                Our Site is not intended for use by children under the age of
                13. We do not knowingly collect personal information from
                children under 13. If you are a parent or guardian and you are
                aware that your child has provided us with personal information,
                please contact us at{" "}
                <a
                  href="mailto:contact@ugz.ai"
                  className="text-blue-600 hover:text-blue-800"
                >
                  contact@ugz.ai
                </a>{" "}
                so that we can take necessary actions.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-gray-900 mb-4 pb-2 border-b border-gray-100">
                11. Changes to This Privacy Policy
              </h2>
              <p className="text-gray-700">
                We may update our Privacy Policy from time to time. We will
                notify you of any changes by posting the new Privacy Policy on
                this page and updating the "Last Updated" date at the top of
                this Privacy Policy. You are advised to review this Privacy
                Policy periodically for any changes. Changes to this Privacy
                Policy are effective when they are posted on this page.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-gray-900 mb-4 pb-2 border-b border-gray-100">
                12. California Privacy Rights
              </h2>
              <p className="text-gray-700">
                California Civil Code Section 1798.83 permits users of our Site
                that are California residents to request certain information
                regarding our disclosure of personal information to third
                parties for their direct marketing purposes. To make such a
                request, please send an email to{" "}
                <a
                  href="mailto:contact@ugz.ai"
                  className="text-blue-600 hover:text-blue-800"
                >
                  contact@ugz.ai
                </a>
                .
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-gray-900 mb-4 pb-2 border-b border-gray-100">
                13. GDPR Compliance
              </h2>
              <p className="text-gray-700 mb-2">
                For users in the European Union, we process your personal data
                based on:
              </p>
              <ul className="list-disc pl-5 text-gray-700 space-y-1">
                <li>Your consent when joining our waitlist</li>
                <li>
                  Our legitimate interests in providing and improving our
                  services
                </li>
                <li>Compliance with legal obligations</li>
              </ul>
              <p className="text-gray-700 mt-2">
                As described in Section 7, you have certain rights regarding
                your personal data under the General Data Protection Regulation
                (GDPR).
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-gray-900 mb-4 pb-2 border-b border-gray-100">
                14. International Data Transfers
              </h2>
              <p className="text-gray-700">
                Your information, including personal information, may be
                transferred to and maintained on computers located outside of
                your state, province, country, or other governmental
                jurisdiction where the data protection laws may differ from
                those of your jurisdiction. If you are located outside the
                United States and choose to provide information to us, please
                note that we transfer the information, including personal
                information, to the United States and process it there.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-gray-900 mb-4 pb-2 border-b border-gray-100">
                15. Contact Us
              </h2>
              <p className="text-gray-700 mb-2">
                If you have any questions about this Privacy Policy, please
                contact us:
              </p>
              <div className="bg-gray-50 p-4 rounded-lg border border-gray-100">
                <p className="text-gray-700">
                  <strong className="font-medium">UGZ, LLC</strong>
                  <br />
                  Email:{" "}
                  <a
                    href="mailto:contact@ugz.ai"
                    className="text-blue-600 hover:text-blue-800"
                  >
                    contact@ugz.ai
                  </a>
                  <br />
                  Website:{" "}
                  <a
                    href="https://ugz.ai"
                    className="text-blue-600 hover:text-blue-800"
                  >
                    ugz.ai
                  </a>
                </p>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
