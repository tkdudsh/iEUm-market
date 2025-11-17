
const products = [
  {
    id: "1",
    name: "강릉 더덕청",
    price: 25000,
    category: "강릉",
    description: "강릉 산지에서 직접 담근 프리미엄 더덕청입니다.",
    image: "/assets/products/deodeok.jpg",
    soldCount: 36
  },
  {
    id: "2",
    name: "양양 찰옥수수 세트",
    price: 12900,
    category: "양양",
    description: "양양에서 자란 찰옥수수, 여름 제철 간식으로 추천!",
    image: "/assets/products/corn.jpg",
    soldCount: 84
  },
  {
    id: "3",
    name: "춘천 닭갈비 양념",
    price: 18500,
    category: "춘천",
    description: "춘천 명물 닭갈비를 집에서도 즐길 수 있도록 만든 특제 양념입니다.",
    image: "/assets/products/dakgalbi.jpg",
    soldCount: 46
  },
  {
    id: "4",
    name: "속초초 감자전분",
    price: 9800,
    category: "삼척",
    description: "속초 감자 100%로 만든 건강한 전분입니다.",
    image: "/assets/products/potato_starch.jpg",
    soldCount: 56
  },
  {
    id: "5",
    name: "강릉 커피 드립백 세트",
    price: 19800,
    category: "강릉",
    description: "강릉 카페 거리에서 직접 로스팅한 원두로 만든 드립백 커피 세트입니다.",
    image: "/assets/products/coffee.jpg",
    soldCount: 56
  },
  {
    id: "6",
    name: "속초 오징어채",
    price: 15900,
    category: "속초",
    description: "동해안에서 잡은 오징어로 만든 쫄깃한 안주용 채입니다.",
    image: "/assets/products/squid.jpg",
    soldCount: 63
  },
  {
    id: "7",
    name: "양양 황태포 세트",
    price: 28900,
    category: "태백",
    description: "청정 태백의 눈과 바람으로 말린 고급 황태포입니다.",
    image: "/assets/products/hwangtae.jpg",
    soldCount: 94
  },
  {
    id: "8",
    name: "춘천천 꿀 고로쇠 수액",
    price: 22000,
    category: "인제",
    description: "봄철 인제 산지에서 채취한 달콤한 고로쇠 수액입니다.",
    image: "/assets/products/gorosoe.jpg",
    soldCount: 48
  },
  {
    id: "9",
    name: "양양 한우 육포",
    price: 32000,
    category: "평창",
    description: "평창 한우로 만든 고급 육포, 간편 간식으로 최고!",
    image: "/assets/products/jerky.jpg",
    soldCount: 49
  },
  {
    id: "10",
    name: "강릉 고구마 말랭이",
    price: 11200,
    category: "강릉",
    description: "강릉산 꿀고구마로 만든 쫀득한 말랭이 간식입니다.",
    image: "/assets/products/sweetpotato.jpg",
    soldCount: 28
  },
  {
    id: "11",
    name: "양양 건미역 세트",
    price: 14200,
    category: "양양",
    description: "동해안 양양에서 채취한 천연 건미역 세트입니다.",
    image: "/assets/products/miyeok.jpg",
    soldCount: 91
  },
  {
    id: "12",
    name: "춘천 천일염",
    price: 8700,
    category: "강릉",
    description: "강원도 강릉 앞바다에서 정성껏 만든 천일염입니다.",
    image: "/assets/products/salt.jpg",
    soldCount: 86
  },
  {
    id: "13",
    name: "춘천 매실절임",
    price: 30739,
    category: "춘천",
    description: "춘천 지역의 건강한 재료로 만든 전통 방식 제품입니다.",
    image: "/assets/products/sample13.jpg",
    soldCount: 49
  },
  {
    id: "14",
    name: "양양 청국장 가루",
    price: 27015,
    category: "양양",
    description: "양양 지역의 로컬 장인의 손길로 만든 고급 제품입니다.",
    image: "/assets/products/sample14.jpg",
    soldCount: 93
  },
  {
    id: "15",
    name: "속초 청국장 가루",
    price: 22766,
    category: "속초",
    description: "속초 지역의 현지 농장에서 직접 만든 프리미엄 상품입니다.",
    image: "/assets/products/sample15.jpg",
    soldCount: 28
  },
  {
    id: "16",
    name: "강릉 감자칩 세트",
    price: 29089,
    category: "강릉",
    description: "강릉 지역의 강원도 특산물만을 엄선하여 제작했습니다.",
    image: "/assets/products/sample16.jpg",
    soldCount: 93
  },
  {
    id: "17",
    name: "속초 사과 말랭이",
    price: 27802,
    category: "속초",
    description: "속초 지역의 로컬 장인의 손길로 만든 고급 제품입니다.",
    image: "/assets/products/sample17.jpg",
    soldCount: 69
  },
  {
    id: "18",
    name: "속초 약초차 세트",
    price: 16778,
    category: "속초",
    description: "속초 지역의 남녀노소 모두 좋아하는 국민 간식입니다.",
    image: "/assets/products/sample18.jpg",
    soldCount: 160
  },
  {
    id: "19",
    name: "양양 된장찌개 양념",
    price: 9363,
    category: "양양",
    description: "양양 지역의 선물용으로도 좋은 인기 제품입니다.",
    image: "/assets/products/sample19.jpg",
    soldCount: 131
  },
  {
    id: "20",
    name: "속초 감자칩 세트",
    price: 14525,
    category: "속초",
    description: "속초 지역의 남녀노소 모두 좋아하는 국민 간식입니다.",
    image: "/assets/products/sample20.jpg",
    soldCount: 42
  },
  {
    id: "21",
    name: "춘천 고구마 쿠키",
    price: 18884,
    category: "춘천",
    description: "춘천 지역의 현지 농장에서 직접 만든 프리미엄 상품입니다.",
    image: "/assets/products/sample21.jpg",
    soldCount: 32
  },
  {
    id: "22",
    name: "춘천 황태채",
    price: 22117,
    category: "춘천",
    description: "춘천 지역의 건강한 재료로 만든 전통 방식 제품입니다.",
    image: "/assets/products/sample22.jpg",
    soldCount: 2
  },
  {
    id: "23",
    name: "강릉 고구마 쿠키",
    price: 16265,
    category: "강릉",
    description: "강릉 지역의 로컬 장인의 손길로 만든 고급 제품입니다.",
    image: "/assets/products/sample23.jpg",
    soldCount: 12
  },
  {
    id: "24",
    name: "양양 청국장 가루",
    price: 14373,
    category: "양양",
    description: "양양 지역의 현지 농장에서 직접 만든 프리미엄 상품입니다.",
    image: "/assets/products/sample24.jpg",
    soldCount: 13
  }
];

module.exports = products;
