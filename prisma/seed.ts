import { PrismaClient, SubscriptionType } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  const directions = [
    {
      slug: "english",
      title: "Английский",
      shortText: "Игры, диалоги, песни и разговорная практика.",
      description: "Минимум сухой теории, максимум уверенной речи.",
      sortOrder: 1,
    },
    {
      slug: "preschool",
      title: "Дошколята",
      shortText: "Подготовка к школе в комфортном темпе.",
      description: "Логика, внимание, речь, счёт и мышление через игру.",
      sortOrder: 2,
    },
    {
      slug: "acting",
      title: "Актёрское мастерство",
      shortText: "Сцена, речь, эмоции и уверенность.",
      description: "Сценки, выступления и работа в группе.",
      sortOrder: 3,
    },
    {
      slug: "robotics",
      title: "Робототехника",
      shortText: "Конструирование и первые инженерные проекты.",
      description: "Логика, командная работа и креативное мышление.",
      sortOrder: 4,
    },
  ];

  for (const direction of directions) {
    await prisma.direction.upsert({
      where: { slug: direction.slug },
      update: direction,
      create: direction,
    });
  }

  const plans = [
    {
      slug: "trial",
      title: "Пробное занятие",
      lessonsCount: 1,
      price: 500,
      type: SubscriptionType.TRIAL,
      sortOrder: 1,
    },
    {
      slug: "single",
      title: "Одно занятие",
      lessonsCount: 1,
      price: 1500,
      type: SubscriptionType.SINGLE,
      sortOrder: 2,
    },
    {
      slug: "pack-8",
      title: "8 занятий",
      lessonsCount: 8,
      price: 9900,
      type: SubscriptionType.PACKAGE,
      isPopular: true,
      sortOrder: 3,
    },
    {
      slug: "pack-24",
      title: "24 занятия",
      lessonsCount: 24,
      price: 27900,
      type: SubscriptionType.PACKAGE,
      sortOrder: 4,
    },
    {
      slug: "pack-48",
      title: "48 занятий",
      lessonsCount: 48,
      price: 52900,
      type: SubscriptionType.PACKAGE,
      sortOrder: 5,
    },
    {
      slug: "pack-96",
      title: "96 занятий",
      lessonsCount: 96,
      price: 99900,
      type: SubscriptionType.PACKAGE,
      sortOrder: 6,
    },
  ];

  for (const plan of plans) {
    await prisma.subscriptionPlan.upsert({
      where: { slug: plan.slug },
      update: plan,
      create: plan,
    });
  }

  const faq = [
    {
      question: "Сколько длится занятие?",
      answer: "1,5 часа: практика, перерыв, закрепление и рефлексия.",
      sortOrder: 1,
    },
    {
      question: "Что родитель видит по результату?",
      answer:
        "Каждый месяц — выступление, проект, портфолио или видео с прогрессом.",
      sortOrder: 2,
    },
    {
      question: "Есть ли пробное занятие?",
      answer: "Да, пробное занятие доступно за 500 ₽.",
      sortOrder: 3,
    },
  ];

  for (const item of faq) {
    await prisma.faqItem.upsert({
      where: { id: `faq-${item.sortOrder}` },
      update: item,
      create: { id: `faq-${item.sortOrder}`, ...item },
    });
  }

  await prisma.siteSettings.upsert({
    where: { id: "main-site-settings" },
    update: {
      companyName: "Центр Семейного Наставничества",
      inn: "7700000000",
      address: "г. Москва, ул. Тёплая, 12",
      phone: "+7 (999) 123-45-67",
      email: "hello@kids-center.ru",
      yandexMapUrl: "https://yandex.ru/maps",
      twoGisMapUrl: "https://2gis.ru",
      vkUrl: "https://vk.com",
      telegramUrl: "https://t.me",
      instagramUrl: "https://instagram.com",
      whatsappUrl: "https://wa.me/79991234567",
    },
    create: {
      id: "main-site-settings",
      companyName: "Центр Семейного Наставничества",
      inn: "7700000000",
      address: "г. Москва, ул. Тёплая, 12",
      phone: "+7 (999) 123-45-67",
      email: "hello@kids-center.ru",
      yandexMapUrl: "https://yandex.ru/maps",
      twoGisMapUrl: "https://2gis.ru",
      vkUrl: "https://vk.com",
      telegramUrl: "https://t.me",
      instagramUrl: "https://instagram.com",
      whatsappUrl: "https://wa.me/79991234567",
    },
  });
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (error) => {
    console.error(error);
    await prisma.$disconnect();
    process.exit(1);
  });
