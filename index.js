
export default function Home() {
  const phone = "214-794-5871";
  const telLink = "tel:2147945871";

  return (
    <div style={{fontFamily: "Arial, sans-serif", textAlign: "center", padding: "40px"}}>
      <h1 style={{fontSize: "42px"}}>Learn How to Wrap Cars Like a Pro</h1>
      <p style={{fontSize: "18px", maxWidth: "600px", margin: "20px auto"}}>
        Professional car wrap training courses. Pricing is customized based on your needs.
      </p>
      <a href={telLink}>
        <button style={{padding: "15px 30px", fontSize: "18px", cursor: "pointer"}}>
          Request a Quote
        </button>
      </a>
      <p style={{marginTop: "15px"}}>Call or text: {phone}</p>

      <div style={{marginTop: "60px"}}>
        <h2>What You'll Learn</h2>
        <ul style={{listStyle: "none", padding: 0}}>
          <li>Vehicle Prep Techniques</li>
          <li>Tools & Materials Guide</li>
          <li>Full Wrap Installation</li>
        </ul>
      </div>

      <div style={{marginTop: "60px"}}>
        <h2>Get a Custom Quote</h2>
        <p>Contact us directly to receive a custom quote tailored to your needs.</p>
        <a href={telLink}>
          <button style={{padding: "15px 30px", fontSize: "18px", cursor: "pointer"}}>
            Request a Quote
          </button>
        </a>
      </div>

      <footer style={{marginTop: "80px"}}>
        <p>© 2026 Sign Design Pros Courses</p>
      </footer>
    </div>
  );
}
