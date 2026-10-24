const currencyFormatter = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
  maximumFractionDigits: 0,
});

const numberFormatter = new Intl.NumberFormat("en-US");

const salesInput = document.querySelector("#salesInput");
const expenseInput = document.querySelector("#expenseInput");
const ordersInput = document.querySelector("#ordersInput");

const salesOutput = document.querySelector("#salesOutput");
const expenseOutput = document.querySelector("#expenseOutput");
const ordersOutput = document.querySelector("#ordersOutput");

const revenueResult = document.querySelector("#revenueResult");
const profitResult = document.querySelector("#profitResult");
const averageResult = document.querySelector("#averageResult");
const marginResult = document.querySelector("#marginResult");
const languageButtons = document.querySelectorAll(".language-button");

const translations = {
  en: {
    pageTitle: "IMJ Digital Studio | Websites, Stores & Excel Automation",
    brandTagline: "Web design, stores & automation",
    navServices: "Services",
    navDemo: "Live Demo",
    navWork: "Work",
    navContact: "Contact",
    startProject: "Start a Project",
    heroEyebrow: "Digital presence and business automation",
    heroTitle: "Premium websites, online stores, and smart Excel systems for businesses ready to grow.",
    heroText:
      "IMJ Digital Studio designs clean, credible digital experiences that help your business look established, win trust faster, and replace slow manual work with automated systems.",
    heroPrimary: "Get a Free Quote",
    heroSecondary: "View Live Demos",
    statOneTitle: "Built for trust",
    statOneText: "Modern design that makes your business look established",
    statTwoTitle: "Made to sell",
    statTwoText: "Clear pages, strong calls to action, and simple customer journeys",
    statThreeTitle: "Automated to save time",
    statThreeText: "Track sales, expenses, stock, and performance with less manual work",
    dashboardTitle: "Executive business tracker",
    metricOrders: "Orders",
    metricExpenses: "Expenses",
    metricProfit: "Profit",
    servicesEyebrow: "What we create",
    servicesTitle: "Professional tools that make your business easier to trust, buy from, and manage",
    serviceOneTitle: "Business Websites",
    serviceOneText: "Elegant, mobile-ready websites that present your brand clearly and guide visitors toward action.",
    serviceOnePointOne: "Landing pages and full websites",
    serviceOnePointTwo: "Responsive design for phones and desktop",
    serviceOnePointThree: "Professional copy and conversion-focused structure",
    serviceTwoTitle: "E-commerce Stores",
    serviceTwoText: "Beautiful product experiences designed to make your offers easy to explore, understand, and purchase.",
    serviceTwoPointOne: "Product grids and product pages",
    serviceTwoPointTwo: "Shop-ready page structure",
    serviceTwoPointThree: "Promotions and featured collections",
    serviceThreeTitle: "Excel Automation",
    serviceThreeText: "Smart spreadsheets that calculate, organize, and report important business numbers automatically.",
    serviceThreePointOne: "Live formulas and dashboards",
    serviceThreePointTwo: "Monthly reporting templates",
    serviceThreePointThree: "Less manual typing and fewer errors",
    demoEyebrow: "Live business demo",
    demoTitle: "Preview a custom tracker we can build for your business",
    demoText:
      "Move the controls below to see how a custom Excel system can turn everyday sales data into instant business insight. When a client needs it, we can build a tracker like this for sales, expenses, stock, invoices, attendance, or reports.",
    inputSales: "Monthly sales",
    inputExpenses: "Monthly expenses",
    inputOrders: "Number of orders",
    sheetTitle: "IMJ Automation Demo",
    sheetStatus: "Live calculations",
    sheetMetric: "Metric",
    sheetFormula: "Formula",
    sheetResult: "Result",
    sheetRevenue: "Revenue",
    sheetSalesInput: "Sales input",
    sheetProfit: "Profit",
    sheetProfitFormula: "Sales - Expenses",
    sheetAverage: "Average order",
    sheetAverageFormula: "Sales / Orders",
    sheetMargin: "Profit margin",
    sheetMarginFormula: "Profit / Sales",
    demoCtaText: "Want a tracker like this for your business?",
    demoCtaButton: "Request a Custom Tracker",
    portfolioEyebrow: "Design directions",
    portfolioTitle: "Polished layouts for the kind of business you want customers to remember",
    portfolioOneTitle: "Restaurant or Cafe Website",
    portfolioOneText: "Premium menus, location details, booking prompts, and direct messaging for local customers.",
    portfolioTwoTitle: "Online Store Experience",
    portfolioTwoText: "Product collections, featured offers, shop categories, and pages designed to support confident buying.",
    portfolioThreeTitle: "Service Business Website",
    portfolioThreeText: "Sharp positioning, service packages, trust-building sections, and simple lead capture.",
    processEyebrow: "How we work",
    processTitle: "A clear process from first idea to professional launch",
    processOneTitle: "Define the goal",
    processOneText: "We clarify what you sell, who you serve, and what your website or system needs to accomplish.",
    processTwoTitle: "Design the experience",
    processTwoText: "We shape the structure, message, and visual direction before building the final result.",
    processThreeTitle: "Launch with confidence",
    processThreeText: "We deliver a polished result, check it across screens, and keep future improvements easy to plan.",
    contactEyebrow: "Start your project",
    contactTitle: "Let us build the digital system your business deserves",
    contactText:
      "Send a short message and we will help you choose the strongest next step: a professional website, an online store, or an automated Excel system.",
    whatsappButton: "Chat on WhatsApp",
    instagramButton: "DM us on Instagram",
    formName: "Name",
    formNamePlaceholder: "Your name",
    formBusiness: "Business Name",
    formBusinessPlaceholder: "Your business name",
    formService: "What service do you need?",
    formChoose: "Choose one service",
    formWebsite: "Business website",
    formStore: "E-commerce store",
    formExcel: "Automated Excel system",
    formNotSure: "Not sure yet",
    formMessage: "Message",
    formMessagePlaceholder: "Tell us what you want to improve or build",
    formSubmit: "Send Request",
    footerText: "Premium websites, online stores, and Excel automation for ambitious businesses.",
  },
  pt: {
    pageTitle: "IMJ Digital Studio | Sites, Lojas Online e Automação Excel",
    brandTagline: "Web design, lojas e automação",
    navServices: "Serviços",
    navDemo: "Demo ao Vivo",
    navWork: "Trabalhos",
    navContact: "Contacto",
    startProject: "Iniciar Projecto",
    heroEyebrow: "Presença digital e automação empresarial",
    heroTitle: "Sites premium, lojas online e sistemas Excel inteligentes para empresas prontas para crescer.",
    heroText:
      "A IMJ Digital Studio cria experiências digitais limpas e credíveis que ajudam a sua empresa a parecer mais profissional, ganhar confiança mais rápido e substituir trabalho manual por sistemas automatizados.",
    heroPrimary: "Pedir Orçamento",
    heroSecondary: "Ver Demos",
    statOneTitle: "Criado para gerar confiança",
    statOneText: "Design moderno que faz a sua empresa parecer mais estabelecida",
    statTwoTitle: "Feito para vender",
    statTwoText: "Páginas claras, chamadas para ação fortes e jornadas simples para o cliente",
    statThreeTitle: "Automatizado para poupar tempo",
    statThreeText: "Controle vendas, despesas, stock e desempenho com menos trabalho manual",
    dashboardTitle: "Painel executivo do negócio",
    metricOrders: "Pedidos",
    metricExpenses: "Despesas",
    metricProfit: "Lucro",
    servicesEyebrow: "O que criamos",
    servicesTitle: "Ferramentas profissionais que tornam o seu negócio mais confiável, vendável e fácil de gerir",
    serviceOneTitle: "Sites Empresariais",
    serviceOneText: "Sites elegantes e adaptados ao telemóvel que apresentam a sua marca com clareza e guiam visitantes para a ação.",
    serviceOnePointOne: "Landing pages e sites completos",
    serviceOnePointTwo: "Design responsivo para telemóvel e computador",
    serviceOnePointThree: "Texto profissional e estrutura focada em conversão",
    serviceTwoTitle: "Lojas Online",
    serviceTwoText: "Experiências de produto bonitas, criadas para tornar as suas ofertas fáceis de explorar, entender e comprar.",
    serviceTwoPointOne: "Grelhas de produtos e paginas de produto",
    serviceTwoPointTwo: "Estrutura pronta para loja online",
    serviceTwoPointThree: "Promoções e coleções em destaque",
    serviceThreeTitle: "Automação em Excel",
    serviceThreeText: "Planilhas inteligentes que calculam, organizam e mostram números importantes do negócio automaticamente.",
    serviceThreePointOne: "Formulas ao vivo e dashboards",
    serviceThreePointTwo: "Modelos de relatório mensal",
    serviceThreePointThree: "Menos digitação manual e menos erros",
    demoEyebrow: "Demo empresarial ao vivo",
    demoTitle: "Veja um rastreador personalizado que podemos criar para o seu negocio",
    demoText:
      "Mova os controlos abaixo para ver como um sistema Excel personalizado transforma dados de vendas em informação instantânea. Quando o cliente precisa, podemos criar um rastreador como este para vendas, despesas, stock, facturas, presenças ou relatórios.",
    inputSales: "Vendas mensais",
    inputExpenses: "Despesas mensais",
    inputOrders: "Número de pedidos",
    sheetTitle: "Demo de Automação IMJ",
    sheetStatus: "Cálculos ao vivo",
    sheetMetric: "Métrica",
    sheetFormula: "Formula",
    sheetResult: "Resultado",
    sheetRevenue: "Receita",
    sheetSalesInput: "Valor das vendas",
    sheetProfit: "Lucro",
    sheetProfitFormula: "Vendas - Despesas",
    sheetAverage: "Media por pedido",
    sheetAverageFormula: "Vendas / Pedidos",
    sheetMargin: "Margem de lucro",
    sheetMarginFormula: "Lucro / Vendas",
    demoCtaText: "Quer um rastreador como este para o seu negocio?",
    demoCtaButton: "Pedir Rastreador Personalizado",
    portfolioEyebrow: "Direções de design",
    portfolioTitle: "Layouts profissionais para o tipo de negócio que os clientes lembram",
    portfolioOneTitle: "Site para Restaurante ou Cafe",
    portfolioOneText: "Menus premium, localização, reservas e mensagens directas para clientes locais.",
    portfolioTwoTitle: "Experiencia de Loja Online",
    portfolioTwoText: "Coleções de produtos, ofertas em destaque, categorias e páginas criadas para compras com confiança.",
    portfolioThreeTitle: "Site para Empresa de Servicos",
    portfolioThreeText: "Posicionamento claro, pacotes de serviços, secções de confiança e captação simples de contactos.",
    processEyebrow: "Como trabalhamos",
    processTitle: "Um processo claro da primeira ideia ao lançamento profissional",
    processOneTitle: "Definir o objetivo",
    processOneText: "Clarificamos o que vende, quem atende e o que o site ou sistema precisa realizar.",
    processTwoTitle: "Desenhar a experiência",
    processTwoText: "Criamos a estrutura, a mensagem e a direção visual antes de construir o resultado final.",
    processThreeTitle: "Lançar com confiança",
    processThreeText: "Entregamos um resultado polido, testamos em diferentes ecrãs e deixamos melhorias futuras claras.",
    contactEyebrow: "Inicie o seu projecto",
    contactTitle: "Vamos criar o sistema digital que o seu negócio merece",
    contactText:
      "Envie uma mensagem curta e ajudamos a escolher o melhor próximo passo: um site profissional, uma loja online ou um sistema Excel automatizado.",
    whatsappButton: "Falar no WhatsApp",
    instagramButton: "Enviar DM no Instagram",
    formName: "Nome",
    formNamePlaceholder: "O seu nome",
    formBusiness: "Nome da Empresa",
    formBusinessPlaceholder: "Nome da sua empresa",
    formService: "Que serviço precisa?",
    formChoose: "Escolha um serviço",
    formWebsite: "Site empresarial",
    formStore: "Loja online",
    formExcel: "Sistema Excel automatizado",
    formNotSure: "Ainda não tenho certeza",
    formMessage: "Mensagem",
    formMessagePlaceholder: "Diga o que quer melhorar ou construir",
    formSubmit: "Enviar Pedido",
    footerText: "Sites premium, lojas online e automação Excel para empresas ambiciosas.",
  },
  zh: {
    pageTitle: "IMJ Digital Studio | 网站、网店与 Excel 自动化",
    brandTagline: "网站设计、网店与自动化",
    navServices: "服务",
    navDemo: "实时演示",
    navWork: "作品",
    navContact: "联系",
    startProject: "开始项目",
    heroEyebrow: "数字形象与业务自动化",
    heroTitle: "为准备成长的企业打造高级网站、线上商店和智能 Excel 系统。",
    heroText:
      "IMJ Digital Studio 打造清晰、可信、专业的数字体验，帮助企业提升形象，更快赢得客户信任，并用自动化系统取代耗时的手动工作。",
    heroPrimary: "获取免费报价",
    heroSecondary: "查看实时演示",
    statOneTitle: "建立信任",
    statOneText: "现代化设计，让您的企业看起来更专业、更可靠",
    statTwoTitle: "促进成交",
    statTwoText: "清晰页面、强行动按钮和顺畅的客户路径",
    statThreeTitle: "自动化省时间",
    statThreeText: "用更少手动工作追踪销售、支出、库存和业绩",
    dashboardTitle: "企业管理仪表盘",
    metricOrders: "订单",
    metricExpenses: "支出",
    metricProfit: "利润",
    servicesEyebrow: "我们能创建什么",
    servicesTitle: "让企业更可信、更好销售、更容易管理的专业工具",
    serviceOneTitle: "企业网站",
    serviceOneText: "优雅、适配手机的网站，清楚展示品牌，并引导访客采取行动。",
    serviceOnePointOne: "落地页和完整网站",
    serviceOnePointTwo: "适配手机与电脑的响应式设计",
    serviceOnePointThree: "专业文案和转化导向结构",
    serviceTwoTitle: "电子商务商店",
    serviceTwoText: "美观的商品体验，让客户更容易浏览、理解并购买您的产品。",
    serviceTwoPointOne: "商品列表和商品详情页",
    serviceTwoPointTwo: "适合线上商店的页面结构",
    serviceTwoPointThree: "促销活动和精选系列",
    serviceThreeTitle: "Excel 自动化",
    serviceThreeText: "智能表格自动计算、整理并展示重要业务数据。",
    serviceThreePointOne: "实时公式和仪表盘",
    serviceThreePointTwo: "月度报告模板",
    serviceThreePointThree: "减少手动输入和错误",
    demoEyebrow: "实时业务演示",
    demoTitle: "预览我们可为您的企业定制的追踪系统",
    demoText:
      "移动下方控制条，看看定制 Excel 系统如何把日常销售数据转化为即时业务洞察。如果客户需要，我们可以为销售、支出、库存、发票、考勤或报告制作类似追踪系统。",
    inputSales: "月销售额",
    inputExpenses: "月支出",
    inputOrders: "订单数量",
    sheetTitle: "IMJ 自动化演示",
    sheetStatus: "实时计算",
    sheetMetric: "指标",
    sheetFormula: "公式",
    sheetResult: "结果",
    sheetRevenue: "收入",
    sheetSalesInput: "销售输入",
    sheetProfit: "利润",
    sheetProfitFormula: "销售额 - 支出",
    sheetAverage: "平均订单金额",
    sheetAverageFormula: "销售额 / 订单",
    sheetMargin: "利润率",
    sheetMarginFormula: "利润 / 销售额",
    demoCtaText: "想为您的企业定制这样的追踪系统吗？",
    demoCtaButton: "申请定制追踪系统",
    portfolioEyebrow: "设计方向",
    portfolioTitle: "让客户记住您企业的专业页面布局",
    portfolioOneTitle: "餐厅或咖啡馆网站",
    portfolioOneText: "高级菜单、位置资讯、预约引导，以及面向本地客户的直接联系。",
    portfolioTwoTitle: "线上商店体验",
    portfolioTwoText: "商品系列、精选优惠、商店分类和支持客户放心购买的页面。",
    portfolioThreeTitle: "服务型企业网站",
    portfolioThreeText: "清晰定位、服务套餐、信任建立区块和简单的客户线索收集。",
    processEyebrow: "我们的流程",
    processTitle: "从初步想法到专业上线的清晰流程",
    processOneTitle: "明确目标",
    processOneText: "我们了解您销售什么、服务谁，以及网站或系统需要完成什么目标。",
    processTwoTitle: "设计体验",
    processTwoText: "在正式搭建前，我们规划结构、信息表达和视觉方向。",
    processThreeTitle: "自信上线",
    processThreeText: "我们交付精致成果，在不同屏幕上测试，并让未来优化更清晰。",
    contactEyebrow: "开始您的项目",
    contactTitle: "让我们打造您的企业应得的数字系统",
    contactText:
      "发送一条简短信息，我们会帮助您选择最适合的下一步：专业网站、线上商店或自动化 Excel 系统。",
    whatsappButton: "WhatsApp 咨询",
    instagramButton: "Instagram 私信",
    formName: "姓名",
    formNamePlaceholder: "您的姓名",
    formBusiness: "企业名称",
    formBusinessPlaceholder: "您的企业名称",
    formService: "您需要什么服务？",
    formChoose: "选择一项服务",
    formWebsite: "企业网站",
    formStore: "电子商务商店",
    formExcel: "自动化 Excel 系统",
    formNotSure: "还不确定",
    formMessage: "留言",
    formMessagePlaceholder: "告诉我们您想改善或搭建什么",
    formSubmit: "发送请求",
    footerText: "为有目标的企业打造高级网站、线上商店和 Excel 自动化。",
  },
};

