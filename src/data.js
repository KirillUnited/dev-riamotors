const assets = `${process.env.PUBLIC_URL}/images`;
const brands = [
  { id: 1, name: '', logo: `${assets}/1-150x150.png` },
  { id: 2, name: '', logo: `${assets}/2-150x150.png` },
  { id: 3, name: '', logo: `${assets}/3-150x150.png` },
  { id: 4, name: '', logo: `${assets}/4-150x150.png` },
  { id: 5, name: '', logo: `${assets}/5-150x150.png` },
  { id: 6, name: '', logo: `${assets}/6-150x150.png` },
  { id: 7, name: '', logo: `${assets}/7-150x150.png` },
  { id: 8, name: '', logo: `${assets}/8-150x150.png` },
  { id: 9, name: '', logo: `${assets}/9-150x150.png` },
  { id: 10, name: '', logo: `${assets}/10-150x150.png` },
];
export const services = [
  {
    title: 'Замена тормозных дисков',
    image: `${assets}/unnamed-1-2.png`
  },
  {
    title: 'Замена тормозных колодок',
    image: `${assets}/disk-p7z8o3emy9ji75cjct1tiu7qdq8ux6alzxu3e1gge8.png`
  },
  {
    title: 'Шиномонтаж',
    image: `${assets}/1473406559-115959_2.png`
  },
  {
    title: 'Развал-схождение',
    image: `${assets}/86-type.png`
  },
  {
    title: 'Регулировка света фар',
    image: `${assets}/headlights-for-art_1.png`
  },
  {
    title: 'Заправка кондиционера',
    image: `${assets}/unnamed-4.png`
  },
  {
    title: 'Компьютерная диагностика автомобиля',
    image: `${assets}/preview.png`
  },
];
export const serviceBanners = [
  {
    title:'Заправка кондиционера',
    subtitle:'35,00 руб.',
    desc: '',
    image: `${assets}/klimat_remont-1024x641.jpg`
  },
  {
    title:'Шиномонтаж',
    subtitle:'42,00 руб.',
    desc: '',
    image: `${assets}/123y.jpg`
  },
  {
    title:'Развал-схождение',
    subtitle:'35,00 руб.',
    desc: '',
    image: `${assets}/shod-razval-compressor-e1526558032921-1024x576.jpg`
  },
  {
    title:'Компьютерная диагностика',
    subtitle:'35,00 руб.',
    desc: '',
    image: `${assets}/diagnostika-avto.jpg`
  },
  {
    title:'Акция при ремонте тормозной системы!',
    subtitle:'',
    desc: 'При\n' +
        '                                      проведении любого ремонта,\n' +
        '                                      связанного с тормозной системой,\n' +
        '                                      проверка на тормозном стенде\n' +
        '                                      производится обязательно и\n' +
        '                                      бесплатно!',
    image: `${assets}/photo_2021-12-03_18-16-12.jpg`
  },
];

export default brands;
