// ============================================================
// What NOT to Learn — Intelligent Career Strategy Engine
// ============================================================
// ===== Skill Knowledge Base =====
const SKILL_DATABASE = {
    // ----- WEB DEVELOPMENT -----
    "web-dev": {
        avoid: [
            {
                skill: "jQuery",
                reason: "jQuery was essential a decade ago, but modern JavaScript (ES6+) and frameworks like React/Vue have made it redundant. Most new projects don't use it, and knowing it doesn't differentiate you.",
                marketInsight: "jQuery usage has dropped from 80% to under 20% in new projects since 2020. Major companies have migrated away — GitHub, Bootstrap 5 dropped jQuery entirely.",
                alternative: "React.js or Vue.js",
                whyBetter: "React has 40%+ of the frontend market share, massive ecosystem, and is the #1 requested skill in web dev job postings in 2026.",
                riskLevel: "high",
                oppCost: 85,
                tags: ["declining", "replaced"]
            },
            {
                skill: "PHP (WordPress Development)",
                reason: "While PHP isn't dead, focusing on WordPress theme/plugin development as a career path has diminishing returns. AI site builders and no-code tools are eating into the WordPress freelance market.",
                marketInsight: "WordPress development gigs on platforms like Upwork have seen a 35% price drop since 2023. AI tools like Wix AI and Framer are replacing basic WordPress work.",
                alternative: "Next.js / Full-Stack JavaScript",
                whyBetter: "Full-stack JS skills command 40-60% higher salaries than WordPress-only roles. Next.js is the fastest growing framework in 2026.",
                riskLevel: "high",
                oppCost: 75,
                tags: ["automation-risk", "saturated"]
            },
            {
                skill: "AngularJS (1.x)",
                reason: "AngularJS 1.x reached end-of-life in 2022. It's a completely different framework from the modern Angular (2+). Learning it is actively harmful to your career.",
                marketInsight: "Zero new projects use AngularJS 1.x. Companies still on it are actively migrating away. Job listings for it have declined 95%.",
                alternative: "Angular (latest) or React",
                whyBetter: "Modern Angular and React are industry standards with active ecosystems, strong hiring demand, and long-term viability.",
                riskLevel: "high",
                oppCost: 95,
                tags: ["dead", "outdated"]
            },
            {
                skill: "Vanilla CSS Without Preprocessors",
                reason: "While understanding CSS fundamentals is essential, spending months mastering only vanilla CSS without learning modern tooling (CSS-in-JS, Tailwind, or preprocessors) limits your productivity.",
                marketInsight: "90% of job postings mention Tailwind CSS, CSS Modules, or styled-components. Pure CSS-only skills are not enough for modern teams.",
                alternative: "Tailwind CSS + CSS fundamentals",
                whyBetter: "Tailwind CSS is the most popular utility framework in 2026, dramatically speeds up development, and is requested in the majority of frontend roles.",
                riskLevel: "medium",
                oppCost: 50,
                tags: ["incomplete", "low-productivity"]
            },
            {
                skill: "Grunt / Gulp Task Runners",
                reason: "Build tools have evolved far beyond Grunt and Gulp. Webpack, Vite, and esbuild have taken over completely. Learning legacy task runners is wasted effort.",
                marketInsight: "Vite saw a 300% adoption increase since 2023. Grunt/Gulp downloads have flatlined and no new projects adopt them.",
                alternative: "Vite",
                whyBetter: "Vite offers instant HMR, near-zero config, and is the default for Vue, React, and Svelte projects. It's the future of frontend tooling.",
                riskLevel: "high",
                oppCost: 70,
                tags: ["replaced", "outdated"]
            },
            {
                skill: "Manual REST API Testing (no tooling)",
                reason: "Manually testing APIs with curl commands alone is inefficient. Modern development expects automated API testing and professional tooling.",
                marketInsight: "Companies now require familiarity with Postman, automated testing suites, and API-first development workflows.",
                alternative: "Postman + API Automation (Jest/Supertest)",
                whyBetter: "Automated API testing is expected in CI/CD pipelines. Learning Postman + automation tools makes you 3x more productive.",
                riskLevel: "medium",
                oppCost: 40,
                tags: ["inefficient", "low-value"]
            }
        ],
        tips: [
            "Focus on TypeScript — it's now a hard requirement for 70%+ of frontend and full-stack roles.",
            "Learn one framework deeply (React or Vue) rather than being mediocre at three.",
            "Invest in understanding system design basics — it separates senior from junior candidates.",
            "Build real projects and deploy them. A portfolio beats certifications in web development.",
            "Don't skip accessibility (a11y) — it's becoming a legal requirement and companies actively hire for it."
        ]
    },
    // ----- MOBILE DEVELOPMENT -----
    "mobile-dev": {
        avoid: [
            {
                skill: "Xamarin",
                reason: "Microsoft officially deprecated Xamarin in 2024, replacing it with .NET MAUI. Learning Xamarin is learning a dead framework with no future job prospects.",
                marketInsight: "Xamarin job postings have dropped 90%+ since deprecation. All Microsoft mobile development has shifted to .NET MAUI.",
                alternative: "React Native or Flutter",
                whyBetter: "React Native and Flutter dominate cross-platform mobile development with massive communities, employer demand, and active ecosystems.",
                riskLevel: "high",
                oppCost: 90,
                tags: ["deprecated", "dead"]
            },
            {
                skill: "Ionic (Hybrid Apps)",
                reason: "Hybrid web-view based frameworks like Ionic produce inferior performance and UX compared to React Native and Flutter. Employer demand has plummeted.",
                marketInsight: "Flutter and React Native have captured 85%+ of cross-platform market share. Ionic job postings are rare in 2026.",
                alternative: "Flutter",
                whyBetter: "Flutter compiles to native code, has excellent performance, beautiful UI, and Google's strong backing. It works for mobile, web, and desktop.",
                riskLevel: "high",
                oppCost: 75,
                tags: ["declining", "poor-performance"]
            },
            {
                skill: "Objective-C (for new projects)",
                reason: "Apple has made Swift the primary language for all platforms. While legacy codebases exist, learning Objective-C for new projects provides no career advantage.",
                marketInsight: "99% of new iOS projects use Swift. Objective-C roles are purely maintenance positions with declining salaries.",
                alternative: "Swift + SwiftUI",
                whyBetter: "Swift is modern, safe, and fast. SwiftUI is Apple's future for all platform UIs. This combination maximizes iOS career potential.",
                riskLevel: "high",
                oppCost: 80,
                tags: ["legacy", "declining"]
            },
            {
                skill: "Java for Android (exclusively)",
                reason: "Google declared Kotlin the preferred language for Android in 2019. All new Android APIs and documentation prioritize Kotlin. Learning only Java for Android limits you.",
                marketInsight: "80%+ of new Android projects use Kotlin. Google's Jetpack Compose (modern Android UI) is Kotlin-first.",
                alternative: "Kotlin + Jetpack Compose",
                whyBetter: "Kotlin is more concise, safer, and modern than Java for Android. Jetpack Compose is the future of Android UI development.",
                riskLevel: "medium",
                oppCost: 65,
                tags: ["declining-priority", "replaced"]
            }
        ],
        tips: [
            "Pick one cross-platform framework (Flutter or React Native) and master it before going native.",
            "Learn mobile-specific patterns: offline-first, push notifications, deep linking.",
            "Focus on app performance optimization — it's a top interview topic.",
            "Understand app store guidelines and release processes — they're often overlooked but critical."
        ]
    },
    // ----- DATA SCIENCE & AI/ML -----
    "data-science": {
        avoid: [
            {
                skill: "Manual Feature Engineering (as primary skill)",
                reason: "While useful to understand, spending months on hand-crafted feature engineering is increasingly unnecessary. AutoML and automated feature engineering tools handle 80% of cases.",
                marketInsight: "AutoML tools (H2O, Google AutoML, AutoGluon) have automated most feature engineering. The industry values model understanding over manual preprocessing.",
                alternative: "Deep Learning + Prompt Engineering for AI",
                whyBetter: "Deep learning models learn features automatically. Understanding transformers and LLM fine-tuning is the highest-demand AI skill in 2026.",
                riskLevel: "medium",
                oppCost: 55,
                tags: ["automation-risk", "diminishing-returns"]
            },
            {
                skill: "MATLAB for Data Science",
                reason: "MATLAB is expensive, proprietary, and losing ground to Python rapidly. It's mainly used in academia and specific engineering fields, not in tech industry data science.",
                marketInsight: "Python has 90%+ market share in data science. MATLAB data science roles have decreased 60% since 2020.",
                alternative: "Python (with NumPy, Pandas, Scikit-learn)",
                whyBetter: "Python is free, has the largest ecosystem, is the industry standard, and is required for 95%+ of data science positions.",
                riskLevel: "high",
                oppCost: 80,
                tags: ["proprietary", "shrinking"]
            },
            {
                skill: "R (as sole language)",
                reason: "R is excellent for statistics but increasingly less demanded as a standalone skill. Companies want Python proficiency first, with R as a bonus.",
                marketInsight: "Job postings requiring R alone have dropped 45%. Python + SQL is the minimum baseline. R is a 'nice to have' in 2026.",
                alternative: "Python + SQL + basic R",
                whyBetter: "Python + SQL covers 90% of industry needs. Adding basic R for statistical analysis makes you versatile without over-investing.",
                riskLevel: "medium",
                oppCost: 60,
                tags: ["overshadowed", "limited-demand"]
            },
            {
                skill: "Hadoop MapReduce",
                reason: "MapReduce is an outdated paradigm for big data. Spark, Databricks, and cloud-native solutions have replaced it entirely for modern data pipelines.",
                marketInsight: "Spark has replaced MapReduce in 95% of production systems. Cloud providers offer serverless big data solutions that eliminate MapReduce entirely.",
                alternative: "Apache Spark + Databricks / Cloud Data Platforms",
                whyBetter: "Spark is 100x faster than MapReduce, integrates with ML pipelines, and is the standard for big data engineering roles.",
                riskLevel: "high",
                oppCost: 85,
                tags: ["outdated", "replaced"]
            },
            {
                skill: "Traditional Statistical Modeling (exclusively)",
                reason: "While statistics foundations matter, exclusively focusing on traditional methods (linear regression, ANOVA) without ML/DL skills severely limits your career options.",
                marketInsight: "98% of data science job postings in 2026 require ML skills. Statistical-only positions are rare and lower-paid.",
                alternative: "Machine Learning + MLOps",
                whyBetter: "ML engineering + deployment skills (MLOps) is the fastest growing data science specialization with 50%+ salary premium.",
                riskLevel: "medium",
                oppCost: 70,
                tags: ["incomplete", "limited"]
            }
        ],
        tips: [
            "Master Python first — it's the universal language of data science and AI.",
            "Focus on LLM fine-tuning and prompt engineering — these are the hottest AI skills in 2026.",
            "Learn MLOps/deployment — the industry needs people who can put models into production.",
            "SQL is non-negotiable. Every data role requires strong SQL skills.",
            "Build end-to-end projects, not just Kaggle notebooks. Show you can go from data to deployed solution."
        ]
    },
    // ----- CYBERSECURITY -----
    "cybersecurity": {
        avoid: [
            {
                skill: "CompTIA A+ (as career focus)",
                reason: "A+ certifies basic IT support, not cybersecurity. While it teaches fundamentals, spending months on it delays actual cybersecurity learning significantly.",
                marketInsight: "Cybersecurity roles require Security+, CEH, or OSCP. A+ holders earn 40-55% less than certified security professionals.",
                alternative: "CompTIA Security+ → CEH / OSCP path",
                whyBetter: "Security+ directly maps to cybersecurity roles. Following up with CEH or OSCP opens doors to penetration testing and security engineering.",
                riskLevel: "medium",
                oppCost: 60,
                tags: ["misaligned", "low-roi"]
            },
            {
                skill: "Manual Log Analysis (without SIEM)",
                reason: "Manually parsing logs is not how modern SOCs operate. SIEM tools automate threat detection and correlation. Learning manual methods first wastes time.",
                marketInsight: "99% of cybersecurity operations use SIEM platforms (Splunk, Sentinel, QRadar). Manual analysis is only for edge cases.",
                alternative: "Splunk / Microsoft Sentinel + SOAR",
                whyBetter: "SIEM expertise is the #1 skill for SOC analyst positions. Splunk certification alone dramatically increases employability.",
                riskLevel: "high",
                oppCost: 70,
                tags: ["inefficient", "outdated-approach"]
            },
            {
                skill: "Outdated Penetration Testing Tools",
                reason: "Only learning tools like Metasploit without understanding modern attack vectors (cloud, API, AI) creates a dangerous skills gap.",
                marketInsight: "Cloud security and API security testing have surpassed traditional network pentesting in demand. AI-augmented attacks are the new frontier.",
                alternative: "Cloud Security + Modern Pentest Methodology (PNPT/OSCP)",
                whyBetter: "Cloud security specialists earn 30% more than traditional security roles. OSCP certification is the gold standard for pentesting.",
                riskLevel: "medium",
                oppCost: 55,
                tags: ["incomplete", "narrow"]
            }
        ],
        tips: [
            "Get hands-on with TryHackMe and HackTheBox — practical skills trump theoretical knowledge.",
            "Cloud security (AWS/Azure) is the biggest growth area. Start with AWS Security Specialty.",
            "Learn Python scripting for automation — every security role values this.",
            "Network fundamentals are still essential. Don't skip TCP/IP, DNS, and HTTP protocol understanding."
        ]
    },
    // ----- DEVOPS & CLOUD -----
    "devops": {
        avoid: [
            {
                skill: "Docker Swarm",
                reason: "Kubernetes has won the container orchestration war decisively. Docker Swarm has negligible adoption and almost no job market demand.",
                marketInsight: "Kubernetes holds 92% of the container orchestration market. Docker Swarm is used by less than 3% of companies.",
                alternative: "Kubernetes (K8s)",
                whyBetter: "Kubernetes is the industry standard with massive demand. CKA/CKAD certifications are among the highest-ROI DevOps certifications.",
                riskLevel: "high",
                oppCost: 85,
                tags: ["lost", "negligible-market"]
            },
            {
                skill: "Puppet / Chef (Config Management)",
                reason: "Traditional configuration management tools are being replaced by Infrastructure as Code (IaC) tools like Terraform and cloud-native solutions.",
                marketInsight: "Terraform job listings outnumber Puppet/Chef combined by 4:1. Ansible remains relevant but Puppet/Chef are in steep decline.",
                alternative: "Terraform + Ansible",
                whyBetter: "Terraform is the #1 IaC tool across all major clouds. Combined with Ansible for config management, you cover all employer needs.",
                riskLevel: "high",
                oppCost: 75,
                tags: ["declining", "replaced"]
            },
            {
                skill: "Jenkins (as sole CI/CD tool)",
                reason: "Jenkins is legacy and requires heavy maintenance. Modern cloud-native CI/CD solutions are simpler, faster, and more in-demand.",
                marketInsight: "GitHub Actions, GitLab CI, and cloud-native pipelines are growing 50%+ YoY. Jenkins new adoption has flatlined.",
                alternative: "GitHub Actions + ArgoCD",
                whyBetter: "GitHub Actions integrates natively with the world's largest code platform. ArgoCD enables GitOps for Kubernetes — the most modern CI/CD approach.",
                riskLevel: "medium",
                oppCost: 55,
                tags: ["legacy", "high-maintenance"]
            },
            {
                skill: "Single Cloud Provider Only",
                reason: "Only learning one cloud platform limits your career. Multi-cloud and cloud-agnostic skills are increasingly valued.",
                marketInsight: "76% of enterprises use multi-cloud strategies. Cloud-agnostic skills (Terraform, Kubernetes) are valued above provider-specific expertise.",
                alternative: "Cloud-agnostic tools (Terraform, K8s) + primary cloud (AWS or Azure)",
                whyBetter: "Master cloud-agnostic tools first, then specialize in one cloud. This strategy makes you adaptable and more hireable.",
                riskLevel: "medium",
                oppCost: 60,
                tags: ["limiting", "narrow"]
            }
        ],
        tips: [
            "Kubernetes is becoming THE platform. Invest heavily in container orchestration skills.",
            "Learn Terraform deeply — it's the lingua franca of infrastructure in 2026.",
            "Understand GitOps principles — it's how modern teams manage deployments.",
            "Don't ignore observability: Prometheus, Grafana, and OpenTelemetry are essential.",
            "AWS or Azure — pick one cloud to specialize in, then expand."
        ]
    },
    // ----- GAME DEVELOPMENT -----
    "game-dev": {
        avoid: [
            {
                skill: "GameMaker (for professional career)",
                reason: "GameMaker is great for hobbyists but rarely used in professional game studios. Companies look for Unity or Unreal experience.",
                marketInsight: "95%+ of game studio job postings require Unity or Unreal Engine. GameMaker is almost never mentioned.",
                alternative: "Unity (C#) or Unreal Engine (C++/Blueprints)",
                whyBetter: "Unity dominates indie/mobile and Unreal dominates AAA. Either gives you access to the professional game development market.",
                riskLevel: "medium",
                oppCost: 65,
                tags: ["hobbyist", "limited-careers"]
            },
            {
                skill: "DirectX (low-level graphics from scratch)",
                reason: "Unless targeting a very niche engine/graphics programming role, hand-coding DirectX is extremely time-consuming with minimal career ROI for most game developers.",
                marketInsight: "Game engines abstract away low-level graphics. Less than 2% of game dev roles require raw DirectX/Vulkan programming.",
                alternative: "Unity Shader Graph / Unreal Materials + HLSL basics",
                whyBetter: "Modern shader tools give you 90% of the creative control with 10% of the complexity. Learn basics of HLSL/GLSL, not raw API programming.",
                riskLevel: "high",
                oppCost: 80,
                tags: ["niche", "extreme-complexity"]
            },
            {
                skill: "Building a Custom Game Engine",
                reason: "As a learning exercise it's great, but building a production engine from scratch is a multi-year endeavor. For career progress, master existing engines first.",
                marketInsight: "Studios use Unity, Unreal, or proprietary engines. They hire people proficient in established tools, not from-scratch engine builders (except for specialized roles).",
                alternative: "Deep mastery of Unity or Unreal Engine",
                whyBetter: "Deep engine mastery (editor tools, optimization, architecture) is far more hireable than surface-level custom engine work.",
                riskLevel: "high",
                oppCost: 90,
                tags: ["impractical", "time-sink"]
            }
        ],
        tips: [
            "Pick Unity (indie/mobile) or Unreal (AAA) based on your target market and master it.",
            "Build a portfolio of small, polished games rather than one massive unfinished project.",
            "Learn C# (Unity) or C++ (Unreal) deeply — programming skill is what separates hired from not.",
            "Understand game design patterns — ECS, observer, state machines, object pooling."
        ]
    },
    // ----- UI/UX DESIGN -----
    "ui-ux": {
        avoid: [
            {
                skill: "Adobe XD",
                reason: "Adobe has effectively discontinued active development of XD. Figma has won the design tool war and is the universal standard.",
                marketInsight: "Figma holds 85%+ of the UI design market. Adobe XD is no longer receiving major updates. All teams have migrated to Figma.",
                alternative: "Figma",
                whyBetter: "Figma is the industry standard, always up-to-date, collaborative by default, and required in virtually every UI/UX job posting.",
                riskLevel: "high",
                oppCost: 85,
                tags: ["discontinued", "replaced"]
            },
            {
                skill: "Sketch (as primary tool)",
                reason: "Sketch is Mac-only and has lost massive market share to Figma. It's increasingly irrelevant in team environments that need cross-platform collaboration.",
                marketInsight: "Sketch usage has dropped from 60% to under 15% since Figma's rise. Very few companies list Sketch as a requirement anymore.",
                alternative: "Figma + Framer",
                whyBetter: "Figma for design + Framer for interactive prototypes gives you the most powerful and in-demand design toolkit in 2026.",
                riskLevel: "high",
                oppCost: 70,
                tags: ["declining", "platform-limited"]
            },
            {
                skill: "Photoshop for UI Design",
                reason: "Photoshop is a raster graphics tool, not a UI design tool. Using it for interfaces is wildly inefficient compared to purpose-built tools like Figma.",
                marketInsight: "No modern design team uses Photoshop for UI design. It's still valuable for photo editing, but that's a different skill entirely.",
                alternative: "Figma + design systems thinking",
                whyBetter: "Figma with components and design tokens is how modern products are designed. It's collaborative, web-based, and purpose-built for UI.",
                riskLevel: "high",
                oppCost: 75,
                tags: ["wrong-tool", "inefficient"]
            },
            {
                skill: "Heavy Motion Graphics (After Effects) for UX",
                reason: "While micro-animations matter in UX, spending months learning After Effects for heavy motion graphics is misaligned with UX career goals.",
                marketInsight: "UX roles prioritize research, usability testing, and interaction design. Motion design is a separate specialization.",
                alternative: "Figma prototyping + basic Lottie animations",
                whyBetter: "Figma's built-in prototyping handles 90% of UX animation needs. Lottie files handle the rest for production-ready animations.",
                riskLevel: "medium",
                oppCost: 55,
                tags: ["misaligned", "over-specialized"]
            }
        ],
        tips: [
            "Master Figma — it's the one tool every UI/UX designer must know in 2026.",
            "Focus on UX research methods — usability testing, user interviews, and data analysis separate great designers from average ones.",
            "Build a design system — it shows you think at scale, which is what companies want.",
            "Learn basic front-end (HTML/CSS) — designers who can speak developers' language are more effective and hireable."
        ]
    },
    // ----- BLOCKCHAIN & WEB3 -----
    "blockchain": {
        avoid: [
            {
                skill: "Solidity (without broader Web3 context)",
                reason: "Learning Solidity in isolation without understanding DeFi, tokenomics, and the broader Web3 ecosystem makes you a code monkey, not a blockchain developer.",
                marketInsight: "Web3 companies want developers who understand the business context: DeFi protocols, DAOs, NFT infrastructure, not just syntax.",
                alternative: "Solidity + DeFi protocols + Web3 architecture",
                whyBetter: "Full-stack Web3 developers who understand protocols and tokenomics earn 2-3x more than Solidity-only developers.",
                riskLevel: "medium",
                oppCost: 50,
                tags: ["incomplete", "narrow"]
            },
            {
                skill: "Proof of Work Mining",
                reason: "After Ethereum's merge to Proof of Stake, PoW knowledge is largely irrelevant for most blockchain careers. The industry has moved to PoS and other consensus mechanisms.",
                marketInsight: "95%+ of new blockchain projects use PoS or alternative consensus. PoW is an environmental and scalability dead-end.",
                alternative: "Proof of Stake mechanics + Layer 2 solutions",
                whyBetter: "Understanding PoS, rollups, and L2 scaling solutions is directly applicable to modern blockchain development.",
                riskLevel: "high",
                oppCost: 70,
                tags: ["obsolete", "declining"]
            },
            {
                skill: "Creating NFT Art/Collections",
                reason: "The NFT art market has crashed significantly. Building a career purely around NFT art creation is extremely high risk with low probability of sustained income.",
                marketInsight: "NFT trading volume dropped 90%+ from peak. The speculative art market has largely collapsed.",
                alternative: "NFT infrastructure development / Real-World Asset Tokenization",
                whyBetter: "RWA tokenization is a multi-trillion dollar opportunity. Building infrastructure (not speculation) is where the real careers are.",
                riskLevel: "high",
                oppCost: 80,
                tags: ["crashed", "speculative"]
            }
        ],
        tips: [
            "Focus on blockchain infrastructure, not speculation — smart contracts, protocols, and security.",
            "Learn Rust — it's the language for Solana and many next-gen blockchain platforms.",
            "Understand cross-chain interoperability — it's one of the biggest problems to solve.",
            "Security auditing is the highest-paying specialization in Web3. Consider this path."
        ]
    }
};
// ===== Rotating Skills Animation =====
const rotatingSkills = ["jQuery", "COBOL", "Flash", "Perl", "Visual Basic", "Dreamweaver", "CoffeeScript", "Silverlight"];
let rotateIndex = 0;
const rotatingEl = document.getElementById('rotatingSkill');
function rotateSkill() {
    rotateIndex = (rotateIndex + 1) % rotatingSkills.length;
    rotatingEl.style.opacity = '0';
    rotatingEl.style.transform = 'translateY(-10px)';
    setTimeout(() => {
        rotatingEl.textContent = rotatingSkills[rotateIndex];
        rotatingEl.style.opacity = '1';
        rotatingEl.style.transform = 'translateY(0)';
    }, 300);
}
rotatingEl.style.transition = 'all 0.3s ease';
setInterval(rotateSkill, 2000);
// ===== Animated Counters =====
function animateCounter(el, target) {
    const duration = 2000;
    const start = performance.now();
    const startVal = 0;
    function update(now) {
        const elapsed = now - start;
        const progress = Math.min(elapsed / duration, 1);
        const eased = 1 - Math.pow(1 - progress, 3); // easeOutCubic
        const current = Math.round(startVal + (target - startVal) * eased);
        el.textContent = current.toLocaleString();
        if (progress < 1) requestAnimationFrame(update);
    }
    requestAnimationFrame(update);
}
// Intersection Observer for stats
const statsObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const statNumbers = entry.target.querySelectorAll('.stat-number');
            statNumbers.forEach(num => {
                const target = parseInt(num.dataset.target);
                animateCounter(num, target);
            });
            statsObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.3 });
