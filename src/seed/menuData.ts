export interface ProductData {
  en: { name: string; description?: string };
  ru: { name: string; description?: string };
  hy: { name: string; description?: string };
  price: number;
  sortOrder: number;
}

export interface SubCategoryData {
  en: { title: string; subtitle?: string };
  ru: { title: string; subtitle?: string };
  hy: { title: string; subtitle?: string };
  slug: string;
  sortOrder: number;
  products: ProductData[];
}

export interface CategorySeedEntry {
  slugHints: string[];
  subCategories: SubCategoryData[];
}

export const menuSeedData: CategorySeedEntry[] = [
  {
    slugHints: ['appetizer', 'starter', 'zakuski', 'naxutest', 'cold'],
    subCategories: [
      {
        en: { title: 'Cold Appetizers', subtitle: 'Served chilled' },
        ru: { title: 'Холодные закуски', subtitle: 'Подаются охлаждёнными' },
        hy: { title: 'Սառը նախուտեստ', subtitle: 'Մատուցվում է սառեցված' },
        slug: 'cold-appetizers',
        sortOrder: 1,
        products: [
          {
            en: { name: 'Hummus', description: 'Classic chickpea dip with olive oil and paprika' },
            ru: { name: 'Хумус', description: 'Классический хумус из нута с оливковым маслом и паприкой' },
            hy: { name: 'Հումուս', description: 'Դասական ճակնդեղի պաստ ձիթաձեթով և պղպեղով' },
            price: 1200,
            sortOrder: 1,
          },
          {
            en: { name: 'Meze Platter', description: 'Assorted Armenian appetizers — pickles, olives, herbs' },
            ru: { name: 'Мезе ассорти', description: 'Армянские закуски — соленья, оливки, зелень' },
            hy: { name: 'Մեզե ափսե', description: 'Հայկական նախուտեստի ասորտի' },
            price: 2500,
            sortOrder: 2,
          },
          {
            en: { name: 'Cheese Board', description: 'Selection of local and imported cheeses with honey' },
            ru: { name: 'Сырная тарелка', description: 'Подборка местных и импортных сыров с мёдом' },
            hy: { name: 'Պանրի ափսե', description: 'Տեղական և ներկրված պանիրների ընտրություն մեղրով' },
            price: 3000,
            sortOrder: 3,
          },
          {
            en: { name: 'Basturma', description: 'Cured beef with spices, thinly sliced' },
            ru: { name: 'Бастурма', description: 'Вяленая говядина со специями, тонко нарезанная' },
            hy: { name: 'Բաստուրմա', description: 'Չոր թթված տավարի միս համեմունքներով' },
            price: 1800,
            sortOrder: 4,
          },
          {
            en: { name: 'Cheese Pastry', description: 'Crispy phyllo pastry filled with local cheese' },
            ru: { name: 'Сырный пирог', description: 'Хрустящее тесто фило с местным сыром' },
            hy: { name: 'Բյուրեղ', description: 'Թխած խմոր տեղական պանիրով' },
            price: 900,
            sortOrder: 5,
          },
        ],
      },
      {
        en: { title: 'Hot Appetizers', subtitle: 'Freshly prepared' },
        ru: { title: 'Горячие закуски', subtitle: 'Свежеприготовленные' },
        hy: { title: 'Տաք նախուտեստ', subtitle: 'Թարմ պատրաստված' },
        slug: 'hot-appetizers',
        sortOrder: 2,
        products: [
          {
            en: { name: 'Stuffed Mushrooms', description: 'Baked mushrooms with cheese and herbs' },
            ru: { name: 'Фаршированные грибы', description: 'Запечённые грибы с сыром и зеленью' },
            hy: { name: 'Լցոնած սնկեր', description: 'Թխած սնկեր պանիրով և կանաչիներով' },
            price: 1500,
            sortOrder: 1,
          },
          {
            en: { name: 'Grilled Vegetables', description: 'Seasonal vegetables grilled with olive oil' },
            ru: { name: 'Овощи гриль', description: 'Сезонные овощи, запечённые с оливковым маслом' },
            hy: { name: 'Կրակի վրա բանջարեղեն', description: 'Ձիթաձեթով կրակի վրա եփած բանջարեղեն' },
            price: 1200,
            sortOrder: 2,
          },
          {
            en: { name: 'Dolma', description: 'Grape leaves stuffed with rice, herbs and minced meat' },
            ru: { name: 'Долма', description: 'Виноградные листья с рисом, зеленью и фаршем' },
            hy: { name: 'Տոլմա', description: 'Խաղողի տերևներ բրնձով, կանաչիներով և կոտրած մսով' },
            price: 1800,
            sortOrder: 3,
          },
        ],
      },
    ],
  },
  {
    slugHints: ['soup', 'sup', 'apur'],
    subCategories: [
      {
        en: { title: 'Armenian Soups', subtitle: 'Traditional recipes' },
        ru: { title: 'Армянские супы', subtitle: 'Традиционные рецепты' },
        hy: { title: 'Հայկական ապուրներ', subtitle: 'Ավանդական բաղադրատոմսեր' },
        slug: 'armenian-soups',
        sortOrder: 1,
        products: [
          {
            en: { name: 'Spas', description: 'Traditional yogurt soup with wheat groats and herbs' },
            ru: { name: 'Спас', description: 'Традиционный суп из мацуна с пшеничными крупами и зеленью' },
            hy: { name: 'Սպաս', description: 'Ավանդական մածնի ապուր ցորենի ձավարով և կանաչիներով' },
            price: 1200,
            sortOrder: 1,
          },
          {
            en: { name: 'Harisa', description: 'Slow-cooked wheat and chicken porridge' },
            ru: { name: 'Хариса', description: 'Долго томлёная каша из пшеницы и курицы' },
            hy: { name: 'Հարիսա', description: 'Երկար եփած ցորեն-հավ շիլա' },
            price: 1500,
            sortOrder: 2,
          },
          {
            en: { name: 'Bozbash', description: 'Rich lamb broth with chickpeas and vegetables' },
            ru: { name: 'Бозбаш', description: 'Наваристый суп из баранины с нутом и овощами' },
            hy: { name: 'Բոզբաշ', description: 'Ոչխարի ոսկոր-ոլոռ-բանջարեղեն ապուր' },
            price: 1600,
            sortOrder: 3,
          },
        ],
      },
      {
        en: { title: 'Cream Soups', subtitle: 'Smooth and warming' },
        ru: { title: 'Супы-пюре', subtitle: 'Нежные и согревающие' },
        hy: { title: 'Քսուկ ապուրներ', subtitle: 'Փափուկ և ջերմ' },
        slug: 'cream-soups',
        sortOrder: 2,
        products: [
          {
            en: { name: 'Mushroom Cream Soup', description: 'Velvety mushroom soup with cream' },
            ru: { name: 'Крем-суп из грибов', description: 'Бархатный грибной суп со сливками' },
            hy: { name: 'Սնկի քսուկ ապուր', description: 'Մեղմ սնկի ապուր սերուցքով' },
            price: 1400,
            sortOrder: 1,
          },
          {
            en: { name: 'Tomato Soup', description: 'Rich tomato bisque with basil' },
            ru: { name: 'Томатный суп', description: 'Насыщенный томатный суп с базиликом' },
            hy: { name: 'Լոլիկի ապուր', description: 'Հարուստ լոլիկի ապուր ռեհանով' },
            price: 1200,
            sortOrder: 2,
          },
        ],
      },
    ],
  },
  {
    slugHints: ['salad', 'salat', 'agcan'],
    subCategories: [
      {
        en: { title: 'Fresh Salads', subtitle: 'Garden fresh' },
        ru: { title: 'Свежие салаты', subtitle: 'Прямо с грядки' },
        hy: { title: 'Թարմ աղցաններ', subtitle: 'Թարմ' },
        slug: 'fresh-salads',
        sortOrder: 1,
        products: [
          {
            en: { name: 'Armenian Village Salad', description: 'Tomatoes, cucumbers, herbs and feta cheese' },
            ru: { name: 'Армянский деревенский салат', description: 'Помидоры, огурцы, зелень и брынза' },
            hy: { name: 'Հայկական գյուղական աղցան', description: 'Լոլիկ, վարունգ, կանաչի' },
            price: 1200,
            sortOrder: 1,
          },
          {
            en: { name: 'Greek Salad', description: 'Olives, feta, tomatoes, cucumber and red onion' },
            ru: { name: 'Греческий салат', description: 'Оливки, брынза, помидоры, огурец и красный лук' },
            hy: { name: 'Հունական աղցան', description: 'Ձիթապտուղ, ֆետա, լոլիկ, վարունգ' },
            price: 1400,
            sortOrder: 2,
          },
          {
            en: { name: 'Caesar Salad', description: 'Romaine lettuce, croutons, parmesan and caesar dressing' },
            ru: { name: 'Салат Цезарь', description: 'Романо, крутоны, пармезан и заправка цезарь' },
            hy: { name: 'Կեսար աղցան', description: 'Ռոման, կրուտոն, պարմեզան' },
            price: 1600,
            sortOrder: 3,
          },
          {
            en: { name: 'Shirazi Salad', description: 'Persian-style tomato and cucumber salad with mint' },
            ru: { name: 'Салат Ширази', description: 'Персидский салат из помидоров и огурцов с мятой' },
            hy: { name: 'Շիրազի աղցան', description: 'Պարսկական ոճի լոլիկ-վարունգ աղցան անանուխով' },
            price: 1100,
            sortOrder: 4,
          },
        ],
      },
      {
        en: { title: 'Warm Salads', subtitle: 'Hearty and satisfying' },
        ru: { title: 'Тёплые салаты', subtitle: 'Сытные и насыщенные' },
        hy: { title: 'Տաք աղցաններ', subtitle: 'Հագեցուցիչ' },
        slug: 'warm-salads',
        sortOrder: 2,
        products: [
          {
            en: { name: 'Warm Chicken Salad', description: 'Grilled chicken with mixed greens and balsamic' },
            ru: { name: 'Тёплый куриный салат', description: 'Куриное филе гриль с зеленью и бальзамиком' },
            hy: { name: 'Տաք հավի աղցան', description: 'Կրակի վրա եփած հավ կանաչիներով' },
            price: 1800,
            sortOrder: 1,
          },
          {
            en: { name: 'Grilled Halloumi Salad', description: 'Pan-fried halloumi with rocket and cherry tomatoes' },
            ru: { name: 'Салат с жареным халуми', description: 'Обжаренный халуми с рукколой и черри' },
            hy: { name: 'Խալլումիի աղցան', description: 'Կրակի վրա եփած պանիր ռուկոլայով' },
            price: 1900,
            sortOrder: 2,
          },
        ],
      },
    ],
  },
  {
    slugHints: ['main', 'hot-dish', 'hot dish', 'himnakan', 'khorovats', 'meat', 'grill'],
    subCategories: [
      {
        en: { title: 'Grilled Meats', subtitle: 'Cooked over charcoal' },
        ru: { title: 'Мясо на гриле', subtitle: 'На мангале' },
        hy: { title: 'Կրակի վրա միս', subtitle: 'Կրակի վրա' },
        slug: 'grilled-meats',
        sortOrder: 1,
        products: [
          {
            en: { name: 'Khorovats Mix', description: 'Armenian BBQ — pork, chicken and vegetables grilled over charcoal' },
            ru: { name: 'Хоровац микс', description: 'Армянский шашлык — свинина, курица и овощи на мангале' },
            hy: { name: 'Խորոված Mix', description: 'Խոզ, հավ և բանջարեղեն կրակի վրա' },
            price: 4500,
            sortOrder: 1,
          },
          {
            en: { name: 'Lula Kebab', description: 'Spiced minced lamb on skewers with grilled tomatoes' },
            ru: { name: 'Люля-кебаб', description: 'Фарш из баранины на шампуре с помидорами гриль' },
            hy: { name: 'Լուլա Քյաբաբ', description: 'Ոչխարի կոտրած մսից պատրաստված' },
            price: 2800,
            sortOrder: 2,
          },
          {
            en: { name: 'Shish Kebab', description: 'Marinated cubed pork skewers with onion and herbs' },
            ru: { name: 'Шашлык', description: 'Маринованные кусочки свинины с луком и зеленью' },
            hy: { name: 'Շաշլիկ', description: 'Մածնի-թոնրի մեջ եփված խոզ' },
            price: 3200,
            sortOrder: 3,
          },
          {
            en: { name: 'Pork Steak', description: 'Thick-cut pork steak with garlic butter' },
            ru: { name: 'Стейк из свинины', description: 'Толстый стейк из свинины с чесночным маслом' },
            hy: { name: 'Խոզի ստեյք', description: 'Հաստ կտրատված խոզ սխտորային կարագով' },
            price: 3500,
            sortOrder: 4,
          },
        ],
      },
      {
        en: { title: 'Poultry', subtitle: 'Chicken & more' },
        ru: { title: 'Птица', subtitle: 'Курица и другое' },
        hy: { title: 'Թռչնամիս', subtitle: 'Հավ' },
        slug: 'poultry',
        sortOrder: 2,
        products: [
          {
            en: { name: 'Grilled Half Chicken', description: 'Free-range chicken marinated in herbs' },
            ru: { name: 'Курица гриль', description: 'Половина фермерской курицы в маринаде из трав' },
            hy: { name: 'Կրակի վրա հավ', description: 'Կիսով հավ' },
            price: 2500,
            sortOrder: 1,
          },
          {
            en: { name: 'Stuffed Chicken', description: 'Chicken breast stuffed with cheese and mushrooms' },
            ru: { name: 'Курица фаршированная', description: 'Куриная грудка с сыром и грибами' },
            hy: { name: 'Լցոնած հավ', description: 'Հավի կրծք պանիրով և սնկերով' },
            price: 3000,
            sortOrder: 2,
          },
          {
            en: { name: 'Chicken Tabaka', description: 'Flattened pressed chicken fried until crispy' },
            ru: { name: 'Цыплёнок табака', description: 'Цыплёнок под прессом, обжаренный до хрустящей корочки' },
            hy: { name: 'Հավ Տաբակա', description: 'Հարթ-ճնշված հավ, ոսկե-կծծված' },
            price: 2800,
            sortOrder: 3,
          },
        ],
      },
      {
        en: { title: 'Fish & Seafood', subtitle: 'From river and sea' },
        ru: { title: 'Рыба и морепродукты', subtitle: 'Из реки и моря' },
        hy: { title: 'Ձուկ և ծովամթերք', subtitle: 'Գետ և ծով' },
        slug: 'fish-seafood',
        sortOrder: 3,
        products: [
          {
            en: { name: 'Grilled Salmon', description: 'Atlantic salmon fillet with lemon and dill' },
            ru: { name: 'Лосось гриль', description: 'Филе атлантического лосося с лимоном и укропом' },
            hy: { name: 'Կրակի վրա սաղմոն', description: 'Ատլանտյան սաղմոն կիտրոնով' },
            price: 3800,
            sortOrder: 1,
          },
          {
            en: { name: 'Grilled Trout', description: 'Armenian lake trout with herbs' },
            ru: { name: 'Форель гриль', description: 'Армянская форель с зеленью' },
            hy: { name: 'Կրակի վրա իշխան', description: 'Հայկական իշխան' },
            price: 3200,
            sortOrder: 2,
          },
        ],
      },
    ],
  },
  {
    slugHints: ['pizza'],
    subCategories: [
      {
        en: { title: 'Classic Pizza', subtitle: 'Traditional Italian style' },
        ru: { title: 'Классическая пицца', subtitle: 'Итальянский стиль' },
        hy: { title: 'Դասական Պիցցա', subtitle: 'Իտալական ոճ' },
        slug: 'classic-pizza',
        sortOrder: 1,
        products: [
          {
            en: { name: 'Margherita', description: 'Tomato sauce, mozzarella and fresh basil' },
            ru: { name: 'Маргарита', description: 'Томатный соус, моцарелла и свежий базилик' },
            hy: { name: 'Մարգերիտա', description: 'Լոլիկի սոուս, մոցառելլա, ռեհան' },
            price: 2000,
            sortOrder: 1,
          },
          {
            en: { name: 'Pepperoni', description: 'Classic pepperoni with mozzarella' },
            ru: { name: 'Пепперони', description: 'Классическая пепперони с моцареллой' },
            hy: { name: 'Պեպերոնի', description: 'Դասական պեպերոնի մոցառելլայով' },
            price: 2400,
            sortOrder: 2,
          },
          {
            en: { name: '4 Cheese Pizza', description: 'Mozzarella, gorgonzola, cheddar and parmesan' },
            ru: { name: 'Пицца 4 сыра', description: 'Моцарелла, горгонзола, чеддер и пармезан' },
            hy: { name: 'Չորս Պանիրի Պիցցա', description: 'Մոցառելլա, գորգոնզոլա, չեդըռ, պարմեզան' },
            price: 2800,
            sortOrder: 3,
          },
        ],
      },
      {
        en: { title: "Chef's Pizza", subtitle: 'Our signature creations' },
        ru: { title: 'Авторская пицца', subtitle: 'Рецепты от шефа' },
        hy: { title: 'Հեղինակային Պիցցա', subtitle: 'Շեֆ-խոհարարի ստեղծագործություններ' },
        slug: 'signature-pizza',
        sortOrder: 2,
        products: [
          {
            en: { name: 'BBQ Chicken Pizza', description: 'Smoky BBQ sauce, grilled chicken, red onion and coriander' },
            ru: { name: 'Пицца с курицей BBQ', description: 'Соус BBQ, курица гриль, красный лук и кориандр' },
            hy: { name: 'BBQ Հավի Պիցցա', description: 'BBQ սոուս, կրակի վրա հավ, կարմիր սոխ' },
            price: 2800,
            sortOrder: 1,
          },
          {
            en: { name: 'Garden Pizza', description: 'Roasted vegetables, feta cheese and pesto' },
            ru: { name: 'Пицца Гарден', description: 'Запечённые овощи, брынза и песто' },
            hy: { name: 'Պարտեզի Պիցցա', description: 'Բանջարեղեն, ֆետա, պեստո' },
            price: 2200,
            sortOrder: 2,
          },
          {
            en: { name: 'Meat Feast', description: 'Pepperoni, sausage, mince and bacon' },
            ru: { name: 'Мясной пир', description: 'Пепперони, колбаса, фарш и бекон' },
            hy: { name: 'Մսային Մատույց', description: 'Պեպերոնի, երշիկ, կոտրած միս, բեկոն' },
            price: 3200,
            sortOrder: 3,
          },
        ],
      },
    ],
  },
  {
    slugHints: ['pasta'],
    subCategories: [
      {
        en: { title: 'Classic Pasta', subtitle: 'Italian tradition' },
        ru: { title: 'Классическая паста', subtitle: 'Итальянская традиция' },
        hy: { title: 'Դասական Պաստա', subtitle: 'Իտալական ավանդույթ' },
        slug: 'classic-pasta',
        sortOrder: 1,
        products: [
          {
            en: { name: 'Spaghetti Bolognese', description: 'Slow-cooked meat sauce with spaghetti' },
            ru: { name: 'Спагетти болоньезе', description: 'Спагетти с долго тушеным мясным соусом' },
            hy: { name: 'Սպագետտի Բոլոնեզ', description: 'Երկար եփած մսի սոուս' },
            price: 2200,
            sortOrder: 1,
          },
          {
            en: { name: 'Pasta Carbonara', description: 'Cream, bacon, egg and parmesan' },
            ru: { name: 'Паста карбонара', description: 'Сливки, бекон, яйцо и пармезан' },
            hy: { name: 'Կարբոնարա', description: 'Սերուցք, բեկոն, ձու, պարմեզան' },
            price: 2400,
            sortOrder: 2,
          },
          {
            en: { name: 'Pasta Arrabiata', description: 'Spicy tomato sauce with garlic and chilli' },
            ru: { name: 'Паста аррабиата', description: 'Острый томатный соус с чесноком и чили' },
            hy: { name: 'Արաբիատա', description: 'Կծու լոլիկի սոուս սխտորով' },
            price: 2000,
            sortOrder: 3,
          },
        ],
      },
      {
        en: { title: "Chef's Pasta", subtitle: 'Our own creations' },
        ru: { title: 'Авторская паста', subtitle: 'Наши фирменные рецепты' },
        hy: { title: 'Հեղինակային Պաստա', subtitle: 'Մեր ստեղծագործությունները' },
        slug: 'signature-pasta',
        sortOrder: 2,
        products: [
          {
            en: { name: 'Chicken and Mushroom Pasta', description: 'Penne with grilled chicken and mushrooms in cream sauce' },
            ru: { name: 'Паста с курицей и грибами', description: 'Пенне с курицей гриль, грибами в сливочном соусе' },
            hy: { name: 'Հավ-Սնկի Պաստա', description: 'Կրակի վրա հավ, սնկեր, սերուցքային սոուս' },
            price: 2600,
            sortOrder: 1,
          },
          {
            en: { name: 'Seafood Linguine', description: 'Linguine with shrimp and mussels in white wine sauce' },
            ru: { name: 'Лингвине с морепродуктами', description: 'Лингвине с креветками и мидиями в белом вине' },
            hy: { name: 'Ծովամթերքի Լինգուինե', description: 'Ծովախեցի, խեցգետին, սպիտակ գինու սոուս' },
            price: 3200,
            sortOrder: 2,
          },
        ],
      },
    ],
  },
  {
    slugHints: ['dessert', 'sweet', 'anush', 'cake'],
    subCategories: [
      {
        en: { title: 'Armenian Sweets', subtitle: 'Traditional recipes' },
        ru: { title: 'Армянские сладости', subtitle: 'Традиционные рецепты' },
        hy: { title: 'Հայկական Անուշ', subtitle: 'Ավանդական' },
        slug: 'armenian-sweets',
        sortOrder: 1,
        products: [
          {
            en: { name: 'Baklava', description: 'Crispy phyllo pastry with walnuts and honey syrup' },
            ru: { name: 'Пахлава', description: 'Хрустящее тесто фило с грецкими орехами и медовым сиропом' },
            hy: { name: 'Բաքլավա', description: 'Ընկույզ, մեղր, խմոր' },
            price: 900,
            sortOrder: 1,
          },
          {
            en: { name: 'Gata', description: 'Traditional Armenian sweet bread with walnut filling' },
            ru: { name: 'Гата', description: 'Традиционное армянское сладкое печенье с орехами' },
            hy: { name: 'Գաթա', description: 'Ավանդական հայկական անուշ հաց' },
            price: 800,
            sortOrder: 2,
          },
          {
            en: { name: 'Kadayif', description: 'Shredded wheat dessert with cheese and rose water syrup' },
            ru: { name: 'Кадаиф', description: 'Десерт из тонкого теста с сыром и розовым сиропом' },
            hy: { name: 'Քաղաքեն', description: 'Բարակ տոմ, պանիր, վարդաջուր' },
            price: 1000,
            sortOrder: 3,
          },
        ],
      },
      {
        en: { title: 'Ice Cream & Cakes', subtitle: 'Cool and sweet' },
        ru: { title: 'Мороженое и торты', subtitle: 'Холодное и сладкое' },
        hy: { title: 'Պաղպաղակ', subtitle: 'Սառը և անուշ' },
        slug: 'ice-cream-cakes',
        sortOrder: 2,
        products: [
          {
            en: { name: 'Ice Cream', description: 'Two scoops of homemade ice cream of your choice' },
            ru: { name: 'Мороженое', description: 'Два шарика домашнего мороженого на выбор' },
            hy: { name: 'Պաղպաղակ', description: 'Երկու գնդիկ տնական պաղպաղակ' },
            price: 600,
            sortOrder: 1,
          },
          {
            en: { name: 'Cheesecake', description: 'New York style cheesecake with berry compote' },
            ru: { name: 'Чизкейк', description: 'Нью-йоркский чизкейк с ягодным компотом' },
            hy: { name: 'Չիզքեյք', description: 'Նյու Յորքյան ոճ, հատապտղի կոմպոտ' },
            price: 1200,
            sortOrder: 2,
          },
          {
            en: { name: 'Fruit Platter', description: 'Fresh seasonal fruits' },
            ru: { name: 'Фруктовая тарелка', description: 'Свежие сезонные фрукты' },
            hy: { name: 'Մրգային ափսե', description: 'Թարմ սեզոնային մրգեր' },
            price: 1500,
            sortOrder: 3,
          },
        ],
      },
    ],
  },
  {
    slugHints: ['drink', 'beverage', 'napitok', 'ympeliq', 'bar'],
    subCategories: [
      {
        en: { title: 'Hot Drinks', subtitle: 'Warm your soul' },
        ru: { title: 'Горячие напитки', subtitle: 'Согрейте душу' },
        hy: { title: 'Տաք Ըմպելիք', subtitle: 'Հոգին տաքացնելու համար' },
        slug: 'hot-drinks',
        sortOrder: 1,
        products: [
          {
            en: { name: 'Armenian Coffee', description: 'Traditional strong coffee brewed in a copper pot' },
            ru: { name: 'Армянский кофе', description: 'Традиционный крепкий кофе в медной джезве' },
            hy: { name: 'Հայկական Սուրճ', description: 'Ավանդական սուրճ պղնձե թուջի մեջ' },
            price: 500,
            sortOrder: 1,
          },
          {
            en: { name: 'Cappuccino', description: 'Espresso with steamed milk foam' },
            ru: { name: 'Капучино', description: 'Эспрессо с паровым молоком' },
            hy: { name: 'Կապուչինո', description: 'Էսպրեսո գոլ կաթով' },
            price: 700,
            sortOrder: 2,
          },
          {
            en: { name: 'Latte', description: 'Espresso with steamed milk' },
            ru: { name: 'Латте', description: 'Эспрессо с паровым молоком' },
            hy: { name: 'Լատտե', description: 'Էспрեso կաթով' },
            price: 750,
            sortOrder: 3,
          },
          {
            en: { name: 'Herbal Tea', description: 'Selection of fresh or dried herbs from Armenia' },
            ru: { name: 'Травяной чай', description: 'Подборка свежих или сушёных армянских трав' },
            hy: { name: 'Բուսաբուժական Թեյ', description: 'Հայաստանի թարմ կամ չոր բույսեր' },
            price: 400,
            sortOrder: 4,
          },
        ],
      },
      {
        en: { title: 'Cold Drinks', subtitle: 'Refreshing and chilled' },
        ru: { title: 'Холодные напитки', subtitle: 'Освежающие и охлаждённые' },
        hy: { title: 'Սառը Ըմպելիք', subtitle: 'Թարմ' },
        slug: 'cold-drinks',
        sortOrder: 2,
        products: [
          {
            en: { name: 'Homemade Lemonade', description: 'Fresh lemon, mint, and soda water' },
            ru: { name: 'Домашний лимонад', description: 'Свежий лимон, мята и газированная вода' },
            hy: { name: 'Տնական Լիմոնադ', description: 'Թարմ կիտրոն, անանուխ, գազ ջուր' },
            price: 600,
            sortOrder: 1,
          },
          {
            en: { name: 'Fresh Juice', description: 'Freshly squeezed juice — orange, apple or pomegranate' },
            ru: { name: 'Свежевыжатый сок', description: 'Свежевыжатый сок — апельсин, яблоко или гранат' },
            hy: { name: 'Թարմ Հյութ', description: 'Թարմ սեղված հյութ — նարինջ, խնձոր, նուռ' },
            price: 700,
            sortOrder: 2,
          },
          {
            en: { name: 'Sparkling Water', description: '500ml sparkling mineral water' },
            ru: { name: 'Газированная вода', description: '500мл газированной минеральной воды' },
            hy: { name: 'Գազ Ջուր', description: '500մլ գազ ջուր' },
            price: 350,
            sortOrder: 3,
          },
          {
            en: { name: 'Still Water', description: '500ml still mineral water' },
            ru: { name: 'Негазированная вода', description: '500мл негазированной воды' },
            hy: { name: 'Ջուր', description: '500մլ ջուր' },
            price: 300,
            sortOrder: 4,
          },
        ],
      },
      {
        en: { title: 'Alcoholic Drinks', subtitle: 'Wine, beer and spirits' },
        ru: { title: 'Алкоголь', subtitle: 'Вино, пиво и крепкие напитки' },
        hy: { title: 'Ալկոհոլ', subtitle: 'Գինի, գարեջուր' },
        slug: 'alcoholic-drinks',
        sortOrder: 3,
        products: [
          {
            en: { name: 'Armenian Red Wine (glass)', description: 'Glass of local Armenian red wine' },
            ru: { name: 'Армянское красное вино (бокал)', description: 'Бокал армянского красного вина' },
            hy: { name: 'Հայկական Կարմիր Գինի (բաժակ)', description: 'Հայկական կարմիր գինու բաժակ' },
            price: 900,
            sortOrder: 1,
          },
          {
            en: { name: 'Craft Beer', description: '0.5L draught craft beer' },
            ru: { name: 'Крафтовое пиво', description: '0,5л разливного крафтового пива' },
            hy: { name: 'Craft Գարեջուր', description: '0.5լ Craft գারеجур' },
            price: 800,
            sortOrder: 2,
          },
          {
            en: { name: 'Armenian Brandy', description: '50ml Ararat or similar Armenian brandy' },
            ru: { name: 'Армянский коньяк', description: '50мл Арарат или аналогичного армянского коньяка' },
            hy: { name: 'Հայկական Կոնյակ', description: '50մ� Արարատ կоняк' },
            price: 1200,
            sortOrder: 3,
          },
        ],
      },
    ],
  },
];
