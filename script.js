document.addEventListener('DOMContentLoaded', () => {
  
  // --- Details Modal Data Store ---
  const detailsData = {
    products: {
      erp: {
        category: "Enterprise ERP",
        title: "Enterprise Resource Planning (ERP)",
        description: "Softix ERP is an integrated, robust management suite designed to automate workflows and optimize cross-department operations.",
        detailsHtml: `
          <h4>General Features & Modules</h4>
          <p>Softix ERP allows real-time data transparency and business-critical report audits. Its key functional scopes include:</p>
          <ul>
            <li><strong>Financial Ledger:</strong> Double-entry bookkeeping, general ledger, balance sheets, P&L reporting, and tax management.</li>
            <li><strong>Inventory Management:</strong> Stock counting, multi-warehouse handling, batch tracking, expiry date monitoring, and FIFO/LIFO evaluations.</li>
            <li><strong>Purchase & Supply:</strong> Direct vendor bill submissions, auto-purchase orders, purchase request queues, and invoice approvals.</li>
            <li><strong>Sales & Distribution:</strong> Client ledger statements, custom discount terms, wholesale pricing tables, and invoice printouts.</li>
            <li><strong>HR & Payroll Integration:</strong> Shift scheduling, biometric attendance processing, leave audits, tax deductions, and wage distribution slips.</li>
          </ul>
        `
      },
      ebusiness: {
        category: "Suite Solutions",
        title: "E-Business Suite",
        description: "The Softix E-Business Suite is a comprehensive web and server-based portal coordinating all retail and wholesale logistics.",
        detailsHtml: `
          <h4>General Features & Modules</h4>
          <p>Designed to help management drive multi-channel orders, track agents, and oversee client profiles:</p>
          <ul>
            <li><strong>Supplier Portal:</strong> Online dashboard for suppliers to check due bills, track invoice processing, and see item deliveries.</li>
            <li><strong>Order Management:</strong> Real-time reservation of inventories across brick-and-mortar stores and online catalogs.</li>
            <li><strong>B2B Billing Modules:</strong> Set credit limits for dealers, print custom invoice schedules, and record payment collections.</li>
            <li><strong>Automated Workflows:</strong> Multi-tiered manager approvals for quotes, stock releases, and discount concessions.</li>
          </ul>
        `
      },
      pos: {
        category: "Retail POS",
        title: "Point-of-Sale (POS) System",
        description: "A lightning-fast cashier terminal offering quick bill prints and barcoding, optimized for high-volume sales counters.",
        detailsHtml: `
          <h4>General Features & Modules</h4>
          <p>Perfect for retail outlets, supermarkets, franchises, and merchant hubs:</p>
          <ul>
            <li><strong>Offline Sync Billing:</strong> Continue billing smoothly during internet outages. Invoices are saved locally and sync automatically when online.</li>
            <li><strong>Barcode Scanning:</strong> Fast SKU barcode creation, print stickers, and scan items into customer shopping carts.</li>
            <li><strong>Multi-Counter Cash Audit:</strong> Track cash shifts, safe drops, credit card tallies, and cash register opening/closing reports.</li>
            <li><strong>Customer Loyalty Points:</strong> Reward repeat buyers with redeemable discount points and track shopping trends.</li>
          </ul>
        `
      },
      housing: {
        category: "Real Estate",
        title: "Housing Colony Management",
        description: "Specialized software designed for residential societies and property schemes to coordinate plot databases, dues, and visitor logs.",
        detailsHtml: `
          <h4>General Features & Modules</h4>
          <p>Complete colony tracking module featuring security integration:</p>
          <ul>
            <li><strong>Plot Ledger & File Transfer:</strong> Registry audits, plot dimensions, owner file histories, and safe transfer processes.</li>
            <li><strong>Automated Dues Calculation:</strong> Auto-generate monthly maintenance, water, security, and electricity bills for all blocks.</li>
            <li><strong>Installment Plans:</strong> Set schedules for buyer payments, auto-print installment books, and email overdue reminders.</li>
            <li><strong>Gate Security Passes:</strong> Guest vehicle logs, guard app integration, gate pass printing, and security warning alerts.</li>
          </ul>
        `
      },
      distribution: {
        category: "Logistics",
        title: "Distribution Management System",
        description: "Built for manufacturers and distributors to coordinate dealer ledgers and track field forces via dynamic maps.",
        detailsHtml: `
          <h4>General Features & Modules</h4>
          <p>End-to-end supply chain execution module:</p>
          <ul>
            <li><strong>Field Force Tracker:</strong> Mobile app for agents to record retailer visits, book orders, and verify stock availability in real-time.</li>
            <li><strong>Dispatch Scheduling:</strong> Route planning for delivery vans, load sheet generation, and gate pass prints.</li>
            <li><strong>Retailer Credit Control:</strong> Track retailer outstanding balances, credit days warning, and payment collection schedules.</li>
            <li><strong>Secondary Sales Analysis:</strong> Clear charts illustrating stock movement, product popularity, and agent sales tallies.</li>
          </ul>
        `
      },
      hospital: {
        category: "Clinical Systems",
        title: "Hospital Management System",
        description: "An integrated healthcare software simplifying patient documentation, doctor schedules, and clinical diagnostics.",
        detailsHtml: `
          <h4>General Features & Modules</h4>
          <p>Features clinical privacy standards and quick billing modules:</p>
          <ul>
            <li><strong>OPD & Patient Files:</strong> Electronic health records, OPD ticket booking, demographic logs, and patient history charts.</li>
            <li><strong>Doctor Scheduler:</strong> Appointment booking, automated SMS patient alerts, doctor commission trackers.</li>
            <li><strong>IPD Bed Allocation:</strong> Manage admissions, ward beds, surgery scheduling, nurse notes, and discharge clearings.</li>
            <li><strong>Lab & Pharmacy:</strong> Record test reports, print prescriptions, track pharmacy medicine batches and expiries.</li>
          </ul>
        `
      },
      namo: {
        category: "Brand Solution",
        title: "Namo",
        description: "Namo is a powerful branding and business management platform designed to elevate your brand presence.",
        detailsHtml: `
          <h4>Key Features</h4>
          <p>Namo helps businesses establish a strong brand identity and manage operations seamlessly.</p>
          <ul>
            <li><strong>Brand Management:</strong> Create and manage your brand identity, logos, and marketing assets.</li>
            <li><strong>Business Dashboard:</strong> Real-time analytics and insights into your business performance.</li>
            <li><strong>Customer Engagement:</strong> Tools to connect with customers and build lasting relationships.</li>
            <li><strong>Multi-Platform:</strong> Access your business data from anywhere, anytime.</li>
          </ul>
        `
      },
      education: {
        category: "Education",
        title: "Education Management System",
        description: "A comprehensive platform to manage student records, academics, and administrative tasks.",
        detailsHtml: `
          <h4>General Features & Modules</h4>
          <p>Streamline educational institution operations with digital tools:</p>
          <ul>
            <li><strong>Student Records:</strong> Centralized database for student profiles, enrollment, and academic history.</li>
            <li><strong>Attendance Tracking:</strong> Digital attendance with real-time reporting and parent notifications.</li>
            <li><strong>Timetable Management:</strong> Automated scheduling for classes, exams, and faculty assignments.</li>
            <li><strong>Fee Collection:</strong> Online fee payment, receipt generation, and dues tracking.</li>
          </ul>
        `
      },
      franchise: {
        category: "Franchise",
        title: "Franchise Business Solutions",
        description: "Centralized management platform for franchise networks with multi-branch coordination.",
        detailsHtml: `
          <h4>General Features & Modules</h4>
          <p>Manage your franchise network efficiently:</p>
          <ul>
            <li><strong>Central Dashboard:</strong> Monitor all franchise locations from a single interface.</li>
            <li><strong>Royalty Tracking:</strong> Automated royalty fee calculation and collection.</li>
            <li><strong>Multi-Branch Sync:</strong> Real-time data synchronization across all franchise outlets.</li>
            <li><strong>Reporting & Analytics:</strong> Comprehensive reports on sales, inventory, and performance.</li>
          </ul>
        `
      },
      hrms: {
        category: "HR",
        title: "Human Resource Management System",
        description: "Complete HR automation solution for employee management, payroll, and compliance.",
        detailsHtml: `
          <h4>General Features & Modules</h4>
          <p>Streamline your HR operations:</p>
          <ul>
            <li><strong>Employee Database:</strong> Centralized records for all employee information and documents.</li>
            <li><strong>Payroll Processing:</strong> Automated salary calculations, tax deductions, and pay slips.</li>
            <li><strong>Leave Management:</strong> Digital leave requests, approvals, and balance tracking.</li>
            <li><strong>Performance Reviews:</strong> Goal setting, appraisals, and performance tracking tools.</li>
          </ul>
        `
      },
    },
    services: {
      software: {
        category: "Capabilities",
        title: "Custom Software Development",
        description: "We design, code, and deploy tailored desktop and web applications optimized to solve complex corporate bottlenecks.",
        detailsHtml: `
          <h4>What We Deliver</h4>
          <p>We work closely with your technical teams to deploy custom products under agile sprints:</p>
          <ul>
            <li><strong>Desktop Software:</strong> Secure Windows applications managing localized hardware operations.</li>
            <li><strong>Web Applications:</strong> Cloud-native dashboards and portals built for absolute scaling.</li>
            <li><strong>API Integration:</strong> Connect legacy software to external databases and government API portals.</li>
            <li><strong>Agile Milestones:</strong> Review product demonstrations every two weeks to guarantee exact project alignment.</li>
          </ul>
        `
      },
      mobile: {
        category: "Capabilities",
        title: "Mobile Application Development",
        description: "Build robust Android and iOS applications with gorgeous user interfaces and absolute client security.",
        detailsHtml: `
          <h4>What We Deliver</h4>
          <p>From initial design mockups to publishing on App Store and Play Store:</p>
          <ul>
            <li><strong>Native Coding:</strong> High-performance Swift (iOS) and Kotlin (Android) apps.</li>
            <li><strong>Cross-Platform Development:</strong> Fast deployment on Flutter or React Native frameworks to save timelines.</li>
            <li><strong>Offline Mode Support:</strong> Allow users to work offline, syncing data back to servers in the background.</li>
            <li><strong>Biometric Security:</strong> Fingerprint and Face ID support for corporate tools and e-wallets.</li>
          </ul>
        `
      },
      erp_pos: {
        category: "Capabilities",
        title: "ERP & POS Setup & Integration",
        description: "Our engineers configure, install, and optimize ERP and retail billing counters at your factories and shop outlets.",
        detailsHtml: `
          <h4>What We Deliver</h4>
          <p>We provide full setup services to guarantee smooth transition and no data loss:</p>
          <ul>
            <li><strong>Hardware Alignment:</strong> Setup receipt printers, barcode printers, customer displays, and scanners.</li>
            <li><strong>Data Migration:</strong> Import existing client ledgers, vendor details, and stock details from Excel tables.</li>
            <li><strong>Local Server Sync:</strong> Configure local backup servers to protect data during network drops.</li>
            <li><strong>On-Site Training:</strong> Run training sessions for cashiers, stock manager staff, and accountants.</li>
          </ul>
        `
      },
      saas: {
        category: "Capabilities",
        title: "SaaS Development",
        description: "Build scalable cloud-based software-as-a-service platforms with multi-tenant architecture.",
        detailsHtml: `
          <h4>What We Deliver</h4>
          <p>We design and deploy cloud-native SaaS products:</p>
          <ul>
            <li><strong>Multi-Tenant Architecture:</strong> Secure data isolation for multiple clients on a single platform.</li>
            <li><strong>Subscription Billing:</strong> Automated recurring billing, invoicing, and payment processing.</li>
            <li><strong>Scalable Infrastructure:</strong> Cloud deployment on AWS/Azure with auto-scaling capabilities.</li>
            <li><strong>Analytics Dashboard:</strong> Real-time usage metrics and business intelligence reports.</li>
          </ul>
        `
      },
      ecommerce: {
        category: "Capabilities",
        title: "E-Commerce Development",
        description: "Design and deploy custom online stores with secure payment gateways and inventory management.",
        detailsHtml: `
          <h4>What We Deliver</h4>
          <p>Full-featured e-commerce solutions:</p>
          <ul>
            <li><strong>Custom Storefront:</strong> Unique designs tailored to your brand and products.</li>
            <li><strong>Payment Integration:</strong> Secure payment gateways including credit cards, wallets, and bank transfers.</li>
            <li><strong>Inventory Sync:</strong> Real-time stock management across online and offline channels.</li>
            <li><strong>Order Management:</strong> Automated order processing, tracking, and customer notifications.</li>
          </ul>
        `
      },
      digital_marketing: {
        category: "Capabilities",
        title: "Digital Marketing",
        description: "Boost your online presence with SEO, social media marketing, and data-driven strategies.",
        detailsHtml: `
          <h4>What We Deliver</h4>
          <p>Comprehensive digital marketing services:</p>
          <ul>
            <li><strong>SEO Optimization:</strong> Improve search rankings and drive organic traffic to your website.</li>
            <li><strong>Social Media Marketing:</strong> Targeted campaigns on Facebook, Instagram, LinkedIn, and more.</li>
            <li><strong>PPC Advertising:</strong> Google Ads and social media paid campaigns with ROI tracking.</li>
            <li><strong>Analytics & Reporting:</strong> Data-driven insights to optimize your marketing strategy.</li>
          </ul>
        `
      }
    }
  };

  // --- Project Case Studies (notable projects) ---
  detailsData.projects = {
    nccia: {
      category: 'Public Project',
      title: 'Punjab Police — Panic Button (NCCIA)',
      description: 'Delivered an integrated panic button and incident reporting system in collaboration with NCCIA and Punjab Police to accelerate emergency response.',
      detailsHtml: `
        <h4>Project Overview</h4>
        <p>This project implemented a resilient panic-button service integrated with Punjab Police dispatch systems to enable rapid citizen alerts and location-based incident routing.</p>
        <h4>Key Outcomes</h4>
        <ul>
          <li>Real-time incident capture and geolocation forwarding to nearest response unit.</li>
          <li>Secure data exchange with police CAD systems and NCCIA gateways.</li>
          <li>Public-facing mobile interface and internal dispatch dashboards.</li>
        </ul>
      `
    },
    housing_projects: {
      category: 'Public/Private',
      title: 'Housing Colony Management Systems',
      description: 'Implemented complete housing society management systems handling dues, security, and resident services across multiple public and private colonies.',
      detailsHtml: `
        <h4>Project Overview</h4>
        <p>Full-featured society management portal enabling plot records, automated dues, security gate integration, and resident communication channels.</p>
        <h4>Key Outcomes</h4>
        <ul>
          <li>Automated monthly billing and installment tracking for thousands of residents.</li>
          <li>Gate security app integration with pass generation and visitor logging.</li>
          <li>Resident portals for service requests and community announcements.</li>
        </ul>
      `
    }
  };

  // --- Dark/Light Theme Switcher ---
  const themeToggles = document.querySelectorAll('.theme-toggle-btn');
  const sunIcon = `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="theme-icon"><circle cx="12" cy="12" r="5"></circle><line x1="12" y1="1" x2="12" y2="3"></line><line x1="12" y1="21" x2="12" y2="23"></line><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line><line x1="1" y1="12" x2="3" y2="12"></line><line x1="21" y1="12" x2="23" y2="12"></line><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line></svg>`;
  const moonIcon = `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="theme-icon"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path></svg>`;
  
  let activeTheme = localStorage.getItem('theme') || 'dark';
  document.body.setAttribute('data-theme', activeTheme);
  themeToggles.forEach(btn => { btn.innerHTML = activeTheme === 'dark' ? sunIcon : moonIcon; });

  // Logo swap helper: use data attributes on the img for light/dark variants
  const siteLogo = document.getElementById('site-logo');
  const setLogoForTheme = (theme) => {
    if (!siteLogo) return;
    const lightSrc = siteLogo.getAttribute('data-logo-light') || siteLogo.src;
    const darkSrc = siteLogo.getAttribute('data-logo-dark') || lightSrc;

    const chosen = theme === 'dark' ? darkSrc : lightSrc;
    // try to preload chosen image; if it fails, keep existing and remove filters
    const img = new Image();
    img.onload = () => { siteLogo.src = chosen; siteLogo.style.filter = ''; };
    img.onerror = () => {
      // fallback: remove CSS filters so original logo remains visible
      siteLogo.style.filter = 'none';
    };
    img.src = chosen;
  };

  // Apply initial logo according to stored theme
  setLogoForTheme(activeTheme);

  const toggleTheme = () => {
    activeTheme = activeTheme === 'dark' ? 'light' : 'dark';
    document.body.setAttribute('data-theme', activeTheme);
    themeToggles.forEach(btn => { btn.innerHTML = activeTheme === 'dark' ? sunIcon : moonIcon; });
    localStorage.setItem('theme', activeTheme);
    setLogoForTheme(activeTheme);
  };

  themeToggles.forEach(btn => { btn.addEventListener('click', toggleTheme); });

  // Sync product card summaries with detailsData descriptions
  const storyCards = document.querySelectorAll('.story-card');
  storyCards.forEach(card => {
    const btn = card.querySelector('.product-details-btn');
    if (!btn) return;
    const productId = btn.getAttribute('data-product');
    const data = detailsData.products[productId];
    if (data) {
      const para = card.querySelector('p');
      if (para) para.textContent = data.description;
    }
  });

  // --- Header Scroll Effect ---
  const header = document.getElementById('header');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  });

  // --- Mobile Navigation Menu ---
  const menuToggle = document.getElementById('menu-toggle');
  const navLinks = document.getElementById('nav-links');
  
  menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    const spans = menuToggle.querySelectorAll('span');
    if (navLinks.classList.contains('active')) {
      spans[0].style.transform = 'rotate(45deg) translate(6px, 6px)';
      spans[1].style.opacity = '0';
      spans[2].style.transform = 'rotate(-45deg) translate(6px, -6px)';
    } else {
      spans[0].style.transform = 'none';
      spans[1].style.opacity = '1';
      spans[2].style.transform = 'none';
    }
  });

  const navItems = navLinks.querySelectorAll('a');
  navItems.forEach(item => {
    item.addEventListener('click', () => {
      navLinks.classList.remove('active');
      const spans = menuToggle.querySelectorAll('span');
      spans[0].style.transform = 'none';
      spans[1].style.opacity = '1';
      spans[2].style.transform = 'none';
    });
  });

  // --- Scroll Spy for Active Navigation Link ---
  const sections = document.querySelectorAll('section[id]');
  window.addEventListener('scroll', () => {
    let scrollPos = window.scrollY + 100;
    
    sections.forEach(section => {
      const top = section.offsetTop;
      const height = section.offsetHeight;
      const id = section.getAttribute('id');
      
      if (scrollPos >= top && scrollPos < top + height) {
        navItems.forEach(item => {
          item.classList.remove('active');
          if (item.getAttribute('href') === `#${id}`) {
            item.classList.add('active');
          }
        });
      }
    });
  });

  // --- Achievements Stat Counter Animation ---
  const counters = document.querySelectorAll('.achievement-number');
  const speed = 80;

  const startCounterAnimation = (counter) => {
    const target = +counter.getAttribute('data-target');
    let count = 0;
    const increment = target / speed;
    
    const updateCount = () => {
      count += increment;
      if (count < target) {
        counter.innerText = Math.ceil(count).toLocaleString() + '+';
        setTimeout(updateCount, 15);
      } else {
        counter.innerText = target.toLocaleString() + '+';
      }
    };
    updateCount();
  };

  const observerOptions = {
    root: null,
    threshold: 0.3
  };

  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const statsSection = entry.target;
        const sectionCounters = statsSection.querySelectorAll('.achievement-number');
        
        sectionCounters.forEach(counter => {
          startCounterAnimation(counter);
        });
        observer.unobserve(statsSection);
      }
    });
  }, observerOptions);

  const statsSection = document.querySelector('.achievements-section');
  if (statsSection) {
    observer.observe(statsSection);
  }

  // --- FAQ Accordion ---
  const faqItems = document.querySelectorAll('.faq-item');
  faqItems.forEach(item => {
    const question = item.querySelector('.faq-question');
    question.addEventListener('click', () => {
      const isActive = item.classList.contains('active');
      faqItems.forEach(i => i.classList.remove('active'));
      if (!isActive) {
        item.classList.add('active');
      }
    });
  });

  // --- Contact Form → sales@softix.com.pk via FormSubmit ---
  const contactForm = document.getElementById('contact-form');
  const formFeedback = document.getElementById('form-feedback');
  const t = (key) => {
    const dict = window.SOFTIX_I18N?.[window.softixLang || 'en'] || {};
    return dict[key] || key;
  };

  if (contactForm) {
    contactForm.addEventListener('submit', async (e) => {
      e.preventDefault();
      
      const submitBtn = contactForm.querySelector('button[type="submit"]');
      const originalBtnText = submitBtn.innerText;
      
      const nameVal = document.getElementById('form-name').value.trim();
      const emailVal = document.getElementById('form-email').value.trim();
      const phoneVal = document.getElementById('form-phone').value.trim();
      const companyVal = document.getElementById('form-company').value.trim();
      const serviceVal = document.getElementById('form-service').value;
      const messageVal = document.getElementById('form-message').value.trim();
      
      if (!nameVal || !emailVal || !phoneVal || !serviceVal || !messageVal) {
        formFeedback.className = 'form-feedback error';
        formFeedback.innerText = t('form_error');
        contactForm.classList.add('shake');
        setTimeout(() => contactForm.classList.remove('shake'), 450);
        return;
      }
      
      submitBtn.disabled = true;
      submitBtn.innerText = 'Sending to sales@softix.com.pk...';
      formFeedback.style.display = 'none';
      formFeedback.className = 'form-feedback';

      const payload = {
        name: nameVal,
        email: emailVal,
        phone: phoneVal,
        company: companyVal || 'N/A',
        service: serviceVal,
        message: messageVal,
        _subject: 'New Softix Website Consultation Request',
        _template: 'table',
        _captcha: 'false'
      };

      try {
        const res = await fetch('https://formsubmit.co/ajax/sales@softix.com.pk', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json'
          },
          body: JSON.stringify(payload)
        });
        const data = await res.json().catch(() => ({}));
        if (!res.ok) throw new Error(data.message || 'Send failed');

        formFeedback.className = 'form-feedback success';
        formFeedback.innerText = t('form_success');
        if (typeof showToast === 'function') {
          showToast('Email sent to sales@softix.com.pk', 'success');
        }
        contactForm.reset();
      } catch (err) {
        formFeedback.className = 'form-feedback error';
        formFeedback.innerText = t('form_send_fail');
        if (typeof showToast === 'function') {
          showToast(t('form_send_fail'), 'error');
        }
      } finally {
        submitBtn.disabled = false;
        submitBtn.innerText = originalBtnText;
      }
    });
  }

  // --- Live Chat Widget ---
  const chatBubble = document.getElementById('chat-bubble');
  const chatWindow = document.getElementById('chat-window');
  const chatClose = document.getElementById('chat-close');
  const chatBody = document.getElementById('chat-body');
  const chatOptions = document.getElementById('chat-options');

  if (chatBubble && chatWindow && chatClose) {
    chatBubble.addEventListener('click', () => {
      chatWindow.classList.toggle('active');
    });

    chatClose.addEventListener('click', () => {
      chatWindow.classList.remove('active');
    });

    const optButtons = chatOptions.querySelectorAll('.chat-opt-btn');
    optButtons.forEach(btn => {
      btn.addEventListener('click', (e) => {
        // Special handler for the Intercom hand-off button
        if (btn.getAttribute('data-intercom') === 'true') {
          appendChatMsg(btn.getAttribute('data-reply') || btn.textContent, 'user');
          chatOptions.style.display = 'none';
          const typingMsg = appendChatMsg('Connecting you to a Softix agent...', 'bot typing');
          setTimeout(() => {
            typingMsg.remove();
            appendChatMsg('You are now being connected to a live Softix agent via Intercom. The Intercom messenger will open on the right.', 'bot');
            // Open Intercom messenger
            if (window.SoftixIntercom && typeof window.SoftixIntercom.show === 'function') {
              window.SoftixIntercom.show();
            } else if (typeof Intercom === 'function') {
              Intercom('show');
            }
            setTimeout(() => { chatOptions.style.display = 'flex'; }, 400);
          }, 1200);
          return;
        }

        const userText = btn.getAttribute('data-reply');
        appendChatMsg(userText, 'user');
        chatOptions.style.display = 'none';
        const typingMsg = appendChatMsg('Writing...', 'bot typing');
        
        setTimeout(() => {
          typingMsg.remove();
          
          let botReplyText = "";
          if (userText.includes("ERP")) {
            botReplyText = "Our custom ERP suite integrates Accountancy, Payroll, HRMS, and Inventory. We'd love to organize a personal demo! Fill out our contact form below and we will reach out today.";
          } else if (userText.includes("POS")) {
            botReplyText = "Certainly! The POS system supports barcoding, automated billing sync, local offline backups, and customizable invoicing. Call +92 55 38 69 000 for an instant demo setup.";
          } else {
            botReplyText = "Got it! Our sales team is online. You can write to sales@softix.com.pk or dial +92 334 44 00 443. You can also drop a line in the form below and we'll reply right away!";
          }
          
          appendChatMsg(botReplyText, 'bot');
          chatOptions.style.display = 'flex';
        }, 1000);
      });
    });
  }

  function appendChatMsg(text, type) {
    const msgDiv = document.createElement('div');
    msgDiv.className = `chat-msg ${type}`;
    msgDiv.innerText = text;
    chatBody.appendChild(msgDiv);
    chatBody.scrollTop = chatBody.scrollHeight;
    return msgDiv;
  }

  // --- Dynamic Details Modal Manager ---
  const modalOverlay = document.getElementById('details-modal');
  const modalBodyContent = document.getElementById('modal-body-content');
  const modalCloseBtn = document.getElementById('modal-close-btn');

  const openDetailsModal = (data) => {
    if (!data) return;

    modalBodyContent.innerHTML = `
      <div class="modal-header">
        <span class="category">${data.category}</span>
        <h3>${data.title}</h3>
      </div>
      <div class="modal-body">
        <p><strong>Overview:</strong> ${data.description}</p>
        ${data.detailsHtml}
      </div>
      <div class="modal-footer">
        <button class="btn btn-outline close-modal-action-btn" style="padding: 10px 20px; font-size:14px;">Close</button>
        <a href="#contact" class="btn btn-primary modal-cta-btn" style="padding: 10px 20px; font-size:14px;">Request Consultation</a>
      </div>
    `;

    modalOverlay.classList.add('active');
    document.body.style.overflow = 'hidden'; // prevent background scrolling

    // Attach listeners to buttons inside modal
    modalBodyContent.querySelector('.close-modal-action-btn').addEventListener('click', closeDetailsModal);
    modalBodyContent.querySelector('.modal-cta-btn').addEventListener('click', () => {
      closeDetailsModal();
      // Smooth scroll adjustment is handled by html scroll-behavior
    });
  };

  const closeDetailsModal = () => {
    modalOverlay.classList.remove('active');
    document.body.style.overflow = '';
  };

  // Close modal listeners
  if (modalCloseBtn && modalOverlay) {
    modalCloseBtn.addEventListener('click', closeDetailsModal);
    
    // Close modal if clicking outside modal-content
    modalOverlay.addEventListener('click', (e) => {
      if (e.target === modalOverlay) {
        closeDetailsModal();
      }
    });
  }

  // --- Hero Demo Video Modal ---
  const videoModal = document.getElementById('video-modal');
  const videoModalClose = document.getElementById('video-modal-close');
  const demoVideo = document.getElementById('hero-demo-video');
  const watchDemoBtn = document.getElementById('hero-watch-demo');

  if (videoModal && videoModalClose && demoVideo && watchDemoBtn) {
    watchDemoBtn.addEventListener('click', (e) => {
      e.preventDefault();
      videoModal.classList.add('active');
      document.body.style.overflow = 'hidden';
      if (typeof demoVideo.play === 'function') {
        demoVideo.play().catch(() => {});
      }
    });

    const closeVideoModal = () => {
      videoModal.classList.remove('active');
      document.body.style.overflow = '';
      if (demoVideo.pause) {
        demoVideo.pause();
        demoVideo.currentTime = 0;
      }
    };

    videoModalClose.addEventListener('click', closeVideoModal);
    videoModal.addEventListener('click', (e) => {
      if (e.target === videoModal) closeVideoModal();
    });

    // Close on Escape
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && videoModal.classList.contains('active')) {
        closeVideoModal();
      }
    });
  }

  // Bind Service Learn More buttons
  const serviceButtons = document.querySelectorAll('.service-details-btn');
  serviceButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      const serviceId = btn.getAttribute('data-service');
      const data = detailsData.services[serviceId];
      openDetailsModal(data);
    });
  });

  // Bind Product Info buttons
  const productButtons = document.querySelectorAll('.product-details-btn');
  productButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      const productId = btn.getAttribute('data-product');
      const data = detailsData.products[productId];
      openDetailsModal(data);
    });
  });

  // Bind Project Info buttons
  const projectButtons = document.querySelectorAll('.project-details-btn');
  projectButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      const projectId = btn.getAttribute('data-project');
      const data = detailsData.projects[projectId];
      openDetailsModal(data);
    });
  });

  // --- Scroll reveal animations ---
  const revealSelectors = ['.reveal', '.reveal-up', '.reveal-left', '.reveal-right', '.fade-in', '.scale-in'];
  const revealElems = document.querySelectorAll(revealSelectors.join(','));

  if (revealElems.length) {
    const revealObserver = new IntersectionObserver((entries, obs) => {
      entries.forEach(entry => {
        if (!entry.isIntersecting) return;

        const target = entry.target;
        // If this element wants a staggered reveal of its children
        if (target.classList.contains('stagger-grid')) {
          const children = Array.from(target.children);
          children.forEach((child, idx) => {
            // ensure child has base reveal class so CSS applies
            child.classList.add('reveal');
            setTimeout(() => {
              child.classList.add('revealed');
            }, idx * 90 + 80);
          });
        } else {
          target.classList.add('revealed');
        }

        obs.unobserve(target);
      });
    }, { root: null, threshold: 0.12 });

    revealElems.forEach(el => revealObserver.observe(el));
    // Fallback: if some elements don't get observed (rare), reveal them after a short delay
    setTimeout(() => {
      const pending = document.querySelectorAll('.reveal, .reveal-up, .reveal-left, .reveal-right, .fade-in, .scale-in');
      pending.forEach(el => { if (!el.classList.contains('revealed')) el.classList.add('revealed'); });
    }, 700);
  }

  // --- Achievements Slideshow (simple carousel) ---
  (function achievementsSlideshow() {
    const slideshow = document.querySelector('.achievements-gallery .slideshow');
    if (!slideshow) return;

    const slidesWrap = slideshow.querySelector('.slides');
    const slides = Array.from(slidesWrap.querySelectorAll('.slide'));
    const prevBtn = slideshow.querySelector('.slideshow-control.prev');
    const nextBtn = slideshow.querySelector('.slideshow-control.next');
    const dotsContainer = slideshow.querySelector('.slideshow-dots');
    let idx = 0;
    let timer = null;
    const delay = 1500; // change slides every 1.5 seconds

    // create dots
    slides.forEach((s, i) => {
      const btn = document.createElement('button');
      if (i === 0) btn.classList.add('active');
      btn.addEventListener('click', () => { goTo(i); resetTimer(); });
      dotsContainer.appendChild(btn);
    });

    const dots = Array.from(dotsContainer.querySelectorAll('button'));

    function update() {
      slidesWrap.style.transform = `translateX(-${idx * 100}%)`;
      dots.forEach((d, i) => d.classList.toggle('active', i === idx));
      slides.forEach((s, i) => s.classList.toggle('active', i === idx));
    }

    function goTo(i) { idx = (i + slides.length) % slides.length; update(); }
    function next() { goTo(idx + 1); }
    function prev() { goTo(idx - 1); }

    if (nextBtn) nextBtn.addEventListener('click', () => { next(); resetTimer(); });
    if (prevBtn) prevBtn.addEventListener('click', () => { prev(); resetTimer(); });

    function startTimer() { timer = setInterval(next, delay); }
    function resetTimer() { clearInterval(timer); startTimer(); }

    slideshow.addEventListener('mouseenter', () => clearInterval(timer));
    slideshow.addEventListener('mouseleave', () => startTimer());

    // touch / swipe support for mobile
    let startX = 0;
    slidesWrap.addEventListener('touchstart', (e) => { startX = e.touches[0].clientX; });
    slidesWrap.addEventListener('touchend', (e) => {
      const dx = e.changedTouches[0].clientX - startX;
      if (dx > 50) { prev(); resetTimer(); }
      else if (dx < -50) { next(); resetTimer(); }
    });

    // initialize
    update();
    startTimer();
  })();

  // small nav link stagger on initial load
  const navLinkElems = document.querySelectorAll('.nav-links a');
  navLinkElems.forEach((el, i) => setTimeout(() => el.classList.add('revealed'), 120 + i * 70));

  // --- Typed hero effect ---
  (function typedHero() {
    const heroSpan = document.getElementById('hero-dynamic');
    if (!heroSpan) return;
    const words = ['Accountancy', 'Analytics', 'Intelligence', 'Efficiency', 'Automation', 'Advisory'];
    let w = 0, i = 0, deleting = false;
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduceMotion) {
      heroSpan.textContent = words[0];
      return;
    }

    const tick = () => {
      const full = words[w];
      if (!deleting) {
        heroSpan.textContent = full.slice(0, i + 1);
        i++;
        if (i === full.length) {
          deleting = true;
          setTimeout(tick, 2200); // pause at full word
          return;
        }
      } else {
        heroSpan.textContent = full.slice(0, i - 1);
        i--;
        if (i === 0) {
          deleting = false;
          w = (w + 1) % words.length;
        }
      }
      setTimeout(tick, deleting ? 60 : 95);
    };

    // start typing after a short delay
    setTimeout(tick, 500);
  })();

  // ========== Premium Features ==========
  const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  // --- Page Loader ---
  const pageLoader = document.getElementById('page-loader');
  const hideLoader = () => {
    if (!pageLoader) return;
    pageLoader.classList.add('done');
    document.querySelector('.hero')?.classList.add('is-ready');
    setTimeout(() => pageLoader.remove(), 600);
  };
  if (document.readyState === 'complete') {
    setTimeout(hideLoader, prefersReduced ? 0 : 400);
  } else {
    window.addEventListener('load', () => setTimeout(hideLoader, prefersReduced ? 0 : 450));
  }
  // Failsafe
  setTimeout(hideLoader, 2500);

  // --- Scroll Progress ---
  const progressBar = document.getElementById('scroll-progress');
  const updateProgress = () => {
    if (!progressBar) return;
    const doc = document.documentElement;
    const scrollTop = doc.scrollTop || document.body.scrollTop;
    const height = doc.scrollHeight - doc.clientHeight;
    progressBar.style.width = height > 0 ? `${(scrollTop / height) * 100}%` : '0%';
  };
  window.addEventListener('scroll', updateProgress, { passive: true });
  updateProgress();

  // --- Back to Top ---
  const backToTop = document.getElementById('back-to-top');
  if (backToTop) {
    window.addEventListener('scroll', () => {
      backToTop.classList.toggle('visible', window.scrollY > 480);
    }, { passive: true });
    backToTop.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: prefersReduced ? 'auto' : 'smooth' });
    });
  }

  // --- Toast helper ---
  const toastStack = document.getElementById('toast-stack');
  const showToast = (message, type = 'info', duration = 3500) => {
    if (!toastStack) return;
    const el = document.createElement('div');
    el.className = `toast ${type}`;
    el.textContent = message;
    toastStack.appendChild(el);
    requestAnimationFrame(() => el.classList.add('show'));
    setTimeout(() => {
      el.classList.remove('show');
      setTimeout(() => el.remove(), 350);
    }, duration);
  };

  // --- Button Ripple ---
  document.querySelectorAll('.btn-ripple, .btn-primary, .btn-outline').forEach(btn => {
    if (!btn.classList.contains('btn-ripple')) btn.classList.add('btn-ripple');
    btn.addEventListener('click', function (e) {
      if (prefersReduced) return;
      const rect = this.getBoundingClientRect();
      const ripple = document.createElement('span');
      const size = Math.max(rect.width, rect.height);
      ripple.className = 'ripple';
      ripple.style.width = ripple.style.height = `${size}px`;
      ripple.style.left = `${e.clientX - rect.left - size / 2}px`;
      ripple.style.top = `${e.clientY - rect.top - size / 2}px`;
      this.appendChild(ripple);
      setTimeout(() => ripple.remove(), 650);
    });
  });

  // --- Hero scroll-down indicator ---
  const heroScrollDown = document.getElementById('hero-scroll-down');
  if (heroScrollDown) {
    heroScrollDown.addEventListener('click', () => {
      const target = document.querySelector('#achievements-gallery, #services, #stories');
      if (!target) return;
      target.scrollIntoView({ behavior: prefersReduced ? 'auto' : 'smooth' });
    });
  }

  // --- Hero parallax ---
  const heroBgContainer = document.querySelector('.hero-bg-container');
  if (heroBgContainer && !prefersReduced) {
    window.addEventListener('scroll', () => {
      const y = window.scrollY;
      if (y < window.innerHeight) {
        heroBgContainer.style.transform = `translateY(${y * 0.28}px)`;
      }
    }, { passive: true });
  }

  // --- Hero video background (lazy + fallback to image on mobile / error) ---
  (function heroVideo() {
    const video = document.querySelector('.hero-video');
    if (!video) return;
    const isMobile = /Android|iPhone|iPad|iPod|Windows Phone|webOS/i.test(navigator.userAgent);
    var prefersDataSaver = false;
    try { prefersDataSaver = window.matchMedia('(prefers-reduced-data: reduce)').matches; } catch (e) { prefersDataSaver = false; }

    // On mobile or data-saver, keep the lightweight poster image only.
    if (isMobile || prefersDataSaver || prefersReduced) {
      video.style.display = 'none';
      return;
    }

    // Mute is enforced by attribute; ensure it stays muted for autoplay
    video.muted = true;

    video.addEventListener('loadeddata', () => {
      video.classList.add('loaded');
      if (typeof video.play === 'function') {
        video.play().catch(() => {});
      }
    });

    // Fallback: if video fails to load, hide it so the poster image shows
    video.addEventListener('error', () => {
      video.style.display = 'none';
    });

    // Attempt metadata load
    video.load();
  })();

  // --- Hero canvas particle network ---
  (function heroParticles() {
    const canvas = document.getElementById('hero-particles');
    if (!canvas || prefersReduced) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let width, height, particles, mouse, animationId;

    function resize() {
      const rect = canvas.getBoundingClientRect();
      width = rect.width || window.innerWidth;
      height = rect.height || window.innerHeight;
      canvas.width = width;
      canvas.height = height;
    }

    function init() {
      resize();
      particles = [];
      mouse = { x: null, y: null, radius: 0 };
      const count = Math.min(80, Math.max(40, Math.floor((width * height) / 26000)));
      for (let i = 0; i < count; i++) {
        particles.push({
          x: Math.random() * width,
          y: Math.random() * height,
          vx: (Math.random() - 0.5) * 0.45,
          vy: (Math.random() - 0.5) * 0.45,
          size: 1.6 + Math.random() * 2.4
        });
      }
      canvas.removeEventListener('mousemove', onMove);
      canvas.addEventListener('mousemove', onMove);
      canvas.removeEventListener('mouseleave', onLeave);
      canvas.addEventListener('mouseleave', onLeave);
      window.removeEventListener('resize', resize);
      window.addEventListener('resize', resize);
      animationId = requestAnimationFrame(loop);
    }

    function onMove(e) {
      const rect = canvas.getBoundingClientRect();
      mouse.x = e.clientX - rect.left;
      mouse.y = e.clientY - rect.top;
      mouse.radius = 90;
    }
    function onLeave() {
      mouse.x = null; mouse.y = null; mouse.radius = 0;
    }

    function loop() {
      if (!particles) { animationId = requestAnimationFrame(loop); return; }
      ctx.fillStyle = 'rgba(11, 35, 68, 0.45)';
      ctx.fillRect(0, 0, width, height);

      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];
        p.x += p.vx; p.y += p.vy;
        if (p.x < 0 || p.x > width) p.vx = -p.vx;
        if (p.y < 0 || p.y > height) p.vy = -p.vy;

        // Draw particle
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = 'rgba(46, 123, 214, 0.55)';
        ctx.fill();

        // Connect to neighbours
        for (let j = i + 1; j < particles.length; j++) {
          const q = particles[j];
          const dx = p.x - q.x;
          const dy = p.y - q.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 95) {
            const opacity = 1 - dist / 95;
            ctx.strokeStyle = `rgba(46, 123, 214, ${opacity * 0.28})`;
            ctx.lineWidth = 0.9;
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(q.x, q.y);
            ctx.stroke();
          }
        }

        // Mouse hover connections
        if (mouse.x !== null && mouse.radius) {
          const dx = p.x - mouse.x;
          const dy = p.y - mouse.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < mouse.radius) {
            const opacity = 1 - dist / mouse.radius;
            ctx.strokeStyle = `rgba(74, 154, 232, ${opacity * 0.35})`;
            ctx.lineWidth = 1;
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(mouse.x, mouse.y);
            ctx.stroke();
          }
        }
      }

      animationId = requestAnimationFrame(loop);
    }

    // Defer until hero image is painted, then start after a short delay
    setTimeout(init, 1200);
  })();

  // --- Floating geometric shapes in hero ---
  (function heroShapes() {
    const container = document.getElementById('hero-floating-shapes');
    if (!container || prefersReduced) return;
    const isMobile = /Android|iPhone|iPad|iPod|Windows Phone|webOS/i.test(navigator.userAgent);

    const shapeCount = isMobile ? 6 : 14;
    const frag = document.createDocumentFragment();

    for (let i = 0; i < shapeCount; i++) {
      const el = document.createElement('div');
      const size = 30 + Math.random() * (isMobile ? 60 : 120);
      const isGlow = i % 5 === 0;

      el.className = isGlow
        ? 'hero-shape hero-shape--glow'
        : 'hero-shape';

      el.style.width = el.style.height = `${size}px`;
      el.style.left = `${Math.random() * 100}%`;
      el.style.top = `${Math.random() * 100}%`;
      el.style.animationDuration = `${8 + Math.random() * 12}s`;
      el.style.animationDelay = `${Math.random() * 5}s`;
      el.style.setProperty('--r', `${(Math.random() - 0.5) * 20}deg`);
      el.style.animationName = 'floatUpDown';
      el.style.opacity = isGlow ? '0.35' : '0.22';

      // Soft bluish tint for glow shapes, neutral for others
      if (!isGlow) {
        el.style.boxShadow = '0 0 14px 3px rgba(46, 123, 214, 0.12)';
      }

      frag.appendChild(el);
    }
    container.appendChild(frag);

    // Gentle float cycle
    const shapes = container.querySelectorAll('.hero-shape');
    shapes.forEach((s, i) => {
      s.style.animationDelay = `${i * 0.4 + Math.random() * 2}s`;
    });
  })();

  // --- Hero stat counters ---
  const heroCounts = document.querySelectorAll('.hero-count');
  const animateHeroCount = (el) => {
    const target = +el.getAttribute('data-target');
    if (prefersReduced) {
      el.textContent = target;
      return;
    }
    let n = 0;
    const steps = 40;
    const step = target / steps;
    const tick = () => {
      n += step;
      if (n < target) {
        el.textContent = Math.ceil(n);
        requestAnimationFrame(tick);
      } else {
        el.textContent = target;
      }
    };
    tick();
  };
  if (heroCounts.length) {
    setTimeout(() => heroCounts.forEach(animateHeroCount), prefersReduced ? 0 : 1100);
  }
  
  // --- Intercom Integration (via @intercom/messenger-js-sdk bundle) ---
  // The dist/intercom.bundle.js script (loaded before script.js at runtime via
  // the inline boot, and provides window.Intercom) initialises the widget with
  // app_id. These settings are the initial visitor context. They can be updated
  // at any time via SoftixIntercom.identifyUser(user).
  var SOFTIX_INTERCOM_APP_ID = 'ju8i0hdj';

  if (typeof window.intercomSettings === 'undefined') {
    window.intercomSettings = {
      app_id: SOFTIX_INTERCOM_APP_ID,
      user_id: null,
      name: null,
      email: null,
      created_at: null,
      // Custom attributes you can leverage in Intercom
      project_type: 'website-visitor'
    };
  }

  // Boot the Intercom widget using the npm SDK wrapper (window.Intercom).
  // The bundle is loaded before this script runs, so window.Intercom exists.
  // After the first Intercom({...}) boot (done in the inline script), the bundle
  // replaces window.Intercom with a queueHolder. We must avoid re-calling the
  // init function at that point, so we guard with a boot flag.
  var initIntercom = function () {
    if (typeof Intercom !== 'function') {
      console.warn('[Softix] Intercom SDK not loaded yet.');
      return;
    }
    // If already booted (via the inline script), the queueHolder is in place —
    // skip re-boot; helper methods will queue correctly.
    if (window.__softixIntercomBooted) return;
    Intercom({
      app_id: SOFTIX_INTERCOM_APP_ID,
      user_id: null,
      name: null,
      email: null,
      created_at: null
    });
  };

  // The bundle may be loaded after script.js in some setups — try booting now
  // and also attach a listener for when the bundle signals readiness.
  if (typeof Intercom === 'function') {
    initIntercom();
  }

  var updateIntercomUser = function (user) {
    if (typeof Intercom === 'function') {
      Intercom('update', {
        user_id: user && user.id ? user.id : null,
        name: user && user.name ? user.name : null,
        email: user && user.email ? user.email : null,
        created_at: user && user.createdAt ? user.createdAt : null
      });
    }
  };

  window.SoftixIntercom = {
    identifyUser: updateIntercomUser,
    boot: function (user) {
      if (typeof Intercom === 'function') {
        Intercom('boot', Object.assign({ app_id: SOFTIX_INTERCOM_APP_ID }, user || {}));
      }
    },
    shutdown: function () {
      if (typeof Intercom === 'function') Intercom('shutdown');
    },
    show: function () { if (typeof Intercom === 'function') Intercom('show'); },
    hide: function () { if (typeof Intercom === 'function') Intercom('hide'); },
    showNewMessage: function (msg) { if (typeof Intercom === 'function') Intercom('showNewMessage', msg); },
    trackEvent: function (name, val) { if (typeof Intercom === 'function') Intercom('trackEvent', name, val); }
  };

  // Listen for the bundle's readiness signal (in case it loads after this script)
  window.addEventListener('intercom:ready', initIntercom);

  // --- 3D tilt on cards ---
  const tiltTargets = document.querySelectorAll('.transform-card, .project-card, .leader-card:not(.leader-card--horizontal)');
  if (!prefersReduced) {
    tiltTargets.forEach(card => {
      card.classList.add('tilt-card');
      const shine = document.createElement('div');
      shine.className = 'tilt-shine';
      card.style.position = card.style.position || 'relative';
      card.appendChild(shine);

      card.addEventListener('mousemove', (e) => {
        const r = card.getBoundingClientRect();
        const x = e.clientX - r.left;
        const y = e.clientY - r.top;
        const rx = ((y / r.height) - 0.5) * -8;
        const ry = ((x / r.width) - 0.5) * 8;
        card.style.transform = `perspective(900px) rotateX(${rx}deg) rotateY(${ry}deg) translateY(-4px)`;
        card.style.setProperty('--mx', `${(x / r.width) * 100}%`);
        card.style.setProperty('--my', `${(y / r.height) * 100}%`);
      });
      card.addEventListener('mouseleave', () => {
        card.style.transform = '';
      });
    });
  }

  // --- Section label underline draw ---
  const labels = document.querySelectorAll('.section-label');
  if (labels.length) {
    const labelObs = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) entry.target.classList.add('in-view');
      });
    }, { threshold: 0.6 });
    labels.forEach(l => labelObs.observe(l));
  }

  // --- Image reveal on load ---
  document.querySelectorAll('img').forEach(img => {
    if (img.closest('.page-loader')) return;
    img.classList.add('img-reveal');
    if (img.complete) {
      img.classList.add('loaded');
    } else {
      img.addEventListener('load', () => img.classList.add('loaded'));
      img.addEventListener('error', () => img.classList.add('loaded'));
    }
  });

  // --- Modal ESC + focus ---
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modalOverlay?.classList.contains('active')) {
      closeDetailsModal();
    }
  });

  // --- Hero meeting booking + timezone sync ---
  (function heroMeetingBooking() {
    const SOFTIX_TZ = 'Asia/Karachi';
    const OFFICE_START = 9;
    const OFFICE_END = 18;
    const form = document.getElementById('hero-meeting-form');
    const feedback = document.getElementById('hero-meeting-feedback');
    const visitorTimeEl = document.getElementById('hero-visitor-time');
    const visitorTzEl = document.getElementById('hero-visitor-tz');
    const softixTimeEl = document.getElementById('hero-softix-time');
    const officeHoursEl = document.getElementById('hero-office-hours');
    const dateInput = document.getElementById('hero-meeting-date');
    const timeSelect = document.getElementById('hero-meeting-time');
    if (!form || !visitorTimeEl) return;

    const visitorTz = Intl.DateTimeFormat().resolvedOptions().timeZone;
    const t = (key) => {
      const dict = window.SOFTIX_I18N?.[window.softixLang || 'en'] || {};
      return dict[key] || key;
    };

    function formatClock(date, tz) {
      return new Intl.DateTimeFormat('en-US', {
        hour: 'numeric',
        minute: '2-digit',
        hour12: true,
        timeZone: tz
      }).format(date);
    }

    function tzLabel(date, tz) {
      return new Intl.DateTimeFormat('en-US', {
        timeZone: tz,
        timeZoneName: 'short'
      }).formatToParts(date).find(p => p.type === 'timeZoneName')?.value || tz;
    }

    function pktDateParts(date) {
      const parts = new Intl.DateTimeFormat('en-CA', {
        timeZone: SOFTIX_TZ,
        year: 'numeric',
        month: '2-digit',
        day: '2-digit',
        weekday: 'short'
      }).formatToParts(date);
      const get = (type) => parts.find(p => p.type === type)?.value;
      return {
        weekday: get('weekday'),
        year: get('year'),
        month: get('month'),
        day: get('day')
      };
    }

    function pktSlotDate(year, month, day, hour, minute) {
      return new Date(`${year}-${month}-${day}T${String(hour).padStart(2, '0')}:${String(minute).padStart(2, '0')}:00+05:00`);
    }

    function updateClocks() {
      const now = new Date();
      visitorTimeEl.textContent = formatClock(now, visitorTz);
      visitorTzEl.textContent = `${visitorTz} · ${tzLabel(now, visitorTz)}`;
      softixTimeEl.textContent = formatClock(now, SOFTIX_TZ);

      const ref9 = pktSlotDate('2026', '01', '05', OFFICE_START, 0);
      const ref18 = pktSlotDate('2026', '01', '05', OFFICE_END, 0);
      const localStart = formatClock(ref9, visitorTz);
      const localEnd = formatClock(ref18, visitorTz);
      officeHoursEl.textContent = `${t('hero_office_hours')} (${localStart} – ${localEnd} your time)`;
    }

    function populateTimeSlots() {
      if (!timeSelect) return;
      const placeholder = t('hero_pick_time');
      timeSelect.innerHTML = `<option value="" disabled selected>${placeholder}</option>`;

      const now = new Date();
      let added = 0;

      for (let offset = 0; offset < 21 && added < 30; offset++) {
        const day = new Date(now);
        day.setDate(day.getDate() + offset);
        const pkt = pktDateParts(day);
        if (pkt.weekday === 'Sat' || pkt.weekday === 'Sun') continue;

        for (let hour = OFFICE_START; hour < OFFICE_END; hour++) {
          for (const minute of [0, 30]) {
            const slot = pktSlotDate(pkt.year, pkt.month, pkt.day, hour, minute);
            if (slot <= now) continue;

            const localLabel = new Intl.DateTimeFormat('en-US', {
              weekday: 'short',
              month: 'short',
              day: 'numeric',
              hour: 'numeric',
              minute: '2-digit',
              hour12: true,
              timeZone: visitorTz
            }).format(slot);

            const pktLabel = new Intl.DateTimeFormat('en-US', {
              hour: 'numeric',
              minute: '2-digit',
              hour12: true,
              timeZone: SOFTIX_TZ
            }).format(slot);

            const opt = document.createElement('option');
            opt.value = slot.toISOString();
            opt.textContent = `${localLabel} (${pktLabel} PKT)`;
            opt.dataset.pkt = `${pkt.year}-${pkt.month}-${pkt.day} ${String(hour).padStart(2, '0')}:${String(minute).padStart(2, '0')} PKT`;
            timeSelect.appendChild(opt);
            added++;
          }
        }
      }
    }

    if (dateInput) {
      const today = new Intl.DateTimeFormat('en-CA', { timeZone: visitorTz }).format(new Date());
      dateInput.min = today;
      dateInput.value = today;
    }

    updateClocks();
    populateTimeSlots();
    setInterval(updateClocks, 30000);

    form.addEventListener('submit', async (e) => {
      e.preventDefault();
      const nameVal = document.getElementById('hero-meeting-name')?.value.trim();
      const emailVal = document.getElementById('hero-meeting-email')?.value.trim();
      const dateVal = dateInput?.value;
      const timeVal = timeSelect?.value;
      const pktLabel = timeSelect?.selectedOptions[0]?.dataset.pkt || '';

      if (!nameVal || !emailVal || !dateVal || !timeVal) {
        feedback.className = 'hero-meeting-feedback error';
        feedback.textContent = t('hero_book_error');
        return;
      }

      const submitBtn = form.querySelector('button[type="submit"]');
      const originalText = submitBtn.textContent;
      submitBtn.disabled = true;
      submitBtn.textContent = 'Sending...';
      feedback.style.display = 'none';

      const slotLocal = new Intl.DateTimeFormat('en-US', {
        dateStyle: 'full',
        timeStyle: 'short',
        timeZone: visitorTz
      }).format(new Date(timeVal));

      const payload = {
        name: nameVal,
        email: emailVal,
        phone: 'N/A',
        company: 'N/A',
        service: 'Meeting Booking (Hero)',
        message: [
          'International meeting request from website hero.',
          `Visitor timezone: ${visitorTz}`,
          `Preferred slot (visitor local): ${slotLocal}`,
          `Equivalent Softix time: ${pktLabel}`,
          `Selected date field: ${dateVal}`
        ].join('\n'),
        _subject: 'New Softix Meeting Booking Request',
        _template: 'table',
        _captcha: 'false'
      };

      try {
        const res = await fetch('https://formsubmit.co/ajax/sales@softix.com.pk', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
          body: JSON.stringify(payload)
        });
        const data = await res.json().catch(() => ({}));
        if (!res.ok) throw new Error(data.message || 'Send failed');

        feedback.className = 'hero-meeting-feedback success';
        feedback.textContent = t('hero_book_success');
        if (typeof showToast === 'function') showToast(t('hero_book_success'), 'success');
        form.reset();
        if (dateInput) {
          const today = new Intl.DateTimeFormat('en-CA', { timeZone: visitorTz }).format(new Date());
          dateInput.value = today;
        }
        populateTimeSlots();
      } catch {
        feedback.className = 'hero-meeting-feedback error';
        feedback.textContent = t('hero_book_fail');
        if (typeof showToast === 'function') showToast(t('hero_book_fail'), 'error');
      } finally {
        submitBtn.disabled = false;
        submitBtn.textContent = originalText;
      }
    });
  })();

  // --- Enhanced contact form toast + shake (handled in submit; keep for other updates) ---
  // (success/error toasts are shown directly in the FormSubmit handler)

  // --- Smooth magnetic hover for primary CTAs ---
  if (!prefersReduced) {
    document.querySelectorAll('.btn-primary').forEach(btn => {
      btn.addEventListener('mousemove', (e) => {
        const r = btn.getBoundingClientRect();
        const x = e.clientX - r.left - r.width / 2;
        const y = e.clientY - r.top - r.height / 2;
        btn.style.transform = `translate(${x * 0.12}px, ${y * 0.18 - 2}px)`;
      });
      btn.addEventListener('mouseleave', () => {
        btn.style.transform = '';
      });
    });
  }

  // --- Chat bubble auto-nudge once ---
  const chatBubbleEl = document.getElementById('chat-bubble');
  if (chatBubbleEl && !sessionStorage.getItem('chatNudged')) {
    setTimeout(() => {
      if (!document.getElementById('chat-window')?.classList.contains('active')) {
        showToast('Need help? Chat with Softix Assistant →', 'info', 4200);
        sessionStorage.setItem('chatNudged', '1');
      }
    }, 8000);
  }

  // --- Testimonials carousel ---
  (function testimonialsCarousel() {
    const track = document.getElementById('testimonials-track');
    const dotsWrap = document.getElementById('t-dots');
    const prev = document.getElementById('t-prev');
    const next = document.getElementById('t-next');
    if (!track || !dotsWrap) return;

    const cards = Array.from(track.children);
    let idx = 0;
    let timer;

    cards.forEach((_, i) => {
      const b = document.createElement('button');
      b.setAttribute('aria-label', `Go to testimonial ${i + 1}`);
      if (i === 0) b.classList.add('active');
      b.addEventListener('click', () => { go(i); restart(); });
      dotsWrap.appendChild(b);
    });
    const dots = Array.from(dotsWrap.children);

    function go(i) {
      idx = (i + cards.length) % cards.length;
      track.style.transform = `translateX(-${idx * 100}%)`;
      dots.forEach((d, n) => d.classList.toggle('active', n === idx));
    }
    function restart() {
      clearInterval(timer);
      timer = setInterval(() => go(idx + 1), 5500);
    }

    if (prev) prev.addEventListener('click', () => { go(idx - 1); restart(); });
    if (next) next.addEventListener('click', () => { go(idx + 1); restart(); });

    let sx = 0;
    track.addEventListener('touchstart', (e) => { sx = e.touches[0].clientX; }, { passive: true });
    track.addEventListener('touchend', (e) => {
      const dx = e.changedTouches[0].clientX - sx;
      if (dx > 40) { go(idx - 1); restart(); }
      else if (dx < -40) { go(idx + 1); restart(); }
    });

    restart();
  })();

  // --- Career apply → prefills contact form ---
  document.querySelectorAll('.career-apply').forEach(btn => {
    btn.addEventListener('click', () => {
      const role = btn.getAttribute('data-role') || 'Career Application';
      const service = document.getElementById('form-service');
      const message = document.getElementById('form-message');
      if (service) {
        const careerOpt = Array.from(service.options).find(o => o.value === 'Career Application');
        if (careerOpt) service.value = 'Career Application';
        service.dispatchEvent(new Event('change'));
      }
      if (message && !message.value.trim()) {
        message.value = `I would like to apply for the ${role} position.\n\n`;
        message.dispatchEvent(new Event('input'));
      }
    });
  });

  // --- Language toggle EN / UR ---
  (function languageToggle() {
    const dict = window.SOFTIX_I18N;
    if (!dict) return;

    window.softixLang = localStorage.getItem('softix_lang') || 'en';

    const applyLang = (lang) => {
      window.softixLang = lang;
      localStorage.setItem('softix_lang', lang);
      const pack = dict[lang];
      document.documentElement.lang = pack.lang;
      document.documentElement.dir = pack.dir;
      document.body.classList.toggle('lang-ur', lang === 'ur');

      document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (pack[key] != null) el.textContent = pack[key];
      });

      document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
        const key = el.getAttribute('data-i18n-placeholder');
        if (pack[key] != null) el.placeholder = pack[key];
      });

      document.querySelectorAll('.lang-toggle-btn').forEach(btn => {
        btn.textContent = pack.lang_btn;
      });
    };

    applyLang(window.softixLang);

    document.querySelectorAll('.lang-toggle-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        applyLang(window.softixLang === 'en' ? 'ur' : 'en');
      });
    });
  })();
});



