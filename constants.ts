import { 
  FireExtinguisher, 
  Droplets, 
  Bell, 
  ShieldCheck, 
  Activity, 
  ClipboardCheck, 
  Users, 
  Megaphone, 
  Wrench, 
  FileText, 
  Flame, 
  Settings 
} from 'lucide-react';
import { ServiceItem, AMCPlan, Testimonial } from './types';

export const COMPANY_NAME = "Pro Fire Protections";
export const PHONE_NUMBER = "+91 7674057480";
export const EMAIL = "profireprotections@gmail.com";
export const ADDRESS = "Pragathi Nagar, Hyderabad, Telangana 500090";

export const SERVICES: ServiceItem[] = [
  {
    id: "extinguishers",
    title: "Fire Extinguishers Supply & Refilling",
    shortDescription: "Complete range of ISI-marked extinguishers and certified refilling services.",
    fullDescription: "We provide end-to-end fire extinguisher solutions, from supplying high-quality ISI-marked units (ABC, CO2, Foam, Water) to professional refilling and hydraulic pressure testing. Our mobile refill unit ensures minimal downtime for your business premises.",
    features: ["Supply of ABC, CO2, Foam, and K-Type extinguishers", "On-site inspection and installation", "Hydro-testing and certification", "Annual maintenance records"],
    benefits: ["Immediate compliance with safety norms", "Reliable equipment during emergencies", "Cost-effective refilling plans"],
    icon: FireExtinguisher,
    imagePlaceholder: "/images/services/1.png"
  },
  {
    id: "pump-room",
    title: "Pump Room Maintenance",
    shortDescription: "Expert maintenance for DG, Main, Jockey, Hydrant, and Booster pumps.",
    fullDescription: "The heart of your fire fighting system. We specialize in the maintenance and overhaul of complex pump room setups. Our team ensures your Diesel Generators (DG), Main Pumps, Jockey Pumps, and Booster systems are primed to deliver water at the correct pressure instantly.",
    features: ["Vibration analysis and alignment", "Pressure switch calibration", "Greasing and bearing checks", "Control panel logic testing"],
    benefits: ["Guaranteed water pressure during fire incidents", "Extended equipment lifespan", "Reduced risk of system failure"],
    icon: Droplets,
    imagePlaceholder: "/images/services/2.png"
  },
  {
    id: "alarm-systems",
    title: "Fire Alarm & Detection Systems",
    shortDescription: "Advanced FAS installation and sensor maintenance for early detection.",
    fullDescription: "Early detection saves lives. We install and maintain state-of-the-art Fire Alarm Systems (FAS), including addressable and conventional panels, smoke detectors, heat detectors, and manual call points. We ensure zero false alarms and 100% responsiveness.",
    features: ["Addressable & Conventional Systems", "Smoke & Heat Detector cleaning", "Cable continuity testing", "Mimic panel integration"],
    benefits: ["Early warning to facilitate safe evacuation", "Integration with HVAC and access control", "24/7 system monitoring capability"],
    icon: Bell,
    imagePlaceholder: "/images/services/3.png"
  },
  {
    id: "amc",
    title: "Annual Maintenance Contracts (AMC)",
    shortDescription: "Comprehensive year-round protection and system readiness.",
    fullDescription: "Our AMC services take the worry out of fire safety. We provide scheduled preventive maintenance visits, emergency breakdown support, and detailed health reports for all your fire fighting assets. We adhere strictly to NBC and local fire brigade standards.",
    features: ["Quarterly preventive maintenance visits", "Unlimited breakdown calls", "Spare parts management", "Logbook maintenance"],
    benefits: ["Compliance with legal requirements", "Predictable budgeting", "Priority support status"],
    icon: ShieldCheck,
    imagePlaceholder: "/images/services/4.png"
  },
  {
    id: "engine-checks",
    title: "B-Check & C-Check Services",
    shortDescription: "Specialized diesel engine diagnostics and servicing.",
    fullDescription: "Specialized maintenance for the diesel engines powering your fire pumps. We perform 'B-checks' (minor preventive maintenance) and 'C-checks' (major overhaul and calibration) to ensure the engine starts immediately when power fails during a fire.",
    features: ["Oil and filter replacement", "Coolant system flushing", "Compression testing", "Fuel injector calibration"],
    benefits: ["Reliable engine start-up", "Fuel efficiency", "Prevention of catastrophic engine failure"],
    icon: Activity,
    imagePlaceholder: "/images/services/5.png" 
  },
  {
    id: "audits",
    title: "Fire Safety Audits",
    shortDescription: "Detailed gap analysis and compliance reporting.",
    fullDescription: "Our certified auditors conduct rigorous inspections of your facility to identify fire hazards and gaps in your current protection systems. We provide a comprehensive report with actionable recommendations to achieve compliance with the National Building Code (NBC).",
    features: ["Hazard identification", "System adequacy check", "Escape route verification", "Detailed audit report with ROI"],
    benefits: ["Risk mitigation", "Insurance premium reduction", "Legal compliance"],
    icon: ClipboardCheck,
    imagePlaceholder: "/images/services/6.png"
  },
  {
    id: "training",
    title: "Mock Drills & Training",
    shortDescription: "Emergency evacuation drills and staff usage training.",
    fullDescription: "Equipment is useless if people don't know how to use it. We conduct engaging on-site training sessions, teaching your staff how to operate extinguishers and evacuate safely. We also organize full-scale mock drills to test your building's emergency response.",
    features: ["PASS method training", "Live fire demonstration", "Evacuation strategy planning", "Floor warden training"],
    benefits: ["Panic reduction during emergencies", "Empowered staff", "Safety culture cultivation"],
    icon: Users,
    imagePlaceholder: "/images/services/7.png"
  },
  {
    id: "pa-system",
    title: "Public Address (PA) Systems",
    shortDescription: "Voice evacuation and emergency communication integration.",
    fullDescription: "Clear communication is critical during a crisis. We install and maintain Public Address systems integrated with your fire alarm, ensuring that evacuation instructions are heard clearly across all floors and zones.",
    features: ["Zone-wise announcement capability", "Integration with Fire Alarm Panel", "Background music suppression", "High-fidelity speakers"],
    benefits: ["Orderly evacuation", "Crowd control management", "Clear instruction delivery"],
    icon: Megaphone,
    imagePlaceholder: "/images/services/8.png"
  },
  {
    id: "repairs",
    title: "Fire System Repair Works",
    shortDescription: "Emergency troubleshooting and component replacement.",
    fullDescription: "From leaking hydrant valves to malfunctioning alarm panels, our rapid response team is equipped to handle all repair works. We stock critical spares to ensure your system is back online in the shortest time possible.",
    features: ["Leakage rectification", "Valve replacement", "Panel board repairs", "Sensor troubleshooting"],
    benefits: ["Minimized downtime", "Restored system integrity", "Cost-effective fixes"],
    icon: Wrench,
    imagePlaceholder: "/images/services/9.png"
  },
  {
    id: "noc",
    title: "NOC Support (Occupancy & Renewal)",
    shortDescription: "Liaison services for Fire Department certifications.",
    fullDescription: "Navigating government regulations can be complex. We assist building owners in obtaining the initial Fire NOC (No Objection Certificate) for occupancy and managing the periodic Renewal NOC process with the Hyderabad Fire Department.",
    features: ["Documentation preparation", "Pre-inspection audits", "Liaison with authorities", "Compliance rectification"],
    benefits: ["Hassle-free legal compliance", "Avoidance of penalties", "Smooth occupancy process"],
    icon: FileText,
    imagePlaceholder: "/images/services/10.png"
  },
  {
    id: "fabrication",
    title: "Welding, Fabrication & Pipeline",
    shortDescription: "Heavy-duty piping networks for hydrants and sprinklers.",
    fullDescription: "We undertake heavy fabrication and MS/GI pipeline works for new installations or extensions. Our certified welders ensure leak-proof joints and high-quality structural supports for your hydrant and sprinkler networks.",
    features: ["MS C-Class pipe installation", "Structural fabrication for tanks", "Anti-corrosion coating", "Pressure testing"],
    benefits: ["Durable infrastructure", "Leak-proof networks", "Customized layout solutions"],
    icon: Flame, // Using Flame as a proxy for welding/hot work
    imagePlaceholder: "/images/services/11.png"
  },
  {
    id: "supply-install",
    title: "Equipment Supply & Installation",
    shortDescription: "End-to-end setup of fire safety hardware.",
    fullDescription: "We are your one-stop shop for all fire safety hardware. From hydrant valves, hoses, and branch pipes to complex sprinkler heads and signage, we supply and professionally install certified equipment suited to your building's class.",
    features: ["Hydrant valves & hoses", "Sprinkler systems", "Emergency lighting", "Safety signage"],
    benefits: ["Single-vendor convenience", "Warranty support", "Correct installation guaranteeing performance"],
    icon: Settings,
    imagePlaceholder: "/images/services/12.png"
  }
];

