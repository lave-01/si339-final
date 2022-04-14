

export default function Form() {
    return <>
        <main className="form-page">
            <div className="form-wrapper" id="main">
                <form className="form" action="https://formspree.io/f/xwkyqobo" method="POST">
                    <h1 className="pageTitle title">Contact Me</h1>
                    <div className="secondaryTitle title">Please fill this form to contact me.</div>
                    <label htmlFor="name" className="title">Name</label>
                    <input type="text" className="name formEntry" placeholder="Name" name="name" id="name" />
                    <label htmlFor="email" className="title">Email</label>
                    <input type="text" className="email formEntry" placeholder="Email" name="email" id="email" />
                    <label htmlFor="message" className="title">Leave A Message</label>
                    <textarea className="message formEntry" placeholder="Message" name="message" id="message"></textarea>
                    <label htmlFor="checkbox" className="title">Agree Terms of Use and Privacy Policy</label>
                    <input type="checkbox" className="termsConditions" value="Term" name="term" id="checkbox" />
                    <label style={{ color: '#090a0b' }}> I Accept the <span style={{ color: '#090a0b' }}>Terms of Use</span> & <span
                        style={{ color: '#090a0b' }}>Privacy Policy</span>.</label>
                    <button className="submit formEntry" >Submit</button>
                </form>
            </div>
        </main>
    </>
}