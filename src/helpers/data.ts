const languages = [
  { id: 1, name: "AZ" },
  { id: 2, name: "EN" },
  { id: 3, name: "RU" },
];
const roles = [
  { id: 1, name: "Super Admin" },
  { id: 2, name: "Admin" },
  { id: 3, name: "User" },
];

const ORDER_STATUS = {
  '1': { name: 'Yeni müştəri', color: '#0895d8' },
  '2': { name: 'Texniki müayinə', color: '#f7ff03' },
  '3': { name: 'Razılaşmada', color: " #e2a907" },
  '4': { name: 'İmtina edildi ', color: '#e63535' },
  '5': { name: 'Prosesdə ', color: ' #1cb454' },
  '6': { name: 'Hazır ', color: ' #03fc07' },
  '7': { name: 'Təhvil verildi', color: "#68625d" },
} as any



const Order_types = [
  { id: 1, name: "Sərt Disk Bərpası " }, { id: 2, name: "SSD Disk Bərpası " },
  { id: 3, name: "Flash Disk Bərpası " }, { id: 4, name: "Yaddaş Fart Bərpası" },
  { id: 5, name: "RİAD massiv bərpası ", }, { id: 6, name: "DVR/NVR bərpası " },
  { id: 7, name: "Virtaul Maşın." }]
const Period_Order = [
  "Yaddaş qurğularının texniki müayinəsi 30 AZN ( 5-7 iş günü )",
  "Yaddaş qurğularının express texniki müayinəsi50 AZN ( 1 iş günü )",
  "RAID massiv qurğularının texniki müayinəsi100 AZN (1-7 iş günü)"
]
export { languages, roles, ORDER_STATUS, Order_types, Period_Order };



