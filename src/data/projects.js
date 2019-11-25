const projectList = [
  {
    id: 0,
    order: 0,
    filename: 'rydanz',
    title: 'RYDANZ',
    category: 'Responsive web design',
    titleLang: 'en',
    titleColor: '#fff',
    categoryColor: '#fff',
    releaseDate: '2018.09',
    role: '메인&서브 디자인',
    desc1: {
      title: 'RADANZ 반응형 웹사이트 구축',
      text: `라이단즈 홈페이지 신규 구축 프로젝트는 고객 신뢰, 전문장비를 바탕으로 만들어진 제품을\n사용자에게 기업 아이덴티티를 전달하고 라이단즈만의 기술, 제품 등을 홍보하기 위한 목적으로\n진행한 프로젝트입니다.`,
    },
    desc2: {
      title: '사용자 환경에 맞춰 동일한 경험 제공',
      text: `다양한 웹 브라우저를 대응하기 위한 반응형 웹을 구현하였으며 이를 통해 콘텐츠의 일원화 및 운영의 효율성을 증대하였습니다.`,
      backgroundColor: '#777',
    },
    subPageCount: 2,
    designDesc: `라이단즈의 고유의 컬러로 최대한 단순한 색 조합을 통해 브랜드 아이덴티티를 확립하고,\n응용컬러를 활용하여 브랜드 일관성을 유지하였습니다.`,
    colors: {
      main: '#004098',
      sub: ['#f3f3f3']
    },
    fonts: [
      {id: 1, name: 'Noto Sans KR'},
      {id: 2, name: 'Poppins'}
    ]
  },
  {
    id: 1,
    order: 1,
    filename: 'pito',
    title: 'PITO',
    category: 'Onpage web design',
    titleLang: 'en',
    titleColor: '#222',
    categoryColor: '#fff',
    releaseDate: '2019.01',
    role: '메인 디자인',
    desc1: {
      title: 'PITO 원페이지 반응형 웹사이트 구축',
      text: `PITO 홈페이지 신규 구축 프로젝트는 행복마루컨설팅의 내부제보 시스템입니다.\n기업의 IT기반의 컨설팅 이미지를 핵심적으로 부각할수있는 그래픽 이미지를 사용하였고\n원페이지 디자인을 통해 집약적이고 컨텐츠 중심으로 구축을 위한 목적으로 진행한 프로젝트입니다.`,
    },
    desc2: {
      title: '사용자 환경에 맞춰 동일한 경험 제공',
      text: `다양한 웹 브라우저를 대응하기 위한 반응형 웹을 구현하였으며 이를 통해 콘텐츠의 일원화 및 운영의 효율성을 증대하였습니다.`,
      backgroundColor: '#777',
    },
    subPageCount: 2,
    designDesc: `PITO의 고유의 컬러로 최대한 단순한 색 조합을 통해 브랜드 아이덴티티를 확립하고,\n응용컬러를 활용하여 브랜드 일관성을 유지하였습니다. `,
    colors: {
      main: '#003690',
      sub: ['#16adfa']
    },
    fonts: [
      {id: 1, name: 'Noto Sans KR'},
      {id: 2, name: 'Roboto'}
    ]
  },
]

export {
  projectList
}