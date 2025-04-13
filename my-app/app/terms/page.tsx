"use client";

import Link from "next/link";

export default function TermsOfService() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-gray-50 to-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto bg-white/80 backdrop-blur-md rounded-xl shadow-sm border border-gray-100 overflow-hidden">
        <div className="px-6 py-4 border-b border-gray-100 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-gray-900">Terms of Service</h1>
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
                These Terms constitute a legally binding agreement between you
                and UGZ, LLC. By using our site or joining our waitlist, you
                agree to these terms.
              </p>
            </div>
          </div>

          <div className="space-y-8">
            <section>
              <h2 className="text-xl font-bold text-gray-900 mb-4 pb-2 border-b border-gray-100">
                1. Introduction
              </h2>
              <p className="text-gray-700 leading-relaxed mb-3">
                Welcome to our website (the "Site"). By accessing or using the
                Site, providing your email address, or joining our waitlist, you
                agree to be bound by these Terms of Service ("Terms"). Please
                read these Terms carefully before using our services.
              </p>
              <p className="text-gray-700 leading-relaxed">
                These Terms constitute a legally binding agreement between you
                and UGZ, LLC ("we," "us," or "our") regarding your use of our
                Site and services.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-gray-900 mb-4 pb-2 border-b border-gray-100">
                2. Description of Service
              </h2>
              <p className="text-gray-700 leading-relaxed">
                Our Site offers information about our products and services and
                allows visitors to join a waitlist by providing their email
                address. We may use video content delivered via Mux Video and
                analytics services to enhance your experience and improve our
                offerings.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-gray-900 mb-4 pb-2 border-b border-gray-100">
                3. Eligibility
              </h2>
              <p className="text-gray-700 leading-relaxed">
                You must be at least 18 years old or have reached the age of
                majority in your jurisdiction to use our Site and join our
                waitlist. By using our Site, you represent and warrant that you
                meet these eligibility requirements.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-gray-900 mb-4 pb-2 border-b border-gray-100">
                4. Registration and Waitlist
              </h2>

              <div className="space-y-6 pl-4 border-l-2 border-blue-100">
                <div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">
                    4.1 Email Collection
                  </h3>
                  <p className="text-gray-700">
                    When you join our waitlist, we collect your email address.
                    By providing your email address, you consent to receive
                    communications from us regarding our products, services, and
                    updates about your waitlist status.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">
                    4.2 Communication
                  </h3>
                  <p className="text-gray-700">
                    By joining our waitlist, you agree that we may contact you
                    via the email address you provide. You can opt out of these
                    communications at any time by following the unsubscribe
                    instructions in our emails or by contacting us directly.
                  </p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-xl font-bold text-gray-900 mb-4 pb-2 border-b border-gray-100">
                5. Privacy and Data Collection
              </h2>

              <div className="space-y-6 pl-4 border-l-2 border-blue-100">
                <div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">
                    5.1 Privacy Policy
                  </h3>
                  <p className="text-gray-700">
                    Your use of our Site is subject to our{" "}
                    <Link
                      href="/privacy"
                      className="text-blue-600 hover:text-blue-800 underline"
                    >
                      Privacy Policy
                    </Link>
                    , which is incorporated by reference into these Terms.
                    Please review our Privacy Policy to understand how we
                    collect, use, and disclose information about you.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">
                    5.2 Analytics
                  </h3>
                  <p className="text-gray-700">
                    We use Plausible Analytics to collect anonymous usage data
                    about how visitors interact with our Site. This data helps
                    us improve our Site and services. Plausible Analytics is
                    privacy-friendly and does not use cookies or collect
                    personal information.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">
                    5.3 Video Content
                  </h3>
                  <p className="text-gray-700">
                    Our Site may include video content delivered via Mux Video.
                    When you view video content on our Site, certain technical
                    information may be collected by Mux in accordance with their
                    privacy policy.
                  </p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-xl font-bold text-gray-900 mb-4 pb-2 border-b border-gray-100">
                6. Intellectual Property Rights
              </h2>

              <div className="space-y-6 pl-4 border-l-2 border-blue-100">
                <div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">
                    6.1 Our Content
                  </h3>
                  <p className="text-gray-700">
                    All content on our Site, including but not limited to text,
                    images, graphics, logos, video content, and software, is
                    owned by or licensed to us and is protected by copyright,
                    trademark, and other intellectual property laws.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">
                    6.2 Limited License
                  </h3>
                  <p className="text-gray-700">
                    We grant you a limited, non-exclusive, non-transferable, and
                    revocable license to access and use our Site for personal,
                    non-commercial purposes. You may not reproduce, distribute,
                    modify, create derivative works of, publicly display,
                    publicly perform, republish, download, store, or transmit
                    any content on our Site without our express written
                    permission.
                  </p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-xl font-bold text-gray-900 mb-4 pb-2 border-b border-gray-100">
                7. Prohibited Conduct
              </h2>
              <p className="text-gray-700 mb-2">You agree not to:</p>
              <ul className="list-disc pl-5 text-gray-700 space-y-2">
                <li>
                  Use our Site in any way that violates any applicable federal,
                  state, local, or international law or regulation
                </li>
                <li>
                  Attempt to gain unauthorized access to our Site, user
                  accounts, or computer systems
                </li>
                <li>
                  Engage in any conduct that restricts or inhibits anyone's use
                  or enjoyment of our Site
                </li>
                <li>
                  Use any robot, spider, or other automatic device to access our
                  Site for any purpose
                </li>
                <li>
                  Introduce any viruses, trojan horses, worms, or other material
                  that is malicious or technologically harmful
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-bold text-gray-900 mb-4 pb-2 border-b border-gray-100">
                8. Disclaimers
              </h2>

              <div className="space-y-6 pl-4 border-l-2 border-blue-100">
                <div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">
                    8.1 Warranty Disclaimer
                  </h3>
                  <p className="text-gray-700 bg-gray-50 p-3 rounded border border-gray-100 font-medium">
                    OUR SITE AND SERVICES ARE PROVIDED ON AN "AS IS" AND "AS
                    AVAILABLE" BASIS, WITHOUT ANY WARRANTIES OF ANY KIND, EITHER
                    EXPRESS OR IMPLIED. WE DISCLAIM ALL WARRANTIES, INCLUDING
                    IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS FOR A
                    PARTICULAR PURPOSE, AND NON-INFRINGEMENT.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">
                    8.2 Availability
                  </h3>
                  <p className="text-gray-700">
                    We do not guarantee that our Site will always be available,
                    uninterrupted, or error-free. We may suspend, withdraw, or
                    restrict the availability of all or any part of our Site for
                    business and operational reasons without notice.
                  </p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-xl font-bold text-gray-900 mb-4 pb-2 border-b border-gray-100">
                9. Limitation of Liability
              </h2>
              <p className="text-gray-700 bg-gray-50 p-3 rounded border border-gray-100 font-medium">
                TO THE MAXIMUM EXTENT PERMITTED BY LAW, WE SHALL NOT BE LIABLE
                FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR
                PUNITIVE DAMAGES, INCLUDING BUT NOT LIMITED TO LOSS OF PROFITS,
                DATA, USE, OR OTHER INTANGIBLE LOSSES, RESULTING FROM YOUR
                ACCESS TO OR USE OF OR INABILITY TO ACCESS OR USE THE SITE.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-gray-900 mb-4 pb-2 border-b border-gray-100">
                10. Indemnification
              </h2>
              <p className="text-gray-700 leading-relaxed">
                You agree to indemnify, defend, and hold harmless us and our
                officers, directors, employees, agents, and affiliates from and
                against any and all claims, liabilities, damages, losses, costs,
                expenses, or fees (including reasonable attorneys' fees) that
                arise from or relate to your use of our Site or violation of
                these Terms.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-gray-900 mb-4 pb-2 border-b border-gray-100">
                11. Modifications to Terms
              </h2>
              <p className="text-gray-700 leading-relaxed">
                We reserve the right to modify these Terms at any time, with or
                without notice. If we make material changes to these Terms, we
                will make reasonable efforts to notify you by posting a notice
                on our Site or by sending an email to the address associated
                with your waitlist registration. Your continued use of our Site
                after such modifications constitutes your acceptance of the
                modified Terms.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-gray-900 mb-4 pb-2 border-b border-gray-100">
                12. Termination
              </h2>
              <p className="text-gray-700 leading-relaxed">
                We may terminate or suspend your access to our Site immediately,
                without prior notice or liability, for any reason whatsoever,
                including without limitation if you breach these Terms. Upon
                termination, your right to use the Site will immediately cease.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-gray-900 mb-4 pb-2 border-b border-gray-100">
                13. Governing Law
              </h2>
              <p className="text-gray-700 leading-relaxed">
                These Terms shall be governed by and construed in accordance
                with the laws of the United States, without regard to its
                conflict of law provisions.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-gray-900 mb-4 pb-2 border-b border-gray-100">
                14. Dispute Resolution
              </h2>
              <p className="text-gray-700 leading-relaxed">
                Any dispute arising out of or relating to these Terms or your
                use of the Site shall be resolved through binding arbitration in
                accordance with the rules of the American Arbitration
                Association in the United States. The arbitration shall be
                conducted in English and judgment on the award rendered by the
                arbitrator may be entered in any court having jurisdiction
                thereof.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-gray-900 mb-4 pb-2 border-b border-gray-100">
                15. Severability
              </h2>
              <p className="text-gray-700 leading-relaxed">
                If any provision of these Terms is held to be invalid or
                unenforceable, such provision shall be struck and the remaining
                provisions shall be enforced to the fullest extent under law.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-gray-900 mb-4 pb-2 border-b border-gray-100">
                16. Entire Agreement
              </h2>
              <p className="text-gray-700 leading-relaxed">
                These Terms, together with our{" "}
                <Link
                  href="/privacy"
                  className="text-blue-600 hover:text-blue-800 underline"
                >
                  Privacy Policy
                </Link>
                , constitute the entire agreement between you and us regarding
                your use of our Site and supersede all prior and contemporaneous
                agreements, proposals, or representations, written or oral,
                concerning its subject matter.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-gray-900 mb-4 pb-2 border-b border-gray-100">
                17. Contact Information
              </h2>
              <p className="text-gray-700 mb-4">
                If you have any questions about these Terms, please contact us
                at:
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
