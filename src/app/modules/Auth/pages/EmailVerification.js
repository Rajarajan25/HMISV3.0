import React, { useContext, useEffect, useState } from "react";
import { toAbsoluteUrl } from "../../../../_metronic/_helpers";
import { Link } from "react-router-dom";
import { Formik, Field } from "formik";
import { gql, useMutation } from "@apollo/client";
import { UserContext } from "./UserContext";
import { DevConsoleLog, DevAlertPopUp } from "../../../SiteUtill";

const UPDATE_EMAIL_STATUS = gql`
  mutation verifyMailConfirmation($data:emailConfirmation) {
    verifyMailConfirmation(data: $data)
  }
`;

export default function EmailVerification() {
  const [updateEmail] = useMutation(UPDATE_EMAIL_STATUS);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState(false);
  const enableLoading = () => {
    setLoading(true);
  };

  const disableLoading = () => {
    setLoading(false);
  };
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const id = params.get("id").toString();
    const content = params.get("content").toString();
    if (id && content) {
      enableLoading();
      updateEmail({
        variables: {
          data: {
            id: id,
            content: content,
          },
        },
      }).then((res) => {
        disableLoading();
        DevConsoleLog(res.data.verifyMailConfirmation);
        setMessage(res.data.verifyMailConfirmation);
      });
    }
  }, []);

  return (
    <div className="d-flex justify-content-center flex-column col-xl-8 col-lg-11 wid col">
      {/* start:: Aside header */}
      <div class="d-lg-flex d-xl-flex d-md-flex d-block w-100 text-center">
        <Link to="/" className="flex-column-auto logo-tb mb-5">
          <img alt="Logo" src={toAbsoluteUrl("/media/logos/Logo-HMIS.svg")} />
        </Link>
        <span className="mob_title d-lg-none d-xl-none d-md-none d-inline-block mt-0">
          Email Verifier.
        </span>
      </div>
      {/* end:: Aside header */}

      <div className="d-flex w-100 loginMaincontent shadow min-heis">
        {/*begin::Aside*/}
        <div
          className="login-aside d-none d-xl-flex d-lg-flex flex-2 bgi-size-cover bgi-no-repeat col-7 order-0 rounded-left"
          style={{
            backgroundColor: `#1D6AFF`,
          }}
        >
          {/*begin: Aside Container*/}
          <div className="d-flex flex-row-fluid flex-column justify-content-between">
            {/* start:: Aside content */}
            <div className="flex-column-fluid d-flex flex-column justify-content-center">
              <div className="d-flex flex-column h-100">
                <div className="mt-25 mb-10 mx-auto col-lg-11 col-11 flex-column-fluid text-center">
                  <h3 className="font-size-h1 text-uppercase font-weight-600 mb-5 text-white">
                    Email Verifier.
                  </h3>
                  <p className="font-size-14 mx-auto loginRightimg1 font-weight-300 text-white line-height2">
                    {/* https://truemail.io/ */}
                    Easy, Fast & Cheap. Email checker tool will clean your
                    mailing list and increase deliverability rate up to 99%. The
                    email address validation process was never so easy.
                  </p>
                </div>
                <div className="text-center mx-auto d-flex align-items-end">
                  <img
                    src="/media/auth-screen/sign_up_banner.svg"
                    className="m-auto col-lg-10"
                    alt="banner"
                  />
                </div>
              </div>
            </div>

            {/* end:: Aside content */}

            {/* start:: Aside footer for desktop d-lg-flex */}
            <div className="d-none flex-column-auto  justify-content-between mt-10">
              <div className="opacity-70 font-weight-bold	text-dark">
                &copy; 2020 Metronic
              </div>
              <div className="d-flex">
                <Link to="/terms" className="text-dark font-size-14">
                  Privacy
                </Link>
                <Link to="/terms" className="text-dark font-size-14 ml-10">
                  Legal
                </Link>
                <Link to="/terms" className="text-dark font-size-14 ml-10">
                  Contact
                </Link>
              </div>
            </div>
            {/* end:: Aside footer for desktop */}
          </div>
          {/*end: Aside Container*/}
        </div>
        {/*begin::Aside*/}
        <div className="d-flex rounded-right bg-white registration-form login-signin col-xl-5 col-lg-5 col-12">
          <div className="mh-100 mt-7 p-5 mx-auto width_420">
            <div className="text-center mb-6">
              <h1 className="font-size-h1 color_3F4772 font-weight-600 tit_letter mb-4">
                Email Verification.
              </h1>
              {/* https://www.facebook.com/AIUBSoftwareDivision/photos/a.1479090158979595.1073741829.1433399730215305/1479090198979591 */}
              {/* https://dribbble.com/shots/6098738-Email-Verification-Success-page/attachments/6098738-Email-Verification-Success-page?mode=media */}
              {loading && (
                <div className="text-center mt-15">
                  <span className="ml-3 spinner spinner-lg spinner-primary"></span>
                </div>
              )}
              {!loading && (
                <div className="text-center">
                  <p className="font-size-14 mx-auto loginRightimg1 font-weight-600 line-height2">
                    Verification success
                  </p>
                  <p className="font-size-14 mx-auto loginRightimg1 font-weight-600">{message}</p>
                  <p className="font-size-14 mx-auto loginRightimg1 font-weight-300 line-height2">
                    Thank you for your support, we have successfully verified
                    your mail address. you can now proceed to you dashboard page
                  </p>
                  <div className="form-group cr_ac flex-wrap justify-content-between text-center mb-6">
                  <Link to="/">
                    <button
                      className={`btn btn-primary btn-block font-weight-400`}
                    >
                      Go to Dashboard
                    </button>
                    </Link>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
