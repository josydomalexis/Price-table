import logo from "./logo.svg";
import "./App.css";

function App() {
  const SCHEME = [
    {
      type: "Free",
      price: "$0/month",
      features: [
        "✓ Single User",
        "✓ 50GB Storage",
        "✓ Unlimited Public Projects",
        "✓ Community Access",
        "✕ Unlimited Private Projects",
        "✕ Dedicated Phone Support",
        "✕ Free Subdomain",
        "✕ Monthly Status Reports",
      ],
    },
    {
      type: "Plus",
      price: "$9/month",
      features: [
        "✓ 5 User",
        "✓ 50GB Storage",
        "✓ Unlimited Public Projects",
        "✓ Community Access",
        "✓ Unlimited Private Projects",
        "✓ Dedicated Phone Support",
        "✓ Free Subdomain",
        "✕ Monthly Status Reports",
      ],
    },
    {
      type: "Pro",
      price: "$49/month",
      features: [
        "✓ Unlimited Users",
        "✓ 50GB Storage",
        "✓ Unlimited Public Projects",
        "✓ Community Access",
        "✓ Unlimited Private Projects",
        "✓ Dedicated Phone Support",
        "✓ Free Subdomain",
        "✓ Monthly Status Reports",
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
        {props.card.features.map((feature, index) => (
          <div key={index} className="features">
            {feature}
          </div>
        ))}
      </div>
      <button className="getStarted_btn">Get Started</button>
    </div>
  );
}

export default App;