function setLanguage(language) {
  const dictionary = translations[language] || translations.en;

  document.documentElement.lang = language === "zh" ? "zh-Hans" : language;
  document.title = dictionary.pageTitle;

  document.querySelectorAll("[data-i18n]").forEach((element) => {
    const key = element.dataset.i18n;
    if (dictionary[key]) {
      element.textContent = dictionary[key];
    }
  });

  document.querySelectorAll("[data-i18n-placeholder]").forEach((element) => {
    const key = element.dataset.i18nPlaceholder;
    if (dictionary[key]) {
      element.placeholder = dictionary[key];
    }
  });

  languageButtons.forEach((button) => {
    const isActive = button.dataset.lang === language;
    button.classList.toggle("active", isActive);
    button.setAttribute("aria-pressed", String(isActive));
  });

  localStorage.setItem("imjLanguage", language);
}

function updateAutomationDemo() {
  const sales = Number(salesInput.value);
  const expenses = Number(expenseInput.value);
  const orders = Number(ordersInput.value);
  const profit = sales - expenses;
  const averageOrder = orders > 0 ? sales / orders : 0;
  const margin = sales > 0 ? Math.round((profit / sales) * 100) : 0;

  salesOutput.textContent = currencyFormatter.format(sales);
  expenseOutput.textContent = currencyFormatter.format(expenses);
  ordersOutput.textContent = numberFormatter.format(orders);

  revenueResult.textContent = currencyFormatter.format(sales);
  profitResult.textContent = currencyFormatter.format(profit);
  averageResult.textContent = currencyFormatter.format(averageOrder);
  marginResult.textContent = `${margin}%`;
}

[salesInput, expenseInput, ordersInput].forEach((input) => {
  input.addEventListener("input", updateAutomationDemo);
});

updateAutomationDemo();

languageButtons.forEach((button) => {
  button.addEventListener("click", () => {
    setLanguage(button.dataset.lang);
  });
});

setLanguage(localStorage.getItem("imjLanguage") || "en");
