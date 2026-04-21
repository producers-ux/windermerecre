import { useState } from "react";

const TABS = ["Sourcing Workflow", "Prospect List", "Qualifier Script", "Property Brief", "Outreach Generator", "Timeline Tracker"];

const VILLA_MYKONOS = {
  name: "Villa Mykonos Resort",
  address: "67590 Jones Rd, Cathedral City, CA 92234",
  price: "$3,890,000",
  pricePerRoom: "$194,500/Room",
  equityRange: "$1.5M–2.5M",
  capRate: "8.86%",
  noi: "$344,879",
  gri: "$838,844",
  totalExpenses: "$493,965",
  rentalHistory: "Airbnb STR — $300–$900/night. Pro forma 57% occupancy, ADR $405",
  assetClass: "Hospitality / Hotel — 20 Suites",
  style: "Resort Residential",
  sqft: "16,500 SF",
  lotSize: "0.71 AC",
  rooms: 20,
  roomType: "2 Bed / 2 Bath Suites (~1,600 SF avg)",
  yearBuilt: "1989 / Renovated 2016",
  zoning: "C-RR Resort Residential (condo conversion eligible)",
  amenities: "Pool, Hot Tub, Fitness Center, Full Kitchens, Patio, WiFi",
}

const ACCENT = "#C9A84C";
const BG = "#0D0D0B";
const CARD = "#141410";
const BORDER = "#2A2A22";
const TEXT = "#E8E4D9";
const MUTED = "#7A7568";

const styles = {
  app: {
    fontFamily: "'DM Serif Display', Georgia, serif",
    background: BG,
    minHeight: "100vh",
    color: TEXT,
    padding: "0",
  },
  header: {
    borderBottom: `1px solid ${BORDER}`,
    padding: "32px 48px 24px",
    display: "flex",
    flexDirection: "column",
    gap: "4px",
  },
  eyebrow: {
    fontFamily: "'DM Mono', monospace",
    fontSize: "10px",
    letterSpacing: "0.2em",
    color: ACCENT,
    textTransform: "uppercase",
  },
  title: {
    fontSize: "28px",
    fontWeight: "400",
    margin: 0,
    lineHeight: 1.2,
  },
  subtitle: {
    fontFamily: "'DM Mono', monospace",
    fontSize: "12px",
    color: MUTED,
    margin: 0,
    marginTop: "4px",
  },
  nav: {
    display: "flex",
    gap: "0",
    borderBottom: `1px solid ${BORDER}`,
    padding: "0 48px",
    overflowX: "auto",
  },
  tab: (active) => ({
    fontFamily: "'DM Mono', monospace",
    fontSize: "11px",
    letterSpacing: "0.1em",
    textTransform: "uppercase",
    padding: "16px 20px",
    cursor: "pointer",
    background: "none",
    border: "none",
    borderBottom: active ? `2px solid ${ACCENT}` : "2px solid transparent",
    color: active ? ACCENT : MUTED,
    whiteSpace: "nowrap",
    transition: "all 0.2s",
  }),
  main: {
    padding: "40px 48px",
    maxWidth: "900px",
  },
  sectionTitle: {
    fontFamily: "'DM Mono', monospace",
    fontSize: "10px",
    letterSpacing: "0.2em",
    textTransform: "uppercase",
    color: ACCENT,
    marginBottom: "16px",
  },
  card: {
    background: CARD,
    border: `1px solid ${BORDER}`,
    borderRadius: "2px",
    padding: "28px",
    marginBottom: "20px",
  },
  label: {
    fontFamily: "'DM Mono', monospace",
    fontSize: "10px",
    letterSpacing: "0.15em",
    textTransform: "uppercase",
    color: MUTED,
    display: "block",
    marginBottom: "6px",
  },
  input: {
    background: "#0D0D0B",
    border: `1px solid ${BORDER}`,
    borderRadius: "2px",
    color: TEXT,
    fontFamily: "'DM Mono', monospace",
    fontSize: "13px",
    padding: "10px 14px",
    width: "100%",
    boxSizing: "border-box",
    outline: "none",
  },
  select: {
    background: "#0D0D0B",
    border: `1px solid ${BORDER}`,
    borderRadius: "2px",
    color: TEXT,
    fontFamily: "'DM Mono', monospace",
    fontSize: "13px",
    padding: "10px 14px",
    width: "100%",
    boxSizing: "border-box",
    outline: "none",
  },
  textarea: {
    background: "#0D0D0B",
    border: `1px solid ${BORDER}`,
    borderRadius: "2px",
    color: TEXT,
    fontFamily: "'DM Mono', monospace",
    fontSize: "12px",
    padding: "12px 14px",
    width: "100%",
    boxSizing: "border-box",
    outline: "none",
    lineHeight: "1.7",
    resize: "vertical",
  },
  btn: {
    background: ACCENT,
    color: "#0D0D0B",
    border: "none",
    borderRadius: "2px",
    fontFamily: "'DM Mono', monospace",
    fontSize: "11px",
    letterSpacing: "0.15em",
    textTransform: "uppercase",
    padding: "12px 24px",
    cursor: "pointer",
    marginTop: "16px",
  },
  btnOutline: {
    background: "transparent",
    color: ACCENT,
    border: `1px solid ${ACCENT}`,
    borderRadius: "2px",
    fontFamily: "'DM Mono', monospace",
    fontSize: "11px",
    letterSpacing: "0.15em",
    textTransform: "uppercase",
    padding: "10px 20px",
    cursor: "pointer",
    marginTop: "8px",
  },
  outputBox: {
    background: "#0A0A08",
    border: `1px solid ${BORDER}`,
    borderRadius: "2px",
    padding: "20px",
    fontFamily: "'DM Mono', monospace",
    fontSize: "12px",
    lineHeight: "1.8",
    color: TEXT,
    whiteSpace: "pre-wrap",
    marginTop: "16px",
  },
  row: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gap: "16px",
  },
  grid3: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr 1fr",
    gap: "12px",
  },
  statCard: {
    background: "#0A0A08",
    border: `1px solid ${BORDER}`,
    padding: "16px",
    borderRadius: "2px",
  },
  statValue: {
    fontSize: "20px",
    color: ACCENT,
    marginBottom: "4px",
  },
  statLabel: {
    fontFamily: "'DM Mono', monospace",
    fontSize: "10px",
    color: MUTED,
    textTransform: "uppercase",
    letterSpacing: "0.1em",
  },
  loading: {
    fontFamily: "'DM Mono', monospace",
    fontSize: "11px",
    color: MUTED,
    marginTop: "16px",
    letterSpacing: "0.1em",
  },
  prospectRow: {
    display: "grid",
    gridTemplateColumns: "2fr 1.5fr 1fr 1fr 80px",
    gap: "12px",
    padding: "12px 0",
    borderBottom: `1px solid ${BORDER}`,
    alignItems: "center",
    fontFamily: "'DM Mono', monospace",
    fontSize: "12px",
  },
  badge: (color) => ({
    display: "inline-block",
    padding: "3px 8px",
    borderRadius: "2px",
    fontSize: "10px",
    fontFamily: "'DM Mono', monospace",
    letterSpacing: "0.1em",
    textTransform: "uppercase",
    background: color === "hot" ? "#2A1A0A" : color === "warm" ? "#1A1F0A" : "#0A1A2A",
    color: color === "hot" ? "#E8A830" : color === "warm" ? "#8BC34A" : "#64B5F6",
    border: `1px solid ${color === "hot" ? "#E8A830" : color === "warm" ? "#8BC34A" : "#64B5F6"}`,
  }),
  timelineItem: {
    display: "grid",
    gridTemplateColumns: "120px 1fr 120px 100px",
    gap: "16px",
    padding: "14px 0",
    borderBottom: `1px solid ${BORDER}`,
    alignItems: "center",
    fontFamily: "'DM Mono', monospace",
    fontSize: "12px",
  },
};

