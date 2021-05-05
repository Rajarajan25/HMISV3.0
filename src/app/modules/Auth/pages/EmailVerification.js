import React, { useEffect, useState } from "react";
import { toAbsoluteUrl } from "../../../../_metronic/_helpers";
import { Link, Redirect } from "react-router-dom";
import { gql, useMutation } from "@apollo/client";
import { DevConsoleLog } from "../../../SiteUtill";

const UPDATE_EMAIL_STATUS = gql`
  mutation verifyMailConfirmation($data:emailConfirmation) {
    verifyMailConfirmation(data: $data)
  }
`;

export default function EmailVerification() {
  const [updateEmail] = useMutation(UPDATE_EMAIL_STATUS);
  const [loading, setLoading] = useState(false);
  const [isRequested, setIsRequested] = useState(false);
  const [message, setMessage] = useState(false);
  const enableLoading = () => {
    setLoading(true);
  };

  const disableLoading = () => {
    setLoading(false);
  };
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    if (params && params.get("id")) {
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
    } else {
      setIsRequested(true);
    }
  }, []);

  return (
    <>
      {isRequested && <Redirect to="/auth" />}
      <div className="d-flex justify-content-center flex-column col-xl-8 col-lg-11 wid col">
        <div class="d-lg-flex d-xl-flex d-md-flex d-block w-100 text-center">
          <Link to="/" className="flex-column-auto logo-tb mb-5">
            <img
              alt="Logo"
              src={toAbsoluteUrl("/media/logos/Logo-HMIS.svg")}
            />
          </Link>
          <span className="mob_title d-lg-none d-xl-none d-md-none d-inline-block mt-0"></span>
        </div>
        <div className="d-flex w-100 loginMaincontent shadow min-heis" >
          <div className="login-aside d-none d-xl-flex d-lg-flex flex-2 bgi-size-cover bgi-no-repeat bg-white col-5 order-0 rounded-left">
            <div className="d-flex flex-row-fluid flex-column justify-content-between">
              <div className="flex-column-fluid d-flex flex-column justify-content-center">
                <div className="d-flex">
                  <div className="text-center mx-auto d-flex align-items-center">
                    <img src="/media/auth-screen/mail-notify-icon.svg" className="m-auto col-lg-12" alt="banner" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="d-flex rounded-right bg-white registration-form login-signin col-xl-7 col-lg-7 col-12">
            <div className="mh-100 mt-7 p-5 d-flex align-items-center">
              <div className="text-left mail_con">
                <h1 className="font-size-h1 color_3F4772 font-weight-700 tit_letter mb-10 text-uppercase">Email Verification!!</h1>
                {loading && (
                  <div className="text-center mt-15">
                    <span className="ml-3 spinner spinner-lg spinner-primary"></span>
                  </div>
                )}
                {!loading && (
                  <>
                    <h3 className="font-size-h2 font-weight-600 mb-10">
                      <img src={toAbsoluteUrl("/media/auth-screen/mail-check-icon.svg")} alt="" className="mr-4" />
                      <span>{message}</span>
                    </h3>
                    <p className="font-size-h3 color_7777 font-weight-500">Thank you for your support.<br /> We have successfully verified your mail address.</p>
                    <div className="form-group cr_ac flex-wrap justify-content-between text-center mb-6 mt-10">
                      <Link to="/">
                        <button
                          className={`btn btn-primary btn-block font-weight-400`}
                        >
                          Go to Home
                        </button>
                      </Link>
                    </div>
                  </>
                )}
              </div>
            </div>
          </div>

        </div>
      </div>
    </>
  );
}
