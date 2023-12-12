import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";

function App() {
  const SCHEME = [
    {
      type: "Free",
      price: "$0/month",
      features: [
        { name: "Single User", access: true },
        { name: "Unlimited Public Projects", access: true },
        { name: "Community Access", access: true },
        { name: "Unlimited Private Projects", access: false },
        { name: "Dedicated Phone Support", access: false },
        { name: "Free Subdomain", access: false },
        { name: "Monthly Status Reports", access: false },
      ],
    },
    {
      type: "Plus",
      price: "$9/month",
      features: [
        { name: "5 User", access: true },
        { name: "Unlimited Public Projects", access: true },
        { name: "Community Access", access: true },
        { name: "Unlimited Private Projects", access: true },
        { name: "Dedicated Phone Support", access: true },
        { name: "Free Subdomain", access: true },
        { name: "Monthly Status Reports", access: false },
      ],
    },
    {
      type: "Pro",
      price: "$49/month",
      features: [
        { name: "Unlimited Users", access: true },
        { name: "Unlimited Public Projects", access: true },
        { name: "Community Access", access: true },
        { name: "Unlimited Private Projects", access: true },
        { name: "Dedicated Phone Support", access: true },
        { name: "Free Subdomain", access: true },
        { name: "Monthly Status Reports", access: true },
      ],
    },
  ];
  return (
    <div className="App">
      <header className="App-header">
        <div className="priceHolders">
          {SCHEME.map((scheme, index) => (
            <PriceCard key={index} card={scheme} />
          ))}
        </div>
      </header>
    </div>
  );
}

function PriceCard(props) {
  return (
    <div className="priceCard">
      <span className="planType">{props.card.type}</span>
      <h3 className="price">{props.card.price}</h3>
      <div className="featuresHolder">
        {props.card.features.map((feature, index) =>
          feature.access ? (
            <div key={index} className="features">
              <i class="bi bi-check"></i>
              {feature.name}
            </div>
          ) : (
            <div key={index} className="features denied">
              <i class="bi bi-x"></i>
              {feature.name}
            </div>
          )
        )}
      </div>
      <button className="getStarted_btn">Get Started</button>
    </div>
  );
}

export default App;
