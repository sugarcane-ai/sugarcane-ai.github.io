import React, { useState } from 'react';
import Modal from 'react-modal';
import '../styles/Modal.css'

const host = import.meta.env.PUBLIC_SIGNUP_FORM_HOST

const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
    },
};

const SignupForm = ({ isOpen, onRequestClose }) => {
    const [email, setEmail] = useState('');
    const [success, setSuccess] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();

        const data = {
            email,
        };

        try {
            const response = await fetch(`${host}/api/email-signup`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),
            });

            if (response.status === 200) {
                setSuccess(true);
            } else {
                console.error('Submission failed.');
            }
        } catch (error) {
            console.error('Error:', error);
        }
    };

    return (
        <div>
            {isOpen && <div className='modal-window'>
                <>
                    {success && <>
                        <button className='modal-close' onClick={onRequestClose}>X</button>
                        <div className="mx-auto text-center">
                            <img
                                width="80px"
                                height="80px"
                                className="mx-auto mb-3"
                                src="/images/sugar/sugarcane-news.png"
                                alt="no-search-found"
                            />
                            <h2 className="mt-12" style={{ color: 'black', align: 'end', 'text-align': 'center', 'font-size': '2em' }} >Joined Successfully, Thanks !</h2>
                        </div>
                    </>}
                    {!success && <>
                        <button className='modal-close' onClick={onRequestClose}>X</button>
                        <div className="mx-auto text-center">
                            <img
                                width="80px"
                                height="80px"
                                className="mx-auto mb-3"
                                src="/images/sugar/sugarcane-news.png"
                                alt="no-search-found"
                            />
                            <h2 className="mb-2" style={{ color: 'black', align: 'end', 'text-align': 'center', 'font-size': '1.5em' }} >Get exclusive early access !</h2>
                            <h2 className="mb-6" style={{ color: 'black', align: 'end', 'text-align': 'center', 'font-size': '1.3em' }}>Join the SugarcaneAI waitlist now !</h2>

                            <form onSubmit={handleSubmit}>
                                <input
                                    type="email"
                                    style={{
                                        "font-family": "inherit",
                                        "font-size": "1rem",
                                        "font-weight": "400",
                                        "line-height": "inherit",
                                        "width": "100%",
                                        "height": "auto",
                                        "padding": "0.75rem 1.25rem",
                                        "border-radius": "2rem",
                                        "color": "black",
                                        "background": "white",
                                        "text-transform": "unset",
                                        "text-rendering": "optimizeLegibility"
                                    }}
                                    id="email"
                                    placeholder='Email'
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    required
                                />

                                <div>
                                    <button className='submitButton mt-4' type="submit">Submit Now</button>
                                </div>
                            </form>
                        </div>
                    </>
                    }
                </>
            </div>}
        </div >
    )

    // return (
    //     <div>
    //         {isOpen && (<div className="modal" >
    //             <button
    //                 onClick={onRequestClose} // Close the modal when this button is clicked
    //                 style={{ float: 'right' }}
    //             >
    //                 Close
    //             </button>
    //             <form onSubmit={handleSubmit}>
    //                 <label htmlFor="email" className="form-label">
    //                     Join the Wait List
    //                 </label>

    //                 <input
    //                     type="email"
    //                     id="email"
    //                     value={email}
    //                     onChange={(e) => setEmail(e.target.value)}
    //                     required
    //                 />

    //                 <button type="submit" className="btn btn-primary">Join</button>
    //             </form>
    //         </div>)
    //         }
    //         {success && (
    //             <p>Added to wait list successfully !</p>
    //         )}
    //         </div>
    // );
};

function JoinWaitlist({ klass = 'btn btn-primary mt-5' }) {
    const [isOpen, setIsOpen] = useState(false);

    const handleOpenModal = async (e) => {
        e.preventDefault();
        setIsOpen(true);
    };

    const handleCloseModal = (updatedConfig) => {
        setIsOpen(false);

    };

    return (
        <>
            <a
                className={klass}
                href={"#"}
                onClick={handleOpenModal}
                style={{ marginLeft: "1rem" }}
            >Join Waitlist</a>
            {/* <button
                onClick={handleOpenModal}
                style={{ marginLeft: "1rem" }}
                className={"btn btn-primary mt-5 " + klass}
            // type="submit"
            >
                Join Waitlist
            </button> */}
            <SignupForm
                isOpen={isOpen}
                onRequestClose={handleCloseModal}
            />
        </>
    );
}

export default JoinWaitlist;
