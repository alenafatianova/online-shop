import React from 'react'
import './DeliveryPage.css'
import { Breadcrumb, Table } from 'antd'
import { NavLink } from 'react-router-dom'

interface DataType {
  key: string
  cities?: React.ReactElement
  area?: React.ReactElement | null
  courierDelivery: React.ReactElement
  pickPoint: React.ReactElement
  mailPoint: React.ReactElement
  align?: string
  expandable?: string
}

const data: DataType[] = [
  {
    key: '1',
    expandable: 'Not Expandable',
    cities: (
      <div className="cities-list">
        <h3 className="cities-list-area">Москва (в пределах МКАД)</h3>
      </div>
    ),
    courierDelivery: (
      <div className="courier-delivery">
        <p>290 руб</p>
        <p>на след. день</p>
      </div>
    ),
    pickPoint: (
      <div className="pick-point">
        <p>190 руб</p>
        <p>1-2 дня</p>
      </div>
    ),
    mailPoint: (
      <div className="mail-point">
        <p className="mail-point-cost">-</p>
        <p className="mail-point-days">-</p>
      </div>
    ),
  },
  {
    key: '2',
    area: null,
    expandable: 'Not Expandable',
    cities: (
      <div>
        <h3>Санкт-Петербург</h3>
      </div>
    ),
    courierDelivery: (
      <div className="courier-delivery">
        <p>290 руб</p>
        <p>1-2 дней</p>
      </div>
    ),
    pickPoint: (
      <div className="pick-point">
        <p>280 руб </p>
        <p>2-4 дней</p>
      </div>
    ),
    mailPoint: (
      <div className="mail-point">
        <p className="mail-point-cost">-</p>
        <p className="mail-point-days">-</p>
      </div>
    ),
  },
  {
    key: '3',
    area: <h3 className="area-header">Зона 1</h3>,
    expandable: 'Expandable',
    cities: (
      <div>
        <p>
          Москва (за МКАД), Подмосковье до 10 км от МКАД, Владимир, Иваново, Калуга, Кострома, Нижний Новгород, Рязань,
          Тверь, Тула, Ярославль
        </p>
      </div>
    ),
    courierDelivery: (
      <div className="courier-delivery">
        <p>350 руб</p>
        <p>2-3 дней</p>
      </div>
    ),
    pickPoint: (
      <div className="pick-point">
        <p>280 руб</p>
        <p>2-4 дней</p>
      </div>
    ),
    mailPoint: (
      <div className="mail-point">
        <p className="mail-point-cost">200-300 руб</p>
        <p className="mail-point-days">3-7 дней</p>
      </div>
    ),
  },
  {
    key: '4',
    area: <h3 className="area-header">Зона 2</h3>,
    expandable: 'Expandable',
    cities: (
      <div>
        <p>
          {' '}
          Подмосковье - Дубна, Клин, Орехово-Зуево, Коломна, Серпухов. Александров, Альметьевск, Армавир, Балаково,
          Белгород, Березники,Брянск, Великий Новгород, Волгоград, Волжский, Волгодонск, Вологда, Воронеж, Гатчина,
          Дзержинск, Димитровград, Златоуст, Ижевск, Йошкар-Ола, Казань, Киров, Кисловодск, Краснодар, Курск, Липецк,
          Миасс, Нефтекамск, Нижнекамск, Новочеркасск, Обнинск, Орел, Орск, Пенза, Петрозаводск, Псков, Ростов-на-Дону,
          Рыбинск, Салават, Самара, Саратов, Саранск, Смоленск, Сосновый Бор, Старый Оскол, Стерлитамак, Тамбов,
          Тольятти, Ульяновск, Чебоксары, Череповец
        </p>
      </div>
    ),
    courierDelivery: (
      <div className="courier-delivery">
        <p>390 руб</p>
        <p>2-4 дней</p>
      </div>
    ),
    pickPoint: (
      <div className="pick-point">
        <p>280 руб</p>
        <p>2-5 дней</p>
      </div>
    ),
    mailPoint: (
      <div className="mail-point">
        <p className="mail-point-cost">250-300 руб</p>
        <p className="mail-point-days"> 7-10 дней</p>
      </div>
    ),
  },
  {
    key: '5',
    area: <h3 className="area-header">Зона 3</h3>,
    expandable: 'Expandable',
    cities: (
      <div>
        <p>
          Астрахань, Ачинск, Архангельск, Барнаул, Бийск, Владикавказ, Грозный, Екатеринбрг, Кемерово, Красноярск,
          Калининград, Курган, Майкоп, Магнитогорск, Махачкала, Междуречинск, Минеральные Воды, Мурманск, Нальчик,
          Нижний Тагил, Набережные Челны, Новокузнецк, Новосибирск, Новороссийск, Омск, Оренбург, Пермь, Прокопьевск,
          Пятигорск, Северск, Симферополь, Севастополь, Сочи,Ставрополь, Сыктывкар, Таганрог, Томск, Тюмень, Уфа,
          Челябинск, Черкесск, Элиста
        </p>
      </div>
    ),
    courierDelivery: (
      <div className="courier-delivery">
        <p>490 руб</p>
        <p>2-5 дней</p>
      </div>
    ),
    pickPoint: (
      <div className="pick-point">
        <p>380 руб</p>
        <p>2-5 дней</p>
      </div>
    ),
    mailPoint: (
      <div className="mail-point">
        <p className="mail-point-cost">250-350 руб</p>
        <p className="mail-point-days">7-14 дней</p>
      </div>
    ),
  },
  {
    key: '6',
    area: <h3 className="area-header">Зона 4 </h3>,
    expandable: 'Expandable',
    cities: (
      <div>
        <p>
          Абакан, Братск, Благовещинск, Владивосток, Горно-Алтайск, Иркутск, Кызыл, Назрань, Надым, Нарьян-Мар,
          Нижневартовск, Новый Уренгой, Ноябрьск, Сургут, Улан-Удэ, Чита, Ханты-Мансийск, Хабаровск, Якутск
        </p>
      </div>
    ),
    courierDelivery: (
      <div className="courier-delivery">
        <p>590 руб</p>
        <p> 4-7 дней</p>
      </div>
    ),
    pickPoint: (
      <div className="pick-point">
        <p>490 руб</p>
        <p>4-7 дней</p>
      </div>
    ),
    mailPoint: (
      <div className="mail-point">
        <p className="mail-point-cost">350-400 руб</p>
        <p className="mail-point-days">5-14 дней</p>
      </div>
    ),
  },
  {
    key: '7',
    area: <h3 className="area-header">Зона 5 </h3>,
    expandable: 'Expandable',
    cities: (
      <div>
        <p>Биробиджан, Норильск, Магадан, Петропавловск-Камчатский, Южно-Сахалинск</p>
      </div>
    ),
    courierDelivery: (
      <div className="courier-delivery">
        <p>590 руб</p>
        <p>4-7 дней</p>
      </div>
    ),
    pickPoint: (
      <div className="pick-point">
        <p>-</p>
        <p>-</p>
      </div>
    ),
    mailPoint: (
      <div className="mail-point">
        <p className="mail-point-cost">350-400 руб</p>
        <p className="mail-point-days">5-14 дней</p>
      </div>
    ),
  },
]