export const AMC_PLANS: AMCPlan[] = [
  {
    name: "Standard",
    priceLevel: "Essential",
    features: ["4 Preventive Visits/Year", "Standard Response Time (24hrs)", "Consumables Charged Extra", "Basic Compliance Report"],
    recommended: false
  },
  {
    name: "Professional",
    priceLevel: "Recommended",
    features: ["6 Preventive Visits/Year", "Rapid Response Time (4hrs)", "Minor Spares Included", "Detailed Audit Report", "1 Staff Training Session"],
    recommended: true
  },
  {
    name: "Enterprise",
    priceLevel: "Premium",
    features: ["12 Preventive Visits/Year", "Immediate Emergency Response", "All Consumables Included", "Liaison for NOC Renewal", "Quarterly Mock Drills"],
    recommended: false
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 1,
    name: "Rajesh Kumar",
    role: "Facility Manager",
    company: "Te***rk Hyderabad",
    text: "Pro Fire Protections has been handling our AMC for 3 years. Their B-Check services for our DG pumps saved us from a major breakdown last month."
  },
  {
    id: 2,
    name: "Priya Reddy",
    role: "Operations Head",
    company: "Su***ls",
    text: "Professional, compliant, and always on time. Their team helped us get our NOC renewal smoothly without any hassle."
  },
  {
    id: 3,
    name: "Arun Sharma",
    role: "Secretary",
    company: "Go****ts Apartments",
    text: "The fire safety audit they conducted was an eye-opener. We upgraded our alarm system based on their report and feel much safer now."
  }
];