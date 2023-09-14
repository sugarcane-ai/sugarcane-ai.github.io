export default function EmailForm() {
    return (
      <form>
        <label>
          Name
          <input type="text" id="name" name="name" required />
        </label>
        <label>
          Email
          <input type="email" id="email" name="email" required />
        </label>
        <label>
          Message
          <textarea id="message" name="message" required />
        </label>
        <button>Send</button>
      </form>
    );
  }