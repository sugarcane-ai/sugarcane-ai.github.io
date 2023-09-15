import React, { useState } from 'react';
import Modal from 'react-modal';

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
        <Modal
            isOpen={isOpen}
            onRequestClose={onRequestClose}
            contentLabel="Join Waitlist"
            style={customStyles}
        >
                        
            <div >
                <button
                    onClick={onRequestClose} // Close the modal when this button is clicked
                    style={{ float: 'right' }}
                    >
                    Close
                </button>
                <form onSubmit={handleSubmit}>
                    <label htmlFor="email" className="form-label">
                        Join the Wait List
                    </label>
                    
                    <input
                        type="email"
                        id="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                    
                    <button type="submit" className="btn btn-primary">Join</button>
                </form>
            </div>
            {success && (
                <p>Added to wait list successfully !</p>
            )}


        </Modal>
    );
};

function JoinWaitlist({ klass = 'btn btn-primary mt-5'}) {
    const [isOpen, setIsOpen] = useState(false);

    const handleOpenModal = async(e) => {
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
