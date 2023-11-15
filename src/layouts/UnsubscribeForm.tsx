import React, { useState, useEffect } from "react";
import "../styles/Modal.css";

const host = import.meta.env.PUBLIC_SIGNUP_FORM_HOST;

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};

const SignupForm = ({ isOpen, onRequestClose, emailParameter, emailkey }) => {
  const [email, setEmail] = useState("");
  const [success, setSuccess] = useState(false);
  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = {
      email,
    };

    try {
      const response = await fetch(
        `https://7cy6ykztc4.execute-api.ap-south-1.amazonaws.com/unsubscribe?email=${emailParameter}&emailkey=${emailkey}`,
        {
          method: "GET",
        },
      );
      console.log(response);
      if (response.ok) {
        setSuccess(true);
      } else {
        console.error("Submission failed.");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div>
      {isOpen && (
        <div className="modal-window">
          <>
            {success && (
              <>
                {/* <button className="modal-close" onClick={onRequestClose}>
                  X
                </button> */}
                <br></br>
                <br></br>
                <div className="mx-auto text-center">
                  <img
                    width="80px"
                    height="80px"
                    className="mx-auto mb-3"
                    src="/images/sugar/sugarcane-news.png"
                    alt="no-search-found"
                  />
                  <br></br>
                  <h2
                    className="mt-10"
                    style={{
                      color: "black",
                      align: "end",
                      "text-align": "center",
                      "font-size": "2em",
                    }}
                  >
                    Unsubscribed Successfully, Thanks !
                  </h2>
                </div>
              </>
            )}
            {!success && (
              <>
                {/* <button className="modal-close" onClick={onRequestClose}>
                  X
                </button> */}
                <br></br>
                <br></br>
                <div className="mx-auto text-center">
                  <img
                    width="80px"
                    height="80px"
                    className="mx-auto mb-3"
                    src="/images/sugar/sugarcane-news.png"
                    alt="no-search-found"
                  />
                  {/* <h2
                    className="mb-2"
                    style={{
                      color: "black",
                      align: "end",
                      "text-align": "center",
                      "font-size": "1.5em",
                    }}
                  >
                    Get early access !
                  </h2> */}
                  <br></br>
                  <h2
                    className="mb-6"
                    style={{
                      color: "black",
                      align: "end",
                      "text-align": "center",
                      "font-size": "1.3em",
                    }}
                  >
                    Unsubscribe from mail list!
                  </h2>

                  <form onSubmit={handleSubmit}>
                    <div>
                      <input
                        type="email"
                        disabled
                        style={{
                          "font-family": "inherit",
                          "font-size": "1rem",
                          "font-weight": "400",
                          "line-height": "inherit",
                          width: "100%",
                          height: "auto",
                          padding: "0.75rem 1.25rem",
                          "border-radius": "2rem",
                        }}
                        id="email"
                        placeholder="Email"
                        value={emailParameter}
                      />
                      <button className="submitButton mt-4" type="submit">
                        Unsubscribe Now
                      </button>
                    </div>
                  </form>
                </div>
              </>
            )}
          </>
        </div>
      )}
    </div>
  );
};

function JoinWaitlist({
  klass = "btn btn-primary mt-5",
  styles = { marginLeft: "1rem" },
}) {
  const [isOpen, setIsOpen] = useState(false);
  const [emailParameter, setEmailParameter] = useState("");
  const [emailkey, setEmailKeyParameter] = useState("");

  useEffect(() => {
    // Access query parameters on the client side
    const urlSearchParams = new URLSearchParams(window.location.search);
    const emailParam = urlSearchParams.get("email");
    const emailkey = urlSearchParams.get("emailkey");

    if (emailParam) {
      setEmailParameter(emailParam);
      // Perform any logic based on the query parameter
      console.log("Your parameter:", emailParam);
    }
    if (emailkey) setEmailKeyParameter(emailkey);
  }, []); // Run this effect only once on mount

  return (
    <span>
      <SignupForm
        isOpen={!isOpen}
        emailParameter={emailParameter}
        emailkey={emailkey}
      />
    </span>
  );
}

export default JoinWaitlist;