// ── PROSPECT LIST ──────────────────────────────────────────────
function ProspectList() {
  const [prospects, setProspects] = useState([
    { id: 1, name: "Robert & Carol Ashford", prevAsset: "Multi-family, Pasadena", equity: "$820K", deadline: "May 14, 2026", status: "hot" },
    { id: 2, name: "David Wren", prevAsset: "Commercial strip, Scottsdale", equity: "$1.1M", deadline: "Jun 2, 2026", status: "warm" },
    { id: 3, name: "Marta Solís", prevAsset: "SFR portfolio, LA", equity: "$650K", deadline: "Jun 18, 2026", status: "warm" },
    { id: 4, name: "Thornton Capital LLC", prevAsset: "Retail, San Diego", equity: "$2.2M", deadline: "Jul 5, 2026", status: "cold" },
  ]);
  const [name, setName] = useState("");
  const [asset, setAsset] = useState("");
  const [equity, setEquity] = useState("");
  const [deadline, setDeadline] = useState("");

  function addProspect() {
    if (!name) return;
    setProspects([...prospects, {
      id: Date.now(), name, prevAsset: asset, equity, deadline, status: "cold"
    }]);
    setName(""); setAsset(""); setEquity(""); setDeadline("");
  }

  function cycleStatus(id) {
    const order = ["cold", "warm", "hot"];
    setProspects(prospects.map(p => p.id === id
      ? { ...p, status: order[(order.indexOf(p.status) + 1) % 3] }
      : p));
  }

  return (
    <div>
      <p style={{ ...styles.sectionTitle }}>Active 1031 Prospects</p>
      <div style={styles.card}>
        <div style={{ ...styles.prospectRow, color: MUTED, fontSize: "10px", letterSpacing: "0.12em", textTransform: "uppercase" }}>
          <span>Name</span><span>Prior Asset</span><span>Equity</span><span>45-Day Deadline</span><span>Status</span>
        </div>
        {prospects.map(p => (
          <div key={p.id} style={styles.prospectRow}>
            <span style={{ color: TEXT }}>{p.name}</span>
            <span style={{ color: MUTED }}>{p.prevAsset}</span>
            <span style={{ color: ACCENT }}>{p.equity}</span>
            <span>{p.deadline}</span>
            <span onClick={() => cycleStatus(p.id)} style={{ cursor: "pointer" }}>
              <span style={styles.badge(p.status)}>{p.status}</span>
            </span>
          </div>
        ))}
      </div>
      <p style={styles.sectionTitle}>Add Prospect</p>
      <div style={styles.card}>
        <div style={styles.row}>
          <div>
            <label style={styles.label}>Name</label>
            <input style={styles.input} value={name} onChange={e => setName(e.target.value)} placeholder="Client or entity name" />
          </div>
          <div>
            <label style={styles.label}>Prior Asset Type</label>
            <input style={styles.input} value={asset} onChange={e => setAsset(e.target.value)} placeholder="e.g. Multi-family, Pasadena" />
          </div>
          <div>
            <label style={styles.label}>Est. Equity</label>
            <input style={styles.input} value={equity} onChange={e => setEquity(e.target.value)} placeholder="$000K" />
          </div>
          <div>
            <label style={styles.label}>45-Day Deadline</label>
            <input style={styles.input} type="date" value={deadline} onChange={e => setDeadline(e.target.value)} />
          </div>
        </div>
        <button style={styles.btn} onClick={addProspect}>Add to List</button>
      </div>
    </div>
  );
}