const statsBar = document.querySelector('.stats-bar');
if (statsBar) statsObserver.observe(statsBar);
// ===== Form Handling =====
const form = document.getElementById('engineForm');
const analyzeBtn = document.getElementById('analyzeBtn');
const resultsSection = document.getElementById('results');
const resultsGrid = document.getElementById('resultsGrid');
const proTipsDiv = document.getElementById('proTips');
// Scroll to engine on CTA click
document.getElementById('startBtn').addEventListener('click', (e) => {
    e.preventDefault();
    document.getElementById('engine').scrollIntoView({ behavior: 'smooth' });
});
form.addEventListener('submit', async (e) => {
    e.preventDefault();
    // Get form values
    const userGoal = document.getElementById('userGoal').value.trim();
    const currentSkills = document.getElementById('currentSkills').value.trim();
    const industry = document.getElementById('industry').value;
    const experience = document.getElementById('experience').value;
    const priority = document.getElementById('priority').value;
    if (!userGoal || !currentSkills || !industry || !experience || !priority) {
        shakeElement(analyzeBtn);
        return;
    }
    // Show loading state
    analyzeBtn.classList.add('loading');
    analyzeBtn.disabled = true;
    // Simulate analysis time
    await delay(1800);
    // Generate results
    const results = generateAnalysis(industry, currentSkills, experience, priority, userGoal);
    // Render results
    renderResults(results, userGoal, industry);
    // Reset button
    analyzeBtn.classList.remove('loading');
    analyzeBtn.disabled = false;
    // Show & scroll to results
    resultsSection.style.display = 'block';
    await delay(100);
    resultsSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
});
// ===== Analysis Engine =====
function generateAnalysis(industry, currentSkillsStr, experience, priority, goal) {
    const industryData = SKILL_DATABASE[industry];
    if (!industryData) return { skills: [], tips: [] };
    const currentSkills = currentSkillsStr
        .toLowerCase()
        .split(',')
        .map(s => s.trim())
        .filter(Boolean);
    let avoidList = [...industryData.avoid];
    // Filter: Remove skills the user already knows well (no point warning about them)
    avoidList = avoidList.filter(item => {
        const skillLower = item.skill.toLowerCase();
        return !currentSkills.some(s => skillLower.includes(s) || s.includes(skillLower));
    });
    // Prioritize based on experience level
    if (experience === 'beginner' || experience === 'career-switch') {
        // Beginners: Prioritize high-risk and replaced/dead tech
        avoidList.sort((a, b) => b.oppCost - a.oppCost);
    } else if (experience === 'intermediate') {
        // Intermediate: Focus on tools that seem appealing but are declining
        avoidList.sort((a, b) => {
            const aScore = a.riskLevel === 'high' ? 2 : 1;
            const bScore = b.riskLevel === 'high' ? 2 : 1;
            return bScore - aScore || b.oppCost - a.oppCost;
        });
    } else {
        // Advanced: Show niche traps and diminishing returns
        avoidList.sort((a, b) => b.oppCost - a.oppCost);
    }
    // Time constraints  
    let maxResults = 4; // Focus on top priorities
    avoidList = avoidList.slice(0, maxResults);
    // Calculate time saved estimate
    const hoursPerSkill = 200;
    const totalTimeSaved = avoidList.length * hoursPerSkill;
    // Get relevant tips
    let tips = [...industryData.tips];
    // Add priority-specific tip
    if (priority === 'job') {
        tips.unshift("🎯 Since your priority is getting hired, focus on the most in-demand tools and build a strong portfolio immediately.");
    } else if (priority === 'freelance') {
        tips.unshift("💰 For freelancing, learn full-stack skills and client-facing tools — versatility wins in freelancing.");
    } else if (priority === 'startup') {
        tips.unshift("🚀 For startups, speed matters. Master rapid prototyping tools and full-stack frameworks.");
    } else if (priority === 'deep') {
        tips.unshift("🧠 For deep expertise, go beyond tutorials. Read source code, contribute to open-source, and build complex systems.");
    }
    return {
        skills: avoidList,
        tips: tips,
        totalTimeSaved: totalTimeSaved,
        industry: industry
    };
}
// ===== Render Results =====
function renderResults(results, goal, industry) {
    // Clear previous
    resultsGrid.innerHTML = '';
    proTipsDiv.innerHTML = '';
    // Summary
    const industryNames = {
        'web-dev': 'Web Development',
        'mobile-dev': 'Mobile Development',
        'data-science': 'Data Science & AI/ML',
        'cybersecurity': 'Cybersecurity',
        'devops': 'DevOps & Cloud',
        'game-dev': 'Game Development',
        'ui-ux': 'UI/UX Design',
        'blockchain': 'Blockchain & Web3'
    };
    document.getElementById('resultsSummary').textContent =
        `Based on your goal in ${industryNames[industry]}, here's what to avoid — and what to learn instead.`;
    // Summary cards
    document.getElementById('avoidCount').textContent = results.skills.length;
    document.getElementById('timeSaved').textContent = results.totalTimeSaved + 'h';
    document.getElementById('altCount').textContent = results.skills.length;
    // Render each skill card
    results.skills.forEach((item, idx) => {
        const card = document.createElement('div');
        card.className = 'result-card';
        card.style.animationDelay = `${idx * 0.12}s`;
        card.innerHTML = `
            <div class="result-card-header">
                <div class="result-skill-name">
                    <div class="result-icon">❌</div>
                    <div>
                        <div class="result-skill-title">${item.skill}</div>
                        <div class="result-skill-tag">${item.tags.join(' · ')}</div>
                    </div>
                </div>
                <span class="risk-badge risk-${item.riskLevel}">
                    ${item.riskLevel === 'high' ? '⚠ High Risk' : '⬤ Medium Risk'}
                </span>
            </div>
            <div class="result-card-body">
                <div class="result-row">
                    <span class="result-row-icon">⚠️</span>
                    <div class="result-row-content">
                        <div class="result-row-label label-reason">Why Avoid</div>
                        <div class="result-row-text">${item.reason}</div>
                    </div>
                </div>
                <div class="result-row">
                    <span class="result-row-icon">📉</span>
                    <div class="result-row-content">
                        <div class="result-row-label label-market">Market Insight</div>
                        <div class="result-row-text">${item.marketInsight}</div>
                    </div>
                </div>
                <div class="opp-cost-meter">
                    <span class="result-row-icon">💸</span>
                    <div class="meter-track">
                        <div class="meter-fill ${item.oppCost > 65 ? 'high' : 'medium'}" 
                             data-width="${item.oppCost}%"></div>
                    </div>
                    <span class="meter-label">Opp. Cost: ${item.oppCost}%</span>
                </div>
                <div class="result-row" style="margin-top: 4px;">
                    <span class="result-row-icon">🔁</span>
                    <div class="result-row-content">
                        <div class="result-row-label label-alt">Better Alternative</div>
                        <div class="alt-highlight">
                            <span class="alt-arrow">→</span>
                            <span class="alt-skill-name">${item.alternative}</span>
                        </div>
                    </div>
                </div>
                <div class="result-row">
                    <span class="result-row-icon">🚀</span>
                    <div class="result-row-content">
                        <div class="result-row-label label-why">Why It's Better</div>
                        <div class="result-row-text">${item.whyBetter}</div>
                    </div>
                </div>
            </div>
        `;
        resultsGrid.appendChild(card);
    });
    // Animate meter fills after render
    setTimeout(() => {
        document.querySelectorAll('.meter-fill').forEach(fill => {
            fill.style.width = fill.dataset.width;
        });
    }, 500);
    // Pro Tips
    if (results.tips.length > 0) {
        proTipsDiv.innerHTML = `
            <div class="pro-tips-title">
                <span>💡</span> Pro Tips for Your Journey
            </div>
            <ul class="tip-list">
                ${results.tips.map(tip => `
                    <li class="tip-item">
                        <span class="tip-icon">→</span>
                        <span>${tip}</span>
                    </li>
                `).join('')}
            </ul>
        `;
    }
}
// ===== Restart =====
document.getElementById('restartBtn').addEventListener('click', () => {
    resultsSection.style.display = 'none';
    form.reset();
    document.getElementById('engine').scrollIntoView({ behavior: 'smooth' });
});
// ===== Utility Functions =====
function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}
function shakeElement(el) {
    el.style.animation = 'none';
    el.offsetHeight; // trigger reflow
    el.style.animation = 'shake 0.5s ease';
    setTimeout(() => { el.style.animation = ''; }, 500);
}
// Add shake keyframes
const shakeStyle = document.createElement('style');
shakeStyle.textContent = `
    @keyframes shake {
        0%, 100% { transform: translateX(0); }
        10%, 30%, 50%, 70%, 90% { transform: translateX(-4px); }
        20%, 40%, 60%, 80% { transform: translateX(4px); }
    }
`;
document.head.appendChild(shakeStyle);
// ===== Smooth entrance animations with Intersection Observer =====
const observeElements = document.querySelectorAll('.reveal');
const entranceObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            entranceObserver.unobserve(entry.target);
        }
    });
}, { rootMargin: '0px 0px -50px 0px', threshold: 0.1 });
observeElements.forEach(el => {
    entranceObserver.observe(el);
});
// ===== Haptic Feedback & Input Interactivity =====
function triggerHaptic(duration = 10) {
    if (navigator.vibrate) {
        try { navigator.vibrate(duration); } catch(e) {}
    }
}
const interactiveElements = document.querySelectorAll('.form-input, .form-select');
interactiveElements.forEach(el => {
    // Light haptic on focus for inputs
    el.addEventListener('focus', () => triggerHaptic(10));
    
    // Tiny haptic blip on typing for inputs
    if (el.tagName === 'INPUT') {
        el.addEventListener('input', () => triggerHaptic(5));
    }
});
const clickableElements = document.querySelectorAll('.submit-btn, .restart-btn, .hero-cta');
clickableElements.forEach(el => {
    // Stronger haptic on button clicks
    el.addEventListener('click', () => triggerHaptic(20));
});