const columns = [
  {
    title: '',
    dataIndex: 'area',
    key: 'area',
  },
  {
    title: 'Курьерская доставка',
    dataIndex: 'courierDelivery',
    key: 'courierDelivery',
    className: 'courier-delivery-header',
  },
  {
    title: 'Пункт выдачи заказа',
    dataIndex: 'pickPoint',
    key: 'pickPoint',
    className: 'pickpoint-delivery-header',
  },
  {
    title: 'Почта России',
    dataIndex: 'mailPoint',
    className: 'mailpoint-delivery-header',
    key: 'mailPoint',
  },
]

export const DeliveryPage: React.FC = () => {
  return (
    <React.Fragment>
      <div className="container-delivery-page">
        <div className="breadcrumbs-delivery-page">
          <Breadcrumb
            className="breadcrumbs-component"
            items={[{ title: <NavLink to={'/'}>Главная</NavLink> }, { title: 'Доставка и оплата' }]}
          />
        </div>
        <div className="delivery-page-headers">
          <h1 className="header-delivery-page">Доставка и оплата</h1>
          <h2>Доставка осуществляется по всей России и СНГ</h2>
        </div>
        <div className="delivery-page-table-container">
          <Table
            className="delivery-page-table"
            columns={columns}
            dataSource={data}
            pagination={false}
            expandable={{
              expandedRowRender: (record) => <p className="cities-list">{record.cities}</p>,
              rowExpandable: (record) => record.expandable !== 'Not Expandable',
            }}
            showHeader
          />
        </div>
      </div>
    </React.Fragment>
  )
}
