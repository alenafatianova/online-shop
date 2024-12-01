import { ProductType } from '../../types'

interface ProductsCatalogue extends ProductType {
  tag?: string
}

export const cataloguePageProducts: ProductsCatalogue[] = [
  {
    id: '1',
    title: 'Мусс-автозагар, оттенок Medium',
    image: require('../../../assets/catalogue/mousse1.png'),
    volume: '200 ml',
    price: '870 руб.',
    tag: 'mousse',
    productCode: 59039
  },
  {
    id: '2',
    title: 'Мусс-автозагар, оттенок Medium',
    image: require('../../../assets/catalogue/mousse-dark.png'),
    volume: '200 ml',
    price: '870 руб.',
    tag: 'mousse',
    productCode: 91871
  },
  {
    id: '3',
    title: 'Мусс-автозагар, оттенок Medium',
    image: require('../../../assets/catalogue/mousse-express.png'),
    volume: '200 ml',
    price: '870 руб.',
    tag: 'mousse',
    productCode: 8892
  },
  {
    id: '4',
    title: 'Мусс-автозагар, оттенок Medium',
    image: require('../../../assets/catalogue/mousse-removal.png'),
    volume: '200 ml',
    price: '1149 руб.',
    tag: 'mousse',
    productCode: 88719
  },

  {
    id: '5',
    title: 'Мусс 5 в 1, оттенок Medium',
    image: require('../../../assets/catalogue/mousse-5in1-medium.png'),
    volume: '200 ml',
    price: '990 руб.',
    tag: 'mousse',
    productCode: 82019
  },
  {
    id: '6',
    title: 'Мусс 5 в 1, оттенок Dark',
    image: require('../../../assets/catalogue/mousse-5in1-medium.png'),
    volume: '200 ml',
    price: '990 руб.',
    tag: 'mousse',
    productCode: 18282
  },
  {
    id: '7',
    title: 'Увлажняющий лосьон для постепенного загара',
    image: require('../../../assets/catalogue/lotion-gradual-tan.png'),
    volume: '275 ml',
    price: '790 руб.',
    tag: 'lotion',
    productCode: 15672
  },
  {
    id: '8',
    title: 'Увлажняющий лосьон с эффектом сияния',
    image: require('../../../assets/catalogue/glowing-lotion.png'),
    volume: '200 ml',
    price: '790 руб.',
    tag: 'lotion',
    productCode: 32510
  },

  {
    id: '9',
    title: 'Лосьон для увлажнения кожи и продления загара',
    image: require('../../../assets/catalogue/lotion-tan-extend.png'),
    volume: '200 ml',
    price: '790 руб.',
    tag: 'lotion',
    productCode: 7201
  },
  {
    id: '10',
    title: 'Лосьон-автозагар, оттенок Medium',
    image: require('../../../assets/catalogue/lotion-medium.png'),
    volume: '250 ml',
    price: '870 руб.',
    tag: 'lotion',
    productCode: 30002
  },
  {
    id: '11',
    title: 'Лосьон-автозагар, оттенок Dark',
    image: require('../../../assets/catalogue/lotion-dark.png'),
    volume: '250 ml',
    price: '870 руб.',
    tag: 'lotion',
    productCode: 92099
  },
  {
    id: '12',
    title: 'Сыворотка для лица с эффектом загара',
    image: require('../../../assets/catalogue/serum.png'),
    volume: '15 ml',
    price: '1290 руб.',
    tag: 'cosmetics',
    productCode: 92783672
  },
  {
    id: '13',
    title: 'Сухое масло-автобронзант',
    image: require('../../../assets/catalogue/dry-oil.png'),
    volume: '100 ml',
    price: '870 руб.',
    tag: 'cosmetics',
    productCode: 62524
  },
  {
    id: '14',
    title: 'Рукавичка для нанесения автозагара',
    image: require('../../../assets/catalogue/mittens.png'),
    volume: '',
    price: '390 руб.',
    tag: 'accessories',
    productCode: 82678
  },
  {
    id: '15',
    title: 'Спрей-автозагар, оттенок Medium',
    image: require('../../../assets/catalogue/spray-medium.png'),
    volume: '150 ml',
    price: '870 руб.',
    tag: 'spray',
    productCode: 927251
  },
  {
    id: '16',
    title: 'Спрей-автозагар, оттенок Dark',
    image: require('../../../assets/catalogue/spray-dark.png'),
    volume: '150 ml',
    price: '870 руб.',
    tag: 'spray',
    productCode: 6728
  },
  {
    id: '17',
    title: 'Сияющая пудра для лица и тела',
    image: require('../../../assets/catalogue/powder.png'),
    volume: '15 гр',
    price: '790 руб.',
    tag: 'cosmetics',
    productCode: 54312
  },
]
