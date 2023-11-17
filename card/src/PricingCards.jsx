import React from "react";
import './PricingCards.css'
const title="Free"
const description="$0/month"
const storage="50GB Storage"
const project="Unlimited Public Projects "
const community="Community Access"
const domain="Free subdomain"
const report="Monthly status Report"

function PricingCards() {	
	return (
<div className="card">
		<div className="card-description">
			<div className="card1">
			<p>{ title }</p>
			<h1>{ description }</h1>
			</div>
        <div className="details">
            <ul>
<li>single user</li>
<li>{storage}</li>
<li>{project}</li>
<li>{domain}</li>
<li>{report}</li>
</ul>
</div>
<button className="sub">Subscription</button>
     </div>
     
		<div className="card-description">
			<p>plus</p>
			<h1>$9/month</h1>
		
        <div className="details">
            <ul>
<li>5 user</li>
<li>{storage}</li>
<li>{project}</li>
<li>{domain}</li>
<li>{report}</li>
</ul>
        </div>
		<button className="sub">Subscription</button>
        </div>
		<div className="card-description">
			<p>pro</p>
			<h1>$49/month</h1>
		
        <div className="details">
            <ul>
<li>Unlimited user</li>
<li>{storage}</li>
<li>{project}</li>
<li>{domain}</li>
<li>{report}</li>
</ul>
        </div>
		<button className="sub">Subscription</button>
        </div>
		</div>    
	);

}

export default PricingCards;