// ── QUALIFIER SCRIPT ───────────────────────────────────────────
function QualifierScript() {
  return (
    <div>
      <p style={styles.sectionTitle}>First-Contact Qualifier</p>
      <div style={styles.card}>
        <p style={{ color: MUTED, fontFamily: "'DM Mono', monospace", fontSize: "12px", lineHeight: "1.8", margin: "0 0 20px" }}>
          Use this conversational script to qualify 1031 prospects in under 5 minutes. Each question surfaces a critical decision variable.
        </p>
        {[
          { q: "Have you closed on the sale of your relinquished property yet?", why: "Determines if the 45-day identification clock has started. If yes, urgency is real." },
          { q: "What type of asset did you sell — residential, commercial, multi-family, land?", why: "Establishes like-kind parameters. Desert STR qualifies as like-kind for most residential and commercial assets." },
          { q: "Roughly how much equity are you looking to deploy?", why: "Screens fit against Villa Mykonos price point ($1.85M). Ideal equity range: $500K–$1.2M." },
          { q: "Are you open to a short-term rental asset, or do you prefer long-term lease income?", why: "Surfaces risk tolerance. STR = higher upside, more management. Helps position property correctly." },
          { q: "Have you identified a Qualified Intermediary (QI)?", why: "If no, you can refer one — this positions you as a resource, not just a seller." },
          { q: "What's your timeline? Have you identified other replacement properties?", why: "Surfaces competitive landscape and urgency. If they're actively identifying, move fast." },
        ].map((item, i) => (
          <div key={i} style={{ marginBottom: "20px", paddingBottom: "20px", borderBottom: i < 5 ? `1px solid ${BORDER}` : "none" }}>
            <div style={{ display: "flex", gap: "12px", marginBottom: "8px" }}>
              <span style={{ fontFamily: "'DM Mono', monospace", fontSize: "10px", color: ACCENT, minWidth: "20px" }}>{String(i + 1).padStart(2, "0")}</span>
              <p style={{ margin: 0, fontSize: "15px", lineHeight: "1.5" }}>{item.q}</p>
            </div>
            <p style={{ margin: "0 0 0 32px", fontFamily: "'DM Mono', monospace", fontSize: "11px", color: MUTED, lineHeight: "1.6" }}>↳ {item.why}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

// ── PROPERTY BRIEF ─────────────────────────────────────────────
function PropertyBrief() {
  const vm = VILLA_MYKONOS;
  return (
    <div>
      <p style={styles.sectionTitle}>1031 Replacement Property Brief</p>
      <div style={styles.card}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "28px" }}>
          <div>
            <p style={{ margin: 0, fontSize: "22px" }}>{vm.name}</p>
            <p style={{ margin: "4px 0 0", fontFamily: "'DM Mono', monospace", fontSize: "11px", color: MUTED }}>{vm.address}</p>
          </div>
          <div style={{ textAlign: "right" }}>
            <p style={{ margin: 0, fontSize: "22px", color: ACCENT }}>{vm.price}</p>
            <p style={{ margin: "4px 0 0", fontFamily: "'DM Mono', monospace", fontSize: "11px", color: MUTED }}>List Price</p>
          </div>
        </div>
        <div style={styles.grid3}>
          {[
            { label: "Cap Rate", value: vm.capRate },
            { label: "Net Operating Income", value: vm.noi },
            { label: "Gross Rental Income", value: vm.gri },
            { label: "Target Equity", value: vm.equityRange },
            { label: "Total Suites", value: "20 (2BR/2BA)" },
            { label: "Building Size", value: vm.sqft },
            { label: "Price Per Room", value: vm.pricePerRoom },
            { label: "Year Built/Reno", value: vm.yearBuilt },
            { label: "Lot Size", value: vm.lotSize },
          ].map((s, i) => (
            <div key={i} style={styles.statCard}>
              <p style={{ margin: "0 0 4px", ...styles.statValue }}>{s.value}</p>
              <p style={{ margin: 0, ...styles.statLabel }}>{s.label}</p>
            </div>
          ))}
        </div>
        <div style={{ marginTop: "24px" }}>
          {[
            { title: "Like-Kind Qualification", body: "Villa Mykonos Resort qualifies as like-kind replacement for any real property held for investment — residential rentals, commercial, multi-family, or land. The property is listed on LoopNet with Sale Condition explicitly noted as 1031 Exchange, signaling a seller who understands the timeline." },
            { title: "Financial Summary (Pro Forma 2025)", body: "Gross rental income of $838,844. Net operating income of $344,879 after $493,965 in total expenses (including $42,987 in taxes). Cap rate of 8.86% at asking price. Current occupancy is 30–35% with upside to 57–80% occupancy — normal for the Coachella Valley market." },
            { title: "Income & Upside", body: "Currently operating at 30–35% capacity on Airbnb only, with nightly rates of $300–$900 depending on season. Coachella, Stagecoach, and Indian Wells Tennis Tournament alone drive significant premium pricing windows. Full 10-unit operation (seller occupies 1 unit) adds immediate NOI lift." },
            { title: "Condo Conversion Optionality", body: "Zoned C-RR Resort Residential. Title not fully converted from its original condominium structure — a buyer may be eligible to convert back to individual condo units or time-share, adding a significant exit or refinance option not typical in hotel acquisitions." },
            { title: "Exchange Timing", body: "Seller is exchange-motivated. Flexible closing timeline to accommodate 45-day identification and 180-day exchange windows. QI coordination available. Request for documents requires a negotiated LOI." },
          ].map((item, i) => (
            <div key={i} style={{ marginBottom: "20px", paddingBottom: "20px", borderBottom: i < 3 ? `1px solid ${BORDER}` : "none" }}>
              <p style={{ margin: "0 0 8px", fontFamily: "'DM Mono', monospace", fontSize: "10px", color: ACCENT, textTransform: "uppercase", letterSpacing: "0.15em" }}>{item.title}</p>
              <p style={{ margin: 0, fontSize: "14px", lineHeight: "1.7", color: TEXT }}>{item.body}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

// ── OUTREACH GENERATOR ─────────────────────────────────────────
function OutreachGenerator() {
  const [name, setName] = useState("");
  const [assetType, setAssetType] = useState("multi-family");
  const [equity, setEquity] = useState("");
  const [daysLeft, setDaysLeft] = useState("");
  const [output, setOutput] = useState("");
  const [loading, setLoading] = useState(false);

  async function generate() {
    if (!name) return;
    setLoading(true);
    setOutput("");
    const prompt = `You are a commercial real estate broker specializing in 1031 exchanges in Palm Springs, CA. Write a short, personalized outreach message (4–6 sentences, no subject line, no greeting formality — start with their name) to a prospect named ${name} who recently sold a ${assetType} asset${equity ? ` with approximately ${equity} in equity` : ""}${daysLeft ? ` and has ${daysLeft} days left in their identification window` : ""}. You are reaching out to introduce Villa Mykonos Resort in Cathedral City (Coachella Valley) as a strong 1031 replacement property: listed at $3,890,000 ($194,500/room), 20-suite hotel with an 8.86% cap rate, $344,879 NOI, and significant upside — currently operating at only 30-35% capacity on Airbnb alone. Zoned Resort Residential with condo conversion eligibility. Sale condition is explicitly listed as 1031 Exchange. Tone: direct, knowledgeable, not salesy. Desert market expertise should be evident. No bullet points. No subject line. Start with "${name}," and write naturally.`;

    try {
      const res = await fetch("https://api.anthropic.com/v1/messages", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          model: "claude-sonnet-4-20250514",
          max_tokens: 1000,
          messages: [{ role: "user", content: prompt }],
        }),
      });
      const data = await res.json();
      const text = data.content?.map(b => b.text || "").join("") || "Error generating message.";
      setOutput(text);
    } catch {
      setOutput("Error connecting to API.");
    }
    setLoading(false);
  }

  return (
    <div>
      <p style={styles.sectionTitle}>Personalized Outreach Generator</p>
      <div style={styles.card}>
        <div style={styles.row}>
          <div>
            <label style={styles.label}>Prospect Name</label>
            <input style={styles.input} value={name} onChange={e => setName(e.target.value)} placeholder="First name or full name" />
          </div>
          <div>
            <label style={styles.label}>Prior Asset Type</label>
            <select style={styles.select} value={assetType} onChange={e => setAssetType(e.target.value)}>
              <option value="multi-family">Multi-family residential</option>
              <option value="commercial retail">Commercial retail</option>
              <option value="single-family rental">Single-family rental</option>
              <option value="industrial">Industrial / warehouse</option>
              <option value="land">Raw land</option>
              <option value="mixed-use">Mixed-use</option>
            </select>
          </div>
          <div>
            <label style={styles.label}>Est. Equity</label>
            <input style={styles.input} value={equity} onChange={e => setEquity(e.target.value)} placeholder="e.g. $800,000" />
          </div>
          <div>
            <label style={styles.label}>Days Left in Window</label>
            <input style={styles.input} value={daysLeft} onChange={e => setDaysLeft(e.target.value)} placeholder="e.g. 22" type="number" />
          </div>
        </div>
        <button style={styles.btn} onClick={generate}>Generate Outreach</button>
      </div>
      {loading && <p style={styles.loading}>— generating —</p>}
      {output && (
        <div>
          <p style={styles.sectionTitle}>Generated Message</p>
          <div style={styles.outputBox}>{output}</div>
          <button style={styles.btnOutline} onClick={() => navigator.clipboard?.writeText(output)}>Copy to Clipboard</button>
        </div>
      )}
    </div>
  );
}

// ── TIMELINE TRACKER ───────────────────────────────────────────
function TimelineTracker() {
  const [clients, setClients] = useState([
    { id: 1, name: "Ashford", closeDate: "2026-03-30", status: "Identified — touring", action: "Schedule showing" },
    { id: 2, name: "Wren", closeDate: "2026-04-18", status: "Considering other properties", action: "Send property brief" },
    { id: 3, name: "Solís", closeDate: "2026-05-04", status: "Awaiting QI setup", action: "Refer QI contact" },
  ]);
  const [newName, setNewName] = useState("");
  const [newClose, setNewClose] = useState("");

  function daysLeft(closeDate) {
    const close = new Date(closeDate);
    const id45 = new Date(close); id45.setDate(id45.getDate() + 45);
    const today = new Date();
    const diff = Math.ceil((id45 - today) / (1000 * 60 * 60 * 24));
    return diff;
  }

  function urgencyColor(days) {
    if (days <= 7) return "#E85C30";
    if (days <= 21) return "#E8A830";
    return ACCENT;
  }

  function addClient() {
    if (!newName || !newClose) return;
    setClients([...clients, { id: Date.now(), name: newName, closeDate: newClose, status: "New prospect", action: "Send qualifier" }]);
    setNewName(""); setNewClose("");
  }

  return (
    <div>
      <p style={styles.sectionTitle}>45-Day Identification Tracker</p>
      <div style={styles.card}>
        <div style={{ ...styles.timelineItem, color: MUTED, fontSize: "10px", letterSpacing: "0.12em", textTransform: "uppercase" }}>
          <span>Client</span><span>Exchange Status</span><span>Next Action</span><span>Days Remaining</span>
        </div>
        {clients.map(c => {
          const days = daysLeft(c.closeDate);
          return (
            <div key={c.id} style={styles.timelineItem}>
              <span style={{ color: TEXT }}>{c.name}</span>
              <span style={{ color: MUTED }}>{c.status}</span>
              <span style={{ color: TEXT }}>{c.action}</span>
              <span style={{ color: urgencyColor(days), fontWeight: "600" }}>
                {days > 0 ? `${days}d` : "EXPIRED"}
              </span>
            </div>
          );
        })}
      </div>
      <p style={styles.sectionTitle}>Add Client to Tracker</p>
      <div style={styles.card}>
        <div style={styles.row}>
          <div>
            <label style={styles.label}>Client Name</label>
            <input style={styles.input} value={newName} onChange={e => setNewName(e.target.value)} placeholder="Name" />
          </div>
          <div>
            <label style={styles.label}>Relinquished Property Close Date</label>
            <input style={styles.input} type="date" value={newClose} onChange={e => setNewClose(e.target.value)} />
          </div>
        </div>
        <button style={styles.btn} onClick={addClient}>Add to Tracker</button>
      </div>
      <div style={{ ...styles.card, background: "#0A0A08" }}>
        <p style={{ margin: "0 0 12px", fontFamily: "'DM Mono', monospace", fontSize: "10px", color: ACCENT, textTransform: "uppercase", letterSpacing: "0.15em" }}>Key Dates Reference</p>
        {[
          { label: "45-Day Identification Window", desc: "Prospect must identify replacement properties within 45 days of closing" },
          { label: "180-Day Exchange Window", desc: "Prospect must close on replacement property within 180 days" },
          { label: "Your Sweet Spot", desc: "Days 1–30 — prospect is most motivated, most open, and still has time to due diligence" },
        ].map((item, i) => (
          <div key={i} style={{ display: "flex", gap: "16px", marginBottom: "12px" }}>
            <span style={{ fontFamily: "'DM Mono', monospace", fontSize: "10px", color: ACCENT, minWidth: "8px" }}>—</span>
            <div>
              <p style={{ margin: "0 0 2px", fontFamily: "'DM Mono', monospace", fontSize: "11px", color: TEXT }}>{item.label}</p>
              <p style={{ margin: 0, fontFamily: "'DM Mono', monospace", fontSize: "11px", color: MUTED }}>{item.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}


// ── SOURCING WORKFLOW ──────────────────────────────────────────
function SourcingWorkflow() {
  const [step, setStep] = useState(0);
  const [filters, setFilters] = useState({
    assetTypes: [],
    minHoldYears: "5",
    minEquity: "1500000",
    maxEquity: "3000000",
    saleWindow: "90",
    counties: [],
    sources: [],
  });
  const [searchOutput, setSearchOutput] = useState("");
  const [loading, setLoading] = useState(false);
  const [exportedProspect, setExportedProspect] = useState(null);

  const ASSET_TYPES = ["Multi-family", "Commercial Retail", "Industrial", "Mixed-Use", "Single-Family Rental", "Land", "Office", "Self-Storage"];
  const COUNTIES = ["Riverside County", "San Bernardino County", "Los Angeles County", "Orange County", "San Diego County"];
  const SOURCES = ["PropStream", "BatchLeads", "CoStar", "LoopNet", "Riverside County Recorder", "FOIA Request", "QI Referral", "CPA Referral"];

  function toggleItem(key, val) {
    setFilters(f => ({
      ...f,
      [key]: f[key].includes(val) ? f[key].filter(x => x !== val) : [...f[key], val]
    }));
  }

  async function generateSearchParams() {
    setLoading(true);
    setSearchOutput("");
    const prompt = `You are a commercial real estate data researcher specializing in 1031 exchange prospect identification in the Coachella Valley, CA. 

A broker is trying to find motivated 1031 exchange sellers who need a replacement property. They want to target:
- Asset types: ${filters.assetTypes.length ? filters.assetTypes.join(", ") : "any commercial or investment real estate"}
- Minimum hold years before sale: ${filters.minHoldYears} years (longer hold = more capital gains exposure)
- Estimated equity range: $${Number(filters.minEquity).toLocaleString()} – $${Number(filters.maxEquity).toLocaleString()}
- Sale window: properties that closed in the last ${filters.saleWindow} days
- Geographic focus: ${filters.counties.length ? filters.counties.join(", ") : "Riverside County and surrounding Coachella Valley"}
- Data sources available: ${filters.sources.length ? filters.sources.join(", ") : "PropStream, county recorder, CoStar"}

Provide:
1. EXACT search filter parameters to enter into PropStream (or equivalent) — field names and values
2. The Riverside County Recorder search URL approach and what to look for
3. A QI/CPA outreach script (2-3 sentences) to request warm referrals for prospects in this equity range
4. The 3 highest-signal indicators that a recent seller is actively looking for a 1031 replacement right now
5. A realistic expectation of how many qualified prospects this search should surface per month in the Coachella Valley market

Be specific and tactical. No filler. Format with clear section headers.`;

    try {
      const res = await fetch("https://api.anthropic.com/v1/messages", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          model: "claude-sonnet-4-20250514",
          max_tokens: 1000,
          messages: [{ role: "user", content: prompt }],
        }),
      });
      const data = await res.json();
      const text = data.content?.map(b => b.text || "").join("") || "Error.";
      setSearchOutput(text);
      setStep(2);
    } catch {
      setSearchOutput("Error connecting to API.");
    }
    setLoading(false);
  }

  const chipStyle = (active) => ({
    display: "inline-block",
    padding: "6px 12px",
    borderRadius: "2px",
    fontSize: "11px",
    fontFamily: "'DM Mono', monospace",
    letterSpacing: "0.08em",
    cursor: "pointer",
    margin: "4px",
    background: active ? ACCENT : "transparent",
    color: active ? "#0D0D0B" : MUTED,
    border: `1px solid ${active ? ACCENT : BORDER}`,
    transition: "all 0.15s",
  });

  return (
    <div>
      <p style={styles.sectionTitle}>Prospect Sourcing Workflow</p>

      {/* Step indicator */}
      <div style={{ display: "flex", gap: "0", marginBottom: "28px" }}>
        {["Set Filters", "Review & Run", "Search Parameters"].map((s, i) => (
          <div key={i} style={{ display: "flex", alignItems: "center", gap: "8px" }}>
            <div style={{
              width: "24px", height: "24px", borderRadius: "50%",
              background: step >= i ? ACCENT : BORDER,
              color: step >= i ? "#0D0D0B" : MUTED,
              display: "flex", alignItems: "center", justifyContent: "center",
              fontFamily: "'DM Mono', monospace", fontSize: "11px", fontWeight: "600",
              flexShrink: 0,
            }}>{i + 1}</div>
            <span style={{ fontFamily: "'DM Mono', monospace", fontSize: "10px", color: step >= i ? TEXT : MUTED, textTransform: "uppercase", letterSpacing: "0.1em" }}>{s}</span>
            {i < 2 && <div style={{ width: "32px", height: "1px", background: BORDER, margin: "0 8px" }} />}
          </div>
        ))}
      </div>

      {/* Step 0 & 1: Filters */}
      <div style={styles.card}>
        <p style={{ ...styles.label, marginBottom: "12px" }}>Target Asset Types</p>
        <div style={{ marginBottom: "20px" }}>
          {ASSET_TYPES.map(t => (
            <span key={t} style={chipStyle(filters.assetTypes.includes(t))} onClick={() => toggleItem("assetTypes", t)}>{t}</span>
          ))}
        </div>

        <div style={{ ...styles.row, marginBottom: "20px" }}>
          <div>
            <label style={styles.label}>Min Hold Years (capital gains threshold)</label>
            <select style={styles.select} value={filters.minHoldYears} onChange={e => setFilters(f => ({ ...f, minHoldYears: e.target.value }))}>
              <option value="3">3+ years</option>
              <option value="5">5+ years</option>
              <option value="7">7+ years</option>
              <option value="10">10+ years</option>
            </select>
          </div>
          <div>
            <label style={styles.label}>Sale Window (days ago)</label>
            <select style={styles.select} value={filters.saleWindow} onChange={e => setFilters(f => ({ ...f, saleWindow: e.target.value }))}>
              <option value="30">Last 30 days</option>
              <option value="45">Last 45 days</option>
              <option value="60">Last 60 days</option>
              <option value="90">Last 90 days</option>
            </select>
          </div>
        </div>

        <div style={{ ...styles.row, marginBottom: "20px" }}>
          <div>
            <label style={styles.label}>Min Equity Target</label>
            <select style={styles.select} value={filters.minEquity} onChange={e => setFilters(f => ({ ...f, minEquity: e.target.value }))}>
              <option value="500000">$500,000</option>
              <option value="1000000">$1,000,000</option>
              <option value="1500000">$1,500,000</option>
              <option value="2000000">$2,000,000</option>
            </select>
          </div>
          <div>
            <label style={styles.label}>Max Equity Target</label>
            <select style={styles.select} value={filters.maxEquity} onChange={e => setFilters(f => ({ ...f, maxEquity: e.target.value }))}>
              <option value="2000000">$2,000,000</option>
              <option value="3000000">$3,000,000</option>
              <option value="5000000">$5,000,000</option>
              <option value="10000000">$10,000,000+</option>
            </select>
          </div>
        </div>

        <p style={{ ...styles.label, marginBottom: "12px" }}>Source Counties</p>
        <div style={{ marginBottom: "20px" }}>
          {COUNTIES.map(c => (
            <span key={c} style={chipStyle(filters.counties.includes(c))} onClick={() => toggleItem("counties", c)}>{c}</span>
          ))}
        </div>

        <p style={{ ...styles.label, marginBottom: "12px" }}>Data Sources You Have Access To</p>
        <div style={{ marginBottom: "24px" }}>
          {SOURCES.map(s => (
            <span key={s} style={chipStyle(filters.sources.includes(s))} onClick={() => toggleItem("sources", s)}>{s}</span>
          ))}
        </div>

        <button style={styles.btn} onClick={() => { setStep(1); generateSearchParams(); }}>
          Generate Search Parameters
        </button>
      </div>

      {loading && (
        <p style={styles.loading}>— building your sourcing playbook —</p>
      )}

      {searchOutput && (
        <div>
          <p style={styles.sectionTitle}>Your Sourcing Playbook</p>
          <div style={styles.outputBox}>{searchOutput}</div>

          <div style={{ marginTop: "24px" }}>
            <p style={styles.sectionTitle}>Partner Outreach Scripts</p>
            <div style={styles.card}>
              {[
                {
                  role: "Qualified Intermediary (QI)",
                  script: `Hi [Name], I'm a Windermere Commercial broker in the Coachella Valley specializing in hospitality and investment property. I have a strong 1031 replacement option — Villa Mykonos Resort in Cathedral City, $3.89M, 8.86% cap rate — and I'm looking to connect with exchangers in the $1.5M–$2.5M equity range. If any of your current exchange clients are still in their identification window and open to a hospitality asset, I'd love a warm intro.`,
                },
                {
                  role: "CPA / Tax Attorney",
                  script: `Hi [Name], I work the commercial hospitality side of the Coachella Valley market and I have a listing that's an unusually clean 1031 play — 20-suite hotel, 8.86% cap, condo conversion optionality, seller is exchange-motivated. If you have clients who recently closed on an investment property and are facing a capital gains event, I'd welcome the chance to show them the numbers before their 45-day window closes.`,
                },
                {
                  role: "Listing Agent (Recent Sale Follow-Up)",
                  script: `Hi [Name], congrats on closing [property]. I noticed your seller held that asset for several years — if they're considering a 1031 exchange, I have a replacement property that may be worth a look: Villa Mykonos Resort in Cathedral City, $3.89M, 8.86% cap, 20 suites with strong upside. Happy to send a one-pager if timing is right.`,
                },
              ].map((item, i) => (
                <div key={i} style={{ marginBottom: "20px", paddingBottom: "20px", borderBottom: i < 2 ? `1px solid ${BORDER}` : "none" }}>
                  <p style={{ margin: "0 0 10px", fontFamily: "'DM Mono', monospace", fontSize: "10px", color: ACCENT, textTransform: "uppercase", letterSpacing: "0.15em" }}>{item.role}</p>
                  <p style={{ margin: 0, fontFamily: "'DM Mono', monospace", fontSize: "12px", color: TEXT, lineHeight: "1.8" }}>{item.script}</p>
                  <button style={{ ...styles.btnOutline, marginTop: "10px", fontSize: "10px", padding: "7px 14px" }}
                    onClick={() => navigator.clipboard?.writeText(item.script)}>Copy</button>
                </div>
              ))}
            </div>
          </div>

          <div style={{ marginTop: "8px" }}>
            <p style={styles.sectionTitle}>Weekly Sourcing Cadence</p>
            <div style={styles.card}>
              {[
                { day: "Monday", task: "Pull new Riverside County recorder sales from prior week. Filter: commercial, held 5+ years, sale price $2M–$6M." },
                { day: "Tuesday", task: "Run PropStream filter with updated parameters. Export list of sellers with estimated equity in range." },
                { day: "Wednesday", task: "QI and CPA outreach — 3 calls or emails minimum. Reference current listing, ask for warm intros." },
                { day: "Thursday", task: "Research top 5 new prospects from the week's pull. Identify asset type, estimated hold period, likely equity." },
                { day: "Friday", task: "Generate personalized outreach for top 5 via the Outreach Generator tab. Send or schedule for Monday AM." },
              ].map((item, i) => (
                <div key={i} style={{ display: "grid", gridTemplateColumns: "100px 1fr", gap: "16px", padding: "12px 0", borderBottom: i < 4 ? `1px solid ${BORDER}` : "none", alignItems: "start" }}>
                  <span style={{ fontFamily: "'DM Mono', monospace", fontSize: "11px", color: ACCENT }}>{item.day}</span>
                  <span style={{ fontFamily: "'DM Mono', monospace", fontSize: "12px", color: TEXT, lineHeight: "1.7" }}>{item.task}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

// ── APP ────────────────────────────────────────────────────────
export default function App() {
  const [active, setActive] = useState(0);

  const panels = [SourcingWorkflow, ProspectList, QualifierScript, PropertyBrief, OutreachGenerator, TimelineTracker];
  const Panel = panels[active];

  return (
    <div style={styles.app}>
      <link href="https://fonts.googleapis.com/css2?family=DM+Serif+Display&family=DM+Mono:wght@300;400;500&display=swap" rel="stylesheet" />
      <div style={styles.header}>
        <span style={styles.eyebrow}>Open + Range / Windermere Commercial</span>
        <h1 style={styles.title}>1031 Exchange Workflow</h1>
        <p style={styles.subtitle}>Villa Mykonos Resort · Cathedral City, CA · $3,890,000 · 8.86% Cap Rate</p>
      </div>
      <nav style={styles.nav}>
        {TABS.map((t, i) => (
          <button key={i} style={styles.tab(active === i)} onClick={() => setActive(i)}>{t}</button>
        ))}
      </nav>
      <div style={styles.main}>
        <Panel />
      </div>
    </div>
  );
}
